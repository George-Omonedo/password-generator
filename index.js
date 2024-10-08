const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"];
    
    let passwordShelf = document.getElementById("password-shelf");
    let passwordShelf2 = document.getElementById("password-shelf2");
    let generateButton = document.getElementById("generate-button");
    
    function george() {
        const passwordLength = 10; // Length of the password
        let passwordOne = '';
        let passwordTwo = '';
        
        for (let i = 0; i < passwordLength; i++) {
            let randomIndexOne = Math.floor(Math.random() * characters.length);
            let randomIndexTwo = Math.floor(Math.random() * characters.length);
            passwordOne += characters[randomIndexOne];
            passwordTwo += characters[randomIndexTwo];
        }
    
        passwordShelf.textContent = passwordOne;
        passwordShelf2.textContent = passwordTwo;
    }
    
    // Add event listener to the button
    generateButton.addEventListener("click", george);
    









    









