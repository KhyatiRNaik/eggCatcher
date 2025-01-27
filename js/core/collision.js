import { clearDroppedEggs } from "../entities/egg.js";
import { endGame } from "../game.js";
import constants from "./constants.js";
import { updateLives, updateScore } from "./utils.js";

function collision(egg, eggY) {
    return (eggCaught(egg) || droppedEgg(egg, eggY))
}

function eggCaught(egg) {
    const basketRect = constants.BASKET.getBoundingClientRect();
    const basketLeft = basketRect.left;
    const basketRight = basketRect.right;
    const basketTop = basketRect.top - 120; //makes 350
    const basketBottom = basketTop + (basketRect.height / 2);

    const eggRect = egg.getBoundingClientRect();
    const eggLeft = eggRect.left;
    const eggRight = eggRect.right;
    // const eggTop = eggRect.top - 120;
    const eggBottom = eggRect.bottom - 120;

    console.log(basketTop, eggBottom)

    if (basketLeft < eggLeft && basketRight > eggRight && basketTop <= eggBottom && basketBottom >= eggBottom) {
        egg.remove();
        constants.SCORE++;
        updateScore();
        return true;
    }
    return false;
}

function droppedEgg(egg, eggY) {
    if (eggY >= 369) {
        egg.classList.remove('egg');
        egg.classList.add('dropped_egg');

        if (constants.LIVES > 1) {
            constants.LIVES--;
            updateLives();
        }
        else {
            endGame();
        }

        setTimeout(function () {
            clearDroppedEggs();
        }, 500);
        return true;
    }
    return false;
}

export { collision }


// console.log(basketLeft)
// console.log(eggLeft)
// console.log(basketRight)
// console.log(eggRight)
