document.getElementById('arrow-anchor')
.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
        top: document.getElementById("directorio")
            .getBoundingClientRect().top,
        behavior: 'smooth',
    });
});