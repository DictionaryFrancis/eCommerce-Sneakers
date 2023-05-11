const gallery = document.querySelectorAll('.gallery .img');
console.log('working')
window.onload = ()=>{
    console.log('working')
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].onclick = () =>{
            console.log(i)
        }
    }
}