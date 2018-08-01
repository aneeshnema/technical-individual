Vue.component("event-component", {
  data: function() {
    return {
      events: [
        {
          id: 0,
          image: "/img/home/events/dbz.jpg",
          title: "DIVIDE BY ZERO 6.0",
          about:
            " Our flagship event, a short duration competitive programming contest.",
          cls: "carousel-item active",
          clas:"active"
        },
        {
          id: 1,
          image: "/img/home/events/hackathon.jpg",
          title: "Hackathon",
          about:
            " A social coding event to build a new software under the to-be-announced broad themes. Each team can consist of a maximum of 4 people.",
          cls: "carousel-item"
        },
        {
          id: 2,
          image: "/img/home/events/ctf.jpg",
          title: "Capture The Flag",
          about:
            "A Capture the Flag Competition held by Byte Bandits, IIT Indore’s academic CTF team. The team size for the CTF should be a maximum 4 people.",
          cls: "carousel-item"
        },
        {
          id: 3,
          image: "/img/home/events/fool_you.png",
          title: "Fool You!",
          about:
            "A unique programming contest, in which thinking for the solution might still be easier than understanding the problem !",
          cls: "carousel-item"
        }
      ]
    };
  },
  template: `
 <div id="carouselId" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
        <li v-for="event in events" data-target="#carouselId" :data-slide-to="event.id" :class="event.clas"></li>
    </ol>
    <div class="carousel-inner" role="listbox" id="eventsHere">
      <div :class="event.cls" v-for="event in events" :key=event.id>
        <img class="img-fluid" :src="event.image" alt="First slide" style="width: 100%;">
        <div class="carousel-caption">
          <h3 class="display-3">{{event.title}}</h3>
          <p>{{event.about}}</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
  </div>
  `
});

new Vue({
  el: "#secondary"
});
