<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer class="bg-light" theme="light" >
      <v-list-item>
        <template v-slot:prepend>
          <img src="../moment.png" alt="Comment Image" style="margin: 0px; width: 150px; height: 80px;">
        </template>
      </v-list-item>
      <v-list-item-title style="margin: 0 0 0 40px;">Overview</v-list-item-title>
      <v-list class="over" color="transparent">
        <v-list-item prepend-icon="mdi-post-outline" style="font-size: 15px;">
          <router-link :to="`/feed`" class="v-list-item-content">
            Feeds
          </router-link>
        </v-list-item>
        <v-list-item prepend-icon="mdi-bookmark-multiple-outline" title="Bookmarks"></v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple-outline" title="Team blogs"></v-list-item>
        <v-list-item prepend-icon="mdi-email-open-outline" title="Drafts"></v-list-item>
        <v-list-item prepend-icon="mdi-google-analytics" style="font-size: 15px;">
          <router-link :to="`/analytics`" class="v-list-item-content">
            Analytics
          </router-link>
        </v-list-item>
      </v-list>
      <v-list-item style="padding: 20px 0 0 40px;" title="Trending Tags"></v-list-item>
      <v-list class="over" style="padding-left: 20px;" color="transparent">
        <v-list-item title="Programming"></v-list-item>
        <v-list-item title="Data science"></v-list-item>
        <v-list-item title="Technology"></v-list-item>
        <v-list-item title="Machine learning"></v-list-item>
        <v-list-item title="Politics"></v-list-item>
        <v-list-item style="font-size: 15px;">
          <router-link :to="`/blog`" class="v-list-item-content">
            See All
          </router-link>
        </v-list-item>
      </v-list>
      <v-list-item style="padding: 20px 0 0 40px;" title="Personal"></v-list-item>
      <v-list class="over" color="transparent">
        <v-list-item prepend-icon="mdi-account-outline" title="Account"></v-list-item>
        <v-list-item prepend-icon="mdi-bell-outline" title="Notifications"></v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="log"><router-link to="/" class="v-btn-link"><v-btn
              style="background-color: #222B4C; border-radius: 2px;" dark block>
              Log Out
            </v-btn></router-link></div>

      </template>
    </v-navigation-drawer>

    <v-app-bar>
      <v-spacer></v-spacer>
      <!-- <v-text-field v-model.trim="search" append-icon="mdi-magnify" density="compact" label="Search Moment" single-line
        hide-details></v-text-field> -->
      <v-list-item style="margin: 0 10px 0 0; padding: 0 1px 0 10px; width: 24px;"
        prepend-icon="mdi-bell-outline"></v-list-item>
      <v-list-item style="margin: 0 1px 0 0; padding: 0 5px 0 5px;"
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"></v-list-item>
    </v-app-bar>

    <v-main style="min-height: 300px; margin: 30px 0 0 0;">
      <v-toolbar class="align-center justify-center" style="background-color: white;">

        <v-spacer></v-spacer>
        <v-btn @click="Feeds" :disabled="disablePublish" style=" background-color: #222B4C;">
          Publish
        </v-btn>
        
      </v-toolbar>
      <input v-model="title" type="text" placeholder="Name" style="margin: 0 0 20px 0; padding: 20px 0 20px 10px;">
      <!-- <input v-model="date" type="text" placeholder="Date">
      <input v-model="time" type="text" placeholder="Time"> -->
      <input v-model="subtitle" type="text" placeholder="Sub-title" style="margin: 0 0 20px 0; padding: 20px 0 20px 10px;width: 200px;">
      <textarea v-model="content" placeholder="Write your content here" style="resize: none;"></textarea>
      <input type="file" @change="handleImageUpload" accept="image/*" style="margin-bottom: 16px;">
    </v-main>
  </v-layout>

  <v-card>
    <v-layout>
      <v-navigation-drawer class="bg-light" theme="light" permanent>
        <v-list-item style="padding: 20px 0 0 40px;" title="Overview">
          <img src="../moment.png" alt="Comment Image">
        </v-list-item>
        <v-list class="over" color="transparent">
          <v-list-item prepend-icon="mdi-post-outline" style="font-size: 15px;">
            <router-link :to="`/feed`" class="v-list-item-content">
              Feeds
            </router-link>
          </v-list-item>
          <v-list-item prepend-icon="mdi-bookmark-multiple-outline" title="Bookmarks"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple-outline" title="Team blogs"></v-list-item>
          <v-list-item prepend-icon="mdi-email-open-outline" title="Drafts"></v-list-item>
          <v-list-item prepend-icon="mdi-google-analytics" style="font-size: 15px;">
            <router-link :to="`/analytics`" class="v-list-item-content">
              Analytics
            </router-link>
          </v-list-item>
        </v-list>
        <v-list-item style="padding: 20px 0 0 40px;" title="Trending Tags"></v-list-item>
        <v-list class="over" style="padding-left: 20px;" color="transparent">
          <v-list-item title="Programming"></v-list-item>
          <v-list-item title="Data science"></v-list-item>
          <v-list-item title="Technology"></v-list-item>
          <v-list-item title="Machine learning"></v-list-item>
          <v-list-item title="Politics"></v-list-item>
          <v-list-item style="font-size: 15px;">
            <router-link :to="`/`" class="v-list-item-content">
              See All
            </router-link>
          </v-list-item>
        </v-list>
        <v-list-item style="padding: 20px 0 0 40px;" title="Personal"></v-list-item>
        <v-list class="over" color="transparent">
          <v-list-item prepend-icon="mdi-account-outline" title="Account"></v-list-item>
          <v-list-item prepend-icon="mdi-bell-outline" title="Notifications"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="log"><router-link to="/" class="v-btn-link"><v-btn
                style="background-color: #222B4C; color: white; border-radius: 2px;" dark block>
                Log Out
              </v-btn></router-link></div>
        </template>
      </v-navigation-drawer>
      <v-main style="height: 400px">
      </v-main>
    </v-layout>
  </v-card>
