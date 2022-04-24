import Vue from "vue";
import Vuex from "vuex"
import { postReq } from "../common/myRequest";

Vue.use(Vuex)

import { nanoid } from "nanoid";

const actions = {

}

const mutations = {
    //   添加事项
    ADDTODO(state, e) {
        let todo = {
            id: nanoid(),
            title: e.target.value,
            done: false,
            isEdit: false,
        };
        state.todos.unshift(todo);
        e.target.value = "";

        // 更新后台
        let obj = {
            type:'add',
            todo
        }
        postReq(obj)
        
    },
    // 选中或取消
    CHECKTODO(state, obj) {
        state.todos.forEach((element) => {
            if (element.id === obj.id) {
                element.done = obj.done;
                // 更新后台
                let ob = {
                    type:"check",
                    todo:element
                }
                postReq(ob)
                console.log(obj.done)
                return
            }
        });
    },
    // 双击编辑
    EDITTODO(state, obj) {
        state.todos.forEach((element) => {
            if (element.id === obj.id) {
                element.title = obj.value;
                 // 更新后台
                 let ob = {
                    type:"edit",
                    todo:element
                }
                postReq(ob)
                return
            }
        });
    },
    // 删除
    DELETETODO(state, id) {
        state.todos = state.todos.filter((v) => v.id != id);
        // 更新后台
        let ob = {
            type:"delete",
            todo:id
        }
        postReq(ob)
    },

    // 清除已完成列表
    CLEARCOMPTODO(state) {
        state.todos = state.todos.filter((v) => !v.done);
        // 更新后台
        let ob = {
            type:"clearcomp",
        }
        postReq(ob)
      },

    //全选或取消全选
    CHOOSEALL(state,done){
        state.todos.forEach((e) => {
            e.done = !done;
          });
            // 更新后台
          let ob = {
            type:"chooseall",
            todo:done
        }
        postReq(ob)
    }

}

const state = {
    // todos: JSON.parse(localStorage.getItem('todos')) || [],
    todos:[]
}

const getters = {
    // 全部长度
    todosLength() {
        return state.todos.length;
    },

    // 未完成列表长度
    todoLeft() {
        return state.todos.filter((v) => !v.done).length;
    },

    // 未完成列表
    todoAs() {
        return state.todos.filter((t) => !t.done);
    },

    // 完成列表
    todoCs() {
        return state.todos.filter((t) => t.done);
    },
}

export default new Vuex.Store({
    actions, mutations, state, getters
})