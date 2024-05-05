<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import {useToast} from "vue-toastification";

export default {
  name: "rooms",
  data() {
    return {
      addRoom:{
        nomi: "",
        raqami: 0,
        user_id: 0,
        masul_shaxs: ""
      },
      roomList: []
    }
  },
  methods: {
    async getRooms() {
      try {
        const result = await axios.get('honalar?token=6c54440c5ac158dbdac78f028cbb4aca', );
        if (result.status === 200) {
          console.log(result.data.data)
          this.roomList = result.data.data
        }
      }catch (e) {
        console.error(e.message)
      }
    },
    async createRoom() {
      try {
        const result = await axios.post('honalar');
        if (result.status === 200) {
          this.createRoomToast();
        }
      } catch (e) {
        this.errorToast();
        console.error(e.message)
      }

    },
    createRoomToast() {
      this.toast.success("Xona muvaffaqiyatli yaratildi", {
        position: "top-right",
        timeout: 1800,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    errorToast() {
      this.toast.error("Xatolik yuz berdi", {
        position: "top-right",
        timeout: 1800,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
  },
  setup() {
    const v$ = useVuelidate();
    const toast = useToast();
    return {v$, toast}
  },
  async mounted() {
  await this.getRooms();
  }
}
</script>

<template>
  <div class="content-wrapper">
    <!-- Content -->

    <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="fw-bold py-3 mb-4"> Xonalar </h4>

      <!-- Basic Bootstrap Table -->
        <!-- Bordered Table -->
        <div class="card">
          <div class="card-header d-flex justify-content-between">
            <h5 class="">Bordered Table</h5>
            <button type="button" class=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#addRoomModal">
              Xona qo'shish  </button>
          </div>
        <!--    add room modal-->

          <!-- Modal -->
          <div class="modal fade" id="addRoomModal" tabindex="-1" aria-labelledby="addRoomModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="addRoomModalLabel">Modal title</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <label> Xona nomi </label>
                  <input v-model="addRoom.nomi" type="number" class="form-control">
                  <label> Xona Raqami </label>
                  <input v-model="addRoom.raqami" type="text" class="form-control">
                  <label> Masul shaxslar </label>
                  <input v-model="addRoom.masul_shaxs" type="text" class="form-control">
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bekor qilish</button>
                  <button type="button" class="btn btn-primary">Saqlash</button>
                </div>
              </div>
            </div>
          </div>
        <!--   add room modal       -->
          <div class="card-body">
            <div class="table-responsive text-nowrap">
              <table class="table table-bordered">
                <thead>
                <tr>
                  <th>Xona nomi</th>
                  <th>Xona raqami</th>
                  <th>Jihozlar soni</th>
                  <th>Tahrirlash</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                  <td>Kampyuter xona </td>
                  <td>
                    103
                  </td>
                  <td>
                    109
                  </td>
                  <td>
                    <button class="badge badge-center bg-warning btn me-3"> <i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="btn badge badge-center bg-danger"> <i class="fa-solid fa-trash"></i></button>
                  </td>
                </tr>



                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!--/ Bordered Table -->


    </div>
    <!-- / Content -->



  </div>
</template>

<style scoped>

</style>