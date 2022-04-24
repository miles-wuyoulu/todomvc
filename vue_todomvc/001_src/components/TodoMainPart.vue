<template>
  <div>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <!-- 头部 -->
      <div slot="header" class="clearfix header">
        <i class="el-icon-arrow-down" id="ione"></i>
        <input
          type="text"
          placeholder="What needs to be done"
          autofocus
          @keyup.enter="addTodo"
        />
      </div>

      <!-- 中间内容 -->
      <router-view :todos="todos" @checkTodo="checkTodo"></router-view>
      <!-- <ul>
        <li v-for="todo in todos" :key="todo.id" ref="todo" class="text" :class="todo.done?'item':''">
          <input type="checkbox" @click="checkTodo(todo.id,$event)"/>
          {{ todo.title }} -->
      <!-- <input type="text" /> -->
      <!-- </li>
      </ul> -->
      <!-- 尾部 -->
      <footer>
        <span>items left</span>
        <ul>
          <!-- <li> <a href="">1234</a> </li> -->
          <li @click="showAll">All</li>
          <li @click="showActive">Active</li>
          <li @click="showCompleted">Completed</li>
        </ul>
        <span>
          <a href=""> Clear completed</a>
        </span>
      </footer>
    </el-card>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "TodoMainPart",
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    //   添加事项
    addTodo(e) {
      let todo = {
        id: nanoid(),
        title: e.target.value,
        done: false,
        isEdit: false,
      };
      this.todos.unshift(todo);
      e.target.value = "";
    },
    // 选中或取消
    checkTodo(id, done) {
      console.log("我被执行了start");
      console.log(this.todos);
      this.todos.forEach((element) => {
        if (element.id === id) element.done = done;
      });
      console.log("我被执行了start");
    },
    // 双击编辑
    editTodo(id, value) {
      this.todos.forEach((element) => {
        if (element.id === id) element.title = value;
      });
    },

    // 删除
    deleteTodo(id) {
      console.log(this.todos.filter((v) => v.id != id));
      this.todos = this.todos.filter((v) => v.id != id);
    },

    showAll() {
      this.$router.push({
        name: "all",
        // params: {
        //   todos: this.todos,
        //   checkTodo: this.checkTodo,
        // },
      });
    },

    showActive() {
      this.$router.push({
        name: "active",
        params: {
          todos: this.todos,
          checkTodo: this.checkTodo,
          editTodo: this.editTodo,
          deleteTodo: this.deleteTodo,
        },
      });
    },

    showCompleted() {
      this.$router.push({
        name: "completed",
        params: {
          todos: this.todos,
        checkTodo: this.checkTodo,
        },
      });
    },
  },

  // mounted() {
  //   this.$router.replace({
  //     name: "all",
  //     params: {
  //       todos: this.todos,
  //       checkTodo: this.checkTodo,
  //     },
  //   });
  // },
};
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

input[type="checkbox"]:checked {
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

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.header {
  font-size: 24px;
}

#ione {
  font-weight: 300;
  color: rgb(230, 230, 230);
}

#itwo {
  font-weight: 300;
  color: rgb(115, 115, 115);
}

.header input {
  outline: none;
  border: none;
  margin-left: 25px;
  font-size: 24px;
}

.header input::placeholder {
  font-style: italic;
  font-weight: 300;
  color: rgb(230, 230, 230);
}

.box-card {
  width: 550px;
}

li input[type="text"] {
  font-size: 24px;
  position: absolute;
  top: 0px;
  left: 65px;
  outline: none;
  border: none;
  height: 65px;
  width: 484px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

/* footer {
    position: relative;
}

footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
} */

footer ul li {
  cursor: default;
}

a {
  text-decoration: none;
  color: inherit;
}

footer ul li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

footer li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}

footer li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}

footer {
  padding: 10px 15px;
  margin-bottom: 16px;
}
footer span:first-child {
  float: left;
}
footer span:last-child {
  float: right;
}
footer ul {
  margin-left: 130px;
  float: left;
}
footer li {
  margin-left: 10px;
  float: left;
  list-style: none;
}
</style>