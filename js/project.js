Vue.component('project-component',{
  data: function(){
    return {
      projects : [
        {
          name: 'Project Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          bgImage: 'img/Vue.js_Logo.png'
        },
        {
          name: 'Project Name2',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          bgImage: 'img/Vue.js_Logo.png'
        },
        {
          name: 'Project Name3',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          bgImage: 'img/Vue.js_Logo.png'
        },
        {
          name: 'Project Name4',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          bgImage: 'img/Vue.js_Logo.png'
        }
      ]
  }},
  template: `<div class="row">
    <div class="col-lg-4" v-for="project in projects">
      <div  class="card my-3">
          <img :src="project.bgImage" alt="">
            <div class="card-img-overlay">
                <h4 class="card-header">{{project.name}}</h4>
                <p class="card-body">{{project.description}}</p>
            </div>
        </div>
    </div></div>
  `
});

new Vue({
  el: '#app-project'
});