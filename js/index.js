new Vue({
    el: '#iitin',
    data: {
        url: ['img/elyse.jpeg','img/matthew.jpg','img/molly.jpg'],
        currentNumber: 0,
        timer: null,
        index: ['0','1','2']
    },

    mounted: function () {
        this.dotrotation();
        this.startRotation();
    },

    methods: {

        dotrotation: function() {
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[this.currentNumber].className += " active";
        },

        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function() {
            this.currentNumber += 1
            if(this.currentNumber==3)
                this.currentNumber=0;
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[this.currentNumber].className += " active";
        },

        prev: function() {
            this.currentNumber -= 1
            if(this.currentNumber<0)
                this.currentNumber=2;
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[this.currentNumber].className += " active";
        },

        dot1: function() {
            this.currentNumber=0
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[this.currentNumber].className += " active";
        },

        dot2: function() {
            this.currentNumber=1
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[this.currentNumber].className += " active";
        },

        dot3: function() {
            this.currentNumber=2
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
            }
            dots[this.currentNumber].className += " active";
        }
    },
});