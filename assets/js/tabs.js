  const tabLinks = document.querySelectorAll(".product-tabs a");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = this.dataset.tab;

      tabLinks.forEach(item => item.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });