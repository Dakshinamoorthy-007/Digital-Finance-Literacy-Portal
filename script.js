function toggleMenu() {
  const links = document.getElementById("navLinks");
  links.classList.toggle("active");
}

function generateTip() {
  const tips = [
    "Track your expenses daily.",
    "Set up auto-debit for savings.",
    "Avoid impulse purchases by waiting 24 hours.",
    "Invest early to benefit from compounding.",
    "Use cashback and reward apps wisely.",
    "Limit credit card usage to essentials.",
    "Cut unused subscriptions monthly.",
    "Use public transport to save fuel cost."
  ];
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("dailyTip").textContent = "💡 " + tip;
}
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

