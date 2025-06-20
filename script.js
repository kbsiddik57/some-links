function openLink(url) {if (url) window.open(url, '_blank');}

function switchEN() {window.location.href = 'en.links.html';}

function switchBN() {window.location.href = 'bn.links.html';}


function scrollToTop() {window.scrollTo({ top: 0, behavior: 'smooth' });}

window.addEventListener('scroll', () => {
  const topBtn = document.querySelector('.top-btn');
  topBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
});
