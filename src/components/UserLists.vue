<template>
  <div class="mt-3">
  
    <modal-user
      :showModal="showModalNow"
      @closeModal="closeMyModal"
    ></modal-user>
    <a href="#" class="btn btn-success" @click="toggleModal">now</a>
    <div></div>
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
          <router-link :to="'/users/' + user.id" class="btn btn-warning"
            >Edit</router-link
          >
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "../common/UserDataService";
import AddUser from "../components/AddUser.vue";

export default {
  name: "users-list",
  components: {
    "modal-user": AddUser,
  },
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      title: "",
      showModalNow: false,
    };
  },
  methods: {
    closeMyModal() {
      this.showModalNow = false;
    },
    toggleModal() {
      this.showModalNow = !this.showModalNow;
    },
    retrieveUsers() {
      UserDataService.getAll()
        .then((response) => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },

    setActiveUser(users, id) {
      this.currentUser = users;
      this.currentIndex = users ? id : -1;
    },

    removeAllTutorials() {
      UserDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // searchTitle() {
    //   TutorialDataService.findByTitle(this.title)
    //     .then(response => {
    //       this.tutorials = response.data;
    //       this.setActiveTutorial(null);
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  },
  mounted() {
    this.retrieveUsers();
  },
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
