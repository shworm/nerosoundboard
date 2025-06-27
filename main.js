document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i <= 16; i++) {
        const button = document.getElementById(`btn${i}`);
        const audio = document.getElementById(`audio${i}`);

        button.onclick = function () {
            audio.currentTime = 0;
            audio.play();

            anime({
                targets: button,
                opacity: [
                    { value: 0.5, easing: "easeOutSine", duration: 60 },
                    { value: 1, easing: "easeInOutQuad", duration: 90 }
                ],
                borderRadius: [
                    { value: "50%", easing: "easeOutSine", duration: 70 },
                    { value: "8px", easing: "easeInOutQuad", duration: 100 }
                ],
                scale: [
                    { value: 0.5, easing: "easeOutSine", duration: 60 },
                    { value: 1, easing: "easeInOutQuad", duration: 110 }
                ]
            });
        };
    };
});