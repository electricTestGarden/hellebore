document.addEventListener("DOMContentLoaded", function(){
    const transcriptLink = document.getElementById('transcript-link');
    transcriptLink?.addEventListener('click', (event) => {
        // Cast to element so we don't have as many type problems
        const element = event.target as HTMLElement;

        if (element.matches('#transcript-link')) { 
            event.preventDefault();

            const transcript = document.getElementById('transcript-wrapper');

            transcript?.classList.remove("hidden");
            document.body.classList.add("body-noscroll");

        } 
        
        }, false);

        const transcriptClose = document.getElementById('transcript-close');
        transcriptClose?.addEventListener('click', (event) => {
            event.preventDefault();

            const transcript = document.getElementById('transcript-wrapper');

            transcript?.classList.add('hidden');
            document.body.classList.remove("body-noscroll");
        });
});