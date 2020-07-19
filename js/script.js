document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('is-active');
    var isMobileVersion = document.getElementsByClassName('is-active');
    if (isMobileVersion.length > 0) {
        document.querySelector('.navigation').style.display = 'block';
    } else {
        document.querySelector('.navigation').style.display = 'none';
    }
});