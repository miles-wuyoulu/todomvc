<template>
  <div>
    <el-card class="box-card" :body-style="{ padding: '0px' }">
      <!-- 头部 -->
      <div slot="header" class="clearfix header">
        <i class="el-icon-arrow-down" :class="istyle" @click="allChoose"></i>
        <input
          type="text"
          placeholder="What needs to be done"
          autofocus
          @keyup.enter="addTodo"
        />
      </div>

      <!-- 中间内容 -->
      <router-view></router-view>

      <!-- 尾部 -->
      <footer v-show="$store.getters.todosLength">
        <span>{{ $store.getters.todoLeft }} items left</span>
        <ul>
          <li><router-link to="/">All</router-link></li>
          <li><router-link to="/active">Active</router-link></li>
          <li><router-link to="/completed">Completed</router-link></li>
        </ul>
        <span @click="clearCompTodo"> Clear completed </span>
      </footer>
    </el-card>
  </div>
</template>

<script>


export default {
  name: "TodoMainPart",
  data() {
    return {
      // todos: JSON.parse(localStorage.getItem("todos")) || [],
      //下面是解决头部样式变化的控制
      istyle: {
        ione: true,
        itwo: false,
      },
    };
  },

  // watch: {
    //对象里面的属性肯定会有发生改变得时候，所以这里面要用到深度监视
  //   todos: {
  //     deep: true,
  //     handler(value) {
  //       localStorage.setItem("todos", JSON.stringify(value));
  //     },
  //   },
  // },

  computed: {
    // 全部长度
    // todosLength() {
    //   return this.todos.length;
    // },
    // 未完成列表长度
    // todoLeft() {
    //   return this.todos.filter((v) => !v.done).length;
    // },
  },
  methods: {
    //   添加事项
    addTodo(e) {
       this.$store.commit('ADDTODO',e)
    },
    // 选中或取消
    // checkTodo(id, done) {
    //   console.log("我被执行了start");
    //   console.log(this.todos);
    //   this.todos.forEach((element) => {
    //     if (element.id === id) element.done = done;
    //   });
    //   console.log("我被执行了start");
    // },
    // 双击编辑
    // editTodo(id, value) {
    //   this.todos.forEach((element) => {
    //     if (element.id === id) element.title = value;
    //   });
    // },

    // 删除
    // deleteTodo(id) {
    //   console.log(this.todos.filter((v) => v.id != id));
    //   this.todos = this.todos.filter((v) => v.id != id);
    // },

    // 全部清除
    clearCompTodo() {
      // this.todos = this.todos.filter((v) => !v.done);
      this.$store.commit("CLEARCOMPTODO")
    },
    // 下面代码是控制全选或者全部取消全选，这里面有一些样式控制，
    allChoose() {
        let isAllDone = !this.$store.state.todos.some(e=>!e.done)
          this.istyle.ione = isAllDone;
          this.istyle.itwo = !isAllDone;
          this.$store.commit("CHOOSEALL",isAllDone)
      // if (this.todosLength === this.todos.filter((v) => v.done).length) {
      //   this.istyle.ione = true;
      //   this.istyle.itwo = false;
      //   this.todos.forEach((e) => {
      //     e.done = false;
      //   });
      // } else {
      //   this.istyle.ione = false;
      //   this.istyle.itwo = true;
      //   this.todos.forEach((e) => {
      //     e.done = true;
      //   });
      // }
    },
  },
  mounted(){
    this.$getReq().then(res=>{
      this.$store.state.todos = res
    })
  }
};
</script>

<style scoped>
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

.ione {
  font-weight: 300;
  color: rgb(230, 230, 230);
}

.itwo {
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
  cursor: default;
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