class LitNav extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();

    const shadow = this.attachShadow({mode: 'open'});

    const wrapper = document.createElement('div');
    const compHtml = `
        <nav>
            <ul>
                <li><a id="index" href="index.html">Home</a></li>
                <li><a id="name-device" href="name-device.html">Name Device</a></li>
            </ul>
        </nav>
        `;
    wrapper.innerHTML = compHtml;

    const targetId = document.location.href.split('/').pop().split('.')[0];
    const style = document.createElement('style');
    style.textContent = `
    #$$$ {
        font-weight: bold;
    }
    `.replace('$$$',targetId);

    shadow.appendChild(document.getElementById("style-lit-nav"));
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define('lit-nav', LitNav);
