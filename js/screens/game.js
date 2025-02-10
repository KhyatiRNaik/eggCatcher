import constants from "../core/constants.js";
import { setVisibility, setVisibilityMany, updateLives, updateScore } from "../core/utils.js";
import { hideInstructions } from "./instructions.js";

function showGamePage() {
    constants.CONTAINER.classList.remove("container-menu");
    constants.CONTAINER.classList.remove("container-instruct");
    constants.CONTAINER.classList.add("container-game");

    constants.PLAY = false;
    constants.SCORE = 0;
    constants.LIVES = constants.BASE.LIVES;
    constants.EGG_SPEED = constants.BASE.EGG_SPEED;
    constants.EGG_INTERVAL = constants.BASE.EGG_INTERVAL;

    setVisibilityMany(constants.GAME_ELEMENTS, true);
    setVisibility(constants.RESTART_BTN, false);

    setVisibilityMany(constants.MENU_ELEMENTS, false);

    constants.GAME_TEXT.innerHTML = "Press ENTER to <br>START";

    updateLives();
    updateScore();
    hideInstructions();
}

export { showGamePage }
