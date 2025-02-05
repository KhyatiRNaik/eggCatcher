import constants from "../core/constants.js";
import { getRandomInt } from "../core/utils.js";
import { clearEggs, createEggs } from "./egg.js";

let interval = null;
let eggIntervalInc = 3;

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

        if(constants.SCORE >= eggIntervalInc){
            if(constants.EGG_INTERVAL > 500){
                constants.EGG_INTERVAL -= 100;
                clearInterval(interval);
                layEggs();
            }
            if(constants.EGG_SPEED < 4)
                constants.EGG_SPEED ++;   
            eggIntervalInc += 5;
        }
    }, constants.EGG_INTERVAL);
}

export { layEggs }
