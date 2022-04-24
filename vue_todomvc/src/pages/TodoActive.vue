<template>
  <ul>
    <li
      v-for="todoA in $store.getters.todoAs"
      :key="todoA.id"
      class="text"
      :class="todoA.done ? 'item' : ''"
    >
      <input
        type="checkbox"
        @click="handleCheck(todoA.id, $event)"
        :checked="todoA.done"
        :class="todoA.done ? 'IsChecked' : ''"
      />
      <span @dblclick="handleEdit(todoA)">{{ todoA.title }}</span>
      <input
        v-show="todoA.isEdit"
        :value="todoA.title"
        type="text"
        @blur="handleBlur(todoA, $event)"
      />

      <span @click="handleDelete(todoA)" class="err"></span>
    </li>
  </ul>
</template>

<script>
import { commonMethods } from "../common/mixin.js";
export default {
  name: "TodoActive",
  // props: ["todos", "checkTodo", "editTodo", "deleteTodo"],
  // computed: {
  //   todoAs() {
  //     return this.todos.filter((t) => !t.done);
  //   },
  // },
  mixins: [commonMethods],
};
</script>

<style scoped>
@import "../common/TodoCommonStyle.css";
</style>