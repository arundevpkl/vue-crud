<template>
  <div class="mt-3">
   
    <div class="list row mt-5">
      <div class="col-12 d-flex">
        <div class="col-3">Name:</div>
        <div class="col-3">Email</div>
        <div class="col-3">Phone</div>
        <div class="col-3"></div>
      </div>
      <div
        class="col-12 d-flex p-3 mt-3 rounded shadow-sm bg-light user-card"
        v-for="(user, id) in users"
        :key="id"
      >
        <div class="col-3 align-center">{{ user.name }}</div>
        <div class="col-3 align-center">{{ user.email }}</div>
        <div class="col-3 align-center">{{ user.phone }}</div>
        <div class="col-3 align-center">
          <button class="btn btn-warning">Edit</button>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "../common/UserDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {
      UserDataService.getAll()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
   
    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.user-card {
  align-self: center;
}
.align-center {
  align-self: center;
}
</style>
