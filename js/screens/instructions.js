import constants from "../core/constants.js"
import { setVisibility, setVisibilityMany } from "../core/utils.js";

const instruct_text = document.getElementById('instruct_text');
let text = "";

function showInstructPage() {
    constants.CONTAINER.classList.add("container-instruct");
    constants.CONTAINER.classList.remove("container-game");
    constants.CONTAINER.classList.remove("container-menu");

    setVisibilityMany(constants.GAME_ELEMENTS, false);
    setVisibilityMany(constants.MENU_ELEMENTS, false);

    setVisibility(constants.MENU_BTN, true);
    showInstructions();
}

function showInstructions() {
    text = `
    <p>HOW TO PLAY?</p>
    <ol>
        <li>Use the mouse to move the basket.</li>
        <li>Catch as many eggs as you can.</li>
        <li>Each dropped egg costs you one life.</li>
        <li>You start with ${constants.LIVES} lives.</li>
    </ol>
`;
    instruct_text.innerHTML = text;
}

function hideInstructions() {
    text = "";
    instruct_text.innerHTML = text;
}

export { showInstructPage, hideInstructions }
