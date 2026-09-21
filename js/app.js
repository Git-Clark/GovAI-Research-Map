// Tab switching for the group tabs on each branch page.
// Also supports deep links like technical-landscape.html#ai-safety

document.addEventListener("DOMContentLoaded", function () {
  var tabButtons = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");

  if (!tabButtons.length) return;

  function activate(id) {
    tabButtons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.tab === id);
    });
    tabPanels.forEach(function (panel) {
      panel.classList.toggle("is-active", panel.id === id);
    });
  }

  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activate(btn.dataset.tab);
      history.replaceState(null, "", "#" + btn.dataset.tab);
    });
  });

  var hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(hash)) {
    activate(hash);
  } else {
    activate(tabButtons[0].dataset.tab);
  }
});
