
<template>
  <teleport to="body">
    <div
      ref="modal"
      class="modal fade"
      :class="{ show: active, 'd-block': active }"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              v-on:click="$emit('closeModal')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="submit-form">
              <div>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    required
                    v-model="user.name"
                    name="title"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    class="form-control"
                    id="email"
                    required
                    v-model="user.email"
                    name="email"
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input
                    class="form-control"
                    id="phone"
                    required
                    v-model="user.phone"
                    name="phone"
                  />
                </div>

                <button @click="saveUser" class="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              v-on:click="$emit('closeModal')"
            >
              Close
            </button>
            <button @click="saveUser" class="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
<script>
import UserDataService from "../common/UserDataService";
export default {
  name: "modal-user",
  emits: ["closeModal"],
  props: {
    showModal: Boolean,
  },
  watch: {
    showModal: {
      handler(newVal) {
        this.active = newVal;
        const body = document.querySelector("body");
        this.showModal
          ? body.classList.add("modal-open")
          : body.classList.remove("modal-open");
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      active: this.showModal,
      user: {
        id: null,
        name: "",
        email: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveUser() {
      var data = {
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone
      };

      UserDataService.create(data)
        .then((response) => {
          this.user.id = response.data.id;
          this.refreshList();
          this.$emit("closeModal");
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
    newUser() {
      this.user = {};
    },
    retrieveUsers() {
      UserDataService.getAll()
        .then((response) => {
          this.users = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    mounted() {
      this.retrieveUsers();
    },
  },
};
</script>