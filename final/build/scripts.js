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

let count = 0;
let addToCart = function(number_of_items, item_id, item_img_id){
    //Animate image flies towards cart
    let imgToDrag = $('#' + item_img_id)
    let cart = $('#cart')

    if(imgToDrag){
        let imgClone = imgToDrag.clone().offset({
            top: imgToDrag.offset().top,
            left: imgToDrag.offset().left + 20
        }).css({
            'opacity': '0.5',
            'position': 'absolute',
            'width': '200px',
            'z-index': '100'
        }).appendTo($('body')).animate({
            'top': cart.offset().top + 10,
            'left': cart.offset().left + 20,
            'width': 0,
            'height': 0
          }, 500, 'easeInOutSine');
    }

    //Update cart count
    setTimeout(function(){
        count = count + number_of_items;
        if(count > 0){
            let cartCount = document.getElementById('cart-count')
            cartCount.innerHTML = count
            cartCount.style.display = 'block'
        }
    }, 500)


    //Close dropdown menu after user clicks on a dropdown menu button
    document.querySelectorAll('.add-to-card-button').forEach(item => {
        item.classList.remove('add-to-card-button-active')
    })
    document.querySelectorAll('.dropdown-container').forEach(item => {
        item.style.display = 'none'
    })
 }