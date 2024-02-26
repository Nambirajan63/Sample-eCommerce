var addCart = document.getElementsByClassName('add-cart')[0];
var sideCart = document.getElementsByClassName('side-cart')[0];
var cancelBtn = document.getElementsByClassName('cancel-btn')[0];

addCart.addEventListener('click', () => {
    sideCart.classList.add('cart-active');
});

cancelBtn.addEventListener('click', () => {
    sideCart.classList.remove('cart-active');
});





// function addToCart(productName,price) {
//     cart.push({productName,price});
//     updateCart();

//     totalList = cart.length;
//     totalItems.textContent = totalList;
// };

// function updateCart() {
//     cartItems.innerHTML = '';
//     total = 0;

//     cart.forEach(item => {
//         var listItem = document.createElement('li');
//         listItem.textContent = `${item.productName} - ${item.price}`;
//         cartItems.append(listItem);
//         total += item.price;
//     });
//     totalPrice.textContent = `Total: Rs. ${total.toFixed(2)} /-`;
// };


// const clear = document.getElementById('clear');

// clear.addEventListener('click', ()=> {
//     cartItems.textContent = "";
//     totalPrice.innerHTML = "Total: Rs. 0 /-";
//     totalItems.textContent = 0;
//     cart = [];
// })

var cartItems = document.getElementById('cart-items');
var totalPrice = document.querySelector('.cart-total');
var totalItems = document.getElementsByClassName('total-items')[0];

function addToCart(event) {

    const imgSrc = event.target.parentElement.children[0].getAttribute('src');
    const productName = event.target.parentElement.children[1].innerText;
    const productPrice = parseInt(event.target.parentElement.children[2].children[0].innerText);

    const li = document.createElement('li');

    li.innerHTML = `
    <div class="cart-item">
    <div class="cart-pic">
        <img src='${imgSrc}' alt="cart-img">
    </div>
    <div>
    <h3>${productName}</h3>
    <p>Rs. <span class="price">${productPrice}</span>/-</p>
    </div>
    <i onclick="removeBtn(event)" class="fa fa-trash-o" style="font-size:40px;color:red"></i>
    </div>
    `
    cartItems.append(li);
    totalItems.innerText = cartItems.children.length;
}


function removeBtn(event) {
    const liEl = event.target.parentElement;
    liEl.remove();
    // totalItems.innerText = cartItems.children.length;
}
