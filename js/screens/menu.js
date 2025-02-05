import constants from "../core/constants.js";
import { setVisibility, setVisibilityMany } from "../core/utils.js";

constants.MENU_BTN.addEventListener('click', function() {
    showMenuPage();
})

function showMenuPage() {
    constants.PLAY = false;
    
    constants.CONTAINER.classList.add("container-menu");    
    constants.CONTAINER.classList.remove("container-game");

    setVisibility(constants.BASKET, false);
    setVisibility(constants.MENU_BTN, false);
    setVisibility(constants.LIVES_LABEL, false);
    setVisibility(constants.SCORE_LABEL, false);
    setVisibility(constants.GAME_TEXT, false);
    setVisibilityMany(constants.HEN, false);
    setVisibility(constants.RESTART_BTN, false);

    setVisibilityMany(constants.MENU_PAGE_BTNS, true);

}


export { showMenuPage }