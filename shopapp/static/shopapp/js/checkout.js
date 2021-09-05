if (sessionStorage.getItem('cart') == null) {
    var cart = {};
} else {
    cart = JSON.parse(sessionStorage.getItem('cart'));
}
console.log(cart);
var sum = 0;
if ($.isEmptyObject(cart)) {
    //if object is empty
    mystr = `<p>Your cart is empty, please add some items to your cart before checking out!</p>`
    $('#items').append(mystr);
} else {
    for (item in cart) {
        console.log(item)
        let name = cart[item].name;
        let qty = cart[item].count;
        sum = sum + qty;
        mystr = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    ${name}
                    <span class="badge badge-primary badge-pill">${qty}</span>
                </li>`
        $('#items').append(mystr);
    }
}
document.getElementById('cart').innerHTML = sum;