function getLang() {
  const firstPath = location.pathname.split("/")[1];

  if (["ko", "ja", "zh-cn", "zh-tw", "vi", "ar"].includes(firstPath)) {
    return firstPath;
  }

  return "en";
}

function componentPath(name) {
  const lang = getLang();
  return `/components/${name}-${lang}.html`;
}

function loadComponent(id, file) {
  const target = document.getElementById(id);

  if (!target) return;

  fetch(file)
    .then(response => response.text())
    .then(data => {
      target.innerHTML = data;
      updateActiveTab();
    });
}

function updateActiveTab() {
  const currentPath = normalizePath(window.location.pathname);

  document.querySelectorAll(".sub-tabs a").forEach(link => {
    const linkPath = normalizePath(new URL(link.href).pathname);

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
}

function normalizePath(path) {
  return path.replace(/index\.html$/, "");
}

loadComponent("header-container", componentPath("header"));
loadComponent("footer-container", componentPath("footer"));

if (document.getElementById("company-tabs-container")) {
  loadComponent("company-tabs-container", componentPath("company-tabs"));
}

if (document.getElementById("pc-pumps-tabs-container")) {
  loadComponent("pc-pumps-tabs-container", componentPath("pc-pumps-tabs"));
}

document.addEventListener("click", (e) => {
  const dropdown = document.querySelector(".lang-dropdown");

  if (!dropdown) return;

  const button = dropdown.querySelector(".lang-btn");

  if (button.contains(e.target)) {
    dropdown.classList.toggle("open");
  } else {
    dropdown.classList.remove("open");
  }
});