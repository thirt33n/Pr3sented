const first_name = document.getElementById("full_name");
const last_name = document.getElementById("last_name");
const company = document.getElementById("company");
const address = document.getElementById('street');
const pin = document.getElementById('pincode');
const code = document.getElementById('code');
const phone = document.getElementById('phone');
const email = document.getElementById('your_email');
const password = document.getElementById("password");
const confirmp = document.getElementById('password1');
const subber = document.getElementById('subber');



function checker()
{
    if(first_name.value && last_name.value && company.value && address.value && pin.value && code.value && phone.value && email.value)
    {
        if(password.value == confirmp.value)
        {
            window.open('https://www.w3schools.com/jsref/met_element_remove.asp');
        }
        else    
            alert("Passwords do not match!")
    }

    else
        return

}


function main()
{
    console.log('inside');
    subber.addEventListener('click',checker);
}

main();