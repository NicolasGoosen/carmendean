(function () {
  const allowedSlugs = {
    "guarantee/OVAM": "OVAM.jpg",
    "guarantee/BEAD": "BEAD.jpg",
    "guarantee/SHIELD": "SHIELD.jpg"
  };

  // Get path without leading/trailing slashes
  const path = window.location.pathname.replace(/^\/|\/$/g, "");

  // If path is empty, this is homepage – do nothing
  if (!path) return;

  // Check if path is allowed
  if (!allowedSlugs[path]) {
    // Invalid slug → redirect to homepage
    window.location.replace("/");
    return;
  }

  // Valid slug
  const heroImage = document.getElementById("heroImage");
  const form = document.getElementById("guaranteeForm");
  const slugField = document.getElementById("landingSlug");

  // Set image
  heroImage.src = `/images/${allowedSlugs[path]}`;
  heroImage.style.display = "block";

  // Inject slug into hidden field
  slugField.value = path;

  // Show form
  form.style.display = "block";
})();
