document.addEventListener('DOMContentLoaded', () => {
    const wavetext = document.querySelector('.wavetext');
    if (wavetext) {
        const text = wavetext.textContent;
        wavetext.textContent = '';
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.setProperty('--i', i);
            wavetext.appendChild(span);
        });
    }
}); 