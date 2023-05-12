const dados = {
    "Main Price": 350,
    "Discount": "50%",//50%percent discount
    "Price after Discount": 350 * 0.5,
};

const mainPrice = document.querySelector('.price').innerHTML =`
$${dados["Price after Discount"].toFixed(2)}
<span id="discount">${dados["Discount"]}</span>`
;

//const discount = document.querySelector('#discount').innerHTML = `$${dados["Discount"]`;

const oldPrice = document.querySelector('.old-price').textContent =`$${dados["Main Price"].toFixed(2)}`;