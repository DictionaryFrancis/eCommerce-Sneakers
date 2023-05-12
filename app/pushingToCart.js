const addCart = document.querySelector('.add-cart');
let productBought = document.querySelector('.product_bought');
let numberOverCart = document.querySelector('.number-overCart');
const handleEmptyCart = document.querySelector('#handleEmptyCart');
const deleteProductButtons = document.querySelectorAll('.delete_product_especification');
arrayCartList = []

console.log(arrayCartList);


function ifEmptyCart() {
    if (arrayCartList.length < 1) {
        handleEmptyCart.style.display = 'block';
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


addCart.addEventListener('click', function(){

   // numberOverCart.style.display = 'block';
    //numberOverCart.innerHTML = a;

   
    console.log(name);
    
    productBought.innerHTML =`
    <img class="img_product_bought" src="./images/image-product-1-thumbnail.jpg" alt="">
    <div class="product_especification">
        <p class="product_title">Fall Limited Edition Sneakers</p>
        <p class="price-product_especification">$125.00 x ${a} <strong>$375.00</strong></p>
    </div>
    <img class="delete_product_especification" src="./images/icon-delete.svg" alt="" onclick="handleDeleteClick(this)">`
    ;

    arrayCartList.push(productBought)
    console.log(arrayCartList);

    ifNumberCart();
    ifEmptyCart();
    
    
})

function handleDeleteClick(button) {
    console.log('delete button clicked');
    // handle delete logic here
    arrayCartList.pop();
    productBought.innerHTML = '';
    numberOverCart.style.display = 'none';
    ifEmptyCart()
  }



