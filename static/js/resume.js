(function () {
  "use strict";

  function initResumePrint() {
    var printBtn = document.getElementById("print-resume-btn");
    if (!printBtn) {
      return;
    }

    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initResumePrint);
  } else {
    initResumePrint();
  }
})();
