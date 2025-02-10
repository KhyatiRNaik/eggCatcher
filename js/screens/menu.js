import constants from "../core/constants.js";
import { setVisibility, setVisibilityMany } from "../core/utils.js";
import { hideInstructions, showInstructPage } from "./instructions.js";

constants.MENU_BTN.addEventListener('click', function() {
    showMenuPage();
})

function showMenuPage() {
    constants.PLAY = false;
    
    constants.CONTAINER.classList.add("container-menu");    
    constants.CONTAINER.classList.remove("container-game");
    constants.CONTAINER.classList.remove("container-instruct");

    setVisibilityMany(constants.GAME_ELEMENTS, false);

    setVisibilityMany(constants.MENU_ELEMENTS, true);

    hideInstructions();

}

constants.INSTRUCT_BTN.addEventListener('click', function(){
    showInstructPage();
});

export { showMenuPage }
