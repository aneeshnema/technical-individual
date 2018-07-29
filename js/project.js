Vue.component("project-component", {
  data: function() {
    return {
      projects: [
        {
          image: 'https://pclubiiti.github.io/img/project/game1.png',
          imagealt: 'game1',
          modalhref: '#projectModal1',
          modalhreftitle: 'projectModal1',
          title: 'Infinite Runner',
          content: 'The game is an infinite runner with the main objective of collecting as many bananas as possible. The game uses Unity Engine.',
          github: 'https://github.com/sreevatsank1999/Project_M',
          date: '21st july 2017',
          domain: 'Game Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/web1.svg',
          imagealt: 'web1',
          modalhref: '#projectModal2',
          modalhreftitle: 'projectModal2',
          title: 'Q and A forum',
          content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
          github: 'https://github.com/Mohit-Nathrani/question-answer-site',
          date: '21st july 2017',
          domain: 'Full Stack Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/software1.svg',
          imagealt: 'software1',
          modalhref: '#projectModal3',
          modalhreftitle: 'projectModal3',
          title: 'Rave Media Player',
          content: 'A media player with an intuitive media library management capabilities built on Python and Qt.',
          github: 'https://github.com/kanishkarj/rave',
          date: '21st july 2017',
          domain: 'Software Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/web2.svg',
          imagealt: 'web1',
          modalhref: '#projectModal4',
          modalhreftitle: 'projectModal4',
          title: 'Local Quora',
          content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
          github: 'https://github.com/Harsh860/IITI-SOC',
          date: '21st july 2017',
          domain: 'Full Stack Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/web3.svg',
          imagealt: 'web3',
          modalhref: '#projectModal5',
          modalhreftitle: 'projectModal5',
          title: 'Query',
          content: 'This is a question answer web app like Quora where one can share his/her knowledge/experience in the form of text or pictures. ',
          github: 'https://github.com/kpranav1998/soc-project',
          date: '21st july 2017',
          domain: 'Full Stack Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/software2.svg',
          imagealt: 'Software2',
          modalhref: '#projectModal6',
          modalhreftitle: 'projectModal6',
          title: 'Javafx Media Player',
          content: 'Music player built using JavaFX stylized using CSS sheets. The player can be used to pause/play and reload songs.',
          github: 'https://github.com/eltoro007/MediaPlayer',
          date: '21st july 2017',
          domain: 'Software Development',
        },
        {
          image: 'https://pclubiiti.github.io/img/project/ml1.svg',
          imagealt: 'ml1',
          modalhref: '#projectModal7',
          modalhreftitle: 'projectModal7',
          title: 'Computer learns to play mario.',
          content: 'A machine learning algorithm that successfully learns to play Super Mario 64, after learning from test runs played by us.',
          github: 'https://github.com/Mohit-Nathrani/question-answer-site',
          date: '21st july 2017',
          domain: 'Machine Learning',
        },
      ]
    };
  },
  template: `
    <div class="team row">
      <div class="col-lg-4 d-flex align-items-stretch" v-for="project in projects" :key="project.id">
        <div class="card">
          <div class="profile-container">
            <img class="card-img-top" style="max-height:5em;width:unset;" :src="project.image" alt="">
          </div>
          <div class="card-body">
            <h3 class="card-title">{{project.title}}</h3>
            <p class="card-text mb-2">{{project.content}}</p>
            <a v-bind:href="project.github"><i class="fab fa-github"></i> </a>
          </div>
        </div>
      </div>
    </div>
  `
});

new Vue({
  el: "#app"
});
