let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("rectOne");
let passTwo = document.getElementById("rectTwo");

function passLength() {
    let pass = document.getElementById("passLength").value;
    return pass
}

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword() {
    let randomPassword = "";
    let newPass = passLength()
    if(newPass < 22){
        for (let i = 0; i < newPass; i++) {
            randomPassword += getRandomCharacter();
        }
    }
    return randomPassword;
}

function passwords() {
    const generatedPasswordOne = generateRandomPassword();
    const generatedPasswordTwo = generateRandomPassword();
    passOne.textContent = generatedPasswordOne;
    passTwo.textContent = generatedPasswordTwo;
}
