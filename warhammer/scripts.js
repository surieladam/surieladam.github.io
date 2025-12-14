// Képre kattintva nagyítás
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function() {
        if(this.style.width === '300px') {
            this.style.width = '100px';
        } else {
            this.style.width = '300px';
        }
    });
});