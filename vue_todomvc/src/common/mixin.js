export const commonMethods = {
    methods: {
        handleCheck(id, e) {
            // this.checkTodo(id,e.target.checked)
            // this.$emit("checkTodo", id, e.target.checked);
            this.$store.commit("CHECKTODO", {id, done:e.target.checked})
        },
        handleEdit(todo) {
            todo.isEdit = true;
        },
        handleBlur(todo, e) {
            todo.isEdit = false;
            // this.$emit('editTodo', todo.id, e.target.value)
            this.$store.commit("EDITTODO", {id:todo.id, value:e.target.value})
            // console.log(e.target.value)
            // this.editTodo(todoA.id,e.target.value)
        },
        handleDelete(todo) {
            // this.$emit('deleteTodo', todo.id)
            this.$store.commit("DELETETODO",todo.id)
            // this.deleteTodo(todoA.id)
        }
    },
}