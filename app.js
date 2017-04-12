new Vue({
    el: '#vue-app',
    data: {
        name: 'Huseyin',
        job: 'Student'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }
});
