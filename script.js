// Math.random() -- [0,1)
// [0,1) * 5 =[0 * 5, 1 * 5) = [0,5)
// [0,1) + 10 =[0 + 10, 1 + 10) = [10,11)
// [0,1) * size = [0,size)
// Math.random() * size --> [0,size)
function getRandomNumber(size) {
    const res = Math.floor(Math.random() * size);
    return res;
};

// розраховуємо відстань між кліком (event) та скарбом (target)
function getDistance(event, target) {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    const c = Math.sqrt((diffX * diffX) + (diffY * diffY));
    return c;
}

function getDistanceHint(distance){
    if(distance < 10) {
        return "Пече"
    } else if (distance < 20) {
        return "Дуже гаряче"
    } else if (distance < 40) {
        return "Гаряче"
    } else if (distance < 80) {
        return "Тепло"
    } else if (distance < 160) {
        return "Холодно"
    } else if (distance < 320) {
        return "Дуже холодно"
    } else {
        return "Можна замерзнути"
    }
}

// if (distance < 320 && distance >= 20)
// else if (distance < 20)

const width = 450;
const height = 400;
let click = 0;

// координати скарбу
const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

const mapElement = document.getElementById("map");
mapElement.addEventListener("click",(event) => {
    click++; // click = click + 1
    // onsole.log(click);
    
    const distance = getDistance(event, target);
    const distanceHint = getDistanceHint(distance);
    // console.log(distance)
    // console.log(getDistanceHint)
    
    const distanceElement = document.getElement = document.getElementById("distance")
    distanceElement.textContent = distanceHint;

    if (distance < 8) {
        alert("You are win")
    }
});