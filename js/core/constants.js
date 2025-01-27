let PLAY = false;
let SCORE = 0;
let LIVES = 5;
const GAME_TEXT = document.getElementById('game_text');
const START_BTN = document.getElementById('start_btn');
const CONTAINER = document.getElementById('container');
const SCORE_LABEL = document.getElementById('score_label');
const LIVES_LABEL = document.getElementById('lives_label');
const MENU_PAGE_BTNS = document.querySelectorAll('.menu_page_btns');
const MENU_BTN = document.getElementById('menu_btn');
const HEN = document.querySelectorAll('.hen');
const BASKET = document.getElementById('basket');
const BASKET_SPEED = 25;
let BASKET_POS = 140;
let EGG_SPEED = 2;
let EGG_INTERVAL = 2500;
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

export default{
    PLAY: PLAY,
    SCORE: SCORE,
    LIVES: LIVES,
    GAME_TEXT: GAME_TEXT,
    START_BTN: START_BTN,
    CONTAINER: CONTAINER,
    SCORE_LABEL: SCORE_LABEL,
    LIVES_LABEL: LIVES_LABEL,
    MENU_PAGE_BTNS: MENU_PAGE_BTNS,
    MENU_BTN: MENU_BTN,
    HEN: HEN,
    BASKET: BASKET,
    BASKET_SPEED: BASKET_SPEED,
    BASKET_POS: BASKET_POS,
    EGG_SPEED: EGG_SPEED,
    EGG_INTERVAL: EGG_INTERVAL,
    HENS: HENS
}
