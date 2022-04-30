const adder = document.getElementById("adder");
const cartItems = document.getElementById("cartNumber");
const wish = document.getElementById("wish");
let cartthings = 0;
let wishthings = 0;
function changer()
{
        cartthings++;
        cartItems.innerHTML = '(' + cartthings + ')';


}
function changer2()
{
        wishthings++;
        wish.innerHTML = '(' + wishthings + ')';


}

function main()
{
    adder.addEventListener('click',changer);
}