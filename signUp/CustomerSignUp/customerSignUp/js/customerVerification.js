
const username = document.getElementById("username");
const button = document.getElementById("register");
const phone = document.getElementById("phone");
const mail = document.getElementById("mail");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");



/*function information(){
    let Username = username.value
    console.log(Username);
}*/

function redirect(){
    if(username.value && phone.value && mail.value)
        {
            if(password1.value == password2.value)
            {
                window.open("../../../login/login-form-02/index.html")
               
            }
            else    
                alert("Passwords do not match!")

        }
          
    else    
        return
}

function main(){
    console.log("Connected");

    button.addEventListener('click',redirect);

}

main();