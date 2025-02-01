document.addEventListener("DOMContentLoaded", function () {
    addEventListener("keydown", (event) => {
        switch (event.key) {
            case 'h': 
                document.getElementById('help-popup').classList.remove('hidden'); 
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