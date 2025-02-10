import constants from "./core/constants.js";
import { layEggs } from "./entities/hen.js";
import { setVisibility, setVisibilityMany, updateLives, updateScore } from "./core/utils.js";
import "./entities/basket.js";
import "./screens/menu.js";
import "./screens/instructions.js";
import { initBasketMovement } from "./entities/basket.js";
import { clearEggs } from "./entities/egg.js";
import { hideInstructions } from "./screens/instructions.js";
import { showGamePage } from "./screens/game.js";


function game_init() {
    showGamePage();
    initBasketMovement();

    document.addEventListener('keydown', startGameListener)
}

function startGameListener(event) {
    if (event.key === 'Enter') {
        if (constants.PLAY)
            pauseGame();
        else
            game();
    }
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
    constants.PLAY = false;
    constants.LIVES = 0;

    constants.GAME_TEXT.innerHTML = "Your final score<br> is: " + constants.SCORE;
    setVisibility(constants.GAME_TEXT, true);
    setVisibility(constants.RESTART_BTN, true)

    updateLives();
    clearEggs();

    document.removeEventListener('keydown', startGameListener);
    constants.RESTART_BTN.addEventListener('click', restartGame);
}

function pauseGame() {
    constants.GAME_TEXT.textContent = 'GAME PAUSED!!!';
    setVisibility(constants.GAME_TEXT, true);
    constants.PLAY = false;
}

constants.START_BTN.addEventListener('click', function () {
    game_init();
})
