const members = [
  {
    id: 1,
    name: "GVS AKHIL",
    description: "Competitive Coding",
    img: "https://avatars0.githubusercontent.com/u/21010250?s=460&v=4",
    year: "Third Year",
    linkGit: "https://github.com/vicennial",
    linkLin: ""
  },
  {
    id: 2,
    name: "ARJUN SRIVASTAVA",
    description: "MACHINE LEARNING",
    img: "https://avatars0.githubusercontent.com/u/9380108?s=460&v=4",
    year: "Third Year",
    linkGit: "https://github.com/arjunbazinga",
    linkLin: ""
  },
  {
    id: 3,
    name: "MOHIT NATHRANI",
    description: "WEB DEVELOPMENT AND COMPETITIVE PROGRAMMING",
    img: "https://avatars2.githubusercontent.com/u/30346159?s=460&v=4",
    contact: "9999999999",
    year: "Third Year",
    linkGit: "https://github.com/Mohit-Nathrani",
    linkLin: ""
  },
  {
    id: 4,
    name: "PRIYANSHU",
    description: "WEB DEVELOPMENT AND COMPETITIVE PROGRAMMING",
    img: "https://avatars1.githubusercontent.com/u/28222108?s=460&v=4",
    year: "Third Year",
    linkGit: "https://github.com/priyanshuvarsh",
    linkLin: ""
  },
  {
    id: 5,
    name: "JOSHI NIRANJAN",
    description: "WEB AND SOFTWARE DEVELOPMENT",
    img: "https://avatars2.githubusercontent.com/u/29325626?s=460&v=4",
    year: "First Year",
    linkGit: "https://github.com/Niranjan-J",
    linkLin: ""
  },
  {
    id: 6,
    name: "DAANISH MAHAJAN",
    description: "COMPETITIVE PROGRAMMING",
    img: "https://avatars0.githubusercontent.com/u/19322630?s=460&v=4",
    year: "First Year",
    linkGit: "https://github.com/FireWithin",
    linkLin: ""
  }
];

const heads = [
  {
    id: 1,
    name: "Kanishkar J",
    description: "Club Head",
    img: "https://avatars2.githubusercontent.com/u/22411349?s=460&v=4",
    contact: "9902847087",
    year: "Third Year",
    linkGit: "https://github.com/kanishkarj/",
    linkLin: ""
  },
  {
    id: 2,
    name: "Kumar Abhinav",
    description: "Club Head",
    img: "https://avatars0.githubusercontent.com/u/10851701",
    contact: "9643295944",
    year: "Third Year",
    linkGit: "https://github.com/Abhinav2812",
    linkLin: ""
  }
];

Vue.component("member-component", {
  template: `
	<div class="col-lg-3">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="member.img" alt="Card image cap">
			</div>
  			<div class="card-body">
    			<h5 class="card-title">{{member.name}}</h5>
				  <p class="card-text">{{member.description}}</p>
				  <p class="card-text mb-2">{{member.year}}</p>
          <a :href="member.linkGit"><i class="fab fa-github"></i> </a>
          <a :href="member.linkLin"><i class="fab fa-linkedin"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    member: Object
  }
});

Vue.component("head-component", {
  template: `
	<div class="col-lg-4">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="head.img" alt="Card image cap">
			</div>
  			<div class="card-body">
	    		<h5 class="card-title">{{head.name}}</h5>
				  <p class="card-text">{{head.description}}</p>
				  <p class="card-text mb-2">{{head.year}}</p>
          <a :href="head.linkGit"><i class="fab fa-github"></i> </a>
          <a :href="head.linkLin"><i class="fab fa-linkedin"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    head: Object
  }
});

new Vue({
  el: "#app",
  data: {
    members,
    heads
  }
});
