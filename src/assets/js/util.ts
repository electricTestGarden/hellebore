export const closePopup = (popup: Element) => {
    popup.classList.add('hidden');
    document.body.classList.remove("body-noscroll");
}

export const openPopup = (popup: Element) => {
    popup.classList.remove('hidden');
    document.body.classList.add("body-noscroll");
}

export const setupTranscriptLink = () => {
    const transcriptLink = document.getElementById("transcript-link");
    const transcriptPopup = document.getElementById("transcript-popup");

    // If there is no transcript popup, bail
    if (!transcriptPopup) {
        return;
    }

    transcriptLink?.addEventListener("click", (e) => {
        e.preventDefault();
        openPopup(transcriptPopup);
    });
}

export const setupPopupClosing = () => {
    const popups = document.querySelectorAll(".popup");

    // Set up close buttons
    popups.forEach((popup) => {
        popup.querySelector(".popup-close")?.addEventListener("click", (e) => {
            e.preventDefault();
            closePopup(popup); 
        }) 
    }); 

    // Set up close on click popup overlay
    document.addEventListener("click", (e) => {
        const targetElement = e.target as HTMLElement;
        if (targetElement.classList.contains("popup")) {
            closePopup(targetElement);
        }
    });
}