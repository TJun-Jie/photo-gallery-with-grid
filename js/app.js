baguetteBox.run('.gallery');

const searchInput = document.querySelector('.search-input');
const imgs= document.querySelectorAll('img');

searchInput.addEventListener('input' ,  (e) => {
    imgs.forEach( img => {
        if(img.alt.toLowerCase().includes(e.target.value.toLowerCase())){
            img.parentElement.style.display = "block";
        }
        else{
            img.parentElement.style.display="none";
        }
    })
})

