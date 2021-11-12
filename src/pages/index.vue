<template>
  <div class="login-container">
    <div class="login-box">
      <div class="left">
        <div class="left_bg"></div>
      </div>
      <div class="right">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <div class="title-container">
            <h3 class="title">Admin Login</h3>
          </div>

          <el-form-item prop="email">
            <i class="icon el-icon-user"></i>
            <el-input
              ref="email"
              v-model="loginForm.email"
              placeholder="UserName"
              name="email"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <i class="icon el-icon-lock"></i>
            <el-input
              ref="password"
              :key="passwordType"
              v-model="loginForm.password"
              :type="passwordType"
              @keyup.enter.native="handleLogin"
              placeholder="Password"
              name="password"
              tabindex="2"
              auto-complete="on"
            />
            <span @click="showPwd" class="show-pwd">
              <i
                :class="
                  passwordType === 'password'
                    ? 'el-icon-turn-off'
                    : 'el-icon-open'
                "
                class="icon"
              />
            </span>
          </el-form-item>
          <el-alert
            v-if="hasErr"
            :title="errMsg"
            type="error"
            show-icon
          ></el-alert>
          <el-button
            :loading="loading"
            @click.native.prevent="handleLogin(loginForm)"
            type="success"
            style="width: 100%"
            >Login</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  layout: "empty",
  data() {
    return {
      loginForm: {
        email: "admin@zinete.com",
        password: "11111111",
      },
      hasErr: false,
      errMsg: "",
      loginRules: {
        email: [
          {
            type: "email",
            min: 6,
            trigger: ["blur", "change"],
          },
        ],
        password: [{ required: true, min: 8, trigger: "blur" }],
      },
      loading: false,
      passwordType: "password",
    };
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin(loginForm) {
      this.loading = true;
      try {
        this.$refs.loginForm.validate((valid) => {
          if (!valid) {
            this.loading = false;
            return false;
          } else {
            this.$store.dispatch("auth/login", this.loginForm).catch((err) => {
              this.hasErr = true;
              this.errMsg = err.message;
              this.loading = false;
            });
          }
        });
      } catch (err) {
        throw err;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$bg: linear-gradient(rgba(19, 80, 201, 0.747) 20%, rgba(19, 61, 185, 0%) 80%);

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

$dark_gray: #889aa4;
.login-container {
  display: flex;
  height: 100vh;
  width: 100%;

  flex-shrink: 0;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  /* animation: gradientBG 8s ease infinite; */

  flex-direction: row;
  .login-box {
    flex: 1;
    /* margin: 5% 10%; */
    box-shadow: 0px 2px 10px 0px $dark_gray;
    display: flex;
    justify-content: center;
    flex-direction: row;
    background: $dark_gray;
    .left {
      background: #fff;
      flex: 1;
      .left_bg {
        width: 100%;
        height: 100%;
        background: url("../../src/assets/images/undraw_Tree_swing_re_pqee.png")
          center center no-repeat;
        background-size: contain;
      }
    }
    .right {
      background: $bg;
      flex: 1;
      display: flex;
      flex-direction: row;
      /* width: 100%; */
      justify-content: center;
      align-items: center;
      .title {
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }
      .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        overflow: hidden;
      }
      .icon {
        padding: 6px 5px 6px 15px;
        color: #fff;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
      }
      .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
        input {
          background: transparent;
          border: 0px;
          -webkit-appearance: none;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: #fff;
          height: 47px;
          caret-color: #fff;
          &:-webkit-autofill {
            box-shadow: 0 0 0px 1000px #ffae00 inset !important;
            -webkit-text-fill-color: #fff !important;
          }
        }
      }
    }
  }
}
</style>
