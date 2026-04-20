(function () {
    const mount = document.getElementById('animation-from-upwork');
    if (!mount) return;

    const container = document.createElement('div');
    container.className = 'hourly-cost-calculator-image';
    container.setAttribute('aria-hidden', 'true');
    mount.appendChild(container);

    const LOTTIE_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';

    function play() {
        window.lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'img/hourly-cost-calculator.json'
        });
    }

    if (window.lottie) {
        play();
    } else {
        const s = document.createElement('script');
        s.src = LOTTIE_SRC;
        s.onload = play;
        document.head.appendChild(s);
    }
})();
