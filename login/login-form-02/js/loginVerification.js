const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

function create(){
    if(username.value == "LKNA"){
        if(password.value == "qwerty")
           // window.open("https://www.youtube.com/watch?v=rS77fDr1mhM");
            window.open("../../distribution/index.html");
        
        else
            alert("Check your password")
        
    }
    else 
        return
    
    
}

function main(){

   // username.addEventListener('input',create);
    button.addEventListener('click',create);

} 

main()