const addCart = document.querySelector('.add-cart');
let productBought = document.querySelector('.product_bought');
let numberOverCart = document.querySelector('.number-overCart');
const handleEmptyCart = document.querySelector('#handleEmptyCart');
const deleteProductButtons = document.querySelectorAll('.delete_product_especification');
const chekoutBtn = document.querySelector('.button-checkout');
//<button class="checkout">Checkout</button>
arrayCartList = []

console.log(arrayCartList);


function ifEmptyCart() {
    if (arrayCartList.length < 1) {
        handleEmptyCart.style.display = 'block';
        chekoutBtn.style.display = 'none';2
        
    } else{
        handleEmptyCart.style.display = 'none';
        
    }
}

function ifNumberCart(){
    if (arrayCartList.length <1) {
        numberOverCart.style.display = 'none';
        
    } else{
        numberOverCart.style.display = 'block';
        numberOverCart.innerHTML = a;
    }
}

function handleCheckout(){
    if (arrayCartList.length <1) {
        chekoutBtn.style.display = 'none';
        
    } else{
        chekoutBtn.style.display = 'block';
        chekoutBtn.innerHTML =
        `
        <button class="checkout">Checkout</button>
        `;
    }
}



addCart.addEventListener('click', function(){

   // numberOverCart.style.display = 'block';
    //numberOverCart.innerHTML = a;

   
    const valueMainPrice = dados["Price after Discount"] * a;
    console.log(valueMainPrice);
    
    productBought.innerHTML =`
    <img class="img_product_bought" src="./images/NEW_BALANCE_0.jpg" alt="">
    <div class="product_especification">
        <p class="product_title">Fall Limited Edition Sneakers</p>
        <p class="price-product_especification">$${dados["Price after Discount"].toFixed(2)} x ${a} <strong>$${valueMainPrice.toFixed(2)}</strong></p>
    </div>
    <img class="delete_product_especification" src="./images/icon-delete.svg" alt="" onclick="handleDeleteClick(this)">`
    ;

    arrayCartList.push(productBought)
    console.log(arrayCartList);

    ifNumberCart();
    ifEmptyCart();
    handleCheckout();
    
})

function handleDeleteClick(button) {
    console.log('delete button clicked');
    // handle delete logic here
    arrayCartList.pop();
    productBought.innerHTML = '';
    numberOverCart.style.display = 'none';
    ifEmptyCart()
  }




