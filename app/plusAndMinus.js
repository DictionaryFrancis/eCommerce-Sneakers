const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const number = document.querySelector('.number');
console.log('confirm');
let a = 1;

plus.addEventListener('click', ()=>{
    a++;
    //a = (a <10) ? "0" + a : a;
    number.innerHTML = a;
    console.log(a)
})

minus.addEventListener('click', ()=>{
    a--;
    if (a < 1) {
        a = 1
    }
    number.innerHTML = a;

    console.log(a)
})