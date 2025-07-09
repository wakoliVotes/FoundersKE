const createNavbar = () => {
  const navbar = document.querySelector(".navbar");
  navbar.innerHTML = `
    <div class="page-padding">
    <div class="container-v1 w-container">
      <div class="navbar-container">
        <a href="/" class="brand w-nav-brand"
          ><img
            src="/images/navlogo.png"
            loading="lazy"
            alt="Logo"
            class="logo"
        /></a>
        <nav role="navigation" class="nav-menu w-nav-menu">
          <div class="nav-menu-wrapper">
            <div class="nav-menu-container">
              <a href="/" class="nav-link w-nav-link">Home</a
              >
              <a
                href="/about.html"
                aria-current="page"
                class="nav-link w-nav-link w--current"
                >About</a
              >
              <a href="/evolve.html" class="nav-link w-nav-link"
                >Ideas Evolve</a
              >
              <a href="/start-journey.html" class="nav-link w-nav-link"
                >Start Journey</a
              >
              <a href="/sponsors.html" class="nav-link w-nav-link"
                >Our Sponsors</a
              >
              <a href="https://medium.com/@acceldia" target="_blank" class="nav-link w-nav-link">Blog</a
              >
            </div>
          </div>
        </nav>
        <div class="navbar-btn-container">
          <a
            href="/contact.html"
            class="navbar-btn orange-gradient-bg-color w-inline-block"
            ><div>Get in Touch</div></a
          >
          <div class="menu-button w-nav-button">
            <div class="menu-button-burger">
              <div class="menu-button-icon-v1"></div>
              <div class="menu-button-icon-v2"></div>
              <div class="menu-button-icon-v3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
};

createNavbar();

// TODO - Here : BUYMECOFFEE FUNCTION

// add function for getfullyear
const dateFunction = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

const setFooter = () => {
  const footer = document.querySelector("footer");
  const currentYear = dateFunction();
  footer.innerHTML = `
  <div class="page-padding">
  <div class="container-v1">
    <div class="footer-grid">
      <a href="/" class="footer-brand w-inline-block"
        ><img
          src="/images/navlogo.png"
          loading="lazy"
          alt="Logo"
          sizes="(max-width: 991px) 96px, 116px"          
          class="footer-logo"
      /></a>
      <div
        id="w-node-_8db7c0c9-76ad-b8a3-7d76-c0f0ef19c271-ef19c26b"
        class="footer-links-grid"
      >
        <div
          id="w-node-_8db7c0c9-76ad-b8a3-7d76-c0f0ef19c272-ef19c26b"
          class="footer-links-block"
        >
          <a
            href="/about.html"
            aria-current="page"
            class="footer-link w--current"
            >About Us</a
          ><a href="/evolve.html" class="footer-link"
            >Ideas Evolve</a
          ><a href="/courses.html" class="footer-link">Our Courses | Learn</a
          ><a href="https://medium.com/@acceldia" target="_blank" class="footer-link">Blog</a
          >
        </div>
        <div
          id="w-node-_8db7c0c9-76ad-b8a3-7d76-c0f0ef19c283-ef19c26b"
          class="footer-links-block"
        >
          <a href="/terms-of-use.html" class="footer-link"
            >Terms &amp; Conditions</a
          >
          <a href="/privacy-policy.html" class="footer-link"
            >Privacy Policy</a>
            <a href="/contact.html" class="footer-link">Contact</a>
        </div>
        <!- Services - AnchorMiles-->
        <div
        id="w-node-_8db7c0c9-76ad-b8a3-7d76-c0f0ef19c283-ef19c26b"
        class="footer-links-block"
      >
        <a href="https://anchormiles.vercel.app/" target="_blank" class="footer-link"
          >Website Design Services</a
        >
        <a href="https://anchormiles.vercel.app/" target="_blank" class="footer-link"
          >Mobile App Development</a>
          <a href="https://anchormiles.vercel.app/" target="_blank" class="footer-link"
          >Graphic Design Services</a>
      </div>
      </div>
      
      <div
        id="w-node-_8db7c0c9-76ad-b8a3-7d76-c0f0ef19c292-ef19c26b"
        class="social-media-div"
      >
        <div class="social-media-block">
          <a
            href="https://www.instagram.com/wakoli_votes/"
            target="_blank"
            class="social-media-link w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/6335b815588373dcb10f9f59/633821ab823f998268e72da0_Group.svg"
              loading="lazy"
              alt=""
              class="social-media-icon"
          /></a>
        </div>
        <div class="social-media-block">
          <a
            href="https://twitter.com/wakoliVotes"
            target="_blank"
            class="social-media-link w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/6335b815588373dcb10f9f59/633821ab6320c8bb4e76d5c6_Vector.svg"
              loading="lazy"
              alt=""
              class="social-media-icon"
          /></a>
        </div>
        <div class="social-media-block">
          <a
            href="https://www.linkedin.com/company/thefounderske"
            target="_blank"
            class="social-media-link w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/6335b815588373dcb10f9f59/633821aba3f8a5501298664b_Vector-1.svg"
              loading="lazy"
              alt=""
              class="social-media-icon"
          /></a>
        </div>
        <div class="social-media-block">
        <a
          href="https://github.com/FoundersKE"
          target="_blank"
          class="social-media-link w-inline-block"
          ><img
            src="/images/icons-github.svg"
            loading="lazy"
            alt=""
            class="social-media-icon gh"
        /></a>
      </div>
      <div class="social-media-block">
      <a
        href="https://www.tiktok.com/@founderske"
        target="_blank"
        class="social-media-link w-inline-block"
        ><img
          src="/images/tiktok.png"
          loading="lazy"
          alt=""
          class="social-media-icon"
      /></a>
    </div>
      </div>
      <br />
      <div
        id="w-node-_8db7c0c9-76ad-b8a3-7d76-c0f0ef19c2a8-ef19c26b"
        class="text-s"
      >
        © 
        ${currentYear}
        FoundersKE. All rights reserved.
        <br />
        <br />
        Designed by: <a href="https://anchormiles.vercel.app/" target="_blank" class="w-inline-block"
        style="color: red; text-decoration: none; font-weight: bold;"
          >AnchorMiles</a> | Powered by: <strong style="color: red;" >Vercel</strong>
      </div>
    </div>
  </div>
</div>
  `;
};
// call setFooter function in the main.js file
setFooter();