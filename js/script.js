const pages = {
      home: `
        <div class="content-box">
          <img id="me" src="images/image.png" alt="Joshua Kubala">
          <div class="info">
            <h1>Hello, I am Joshua Kubala</h1>
            <ul>
              <li>Computer Programmer</li>
              <li>Game Enthusiast</li>
              <li>Cool Guy</li>
            </ul>
          </div>
      `,
      about: `<div><h2>About Me</h2><p>This is the about page.</p></div>`,
      projects: `<div><h2>Projects</h2><p>This is the projects page.</p></div>`,
      contact: `<div><h2>Contact</h2><p>This is the contact page.</p></div>`
    };

    function loadPage(page) {
      const main = document.getElementById('main-content');
      main.classList.remove('fade-in');
      main.classList.add('fade-out');
      setTimeout(() => {
        main.innerHTML = pages[page] || '<div><h2>Page not found</h2></div>';
        main.classList.remove('fade-out');
        main.classList.add('fade-in');
      }, 300);
    }

    document.addEventListener('DOMContentLoaded', () => {
      loadPage('home');
      document.querySelectorAll('a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
          const page = e.currentTarget.getAttribute('data-page');
          loadPage(page);
        });
      });
    });