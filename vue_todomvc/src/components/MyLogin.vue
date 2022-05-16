<template>
  <div class="login-contain">
    <div class="login-box">
      <!-- 登录表单区域 -->
      <el-form
        label-width="0px"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        ref="loginFormRef"
      >
        <el-form-item>
          <h1 class="title">todos</h1>
        </el-form-item>
        <!-- 账号 -->
        <el-form-item prop="user">
          <el-input
            v-model="loginForm.user"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            prefix-icon="el-icon-loading"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="loginFormSub">登录</el-button>
          <el-button type="info" @click="loginFormReset">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="zhuce" @click="register">-- 没有账号？点此注册！ --</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLogin",
  data() {
    return {
      loginForm: {
        user: "",
        password: "",
      },
      loginRules: {
        user: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    loginFormReset() {
      this.$refs.loginFormRef.resetFields();
    },
    loginFormSub() {
      this.$refs.loginFormRef.validate(async (valid) => {
        console.log(valid);
        if (!valid) return this.$message.error("用户名或者密码格式错误");
        let res = await this.$loginReq("/login", this.loginForm);
        if (!res.data) return this.$message.error("用户名或者密码输入错误");
        this.$router.push({
          path: "/mytodo",
        });
        console.log(res);
      });
    },
    register() {
      this.$router.replace({
        path: "/register",
      });
    },
    // 是否已经登陆过，免登录
    async judgIsLogin() {
      let res = await this.$loginReq("/judglogin", {});
      if (!res.data) return 
      this.$message.success("welcome")
      this.$router.push({
        path: "/mytodo",
      });
    },
  },
  created() {
    this.judgIsLogin()
  },
};
</script>

<style scoped>
.login-contain {
  height: 100%;
  background-color: #2b4b6b;
}

.login-box {
  position: relative;
  left: 50%;
  top: 50%;
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  transform: translate(-50%, -50%);
}

.title {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  margin-top: 50px;
}

.login-form {
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.btn {
  display: flex;
  justify-content: flex-end;
}

.zhuce {
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  width: 200px;
  height: 20px;
}
</style>