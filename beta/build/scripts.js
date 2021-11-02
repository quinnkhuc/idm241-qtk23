let toggleDropdown = function(id){
    let addToCartButton = document.querySelectorAll('.add-to-card-button')
    let dropDown = document.querySelectorAll('.dropdown-container')

    if(id == '0'){
        addToCartButton[0].classList.add('add-to-card-button-active')
        dropDown[0].style.display = 'block'
        addToCartButton[1].classList.remove('add-to-card-button-active')
        dropDown[1].style.display = 'none'
        addToCartButton[2].classList.remove('add-to-card-button-active')
        dropDown[2].style.display = 'none'
    } else if(id == '1'){
        addToCartButton[0].classList.remove('add-to-card-button-active')
        dropDown[0].style.display = 'none'
        addToCartButton[1].classList.add('add-to-card-button-active')
        dropDown[1].style.display = 'block'
        addToCartButton[2].classList.remove('add-to-card-button-active')
        dropDown[2].style.display = 'none'
    } else if(id == '2'){
        addToCartButton[0].classList.remove('add-to-card-button-active')
        dropDown[0].style.display = 'none'
        addToCartButton[1].classList.remove('add-to-card-button-active')
        dropDown[1].style.display = 'none'
        addToCartButton[2].classList.add('add-to-card-button-active')
        dropDown[2].style.display = 'block'
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.add-to-card-button') && !event.target.matches('.dropdown-button')){
        document.querySelectorAll('.add-to-card-button').forEach(item => {
            item.classList.remove('add-to-card-button-active')
        })
        document.querySelectorAll('.dropdown-container').forEach(item => {
            item.style.display = 'none'
        })
    }
}