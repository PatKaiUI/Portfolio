document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Update ARIA attributes
      const isExpanded = hamburger.classList.contains("active");
      hamburger.setAttribute("aria-expanded", isExpanded);

      // Prevent body scroll when menu is open
      if (isExpanded) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        // Close mobile menu if open
        if (hamburger && navMenu) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          hamburger.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "auto";
        }

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
          if (level) {
            entry.target.style.width = `${level}%`;
          }
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

  // Add resize listener to handle responsive behavior
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1023) {
      // Reset mobile menu state on desktop
      if (hamburger && navMenu) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
      }
    }
  });
});

// Modal functionality
function openModal(imgSrc, imgAlt) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  if (modal && modalImg) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modalImg.src = imgSrc;
    modalImg.alt = imgAlt;
    document.body.style.overflow = "hidden";

    // Focus management for accessibility
    modal.focus();
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");

  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";

    // Return focus to the element that opened the modal
    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }
  }
}

// Close modal when clicking outside the image
document.addEventListener("click", function (e) {
  const modal = document.getElementById("imageModal");
  if (modal && e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
