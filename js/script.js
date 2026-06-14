// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Ferme le menu mobile après clic
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
  });
});

// Animation douce au scroll
const revealElements = document.querySelectorAll(
  ".category-card, .step, .highlight-section, .cta-section"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Message simple pour les boutons devis
const devisButtons = document.querySelectorAll(
  'a[href="contact.html"], .btn-primary, .btn-secondary'
);

devisButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transition = "0.25s ease";
  });
});

// Pré-remplissage du formulaire depuis les packs ou le catalogue
function saveSelectedItem(itemName) {
  localStorage.setItem("jumpifun_selection", itemName);
}

function getSelectedItem() {
  return localStorage.getItem("jumpifun_selection");
}

function clearSelectedItem() {
  localStorage.removeItem("jumpifun_selection");
}