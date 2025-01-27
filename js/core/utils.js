/**
 * Everything is exported
 */

import constants from "./constants.js";

export function setVisibility(element, visible) {
    element.style.display = visible ? "block" : "none";
}

export function setVisibilityMany(element, visible) {
    element.forEach(e => e.style.display = visible ? "block" : "none");   
}

export function isVisible(element) {
    return element.style.display === "block";
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function updateLives() {
    constants.LIVES_LABEL.textContent = `Lives: ${constants.LIVES}`; 
}

export function updateScore() {
    constants.SCORE_LABEL.textContent = `Score: ${constants.SCORE}`; 
}