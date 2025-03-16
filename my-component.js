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
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 1rem;
        width: 300px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 1rem;
        background-color: #fff;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .proj:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }

      .proj hgroup {
        margin-bottom: 1rem;
      }

      .proj .title {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
        color: #333;
      }

      .proj .description {
        font-size: 1rem;
        color: #666;
        margin: 0.5rem 0;
      }

    .proj .link {
        color: #007BFF;
        text-decoration: none;
        font-weight: bold;
      }

    .proj .link:hover {
        color: #0056b3;
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
