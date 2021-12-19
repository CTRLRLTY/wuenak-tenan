// Logo
import WebLogo from './logo.svg';
import LineLogo from './logo-ln.png';
import FacebookLogo from './logo-fb.png';
import InstagramLogo from './logo-ig.png';


/* Custom Element wrappers */

class HeaderNav extends HTMLElement {
    constructor() {
        super();
        this.wrapper = document.createElement('div');
        this.wrapper.className = this.getAttribute("class");
        this.wrapper.innerHTML = `
            <nav class="flexbox-space-between flexbox-vcenter">
                <a href="./index.html">
                    <object style="pointer-events: none;" type="image/svg+xml" data="${WebLogo}" id="logo-banner">
                        Wuenak Tenan
                    </object>
                </a>
                <div class="link-container flexbox-space-between">
                    <a class="nav-link" href="./about-us.html">About Us</a>
                    <a class="nav-link" href="./menu.html">Menu</a>
                    <a class="nav-link" href="./order-status.html">Order Status</a>
                    <a class="nav-link" href="./contact-us.html">Contact Us</a>
                </div>
            </nav>
        `;

        this.appendChild(this.wrapper);
    }
};


class Header extends HTMLElement {
    constructor() {
        super();
        this.wrapper = document.createElement('div');
        this.wrapper.innerHTML = `
            <header id="banner"
                style=\"
                    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(\'${this.getAttribute('src')}\') no-repeat;
                    background-size: cover; 
                \">
                <main-nav></main-nav>
                <h1 class="flexbox-center font-light">${this.innerHTML}</h1>
            </header>
        `;

        this.innerHTML = "";
        this.appendChild(this.wrapper);
    }
};


class Footer extends HTMLElement {
    constructor() {
        super();
        this.wrapper = document.createElement('div');
        this.wrapper.innerHTML = `
            <footer id="footer">
                <hr/>
                <div class="flexbox-space-between">
                    <section id="contact-us" class="flexbox-column flexbox-align-between">
                        <h4>Contact Us</h4>
                        <p>081234567890</p>
                        <p>wuenak.tenan@gmail.com</p>
                        <p>Jl. Kebon Jeruk Raya No. 27 Kebon Jeruk, Jakarta Barat 11530</p>
                    </section>
                    <object type="image/svg+xml" data="${WebLogo}" id="logo-banner">
                        Wuenak Tenan
                    </object>
                    <section id="social-media-container" class="flexbox-column">
                        <h4>Social Media</h4>
                        <div class="social-media flexbox-row flexbox-vcenter">
                            <img src="${LineLogo}">
                            <p>@wuenak.tenan</p>
                        </div>
                        <div class="social-media flexbox-row flexbox-vcenter">
                            <img src="${FacebookLogo}">
                            <p>Wuenak Tenan</p>
                        </div>
                        <div class="social-media flexbox-row flexbox-vcenter">
                            <img src="${InstagramLogo}">
                            <p>wuenaktenan</p>
                        </div>
                    </section>
                </div>
                <hr/>
            </footer>
      `;
        this.appendChild(this.wrapper);
    }
};


class MenuBundle extends HTMLElement {
    constructor() {
        super();
        this.wrapper = document.createElement("div");
        this.wrapper.innerHTML = `
            <section class="package-bundle flexbox-row">
                <img src="${this.getAttribute("thumbnail")}">
                <div class="flexbox-row">
                    <div class="flexbox-column">
                        <h3>${this.getAttribute("title")}</h3>
                        <p>${this.innerText}</p>
                    </div>
                    <button class="button-primary">
                        Add to Cart
                    </button>
                </div>
            </section>
        `;

        this.innerText = "";
        this.appendChild(this.wrapper);
    }
};


class Placard extends HTMLElement {
    constructor() {
        super();
        this.wrapper = document.createElement('div');

        const asideNodeText = `
            <div class="flexbox-center flexbox-column">
                <h1 class="font-light">${this.innerText}</h1>
                <a class="button-primary" href="${this.getAttribute("href")}">Lihat Menu</a>
            </div>
        `;

        const imgNodeText = `<img src="${this.getAttribute("img")}">`

        // These conditions are set up loosely cuz am lazy. I'll change it if I hit any weird issues.
        this.wrapper.innerHTML = `
            <article class="flexbox-row">
                    ${!this.getAttribute('direction') ? asideNodeText : imgNodeText}
                    ${!this.getAttribute('direction') ? imgNodeText : asideNodeText}
            </article>
        `;

        this.innerText = "";
        this.appendChild(this.wrapper);
    }
};


if (process.env.NODE_ENV === "development") {
    console.log("Running in dev mode")
}

customElements.define("menu-bundle", MenuBundle);
customElements.define("main-nav", HeaderNav);
customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
customElements.define("c-placard", Placard);
