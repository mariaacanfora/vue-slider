
Vue.config.devtools = true;

new Vue({
    el: '#root',
    data: {
        items: [
            {
                image: "img/01.jpg",
                title: "Svezia",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
            },

            {
                image: "img/02.jpg",
                title: "Svizzera",
                text: "Lorem ipsum"
            },

            {
                image: "img/03.jpg",
                title: "Gran Bretagna",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            },

            {
                image: "img/04.jpg",
                title: "Germania",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            },

            {
                image: "img/05.jpg",
                title: "Paradise",
                text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
            },
        ],

        currentImg: 0,

    },

    methods:{
        onClickUp(){
            
            if (this.currentImg <= 0){
                this.currentImg = this.items.length - 1
            } else{
                this.currentImg--;
            }


        },

        onClickDown(){          

            if (this.currentImg >= this.items.length - 1){
                this.currentImg = 0
            } else{
                this.currentImg++;
            }
        },
        
    },

    mounted(){
        let autoplay = setInterval(() => {
            this.onClickDown()
        }, 3000);
    },
    
});
