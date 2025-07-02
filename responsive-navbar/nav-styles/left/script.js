    const hamburger = document.getElementById('hamburger');
    const navPanel = document.getElementById('nav-panel');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    function toggleMenu() {
      const isActive = hamburger.classList.toggle('active');
      navPanel.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive);
      body.classList.toggle('menu-open', isActive);
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navPanel.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      const isClickInsideNav = navPanel.contains(e.target) || hamburger.contains(e.target);
      if (!isClickInsideNav && navPanel.classList.contains('active')) {
        toggleMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navPanel.classList.contains('active')) {
        toggleMenu();
      }
    });