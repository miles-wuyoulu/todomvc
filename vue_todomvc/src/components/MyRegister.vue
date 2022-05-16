<template>
  <div class="login-contain">
    <div class="login-box">
      <!-- 登录表单区域 -->
      <el-form
        label-width="80px"
        :model="regsForm"
        :rules="regsRules"
        class="login-form"
        ref="regsFormRef"
      >
        <el-form-item>
          <h1 class="title">Register</h1>
        </el-form-item>
        <!-- 账号 -->
        <el-form-item label="账号" prop="user">
          <el-input v-model="regsForm.user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="regsForm.password"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn">
          <el-button type="primary" @click="regsFormSub">注册</el-button>
          <el-button type="info" @click="regsFormReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRegister",
  data() {
    return {
      regsForm: {
        user: "",
        password: "",
      },
      regsRules: {
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
    regsFormReset() {
      this.$refs.regsFormRef.resetFields();
    },
    regsFormSub() {
      this.$refs.regsFormRef.validate(async (valid) => {
        console.log(valid);
        if (!valid) return this.$message.error("用户名或者密码格式错误");
        let res = await this.$loginReq("/register", this.regsForm);
        if (!res.data) return this.$message.error("用户名已经存在");
        this.$message.success("注册成功");
        setTimeout(() => {
          this.$router.replace({
            path: "/login",
          });
        }, 3000);

        console.log(res);
      });
    },
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
  font-size: 65px;
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
</style>