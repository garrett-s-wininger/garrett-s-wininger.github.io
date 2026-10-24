(function () {
  "use strict";

  function getStoredTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }

  function resolveInitialTheme() {
    var stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    return prefersDark ? "dark" : "light";
  }

  function syncPictureSources(theme) {
    var sources = document.querySelectorAll('source[data-theme-source="dark"]');
    var mediaValue = theme === "dark" ? "all" : "not all";

    for (var i = 0; i < sources.length; i++) {
      sources[i].setAttribute("media", mediaValue);
    }
  }

  function applyTheme(theme, persist) {
    document.documentElement.setAttribute("data-theme", theme);
    syncPictureSources(theme);

    if (persist) {
      setStoredTheme(theme);
    }
  }

  var initialTheme = resolveInitialTheme();
  document.documentElement.setAttribute("data-theme", initialTheme);

  function initThemeControls() {
    var currentTheme =
      document.documentElement.getAttribute("data-theme") || resolveInitialTheme();

    syncPictureSources(currentTheme);

    var toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var active =
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "dark"
            : "light";

        var next = active === "dark" ? "light" : "dark";
        applyTheme(next, true);
      });
    }

    if (window.matchMedia) {
      var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      var onSystemChange = function (e) {
        if (!getStoredTheme()) {
          applyTheme(e.matches ? "dark" : "light", false);
        }
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", onSystemChange);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeControls);
  } else {
    initThemeControls();
  }
})();
