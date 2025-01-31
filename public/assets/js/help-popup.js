document.addEventListener("DOMContentLoaded", function () {
    addEventListener("keydown", (event) => {
        if (event.key === 'h') {
           document.getElementById('help-popup').classList.remove('hidden'); 
        }
    });
})