Vue.component("footer-component", {
  template: `
  <div class="container-fluid bg-dark text-white py-1" id="footer">
    <div class="container">
      <h3 class="py-2">Connect with us</h3>
      <ul class="list-inline">
        <li class="list-inline-item pb-3">
            <a target="_blank" href="https://github.com/pclubiiti">
                <i class="fab fa-github"></i>
                <p class="pl-2">view our work</p>
            </a>
        </li>
        <li class="list-inline-item pb-3">
            <a target="_blank" href="https://www.facebook.com/pclubiiti/">
                <i class="fab fa-facebook"></i>
                <p class="pl-2">follow us on facebook</p>
            </a>
        </li>
        <li class="list-inline-item pb-3">
            <a target="_blank" href="mailto:progclubiiti@iiti.ac.in">
                <i class="far fa-envelope"></i>
                <p class="pl-2">mail us</p>
            </a>
        </li>
      </ul>
    </div>
  </div>
  `
});

new Vue ({
  el: "#foot",
});
