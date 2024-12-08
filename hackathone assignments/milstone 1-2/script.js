var toggleButton = document.getElementById("toggle-skills");
var skillsList = document.getElementById("skills-list");
if (toggleButton && skillsList) {
    // Check the initial visibility of the skills list using getComputedStyle
    var initialDisplay = window.getComputedStyle(skillsList).display;
    // If the skills list is hidden (no inline style or display: none)
    if (initialDisplay === "none") {
        skillsList.style.display = "none"; // Initially hidden
        toggleButton.textContent = "Show";
    }
    else {
        skillsList.style.display = "block"; // Initially visible
        toggleButton.textContent = "Hide";
    }
    // Toggle event
    toggleButton.addEventListener("click", function () {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
            toggleButton.textContent = "Hide";
        }
        else {
            skillsList.style.display = "none";
            toggleButton.textContent = "Show";
        }
    });
}
