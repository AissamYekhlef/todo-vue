<template>
  <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth auth-bg-1 theme-one">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auto-form-wrapper">
                <form @submit.prevent="loginUser" >
                  <div class="form-group">
                    <label class="label">Username OR Email</label>
                    <div class="input-group">
                      <input v-model="form.email" type="text" class="form-control" placeholder="Username OR Email">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="label">Password</label>
                    <div class="input-group">
                      <input v-model="form.password" type="password" class="form-control" placeholder="*********">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <button @click="loginUser" class="btn btn-primary submit-btn btn-block">Login</button>
                  </div>
                  <div class="form-group d-flex justify-content-between">
                    <div class="form-check form-check-flat mt-0">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" checked> Keep me signed in </label>
                    </div>
                    <a href="#" class="text-small forgot-password text-black">Forgot Password</a>
                  </div>
                  <!-- <div class="form-group">
                    <button class="btn btn-block g-login">
                      <img class="mr-3" src="../assets/icon-google.svg" alt="">Log in with Google</button>
                  </div> -->
                  <div class="text-block text-center my-3">
                    <span class="text-small font-weight-semibold">Not a member ?</span>
                    <a href="/register" class="text-black text-small">Create new account</a>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";

const loginForm = {
  email: "",
  password: ""
};

export default {
  data() {
    return {
    valid: false,
    form: Object.assign({}, loginForm),
    lazy: false,
    loading: false,
    error: null
    }
  },
  methods: {
    loginUser() {
      console.log(this.form);
      this.login(this.form)
        .then(() => {
          // this.form = Object.assign({}, loginForm);
          this.$router.push({ name: "Projects" });
        })
        .catch(err => {
          this.loading = false;
          if (err.response) {
            this.error = err.response.data.message;
          } else {
            this.error = "Nework Error.";
          }
        });
    },
    ...mapActions("auth", ["login"])
  }
}
</script>

<style>

</style>