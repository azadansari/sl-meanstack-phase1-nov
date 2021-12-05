function addToCart() {

    var itempricecart = 0;
    let itemvalue = document.getElementById("selectQuantity").value;
    document.getElementById("totalitem").innerHTML = itemvalue;

    var itempricecart = document.getElementById("itemprice").value;
    var itmprce = document.getElementById("showitemprice").innerHTML = itempricecart;
    document.getElementById("showqnty").innerHTML = itemvalue;

    document.getElementById("showtotal").innerHTML = itmprce*itemvalue;
}

function placeOrder(){
    document.getElementById("placedOrder").style.display = "inherit";
}

// $(document).ready(function(){
//     $("#goshop").click(function(){
//         $("#placedOrder").fadeOut("fast");
//     });
// });