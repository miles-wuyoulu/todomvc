<template>
  <ul>
    <li
      v-for="todoC in $store.getters.todoCs"
      :key="todoC.id"
      class="text"
      :class="todoC.done ? 'item' : ''"
    >
      <input
        type="checkbox"
        @click="handleCheck(todoC.id, $event)"
        :checked="todoC.done"
        :class="todoC.done ? 'IsChecked' : ''"
      />
      <span @dblclick="handleEdit(todoC)">{{ todoC.title }}</span>
      <input
        v-show="todoC.isEdit"
        :value="todoC.title"
        type="text"
        @blur="handleBlur(todoC, $event)"
      />

      <span @click="handleDelete(todoC)" class="err"></span>
    </li>
  </ul>
</template>

<script>
import { commonMethods } from "../common/mixin.js";
export default {
  name: "TodoCompleted",
  // props: ["todos", "checkTodo", "editTodo", "deleteTodo"],
  // computed: {
  //   todoCs() {
  //     return this.todos.filter((t) => t.done);
  //   },
  // },
  mixins: [commonMethods],
};
</script>

<style scoped>
@import "../common/TodoCommonStyle.css";
</style>