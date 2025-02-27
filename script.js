window.addEventListener('DOMContentLoaded', savedTheme);
      
function savedTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light-mode';
  setTheme(savedTheme);
}
      
function setTheme(theme) {
  var element = document.body;
  element.classList.toggle('dark-mode', theme == 'dark-mode');
  document.getElementById('theme').textContent = theme === 'dark-mode' ? 'Light Mode' : 'Dark Mode';
}
      
  function toggleTheme() {
    const currTheme = localStorage.getItem('theme') || 'light-mode';
    const newTheme = currTheme == 'light-mode'? 'dark-mode': 'light-mode';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

  document.addEventListener('DOMContentLoaded', setSavedTheme);
