// CHALLENGE



// EXERCISE 1

let aboutMe = {
    'First name': "Ben",
    'Last name': "Duwé",
    Age: 28,
    Gender: 'Male',
    'Favorite food': 'Classic Italian pizza',
    'Favorite series': ['Full Metal Alchemist', ' Big Bang Theory'],
    'Favorite movies': ['Avatar', ' Howl\'s moving Castle', ' LOTR'],
    Single: "Yes",
};

let myKey = Object.keys(aboutMe)
let myVal = Object.values(aboutMe)

for (i = 0 ; i < myKey.length ; i++) {
    document.getElementById('exercise-1').innerHTML += '<li>' + myKey[i] + ": " + myVal[i] + '</li>';
}
document.getElementById('exercise-1').innerHTML += '<br/>' + "<button id=\"" + myVal[0] + "\">Photo " + myVal[0] +
 "</button>" + '<br/>';






// EXERCISE 2

function FamilyMember(first, last, age, gender, food, series, movies, single) {
    this['First name'] = first;
    this['Last name'] = last;
    this.Age = age;
    this.Gender = gender;
    this['Favorite food'] = food;
    this['Favorite series'] = series;
    this['Favorite movies'] = movies;
    this.Single = single;
};

let Father = new FamilyMember('Ronny', 'Duwé', 61, 'Male', 'Steak with fries', ['24'], ['Die Hard'], "No");
let Mother = new FamilyMember('Linda', 'Willems', 60, 'Female', 'Tuna Salad', ['Grimm'], ['Harry Potter series'], "No");
let Brother = new FamilyMember('Sam', 'Duwé', 31, 'Male', 'Vol-au-vent with fries', ['The Witcher'], ['Star Wars'], "No");

let fatherKey = Object.keys(Father);
let fatherVal = Object.values(Father);

let motherKey = Object.keys(Mother);
let motherVal = Object.values(Mother);

let brotherKey = Object.keys(Brother);
let brotherVal = Object.values(Brother);

function test(key, value) {
for (i = 0 ; i < key.length ; i++) {
    document.getElementById('exercise-2').innerHTML += '<li>' + key[i] + ": " + value[i] +'</li>'
}
document.getElementById('exercise-2').innerHTML += '<br/>' + "<button id=\"" + value[0] + "\">Photo " + value[0] + "</button>" + '<br/>';
};

test(fatherKey, fatherVal);
test(motherKey, motherVal);
test(brotherKey, brotherVal);

// EXERCISE 3

let btn = document.querySelectorAll("button");
btn.forEach(listen);
function listen() {
    this.addEventListener("click", changeImg)
};

function changeImg() {
    console.log("click")
    if (event.target.id == "Ben") {
        document.getElementById("photo").src = "assets/Ben.png"
    } else if (event.target.id == "Ronny") {
        document.getElementById("photo").src = "assets/Ronny.png"
    } else if (event.target.id == "Linda") {
        document.getElementById("photo").src = "assets/Linda.png"
    } else if (event.target.id == "Sam") {
        document.getElementById("photo").src = "assets/Sam.png"
    }
}

