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

loadComponent("header-container", "/components/header.html");
loadComponent("footer-container", "/components/footer.html");

if (document.getElementById("company-tabs-container")) {
  loadComponent("company-tabs-container", "/components/company-tabs.html");
}

if (document.getElementById("pc-pumps-tabs-container")) {
  loadComponent("pc-pumps-tabs-container", "/components/pc-pumps-tabs.html");
}