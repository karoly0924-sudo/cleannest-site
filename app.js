// FILE: app.js (FULL REPLACE)
(function () {
  "use strict";

  var reviewBtn = document.getElementById("reviewBtn");
  if (reviewBtn) {
    reviewBtn.addEventListener("click", function () {
      var q = encodeURIComponent("CleanNest Hausservice e.U. Bewertung");
      window.open("https://www.google.com/search?q=" + q, "_blank", "noopener,noreferrer");
    });
  }

  var bookBtn = document.getElementById("bookBtn");
  if (bookBtn) {
    bookBtn.addEventListener("click", function () {
      alert("Buchung folgt in Kürze.");
    });
  }
})();