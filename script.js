const password = prompt("পাসওয়ার্ড দিন:");
const correctPassword = "57"; // ইচ্ছামতো পাসওয়ার্ড বসাও

if (password !== correctPassword) {
  alert("ভুল পাসওয়ার্ড!");
  window.location.href = "about:blank";
}

function openLink(url) {
  if (url) window.open(url, '_blank');
}

    function switchEN() {
      // ইংরেজি ভার্সনের পেজে রিডাইরেক্ট
      window.location.href = 'english.html'; // পরিবর্তনযোগ্য
    }

    function switchBN() {
      // বাংলা ভার্সনের পেজে রিডাইরেক্ট
      window.location.href = 'bangla.html'; // পরিবর্তনযোগ্য
    }


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const topBtn = document.querySelector('.top-btn');
  topBtn.style.display = window.scrollY > 100 ? 'block' : 'none';
});
