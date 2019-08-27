        /*==================================================================================================
        ======================================== Magic Happens Here! =======================================
        ==================================================================================================*/



        //Variables are declared.

        let base_url = "https://pokeapi.co/api/v2/";

        let poke_search = document.getElementById("pokesearch");
        let search = document.getElementById("search");
        let previous = document.getElementById("previous");
        let next = document.getElementById("next");
        let list = document.getElementById("list");
        let list_cont = document.getElementById("list-container");
        let showlist = document.getElementById("yellowbtn-1");
        // let resetlist = document.getElementById("orange-bar-l");

        // let pokémon.Name;
        // let pokémon.Id;
        // let pokémon.Moves;
        // let pokémon.Abilities;
        // let pokémon.Image;
        // let pokémon.Weight;
        // let pokémon.Types;

        let pokémon = {
            sentenceMoves: function(){
                let twoRand = [];
                for (let i = 0; i < 2; i++) {
                    twoRand.push(pokémon.Moves[Math.floor(Math.random() * pokémon.Moves.length)]);
                };
                console.log(twoRand)
            }
        };




        //EventListeners are added to HTML elements.

        search.addEventListener("click", function() {
            list_cont.style.display = "none";
            LoadPokemon(poke_search.value);
        });

        poke_search.addEventListener("keyup", function(event) {
            list_cont.style.display = "none";
            if (event.key === "Enter") {
                LoadPokemon(poke_search.value);
            }
        })

        previous.addEventListener("click", function() {
            list_cont.style.display = "none";
            if (pokémon.Id === undefined || pokémon.Id < 2) {
                pokémon.Id = 808;
            }
            LoadPokemon(--pokémon.Id);
        });

        next.addEventListener("click", function() {
            list_cont.style.display = "none";
            if (pokémon.Id === undefined || pokémon.Id > 806) {
                pokémon.Id = 0;
            }
            LoadPokemon(++pokémon.Id);
        })

        showlist.addEventListener("click", function() {
            LoadPokemonList();
        });

        // resetlist.addEventListener("click", function() {
        //     list.innerHTML = "";
        // });




        //Function that looks up the data for a pokemon when it's given the pokemon's name or id number.

        function LoadPokemon(pokemon){
            let request = new XMLHttpRequest();
            let dots = 1;

            request.onreadystatechange = function() {
                if (this.readyState === 4 && this.status == 200 && pokemon !== "") {
                    SetObject(JSON.parse(this.responseText));
                }
                else {
                    SetObject(dots++);
                }
            }

            request.open("GET", base_url + "pokemon/" + pokemon.toString().toLowerCase(), true);
            request.send();
        }



        //This function changes the variables with the most recent pokemon's information.

        function SetObject(data){
            if(typeof data === "number") {
                console.log("Searching for data" + ".".repeat(data))
            }

            else {
                console.log("Data found!")
                pokémon.Name = data.name;
                pokémon.Id = data.id;
                pokémon.Moves = data.moves.map(x => x.move.name);
                pokémon.Abilities = data.abilities.map(x => x.ability.name);
                pokémon.Image = data.sprites.front_default;
                pokémon.Weight = data.weight;
                pokémon.Types = data.types.map(x => x.type.name);

                DoThingsWithTheDom();
            }
        }



        //This function loads all of the pokemons and stores them in a list in your HTML.
        //Clicking one of the list items will then look up data for that specific pokemon!

        function LoadPokemonList() {
            let request = new XMLHttpRequest();
            list.innerHTML = "";
            list_cont.style.display = "block";

            request.onreadystatechange = function() {
                if (this.readyState === 4 && this.status == 200) {
                    let pokemon_list = JSON.parse(this.responseText).results.map(x => x.name);
                    for (pokemon of pokemon_list) {
                        let li = document.createElement("li");
                        li.innerHTML = pokemon;
                        li.addEventListener("click", function() {
                            LoadPokemon(this.innerHTML);
                            list.innerHTML = "";
                            list_cont.style.display = "none";
                        })
                        list.append(li);
                    }
                }
            }

            request.open("GET", base_url + "pokemon?offset=0&limit=807", true);
            request.send();
        }



        //Function that you can call to see the current pokemon's information

        function LogPokeData() {
            console.log("Name: " + pokémon.Name
            + "\n" + "ID: " + pokémon.Id
            + "\n" + "Moves:"| pokémon.Moves
            | "\n" + "Abilities:"| pokémon.Abilities
            | "\n" + "Image URL: " + pokémon.Image
            + "\n" + "Weight: " + pokémon.Weight
            + "\n" + "Type: " + pokémon.Types);
        }

        /*==================================================================================================
        ======================================== Magic Ends Here! ==========================================
        ==================================================================================================*/
