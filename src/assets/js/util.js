export const closeHelpPopup = () => {
    document.getElementById('help-popup').classList.add('hidden');
    document.getElementById('help-overlay').classList.add('hidden');
}

export const openHelpPopup = () => {
    document.getElementById('help-popup').classList.remove('hidden');
    document.getElementById('help-overlay').classList.remove('hidden');
}

export const setupHelpPopup = () => {
    const helpCloseButton = document.querySelector("#help-popup > .close");
    helpCloseButton.addEventListener("click", (e) => {
        closeHelpPopup(); 
    });
}