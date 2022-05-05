<template>
  <div v-if="currentUser">
    <router-link to="/"
      ><button class="btn btn-secondary">Back</button></router-link
    >
    <div class="edit-form">
      <h4 class="text-center">Edit User</h4>
      <div class="mt-5">
        <form class="">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="currentUser.name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              v-model="currentUser.email"
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              v-model="currentUser.phone"
            />
          </div>
        </form>
      </div>
      <div class="text-center">
        <button class="btn btn-danger mr-2" @click="deleteUser">Delete</button>
        <button type="submit" class="btn btn-success" @click="updateUser">
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "../common/UserDataService";

export default {
  name: "edit-user",
  data() {
    return {
      currentUser: null,
    };
  },
  methods: {
    getUser(id) {
      UserDataService.get(id)
        .then((response) => {
          this.currentUser = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteUser() {
      UserDataService.delete(this.currentUser.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "users-list" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateUser() {
      UserDataService.update(this.currentUser.id, this.currentUser)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "users-list" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getUser(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
