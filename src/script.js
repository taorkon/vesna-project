// Our JS script
//script for transition between question-icon & question-icon-active
function initIntIcon(i) {
    if (i.classList.contains("js-nc-int-icon-loaded")) return;
    i.classList.add("js-nc-int-icon-loaded");
    i.closest("svg").addEventListener("click", function (n) { i.classList.toggle("nc-int-icon-state-b") });
};
var intIcons = document.getElementsByClassName("js-nc-int-icon");
for (var i = 0; intIcons.length > i; i++) { initIntIcon(intIcons[i]); }