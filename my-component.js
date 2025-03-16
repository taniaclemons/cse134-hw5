class myProject extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback() {
  const title = this.getAttribute("title") || "Unknown Title";
  const img = this.getAttribute("img") || "Unknown img";
  const description = this.getAttribute("description") || "Unknown Description";
  const link = this.getAttribute("link") || "Unknown Link";
  this.innerHTML = `
    <style> 
      .proj {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        width: 300px;
        margin: 1rem;
        background-color: #ff6347;
      }

      .proj hgroup {
        margin-bottom: 1rem;
      }

      .proj .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
      }

      .proj .description {
        font-size: 1rem;
        margin: 0.5rem 0;
      }

    .proj .link {
        text-decoration: none;
        font-weight: bold;
        display: block;
        text-align: center;
      }

    .proj picture {
        width: 100%;
        height: auto;
        margin-top: 1rem;
      }

    .proj img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 20px;
      }
    </style>
    <div class="proj">
      <hgroup>
      <h2 class="title">${title}</h2>
      <p class="description">${description}</p>
      <a href="${link}" class="link">Read More</a>
      </hgroup>
      <picure>
      <img src="${img}" alt="${title}">
      </picture>
    </div>
    `;
  }
}
console.log("custom element defined");
customElements.define('my-proj', myProject);
