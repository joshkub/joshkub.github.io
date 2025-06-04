const pages = {

      home: `
        <div class="content-box">
          <img class="picture" id="me" src="images/profile.png" alt="Joshua Kubala">
          <div class="info">
            <h1>Hello, I am <br> Joshua Kubala</h1>
            <ul>
              <li>Computer Programmer</li>
              <li>Videogame Enthusiast</li>
              <li>Beginner Guitarist</li>
              <li>Sophomore in CHS</li>
            </ul>
          </div>
        </div>
        <div class="content-box">
          <div class="info">
              <p>
                I was born in Marietta, GA and raised in Janesville, WI.
                Things such as family, friends, sports, and music have
                defined my life so far and the path I wish to pursue.
                To be specific, since I was a kid, computers and 
                technology have fully caught my attention,
                starting out with video games.
                Leading to now, using the skills I've learned from
                programming courses, I am a developer that knows 
                simple concepts in the following coding languages: 
                HTML, Python, C#, and JS. I offer the development 
                of HTML web pages including customizable CSS and 
                JS functions, C# Window Forms with use of Visual
                Studio, and simple Python console scripts.
              </p>
          </div>
        </div>
      `,

      about: `
        <div class="content-box">
          <div class="imagelist">
            <img class="picture" src="images/marietta.jpg">
            <img class="picture" src="images/janesville.jpg">
          </div>
          <div class="info">
            <p>
              I was born in Marietta, GA, The photo shows a fountain 
              in Marietta Square which I visited frequently as a kid. 
              Later in 2015 me and my family moved to Janesville, WI 
              because my father had a new job. I am currently in Sophomore
              year of Craig Highschool, I mainly take elective classes 
              related to Computers and Engineering.
            </p>
          </div>
        </div>
        <div class="content-box">
          <img class="picture"id="me" src="images/flex.jpeg">
          <div class="info">
            <p>
              My favorite hobby that I take great pride in is Weightlifting.
              I started to lift weights since I was in 7th grade. To estimate, I have
              been lifting weights for four years. <br><br> Here are my stats:
              <ul>
                <li>Bench-Press: 225lbs</li>
                <li>Dead-Lift: 350lbs</li>
                <li>Squat: 315lbs</li>
              </ul>
            </p>
          </div>
        </div>
      `,

      projects: `
        <div class="project-box">
          <h1>Breakout</h1>
          <img class="picture" src="images/breakout.png">
          <p>
            My first project in computer programming was my Breakout game.
            in Breakout, you must use the paddle to bounce the ball into 
            the bricks until all bricks are destroyed.
          </p>
        </div>
        <div class="project-box">
          <h1>Mousetrap Car</h1>
          <img class="picture" src="images/mousetrap.jpg">
          <p>
            I made a mousetrap car in my Engineering/Design class. 
            Using the resources: mousetrap, string, cardboard, and rubber bands, 
            I made a functional "car."
          </p>
        </div>
        <div class="project-box">
          <h1>Baklava</h1>
          <img class="picture" src="images/baklava.jpg">
          <p>
            In my Global Studies Honors class I had been assigned
            the country of turkey, and I selected to make a popular desert
            from turkey, Baklava. It's very time consuming but worth-it.
          </p>
        </div>
      `,

      contact: `
        <div class="contact-box">
        <h1> Contact Me! </h1>
        <h3>Name (First & Last):</h3>
          <input>
          </input>    
        <h3>Email or Contact Number:</h3>
          <input>
          </input>
        <h3>Message:</h3>
          <input>
          </input>
        <br>
        <button>Submit</button>
        

        </div>
      `
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