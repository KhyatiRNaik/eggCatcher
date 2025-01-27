import constants from "../core/constants.js";

function enableBasketMovement() {
    constants.CONTAINER.addEventListener("mousemove", function (event) {
        const containerRect = constants.CONTAINER.getBoundingClientRect();

        let mouseX = event.clientX - containerRect.left;

        if (mouseX >= 100 && mouseX <= 480) {
            constants.BASKET.style.left = `${mouseX}px`;
        }
    });
}

function initBasketMovement() {
    enableBasketMovement(); 
}

export { initBasketMovement };
