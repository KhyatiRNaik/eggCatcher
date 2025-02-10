const BASE = {
    LIVES: 3,
    EGG_SPEED: 2,
    EGG_INTERVAL: 1200
}

let PLAY = false;
let SCORE = 0;
let BASKET_POS = 140;
let EGG_SPEED = BASE.EGG_SPEED;
let EGG_INTERVAL = BASE.EGG_INTERVAL;
let LIVES = BASE.LIVES;

const HEN = document.querySelectorAll('.hen');
const BASKET = document.getElementById('basket');
const BASKET_SPEED = 25;
const HENS = [{
    x: 140,
    y: 50
}, {
    x: 280,
    y: 65
}, {
    x: 440,
    y: 72
}]


//dom objects
const GAME_TEXT = document.getElementById('game_text');
const START_BTN = document.getElementById('start_btn');
const CONTAINER = document.getElementById('container');
const SCORE_LABEL = document.getElementById('score_label');
const LIVES_LABEL = document.getElementById('lives_label');
const MENU_ELEMENTS = document.querySelectorAll('.menu_element');
const GAME_ELEMENTS = document.querySelectorAll('.game_element');
const MENU_BTN = document.getElementById('menu_btn');
const RESTART_BTN = document.getElementById('restart_btn');
const INSTRUCT_BTN = document.getElementById('instruct_btn');
const DROPPED_EGG_SOUND = document.getElementById('dropped_egg_sound');

export default{
    BASE: BASE,

    //MUTABLE
    PLAY: PLAY,
    SCORE: SCORE,
    BASKET_POS: BASKET_POS, 
    EGG_SPEED: EGG_SPEED,
    EGG_INTERVAL: EGG_INTERVAL,
    LIVES: LIVES,

    //IMMUTABLE
    HEN: HEN,
    BASKET: BASKET,
    BASKET_SPEED: BASKET_SPEED,
    HENS: HENS,

    //DOM objects
    GAME_TEXT: GAME_TEXT,
    START_BTN: START_BTN,
    CONTAINER: CONTAINER,
    SCORE_LABEL: SCORE_LABEL,
    LIVES_LABEL: LIVES_LABEL,
    MENU_ELEMENTS: MENU_ELEMENTS,
    GAME_ELEMENTS: GAME_ELEMENTS,
    MENU_BTN: MENU_BTN,
    RESTART_BTN: RESTART_BTN,
    INSTRUCT_BTN: INSTRUCT_BTN,
    DROPPED_EGG_SOUND: DROPPED_EGG_SOUND,
}
