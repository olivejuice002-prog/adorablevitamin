window.addEventListener('DOMContentLoaded', () => {
    // 주소 앞에 /를 붙이면 항상 루트(가장 바깥) 폴더부터 시작합니다.
    if (document.getElementById('header-html')) {
        fetch('/include/header.html').then(res => res.text()).then(data => document.getElementById('header-html').innerHTML = data);
    }
    if (document.getElementById('subHead-html')) {
        fetch('/include/subHead.html').then(res => res.text()).then(data => document.getElementById('subHead-html').innerHTML = data);
    }
    if (document.getElementById('footer-html')) {
        fetch('/include/footer.html').then(res => res.text()).then(data => document.getElementById('footer-html').innerHTML = data);
    }
});