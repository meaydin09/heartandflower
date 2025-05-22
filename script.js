document.getElementById('heart').addEventListener('click', function() {
    this.classList.add('grow');
    setTimeout(() => {
        this.style.display = 'none';
        document.body.classList.remove('not-loaded');
    }, 2000);
});