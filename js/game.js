import constants from "./core/constants.js";
import { layEggs } from "./entities/hen.js";
import { setVisibility, setVisibilityMany, updateLives, updateScore } from "./core/utils.js";
import "./entities/basket.js";
import "./screens/menu.js";
import "./screens/instructions.js";
import { initBasketMovement } from "./entities/basket.js";
import { clearEggs } from "./entities/egg.js";


function game_init() {
    constants.CONTAINER.classList.remove("container-menu");
    constants.CONTAINER.classList.add("container-game");

    constants.PLAY = false;
    constants.SCORE = 0;
    constants.LIVES = 5;
    constants.EGG_SPEED = 2;
    constants.EGG_INTERVAL = 2500;

    setVisibility(constants.BASKET, true);
    setVisibility(constants.MENU_BTN, true);
    setVisibilityMany(constants.HEN, true);

    constants.GAME_TEXT.innerHTML = "Press ENTER to <br>START";
    setVisibility(constants.GAME_TEXT, true);

    setVisibilityMany(constants.MENU_PAGE_BTNS, false);

    setVisibility(constants.LIVES_LABEL, true);
    updateLives();
    setVisibility(constants.SCORE_LABEL, true);
    updateScore();

    initBasketMovement();

    document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (constants.PLAY)
            pauseGame();
        else
            game();
    }
})
}

function game() {
    setVisibility(constants.GAME_TEXT, false);
    layEggs();
    constants.PLAY = true;
}

export function restartGame() {
    game_init();
}

export function endGame() {
    constants.LIVES = 0;
    updateLives();
    clearEggs();
    constants.PLAY = false;
   
    game_init();

}

function pauseGame() {
    constants.GAME_TEXT.textContent = 'GAME PAUSED!!!';
    setVisibility(constants.GAME_TEXT, true);
    constants.PLAY = false;
}

constants.START_BTN.addEventListener('click', function () {
    game_init();
})
