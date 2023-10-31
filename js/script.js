//todo list
const {createApp} = Vue;

createApp({
    data(){
        return {
            tasks: [
                {   
                    id: 1,
                    text: 'Dormire',
                    done: false
                },
                {
                    id: 2,
                    text: 'Uscire',
                    done: true
                },
                {
                    id: 3,
                    text: 'Giocare',
                    done: true
                },
                {
                    id: 4,
                    text: 'Mangiare',
                    done: false
                }
            ],
                lastId: 4,
                todoText:'',
                filterValue: ''
        }
    },
    methods: {
        removeTask(i){
            this.tasks.splice(i, 1)
        }
    },
}).mount('#app');