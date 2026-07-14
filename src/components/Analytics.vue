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
        <div class="log" @click="logout"><v-btn style="background-color: #222B4C; color: white; border-radius: 2px;" dark
            block>
            Log Out
          </v-btn></div>
      </template>
    </v-navigation-drawer>

    <v-app-bar>
      <v-spacer></v-spacer>
      <!-- <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      density="compact"
      label="Search Moment"
      single-line
      hide-details
    ></v-text-field> -->

      <v-list-item style="margin: 0 10px 0 0; padding: 0 1px 0 10px; width: 24px;"
        prepend-icon="mdi-bell-outline"></v-list-item>


      <v-list-item style="margin: 0 1px 0 0; padding: 0 5px 0 5px;"
        prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"></v-list-item>
    </v-app-bar>

    <v-main class="main " style="min-height: 300px; padding: 110px 0 0 310px;">
      <div>
        <h3 style="padding: 0 0 10px 0;">Post analytics</h3>
        <h3 style="display: flex; border-bottom: 3px solid #222B4C; padding-bottom: 5px;width: 900px;"> May 2023,
          <p style="font-size: 15px;padding: 12px 0 0 2px;">25days so far</p>
        </h3>
        <p><b>Post highlights</b></p>
        <h4 style="display: flex;"> Top posts
          <p style="font-size: 10px;padding: 11px 0 0 4px;">earned 2980 impressions</p>
        </h4>
        <div class="post">
          <div class="post-header">
            <h2 class="post-title" style="font-size: 20px;"> Ademide Oye
              <p class="post-meta" style="font-size: 10px; margin-top: 8px;">Front-End Software Engineer June 1, 2023</p>
            </h2>
          </div>
          <h3 class="post-subtitle">Starting out as a Front-End Software Engineer</h3>
          <div style="display: flex; margin: 0px; padding: 0px; ">
            <v-list-item prepend-icon="mdi-book-open-variant" style="width: 20px; padding: 0 0 20px 0px;"></v-list-item>
            <p class="post-time" style="margin-bottom: 0px;padding: 5px 0 0 10px; font-size: 10px;">2 mins read</p>
          </div>
          <p class="post-content" style="font-size: 10px;">Embarking on a journey as a Front-End Software Engineer can be
            an exhilarating and fulfilling experience.
            <br> As a profession that bridges the realms of art, technology, and problem-solving, software design
            <br>offers an opportunity to shape the way people interact with the world around them.
          </p>
        </div>
      </div>

      <div class="get"><router-link to="/feed"><v-btn class="my-small-button" dark>
            View post activity
          </v-btn></router-link>
      </div>
      <div style="padding: 0 0 30px 0;">
        <h3 style="margin: 20px 0 10px 0; font-size: 17px;">Posts summary</h3>
        <p style="display: flex; font-size: 12px; border-bottom: 3px solid #222B4C; padding-bottom: 5px;width: 900px;">
          May 2023 summary</p>

        <p style="display: flex; font-size: 12px; margin: 0; padding: 0px 0 0 4px;"> Posts
        <p style="font-size: 12px; margin: 0; padding: 0px 0 0 84px;">Posts impressions</p>
        </p>
        <p style="display: flex; font-size: 12px; margin: 0; padding: 11px 0 0 12px;"> <b>3</b>
        <p style="font-size: 12px; margin: 0; padding: 0px 0 0 108px;"><b>2.98k views</b></p>
        </p>
        <p style="display: flex; font-size: 12px; margin: 20px 0 0 0; padding: 0px 0 0 4px;"> Profile Visits
        <p style="font-size: 12px; margin: 0; padding: 0px 0 0 52px;">New followers</p>
        </p>
        <p style="display: flex; font-size: 12px; margin: 0; padding: 5px 0 0 20px;"> <b>300</b>
        <p style="font-size: 12px; margin: 0; padding: 0px 0 0 100px;"><b>300</b></p>
        </p>
      </div>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signOut } from "firebase/auth";
import { db, auth } from '../firebase/firebase'
import router from '@/router';
import pinia from "../stores/store";
import { useCounterStore } from "../stores/counter";


const stores = useCounterStore(pinia);

const route = useRouter
export default defineComponent({
  data() {

    return {
      search: '',
    };
  },

  methods: {
    async logout() {
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
}

});
</script>

<style scoped>
.post-header {
  display: flex;
}

.my-small-button {
  font-size: 9px;
  padding: 4px 8px;
  background-color: #222B4C;
  color: white;
}

.v-btn-link {
  text-decoration: none;

}
</style>