const btnPlus = document.querySelector('#plus_btn');
let currentItem = 5;

btnPlus.onclick = () => {
    let boxes = [...document.querySelectorAll('.hero_3 .container_hero_3 .hero_3_box')];
    for (var i = currentItem; i < currentItem + 5; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 5

    if(currentItem >= boxes.length) {
        btnPlus.style.display = 'none';
    }
}