class myProject extends HTMLELement {
  constructor() {
    super();
  }

connectedCallback() {
  const style = document.createElement('style');
  style.textContent = getMyComponentCSS();
  const title = this.getAttribute("title") || "Unknown Title";
  const img