</template>
  
<script lang="ts">
import { useRouter } from 'vue-router';
import { getAuth, signOut } from "firebase/auth";
import { db, auth, storage } from '../firebase/firebase'
import router from '@/router';
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import pinia from "../stores/store";
import { useCounterStore } from "../stores/counter";


const stores = useCounterStore(pinia);

const storage = getStorage();


const route = useRouter
export default {
  data() {
    const logout = async () => {
      signOut(auth).then(() => {
        stores.signUser=''
        // Sign-out successful.
        setTimeout(() => {
          router.push('/')
        }, 1000);
        
      })
        .catch((error) => {
          // An error happened.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode)
        });
    }

    return {
      content: '',
      title: '',
      date: '',
      subtitle: '',
      time: '',
      image: null,
      disablePublish:true,
    };
  },
  methods: {
    async Feeds() {
      try {
        const docRef = await addDoc(collection(db, "blogs"), {
          title: this.title,
          date: new Date().toDateString(),
          subtitle: this.subtitle,
          time: this.time,
          content: this.content,
          commentImage: this.image
        });
        console.log("Document written with ID: ", docRef.id);

        router.push('/feed')
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    },

    async handleImageUpload(event) {
      const file = event.target.files[0];
      const storageRef = ref(storage, file.name);

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot.ref)

        getDownloadURL(ref(storage, file.name))
          .then((url) => {
            this.image = url
            console.log(this.image)
            this.disablePublish=false
          })
          .catch((error) => {
            console.log(error)
          });

      });
    },
    


  publish() {
    // Perform the publishing logic here
    // You can access the content using this.content
    // You can access the uploaded image URL using this.image
    console.log(this.title);
    console.log(this.date);
    console.log(this.subtitle);
    console.log(this.time);
    console.log(this.content);
    console.log(this.image);
    // Clear the form
    this.title = '';
    this.date = '';
    this.subtitle = '';
    this.time = '';
    this.content = '';
    this.image = null;
  }
}
};
</script>
  
<style scoped>
.navbar-nav {
  text-align: center;
}

.body {
  margin: 0 0 0 270px;
  box-sizing: border-box;
  border-radius: 5px;
}

.post {
  margin-bottom: 30px;
}

.post-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.post-content {
  line-height: 1.6;
}

.post-meta {
  font-size: 14px;
  color: #888;
}

.over {
  font-size: 10px;
  margin-left: 30px;
}

.mag {
  align-items: center;
  margin: 10px 0 0 28%;
}

textarea {
  width: 100%;
  height: 200px;
  padding: 8px;
  margin-bottom: 16px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.v-btn-link {
  text-decoration: none;
}
</style>