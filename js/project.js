Vue.component('project-component',{
  data: function(){
    return {
      projects : [
        {
          id : 0,
          name: 'Project Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          bgImage: 'img/Vue.js_Logo.png'
        },
        {
          id : 1,
          name: 'Project Name2',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          bgImage: 'img/Vue.js_Logo.png'
        },
        {
          id : 2,
          name: 'Project Name3',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          bgImage: 'img/Vue.js_Logo.png'
        },
        {
          id : 3,
          name: 'Project Name4',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          bgImage: 'img/Vue.js_Logo.png'
        }
      ],
      colors: ['rgba(109,33,79,0.75)',
        'rgba(24,44,97,0.75)',
        'rgba(39,174,96,0.75)',
        'rgba(22,160,133,0.75)',
        'rgba(249,127,81,0.75)',
        'rgba(192,57,43,0.75)'
        ]
  }},
  template: `<div class="row">
    <div class="col-lg-4" v-for="project in projects" :key="project.id">
      <div  class="card my-3">
          <img :src="project.bgImage" alt="">
            <div class="card-img-overlay" :style="{backgroundColor : colors[project.id%6]}">
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