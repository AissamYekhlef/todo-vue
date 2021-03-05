<template>
      <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth register-bg-1 theme-one">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <h2 class="text-center mb-4">Register</h2>
              <div class="auto-form-wrapper">
                <form @submit.prevent="registerUser">
                  <div class="form-group">
                    <div class="input-group">
                      <input  v-model="form.name" type="text" class="form-control" placeholder="Name">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="form.email" type="text" class="form-control" placeholder="Email">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input v-model="form.password" type="password" class="form-control" placeholder="Password">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="mdi mdi-check-circle-outline"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group d-flex justify-content-center">
                    <div class="form-check form-check-flat mt-0">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" checked> I agree to the terms </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary submit-btn btn-block">Register</button>
                  </div>
                  <div class="text-block text-center my-3">
                    <span class="text-small font-weight-semibold">Already have and account ?</span>
                    <a href="/login" class="text-black text-small">Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
</template>

<script>
import { mapActions } from "vuex";

const registerForm = {
  name: "",
  email: "",
  password: ""
};
export default {
  data: () => ({
    form: Object.assign({}, registerForm),
    loading: false,
    error: null
  }),
  methods: {
    registerUser() {
      if(this.form.name.trim() === '' || this.form.email.trim() === '' || this.form.password.trim() === ''){
        alert('Name, Email & Password Are Required !');
      }else {
        this.loading = true;
        this.register(this.form)
          .then(() => {
            this.loading = false;
            this.form = Object.assign({}, registerForm);
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
      }
     
    },
    ...mapActions("auth", ["register"])
  }
}
</script>

<style>

</style>