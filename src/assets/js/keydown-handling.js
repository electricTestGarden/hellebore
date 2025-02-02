import { closeHelpPopup, openHelpPopup } from "./util";

document.addEventListener("DOMContentLoaded", function () {
    addEventListener("keydown", (event) => {
        switch (event.key) {
            case 'h': 
                const helpPopup = document.getElementById('help-popup');
                if (helpPopup.classList.contains('hidden')) {
                    openHelpPopup();
                } else {
                    closeHelpPopup();
                }
                break;
            case 'ArrowLeft':
                document.getElementById('prev-comic').click();
                break;
            case 'ArrowRight': 
                document.getElementById('next-comic').click();
                break;
            default:
        }
    });
})