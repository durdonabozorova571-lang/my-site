// ===== Tema (yorugʻ / qorongʻi) =====
// Sahifa chizilishidan oldin ishlaydi, shunda rang "miltillamaydi"
(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function saved() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function current() {
    return root.getAttribute("data-theme") || (media.matches ? "dark" : "light");
  }
  function sync() {
    root.setAttribute("data-current", current());
  }

  var s = saved();
  if (s === "light" || s === "dark") root.setAttribute("data-theme", s);
  sync();
  if (media.addEventListener) media.addEventListener("change", sync);

  window.toggleTheme = function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    sync();
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  // Tema tugmasi
  var btn = document.querySelector(".theme-toggle");
  if (btn) btn.addEventListener("click", window.toggleTheme);

  // Kurs raqami / bitiruvchi holatini avtomatik yangilaydi
  window.updateStudy(new Date());

  // Loyihalar sonini kartalar soniga qarab avtomatik yozadi
  var pc = document.getElementById("project-count");
  if (pc) pc.textContent = document.querySelectorAll(".project-grid .project").length + " ta";

  // Pastki qismdagi yilni avtomatik yangilaydi
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Rasm (images/photo.jpg) topilmasa, vaqtinchalik belgini koʻrsatadi
  var photo = document.querySelector(".hero-photo");
  var img = photo && photo.querySelector("img");
  if (img) {
    var showPlaceholder = function () { photo.classList.add("no-photo"); };
    if (img.complete && img.naturalWidth === 0) showPlaceholder();
    img.addEventListener("error", showPlaceholder);
  }
});

// ===== Oʻqish holati (avtomatik) =====
// Oʻqish 2025-yil sentabrda boshlangan. Har yili 1-sentabrdan kurs bittaga oshadi.
// 4-kurs tugagach (2029-yil 1-iyuldan) "bitiruvchi" deb koʻrsatiladi.
var STUDY = {
  startYear: 2025,          // 1-kurs boshlangan yil (sentabr)
  years: 4,                 // necha yillik taʼlim
  graduationMonth: 6,       // bitirish oyi: 6 = iyul (0 = yanvar)
  university: "Alisher Navoiy nomidagi Toshkent davlat oʻzbek tili va adabiyoti universiteti"
};

window.studyStatus = function (now) {
  var gradYear = STUDY.startYear + STUDY.years;
  var gradDate = new Date(gradYear, STUDY.graduationMonth, 1);
  if (now >= gradDate) return { graduated: true, year: gradYear };
  var course = now.getFullYear() - STUDY.startYear + (now.getMonth() >= 8 ? 1 : 0); // 8 = sentabr
  if (course < 1) course = 1;
  if (course > STUDY.years) course = STUDY.years;
  return { graduated: false, course: course };
};

window.updateStudy = function (now) {
  var st = window.studyStatus(now);
  var value = document.getElementById("study-value");
  var label = document.getElementById("study-label");
  var note = document.getElementById("study-note");
  if (st.graduated) {
    if (value) value.textContent = st.year;
    if (label) label.textContent = "Bitiruvchi";
    if (note) note.textContent = STUDY.university.replace(/universiteti$/, "universitetini") + " " + st.year + "-yilda tamomlagan.";
  } else {
    if (value) value.textContent = st.course + "-kurs";
    if (label) label.textContent = "Talaba";
    if (note) note.textContent = STUDY.university + " " + st.course + "-kurs talabasi.";
  }
};
