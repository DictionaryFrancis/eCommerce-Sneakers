const gallery = document.querySelectorAll('.gallery .img');
console.log('working')
window.onload = ()=>{
    console.log('working')
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].onclick = () =>{
            let clickedImage = document.getElementsByClassName("show");
            if (clickedImage.length > 0) {
                clickedImage[0].classList.remove('show');
            }
            console.log(i);
            gallery[i].classList.add("show");

        }
    }
}