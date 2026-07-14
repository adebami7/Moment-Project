<template>
  <v-app style="height: 528px; padding: 2px;">
    <v-main style="width: 800px;">
      <v-card class="mx-auto" max-width="344" title="Register as a Writer/Reader" style="text-align: center; padding: 5px 0 20px 0;">
        <v-container style="height: 72.5vh; padding: 0 15px 0px 15px;">
          <v-form @submit.prevent="register">
            <div class="first">
              <v-text-field v-model="first" color="primary" density="compact" label="First name" variant="outlined"></v-text-field>
              <v-text-field v-model="last" color="primary" density="compact" label="Last name" variant="outlined" style="margin-left: 20px;"></v-text-field>
            </div>

            <div class="sec">
              <v-combobox
                label="Combobox"
                v-model="select"
                :items="items"
                variant="outlined"
                density="compact"
              ></v-combobox>
              <v-text-field v-model="email" color="primary" density="compact" label="Email" variant="outlined"></v-text-field>
              <v-text-field
                v-model="password"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter your password"
                variant="outlined"
                @click:append-inner="visible = !visible"
              ></v-text-field>
              <v-text-field
                v-model="confirmPassword"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Confirm password"
                variant="outlined"
                @click:append-inner="visible = !visible"
              ></v-text-field>
            </div>

            <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions" style="margin-bottom: 0px; padding: 0px;"></v-checkbox>

            <v-btn type="submit" density="compact" block class="mb-8 custom-button" size="large" variant="tonal" style="margin-top: 0px;">
              Create Account
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-main>

    <v-dialog v-model="showConfirmationModal" width="400px">
      <v-card>
        <v-card-title class="headline" style="text-align: center; padding-top: 20px;">Enter Confirmation Code</v-card-title>
        <v-card-text style="text-align: center;">
          <p style="font-size: 14px;">We emailed you a code, please input the code for account verification</p>
          <div class="confirmation-code-input" style="margin: 0 0 0 -30px;">
      <input
      v-for="(code, index) in confirmationCode"
  :key="index"
  v-model="confirmationCode[index]"
  :class="{ active: index === activeInputIndex }"
  style="border: black solid; border-radius: 5px; width: 60px; text-align: center;"
  type="text"
  maxlength="1"
  required
  @keydown="handleArrowKeys"
>
    </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple" @click="confirmCode">Confirm</v-btn>
          <v-btn color="deep-purple" @click="closeConfirmationModal">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script lang="ts">
// import router from '@/router';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase'
import { useCounterStore } from "../stores/counter";



export default {
  setup() {
    const router = useRouter();
    const stores = useCounterStore();
    const first = ref('');
    const last = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const select = ref('');
    const items = ref(['Writer', 'Reader']);
    const visible = ref(false);
    const terms = ref(false);
    const showConfirmationModal = ref(false);
    const activeInputIndex = ref(0);
    const confirmationCode = ref(['', '', '', '']);
    

    const handleArrowKeys = (event: KeyboardEvent) => {
      const { key } = event;
      
      if (key === 'ArrowLeft' && activeInputIndex.value > 0) {
        activeInputIndex.value--;
      } else if (key === 'ArrowRight' && activeInputIndex.value < confirmationCode.value.length - 1) {
        activeInputIndex.value++;
      }
    };

const registeration = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    
    stores.signUser = userCredential.user.uid;
    console.log("Success:", userCredential.user);
    router.push('/blog');
  } catch (error: any) {
    console.log("Firebase Error:", error.code);
    throw error; // This tells confirmCode that something went wrong
  }
};

    const confirmCode = async () => {
  // 1. Check the code first
  if (confirmationCode.value.join('') === '5965') {
    // 1. Close the modal IMMEDIATELY
    showConfirmationModal.value = false;
    
    // 2. Call the Firebase function directly here
    try {
      await registeration(); // This now calls your Firebase function
      alert('Account created successfully!');
    } catch (error) {
      console.log("Error in confirmation:", error);
    }
  } else {
    alert('Invalid confirmation code. Use 5965');
  }
};

    // const registeration = async() => {
    // createUserWithEmailAndPassword(auth, email.value, password.value)
    // .then((userCredential) => {
    // // Signed in 
    // const user = userCredential.user;
    // setTimeout(() => {
    //       router.push('/blog')
    //     }, 1000);
    // // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorCode)
    //   // ..
    // });

    
    // }

    onMounted(() => {
      window.addEventListener('keydown', handleArrowKeys);
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', handleArrowKeys);
    });

    // const confirmCode = () => {
    //   // Perform confirmation code validation
    //   if (confirmationCode.value.join('') === '5965') {
    //     closeConfirmationModal();
    //     setTimeout(() => {
    //       alert('Confirmation successful!');
    //       registeration()
    //     }, 0);
    //     // Additional code for further processing (e.g., redirecting to a new page)
    //   } else {
    //     alert('Invalid confirmation code. Confirmation code is 5965');
    //   }
    // };



    const closeConfirmationModal = () => {
      // Close confirmation code modal
      showConfirmationModal.value = false;
    };

    const register = () => {
      // Perform form validation
      if (!first.value || !last.value || !email.value || !select.value || !password.value || !confirmPassword.value) {
        alert('Please fill in all the fields.');
        return;
      }

      // Perform password validation
      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match.');
        return;
      }
      // Show confirmation code modal
      showConfirmationModal.value = true;
    };

    return {
      first,
      last,
      email,
      password,
      confirmPassword,
      select,
      items,
      visible,
      terms,
      showConfirmationModal,
      activeInputIndex,
      confirmationCode,
      register,
      confirmCode,
      closeConfirmationModal,
      handleArrowKeys
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}

.first {
  display: flex;
  width: 310px;
  margin: 0 0 2px 0;
}

.confirmation-code-input {
  display: flex;
  padding-left: 30px;
  justify-content: space-around;
  margin-top: 10px;
}

.confirmation-code-input input.active {
  border-color: #222B4C;
}

.custom-button {
  background-color: #222B4C;
  color: white;
}

</style>
