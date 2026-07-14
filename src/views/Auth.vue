
<template>
  <div>
    <v-layout>
      <div class="tell">
        <img class="image" src="../unsplash_9pjBx5uVBlg.png" alt="logo">
        <div class="well">
          <h1>Moment</h1>
          <p id="un">Unleash the Power of Words, Connect with Like-
            minded Readers and Writers
          </p>
        </div>           
      </div>
      
      <div>

        <v-card>
          <v-tabs
            v-model="tab"
            color="indigo-darken-2"
            align-tabs="center"
          >
            <v-tab value="one">Register</v-tab>
            <v-tab value="two">Login</v-tab>
          </v-tabs>

          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <Register />
              </v-window-item>

              <v-window-item value="two">
                <Login />
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </div>
    </v-layout>
  </div>    
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Register from "../components/Register.vue"
import Login from "../components/Login.vue"

  export default defineComponent ({
   components: {Register, Login},
    data () {
      return{
        tab: null,
        dialog:false,
      }

    },
  })
</script>

<style scoped>
img{
  height: 100vh;
  width: 75vh;
}

.tell{
    position: relative;
    display: inline-block;
    background-color: black;
}
.image{
    display: block;
    opacity: 0.7;
}

.well{
    position: absolute;
      top: 50%;
      left: 43%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 30px;
      text-align: center;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
h1{
  font-size: 35px;
}

#un{
    font-size: 15px;
}
</style>