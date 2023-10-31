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
        },
        addTask(){
            this.lastId++;
            const newTask = {
                id: this.lastId,
                text: this.todoText,
                done: false
            }
            this.tasks.unshift(newTask);
            this.todoText = '';
        },
        markAsDone(index){
            this.tasks[index].done = !this.tasks[index].done

        },
    },
}).mount('#app');