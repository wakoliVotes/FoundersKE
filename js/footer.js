const setFooter = () => {
  const footer = document.querySelector('footer');
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
          ><a href="/blog.html" class="footer-link">Blogs</a
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
      </div>
      
      <div
        id="w-node-_8db7c0c9-76ad-b8a3-7d76-c0f0ef19c292-ef19c26b"
        class="social-media-div"
      >
        <div class="social-media-block">
          <a
            href=""
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
            href=""
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
            href=""
            target="_blank"
            class="social-media-link w-inline-block"
            ><img
              src="https://uploads-ssl.webflow.com/6335b815588373dcb10f9f59/633821aba3f8a5501298664b_Vector-1.svg"
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
        © 2023 FoundersKE. All rights reserved.
        <br />
        <br />
        Designed by: <a href="https://anchormiles.com" target="_blank" class="w-inline-block"
        style="color: red; text-decoration: none; font-weight: bold;"
          >AnchorMiles</a>
      </div>
    </div>
  </div>
</div>
  `
  
}

// call setFooter function in the main.js file
setFooter();