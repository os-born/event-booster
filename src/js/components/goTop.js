import refs from "../refs";

function goToTop (e) {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(goToTop, 0);
      }
}
const goUp = entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
          refs.goTop.style.display = "inline"
          refs.goTop.addEventListener('click', goToTop)
        } else {
            refs.goTop.style.display = "none"
        }
        
    });
  };
  
  const observered = new IntersectionObserver(goUp, {
    threshold: 0.5,
  });
  observered.observe(refs.headerContainer);