let root = document.getElementById("root");

const menuItems =("Home", "About", "Profile", "Contact")

console.log(menuItems);

let menu = "<ul>"

for (let index = 0; index < menuItems.lengt; index++) {
    // menu = "<ul>"
    menu += "<li>" + menuItems[index] + "</li>"
}

menu += "</ul>"

