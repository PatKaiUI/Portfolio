document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");

        // Special handling for skill bars
        if (entry.target.classList.contains("skill-bar")) {
          const level = entry.target.getAttribute("data-level");
          entry.target.style.width = `${level}%`;
        }
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Observe skill bars
  document.querySelectorAll(".skill-bar div").forEach((bar) => {
    observer.observe(bar);
  });
});

// Modal functionality
function openModal(imgSrc, imgAlt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modalImg.src = imgSrc;
  modalImg.alt = imgAlt;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}
