let password = document.getElementById("password");
let generateBtn = document.getElementById("generate");

function generatePassword() {
    let char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = " ";

    for (let i = 0 ; i < passwordLength; i++){
        let randomIndex = Math.floor(Math.random() * char.length);
        password += char[randomIndex];
    }
    document.getElementById("password").value = password;
    
}


