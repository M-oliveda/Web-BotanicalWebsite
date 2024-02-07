(function () {
  const lgBreakpoint = window.matchMedia("(min-width: 920px)");

  lgBreakpoint.addEventListener("change", (e) => {
    navBarNavBehaviour(e.matches);

    function navBarNavBehaviour(matches) {
      const navbarNav = document.querySelector(".navbar-nav");
      if (matches) {
        navbarNav.classList.remove("bg-primary");
        for (let item of document.querySelectorAll(".navbar-nav .nav-link")) {
          item.classList.remove("text-white");
          item.classList.add("fw-bold");
        }
        document
          .querySelector(".nav-item .btn")
          .classList.remove("text-white", "border-white");
        document
          .querySelector(".nav-item .btn")
          .classList.add("btn-outline-primary");
      } else {
        navbarNav.classList.add("bg-primary");
        for (let item of document.querySelectorAll(".navbar-nav .nav-link")) {
          item.classList.remove("fw-bold");
          item.classList.add("text-white");
        }
        document
          .querySelector(".nav-item .btn")
          .classList.add("text-white", "border-white");
        document
          .querySelector(".nav-item .btn")
          .classList.remove("btn-outline-primary");
      }
    }
  });
})();
