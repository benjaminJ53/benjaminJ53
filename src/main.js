import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <section class="section section1">
    <div class="section-content">
      <h1>Benjamin J.</h1>
      <div class="social-links">
        <a href="#" target="_blank">GitHub</a>
        <a href="#" target="_blank">LinkedIn</a>
      </div>
      <p>Email: placeholder@email.com</p>
      <button class="download-cv">Download CV</button>
    </div>
  </section>

  <section class="section section2">
    <div class="section-content">
      <h2>About Me</h2>
      <p>Hi, my name is Ben. Junior software developer with a degree in Criminology. Specializing in HTML, CSS, JavaScript, and learning React, Node.js, Express, GitHub, and Agile methodology.</p>
    </div>
  </section>

  <section class="section section3">
    <div class="section-content">
      <h2>Projects</h2>
      <p>Project section placeholder.</p>
    </div>
  </section>

  <section class="section section4">
    <div class="section-content">
      <h2>Contact</h2>
      <p>Email, GitHub, LinkedIn placeholders.</p>
    </div>
  </section>
`