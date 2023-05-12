const gallery = document.querySelectorAll('.gallery .img');
const mainImage = document.querySelector('.main_image');
let clickedImage = document.getElementsByClassName("show");
console.log('working')
window.onload = ()=>{
    console.log('working')
    for (let i = 0; i < gallery.length; i++) {
        gallery[0].classList.add('show');
        //let firstElement = i.shift();
        console.log(gallery[0]);
        
            //console.log(i);
    
        gallery[i].onclick = () =>{
            if (clickedImage.length > 0) {
                clickedImage[0].classList.remove('show');
                console.log(clickedImage);


                mainImage.innerHTML = `
                <img class="product_1" src="./images/NEW_BALANCE_${i}.jpg" alt="Sneakers">
                `;
                console.log(gallery[i]);
                console.log(i);
            }
            console.log(gallery[i]);

            gallery[i].classList.add("show");

        }
    }
}

function ifPicture(){
    if (clickedImage.length > 0) {
        
    }
}