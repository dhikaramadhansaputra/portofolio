function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function () {
  let titles = document.querySelectorAll(".title");

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let text = new SplitType(entry.target, { types: "chars" });

          let tl = gsap.timeline();
          tl.from(text.chars, {
            opacity: 0,
            rotateY: 180,
            stagger: 0.06,
            duration: 0.6,
            ease: "power3.out",
          });

          observer.unobserve(entry.target); // Agar animasi hanya berjalan sekali
        }
      });
    },
    { threshold: 0.3 } // Animasi dimulai saat 20% elemen masuk viewport
  );

  titles.forEach((title) => observer.observe(title));
});
