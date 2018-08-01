Vue.component("navbar-component", {
  template: `
  <div>
  <nav class="navbar navbar-expand-sm navbar-light container">
      <a class="navbar-brand text-white" href="index.html">P;CLUB</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item mr-5">
                  <a class="naav" href="index.html">HOME</a>
              </li>
              <li class="nav-item mr-5">
                  <a class="naav" href="projects.html">PROJECTS</a>
              </li>
              <li class="nav-item">
                  <a class="naav" href="team.html">TEAM</a>
              </li>
          </ul>
      </div>
  </nav>
  </div>
  `
});

new Vue ({
  el: "#app"
});