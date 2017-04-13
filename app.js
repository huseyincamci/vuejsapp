new Vue({
    el: '#vue-app',
    data: {
        name: 'Huseyin',
        job: 'Student',
        age: 25,
        website: 'https://www.google.com',
        htmlElement: '<strong>STRONG</strong>',
        x: 0,
        y: 0
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        },
        add: function (year) {
            this.age += year;
        },
        subtract: function (year) {
            this.age -= year;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
