new Vue({
  el: "#blogposts",
  data: {
    link: ["index.html", "team.html", "projects.html"],
    posts: ['hiii']
  },
  methods: {
    openblog(num) {
      window.open(this.link[num]);
    }
  },
  created: function () {
    console.log("hiii, i'm loaded o/");
    const self = this;
    axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40kanishkarj")
      .then(function (response) {
        // handle success
        self.posts = response.data.items.map((item) => {
          let desc = item.description;
          item.guid = item.guid.split("/")[4];
          item.imageLink = new RegExp('<figure><img alt="" src="(.*)"></figure>', 'g').exec(item.description)[1];
          let title = item.title;
          let tmp = desc.split("</figure>");
          tmp.splice(0, 1);
          let new_desc = tmp.join("");
          console.log(tmp);
          item.description = new_desc;
          return item;
        }).splice(0, 3);
        console.log(response.data.items);
      })
  }
});
