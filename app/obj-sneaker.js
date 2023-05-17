const dados = {
    "Main Price": 125,
    "Discount": 50,//in %percent discount(50%)
    
};


///discountParse = dados["Discount"]/100;
//console.log(discountParse);

priceAfterDiscount = dados["Main Price"] * dados["Discount"]/100;
console.log(priceAfterDiscount);

const mainPrice = document.querySelector('.price').innerHTML =`
$${priceAfterDiscount.toFixed(2)}
<span id="discount">${dados["Discount"]}%</span>`
;

//const discount = document.querySelector('#discount').innerHTML = `$${dados["Discount"]`;

const oldPrice = document.querySelector('.old-price').textContent =`$${dados["Main Price"].toFixed(2)}`;