
  // Check if dark mode preference is stored in local storage
if (localStorage.getItem('dark-mode') === 'false') {
    document.getElementById('dark-mode-toggle').checked = false;
    enableLightMode();
  }
  
  // Event listener for dark mode toggle switch
  document.getElementById('dark-mode-toggle').addEventListener('change', () => {
    if (document.getElementById('dark-mode-toggle').checked) {
      enableDarkMode();
      localStorage.setItem('dark-mode', true);
    } else {
      enableLightMode();
      localStorage.setItem('dark-mode', false);
    }
  });
  
  // Function to enable dark mode
  function enableDarkMode() {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  // Function to enable light mode
  function enableLightMode() {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  