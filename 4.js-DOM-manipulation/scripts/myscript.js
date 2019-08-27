function DoThingsWithTheDom() {
    /*
    Write your code here!
    The following variables contain data for you to use. Be careful with the data types (some are numbers, some are strings and some are arrays)! 
        pokemon_name
        pokémon.Id
        pokémon.Moves
        pokemon_abilities
        pokemon_image
        pokemon_weight

    The goal of the exercise is for you to display this information in your HTML.
    You can do this by placing empty tags in your HTML, and the assigning their content with JS.
    But you can also generate the HTML with document.createElement().
    */



    let amount = 4; // Defines the amount of moves that will be shown in the moveset.
    let image = document.getElementById("pok_img");
    let number = document.getElementById("number");
    let name = document.getElementById("pok_name");
    let weight = document.getElementById("pok_weight");
    let abilities = document.getElementById("pok_abilities");
    let moveset = document.getElementById("test_moves");

    // Adding the missing images for the last 5 pokemon and keeping the GIF for Queen Diancie
        if (pokémon.Id === 807) {
            image.setAttribute("src", "https://www.serebii.net/sunmoon/pokemon/807.png");
        } else if (pokémon.Id === 806) {
            image.setAttribute("src", "https://www.serebii.net/sunmoon/pokemon/806.png");
        } else if (pokémon.Id === 805) {
            image.setAttribute("src", "https://www.serebii.net/sunmoon/pokemon/805.png");
        } else if (pokémon.Id === 804) {
            image.setAttribute("src", "https://www.serebii.net/sunmoon/pokemon/804.png");
        } else if (pokémon.Id === 803) {
            image.setAttribute("src", "https://www.serebii.net/sunmoon/pokemon/803.png");
        } else if (pokémon.Id === 719) {
            image.setAttribute("src", "https://thumbs.gfycat.com/IdioticSentimentalAtlanticridleyturtle-small.gif");
        } else {
            image.setAttribute("src", pokémon.Image);
        }
    
    // Updating the text nodes of the needed HTML elements to display the info for the selected pokemon.    
    number.innerHTML = pokémon.Id;
    name.innerHTML = pokémon.Name;
    weight.innerHTML = pokémon.Weight / 10 + " kg";
    abilities.innerHTML = "";

    for (let x = 0; x < pokémon.Abilities.length; x++) {
        let ability = pokémon.Abilities[x];
        abilities.innerHTML += ability + "&#8192;|&#8192;";
    }

    //Create a random moveset out of the available array of pokemon moves (has the possiblity to create multiples of the same move unfortunately)
    moveset.innerHTML = "";
    for (let i = 0; i < amount; i++) {
        let move = document.createElement("div");
        move.classList = "move-style";
        move.innerHTML = pokémon.Moves[Math.floor(Math.random() * pokémon.Moves.length)];
        moveset.append(move);
    }
    
    // EXERCISE 4 of JavaScript-objects

        console.dir(pokémon);

};

    
    