document.getElementById("button").addEventListener("click", loadQuote);

let quote = {};

function loadQuote() {
    //Create xhr object
    let xhr = new XMLHttpRequest();
    // OPEN function, three parameters: Type , url/file , async
    xhr.open('GET', "https://thatsthespir.it/api", true);
    console.log('READYSTATE:', xhr.readyState);
    // mondern method, don't need to chech for readyState. Will only run when readyState is == 4.
    xhr.onload = function () {
        console.log('READYSTATE in onload:', xhr.readyState);
        if (this.status == 200) {
            setObject(JSON.parse(this.responseText));
            console.dir(JSON.parse(this.responseText));
        }
    };
    // WHen using onload, we best include a onerror aswell, should something go wrong.
    xhr.onerror = function () {
        console.log('Request error...')
    };
    xhr.send();
}

function setObject(data) {
    if (typeof data === 'object') {
        console.log("Data found");
        quote.Quote = data.quote;
        quote.Author = data.author;
        quote.Gender = data.gender;
        quote["Total quotes"] = data.total_quotes;
        quote.Id = data.id;    
        quote.Photo = data.photo;
        console.log(quote);

        // Clear the div element in order to show a new quote.
        document.getElementById("container").innerHTML = "";
        addInfo(quote.Id, quote)

    } else {
        console.log("Waiting for response...")
    }
}

function addInfo(member, object) {

    let div = document.createElement('div');
    div.setAttribute('class', 'card');
    div.setAttribute('id', member);

    for (var i in object) {

        if (i == 'Photo') {
            if( object[i] == ""){
                if(quote.Gender == 'm'){
                let image = document.createElement("div");
                image.setAttribute('id', member + 'Img');
                image.setAttribute('class', 'photo');
                image.setAttribute('style', `background-image: url(https://thatsthespir.it/assets/img/man.svg)`);
                document.getElementById("container").append(image);
                console.log("No photo");
                } else {
                    let image = document.createElement("div");
                    image.setAttribute('id', member + 'Img');
                    image.setAttribute('class', 'photo');
                    image.setAttribute('style', `background-image: url(https://thatsthespir.it/assets/img/woman.svg)`);
                    document.getElementById("container").append(image);
                    console.log("No photo");
                }
            } else {
            console.log(object[i]);
            let image = document.createElement("div");
            image.setAttribute('style', `background-image: url(${object[i]})`);
            image.setAttribute('id', member + 'Img');
            image.setAttribute('class', 'photo');
            document.getElementById("container").append(image);
        }} else {
            let qdiv = document.createElement('div')

            qdiv.innerHTML = `${i}: ${object[i]}`;

            div.append(qdiv);
        }
    }
    document.getElementById('container').appendChild(div);
};