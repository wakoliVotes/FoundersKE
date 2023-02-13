const createNavbar = () => {
    const navbar = document.querySelector('.navbar')
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
              <a href="/blog.html" class="nav-link w-nav-link">Blogs</a
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
    `

}

createNavbar()