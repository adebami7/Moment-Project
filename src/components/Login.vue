<template>
    <div class="log" style="height: 86.5vh;">
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
      <h1 style="font-size: 20px; padding-bottom: 10px; text-align: center;">Welcome Back</h1>
        <div class="text-subtitle-1 text-medium-emphasis">Email Address</div>
  
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="email"
        ></v-text-field>
  
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
  
          <!-- <a
            class="text-caption text-decoration-none text-indigo-darken-2"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a> -->
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          v-model="password"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          <!-- <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
          </v-card-text> -->
        </v-card>

        <v-btn 
        style="background-color: #222B4C; color: white;" 
        dark block @click="signin">
        Log In
        </v-btn>
      
  
        <v-card-text class="text-center">
          <a
            class="text-indigo-darken-2 text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
  </template>

<script lang="ts" >
import { defineComponent, ref } from 'vue';
// import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {db, auth} from '../firebase/firebase'
import router from '@/router';
// import pinia from "../stores/store";
import {useCounterStore} from "../stores/counter";


// const stores = useCounterStore(pinia);
// const route = useRouter();

export default defineComponent({
  data() {
      return {
      email : '',
      password : '',
      visible: false,
    };
  },

  methods: {
  async signin() {
    // Initialize store INSIDE the method
    const stores = useCounterStore(); 
    
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        stores.signUser = userCredential.user.uid;
        setTimeout(() => {
          router.push('/blog');
        }, 1000);
      })
      .catch((error) => {
        console.error("Login Error:", error.code);
      });
  }
}
//   methods: {
//     async signin (){
//       signInWithEmailAndPassword(auth, this.email,this.password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         stores.signUser = userCredential.user.uid
        
//         setTimeout(() => {

//           router.push('/blog')
//         }, 1000);
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode)
//         console.log(this.email)
//         console.log(stores.signUser)
//       });
//     }
//   }
})


</script>

<style scoped>
.log{
    width: 800px;
}
.mx-auto{
   padding: 20PX;
} 
.pa-12{
    padding: 5px;
}
.v-btn-link{
  text-decoration: none;
  size: large;
}
</style>










