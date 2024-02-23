const greet = [
    "Hello World!",                          // English
    "Kon'nichiwa sekai!",                    // Japanese
    "Annyeong sesang!",                      // Korean
    "Kumusta kalibutan!",                    // Bisaya (Cebuano)
    "Sawasdee Lok!",                         // Thai
    "Apa khabar dunia!",                     // Malay
    "Sabai dee meu tiak!",                   // Lao
    "Suostei bplor lork!",                   // Khmer
    "Kumusta mundo!",                        // Filipino (Tagalog)
    "Mingalarbar kamabae, min-ga-la-ba."     // Burmese
];

const country = [
    "World",
    "Japan",
    "South Korea",
    "Philippines (Bisaya/Cebuano)",
    "Thailand",
    "Malaysia",
    "Laos",
    "Cambodia",
    "Philippines (Tagalog)",
    "Myanmar"
];

const color = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "skyblue",
    "cyan"
];

const font = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Times",
    "Courier New",
    "Courier",
    "Verdana",
    "Georgia",
    "Palatino",
    "Garamond",
    "Bookman",
    "Comic Sans MS",
    "Trebuchet MS",
    "Arial Black"
];

function changeText() {
    var randomGreet = Math.floor(Math.random() * (greet.length))
    document.getElementById("heading").innerHTML = greet[randomGreet];
    document.getElementById("heading").style.color = color[Math.floor(Math.random() * (color.length))];
    document.getElementById("heading").style.fontFamily = font[Math.floor(Math.random() * (font.length))];
    document.getElementById("button").style.backgroundColor = color[Math.floor(Math.random() * (color.length))];
    document.getElementById("country").innerHTML = country[randomGreet];

    /*
    var confirmation = confirm("Do you want to show the success alert?");
    if (confirmation) {
        alert("Success!");
    }
    */
}