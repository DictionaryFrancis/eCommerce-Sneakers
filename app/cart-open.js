const cartModal = document.getElementById('cart-modal');
const handleCartAnimation = document.getElementById('handleCartAnimation');
const spanCloseBtn = document.getElementsByClassName('close')[0];

handleCartAnimation.onclick = function(){
    console.log('clicked');
    cartModal.style.display = 'block';
}

spanCloseBtn.onclick = function(){
    console.log('closed');
    cartModal.style.display = 'none';
}

/*
window.onclick = function(event){
    if (event.target == cartModal) {
        console.log('closed');
        cartModal.style.display = 'none';
    }*/
