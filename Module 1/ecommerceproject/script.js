function addToCart(){
    var cart = document.getElementsByTagName("p");
    document.getElementById("totalprice").innerHTML = cart.innerText;
    console.log(cart.innerText);
}




// const addbtn = document.getElementById('addcart');

// function cart(ecom) {
//     ecom.preventDefault();
//     const price = document.getElementById('itemprice').value;

//     if (quantity > 0) {
//         const display = document.getElementById('totalprice');
//         let total = itemPrice * quantity;
//         displayDetails.innerHTML = `Your total is $${total}`;
//     } else {
//         alert("400 : Quantity must be positive integer");
//     }

//     const display = document.getElementById('totalprice');
// }

// addcart.addEventListener('click', cart);


