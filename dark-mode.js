document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const root = document.documentElement; // Access CSS variables
  const timelineData = document.querySelectorAll(".timeline-data");
  const timelineContent = document.querySelectorAll(".timeline-content p");
  const skillItem = document.querySelectorAll(".skill-item");

  function updateParticles(lineColor) {
      particlesJS("particles-js", {
          particles: {
              line_linked: {
                  color: lineColor, // Dynamic line color
              },
          },
      });
  }

  // Check if dark mode is stored in localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
      enableDarkMode();
  }

  darkModeToggle.addEventListener("click", function () {
      if (localStorage.getItem("dark-mode") !== "enabled") {
          enableDarkMode();
      } else {
          disableDarkMode();
      }
  });

  function enableDarkMode() {
      root.style.setProperty("--bg-color", "#d0d0d0"); /* Light background */
      root.style.setProperty("--text-color", "#000000"); /* Dark text */

      timelineData.forEach(element => {
          element.style.color = "#FF5733"; // Example: Orange for dark mode
      });

      timelineContent.forEach(element => {
          element.style.color = "#000000"; 
      });

      skillItem.forEach(element => {
          element.style.backgroundColor = "rgba(30, 30, 30, 0.86)"; // ✅ Fixed Syntax
      });

      localStorage.setItem("dark-mode", "enabled");
  }

  function disableDarkMode() {
      root.style.setProperty("--bg-color", "#080808"); /* Dark background */
      root.style.setProperty("--text-color", "rgb(81, 81, 81)"); /* Light text */

      timelineContent.forEach(element => {
          element.style.color = "#ffffff"; 
      });

      skillItem.forEach(element => {
        element.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; // ✅ Fixed Syntax
    });

      localStorage.setItem("dark-mode", "disabled");
  }
});
