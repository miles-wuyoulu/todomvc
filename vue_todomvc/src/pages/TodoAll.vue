<template>
  <ul>
    <li
      v-for="todo in $store.state.todos"
      :key="todo.id"
      class="text"
      :class="todo.done ? 'item' : ''"
    >
      <!-- 列表左侧选中 -->
      <input
        type="checkbox"
        @click="handleCheck(todo.id, $event)"
        :checked="todo.done"
        :class="todo.done ? 'IsChecked' : ''"
      />
      <!-- 列表内容 -->
      <span @dblclick="handleEdit(todo)">{{ todo.title }}</span>
      <!-- 双击编辑 -->
      <input
        v-show="todo.isEdit"
        :value="todo.title"
        type="text"
        @blur="handleBlur(todo, $event)"
      />
      <!-- 取消勾选 -->
      <span @click="handleDelete(todo)" class="err"></span>
    </li>
  </ul>
</template>

<script>
import { commonMethods } from "../common/mixin.js";
export default {
  name: "TodoAll",
  // props: ["todos", "checkTodo", "editTodo", "deleteTodo"],
  mixins: [commonMethods],
};
</script>

<style scoped>
@import "../common/TodoCommonStyle.css";
</style>