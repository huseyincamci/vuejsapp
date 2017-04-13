new Vue({
    el: '#vue-app',
    data: {
        name: 'Huseyin',
        job: 'Student',
        website: 'https://www.google.com',
        htmlElement: '<strong>STRONG</strong>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});
