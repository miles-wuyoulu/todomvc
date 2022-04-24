<template>
  <ul>
        <li v-for="todo in todos" :key="todo.id" class="text" :class="todo.done?'item':''">
          <input type="checkbox" @click="handleCheck(todo.id,$event)"  :class="todo.done?'IsChecked':''"/>
          {{ todo.title }}
          <!-- <input type="text" /> -->
        </li>
      </ul>
</template>

<script>
export default {
    name:'TodoAll',
    props:['todos'],
    methods: {
        handleCheck(id,e){
            // this.checkTodo(id,e.target.checked)
            this.$emit('checkTodo',id,e.target.checked)
        }
    },

}
</script>

<style scoped>
input[type="checkbox"] {
  position: absolute;
  top: 15px;
  left: 16px;
  outline: none;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid rgb(230, 230, 230);
  -webkit-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  -ms-appearance: none;
}

.IsChecked {
  background-size: 85%;
  background-repeat: no-repeat;
  background-position: 3px 6px;
  background-image: url(../assets/check.png);
}

.text {
  position: relative;
  padding: 15px 15px 15px 60px;
  font-size: 24px;
  border-bottom: 1px solid #ede;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
}

.item {
    text-decoration: line-through;
    color: rgb(230, 230, 230);
}


</style>