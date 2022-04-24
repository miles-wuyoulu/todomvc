<template>
  <div class="mytodo">

<el-container>
    <transition name="aside">
    <el-aside width="300px" v-show="IsShow"><todo-aside /></el-aside>
    </transition>

  <el-container>
    <el-header>todos</el-header>
    <el-main>
        <todo-main-part/>
    </el-main>
    <el-footer>
        <p>Double-click to edit a todo</p>
        <p>Created by Oscar Godson</p>
        <p>Refactored by Christoph Burgmer</p>
        <p>Part of TodoMVC</p>
    </el-footer>
  </el-container>
</el-container>

  </div>
</template>

<script>
import TodoAside from "./TodoAside.vue";
import TodoMainPart from './TodoMainPart.vue';
export default {
  name: "MyTodo",
  components: { TodoAside, TodoMainPart },
  data() {
      return {
          IsShow :true
      }
  },
  mounted(){
      window.onresize=()=>{
          this.IsShow = document.body.offsetWidth<890?false:true
      }
  }
};
</script>

<style>
* {
    padding: 0;
    margin: 0;
}

body {
  padding: 0;
  margin: 0;
  background-color: rgb(245, 245, 245);
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
}

.aside-enter,.aside-leave-to {
    transform: translateX(-300px);
}

.aside-enter-to,.aside-leave{
    transform: translateX(0);
}

.aside-enter-active,.aside-leave-active {
    transition: 0.5s linear;
}


.el-header,.el-main,.el-footer {
    margin: 0 auto;

}
.el-header {
        font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    margin-top:50px;
}

.el-footer{
    margin: 35px auto 0;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0 1px 0 rgb(255 255 255 / 50%);
    text-align: center;
}

.mytodo  input::-moz-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

.mytodo input::-moz-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}

.mytodo input::input-placeholder {
	font-style: italic;
	font-weight: 300;
	color: #e6e6e6;
}
</style>