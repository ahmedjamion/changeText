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
    "Mingalarbar kamabae, min-ga-la-ba.",    // Burmese
    "Sabai dee look!",                       // Lao (additional)
    "Suostei sdei bor lork!",                // Khmer (additional)
    "Apa khabar dunia!"                      // Malay (additional)
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
    "white"
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
    "Arial Black",
    "Impact"
];

function changeText() {
    document.getElementById("heading").innerHTML = greet[Math.floor(Math.random() * (greet.length - 1))];
    document.getElementById("heading").style.color = color[Math.floor(Math.random() * (color.length -1))];
    document.getElementById("heading").style.fontFamily = font[Math.floor(Math.random() * (font.length -1))];
    document.getElementById("button").style.backgroundColor = color[Math.floor(Math.random() * (color.length -1))];

    /*
    var confirmation = confirm("Do you want to show the success alert?");
    if (confirmation) {
        alert("Success!");
    }
    */
}