new Vue({
    el: '#iitin',
    data: {
        url: ['img/elyse.jpeg','img/matthew.jpg','img/molly.jpg'],
        currentNumber: 0,
    },

    mounted: function () {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
        }
    },
});