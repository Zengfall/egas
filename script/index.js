const chevron = document.querySelector('.chevron a');

chevron.addEventListener('click', () => {
  const activites = document.querySelector('#activites');
  activites.scrollIntoView({ behavior: 'smooth' });
});

var backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if(!backToTopButton.classList.contains("show-back-to-top")) {
      backToTopButton.classList.add("show-back-to-top")
    }
  } else {
    if(backToTopButton.classList.contains("show-back-to-top")) {
      backToTopButton.classList.remove("show-back-to-top")
    }
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
