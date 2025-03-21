const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}
, {
  threshold: 0.1
});


const appearElements = document.querySelectorAll('.appear');
appearElements.forEach(element => observer.observe(element));