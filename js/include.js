window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('header-html')) {
        fetch('../include/header.html').then(res => res.text()).then(data => document.getElementById('header-html').innerHTML = data);
    }
    if (document.getElementById('subHead-html')) {
        fetch('../include/subHead.html').then(res => res.text()).then(data => document.getElementById('subHead-html').innerHTML = data);
    }
    if (document.getElementById('footer-html')) {
        fetch('../include/footer.html').then(res => res.text()).then(data => document.getElementById('footer-html').innerHTML = data);
    }
});