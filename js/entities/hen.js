import constants from "../core/constants.js";
import { getRandomInt } from "../core/utils.js";
import { clearEggs, createEggs } from "./egg.js";

let interval = null;

function selectHen() {
    let selectedHen = getRandomInt(0, 2);
    return constants.HENS[selectedHen];
}

function layEggs() {
    if(interval){
        clearInterval(interval)
    }
    interval = setInterval(() => {
        let selectedHen = selectHen();
        createEggs(selectedHen);
            if (!constants.PLAY) {
            clearEggs();
            clearInterval(interval);
            interval = null;
        }
    }, constants.EGG_INTERVAL);
}

export { layEggs }