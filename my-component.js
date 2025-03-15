class myProject extends HTMLELement {
  constructor() {
    super();
  }

connectedCallback() {
  const style = document.createElement('style');
  style.textContent = getMyComponentCSS();
  const title = this.getAttribute("title") || "Unknown Title";
  const img = this.getAttribute("img") || "Unknown img";
  const description = this.getAttribute("description") || "Unknown Description";
  const link = this.getAttribute("link") || "Unknown Link";
  this.innerHTML = `
    <div class="proj">
      <hgroup>
      <h2 class="title">${title}</h2>
      <p class="description">${description}</p>
      <a class="link">${link}</a>
      </hgroup>
      <img src="${img}" alt="${title}">
    </div>
    `;
  }
}
console.log("custom element defined");
customElements.define('proj', MyProject);
