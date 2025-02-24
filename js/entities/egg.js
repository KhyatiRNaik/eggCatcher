import { collision } from "../core/collision.js";
import constants from "../core/constants.js";

function createEggs(hen) {
    let eggX = 25 + hen.x;
    let eggY = 10 + hen.y;

    let egg = document.createElement('div');
    egg.classList.add('egg');
    egg.style.left = eggX + 'px';
    egg.style.top = eggY + 'px';

    console.log(constants.EGG_INTERVAL) //remove
    constants.CONTAINER.appendChild(egg);

    animateEgg(egg, eggY);
    return egg;
}

function animateEgg(egg, eggY) {
    function step() {
        if (!constants.PLAY) {
            clearEggs();
        }
        else {
            if ((eggY >=368 || eggY <= 372) && !collision(egg, eggY)) {
                eggY += constants.EGG_SPEED;
                egg.style.top = eggY + "px";
                requestAnimationFrame(step);
            }
        }
    }
    step();
}

function clearEggs() {
    const eggs = document.querySelectorAll('.egg');
    eggs.forEach(egg => egg.remove());
}

function clearDroppedEggs() {
    const droppedEggs = document.querySelectorAll('.dropped_egg');
    droppedEggs.forEach(egg => egg.style.display = "none");
}

export { createEggs, clearEggs, clearDroppedEggs }
