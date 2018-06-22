new Vue({
    el: '#iitin',
    data: {
        url: ['img/elyse.png','img/matthew.png','img/molly.png'],
        currentNumber: 0
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