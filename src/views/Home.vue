<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    data() {
        return {
            images: [
                {
                    src: 'https://educatoroid.com/wp-content/uploads/2023/03/Is-College-Hard-1152x768.jpg',
                },
                {
                    src: 'https://c0.wallpaperflare.com/preview/639/306/330/aerial-background-blog-cafe.jpg',
                },
                {
                    src: 'https://cutewallpaper.org/28/computer-coming-to-life-hd-wallpaper/190655694.jpg',
                },
                {
                    src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
                },
            ],

        }
    }
})

</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light " style="height: 50px;">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                <p class="img"><img src="../moment.png" width="150px" height="100px"
                        style="margin: 0px; padding: 15px 0 0 0;" alt="logo"></p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
                    <div class="navbar-nav" style="font-weight: bold; font-size: 20px;">
                        <a class="nav-link" href="/">Home</a>
                        <!-- <a class="nav-link" href="#">About Us</a> -->
                        <a class="nav-link" href="/auth">Blogs</a>
                        <!-- <a class="nav-link" href="#">Contact</a> -->
                        <!-- <a class="nav-link" href="#"><router-link to="/blog" 
                        class="v-btn-link">
                        <v-btn class="x-small-button"
                        style="background-color: #222B4C; color: white;" 
                        dark >
                        Log In
                        </v-btn>
                        </router-link>
                    </a> -->

                    </div>
                </div>
            </div>
        </nav>

        <div class="tell">
                <v-carousel cycle hide-delimiters :show-arrows="false" height="700">
                    <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src" cover hide-delimiters>
                        <div class="well">
                            <h1>
                                Welcome to Moment: A Haven for Text-<br>Based Content
                            </h1>
                            <p id="un">Unleash the Power of Words, Connect with Like-minded Readers <br>and Writers</p>

                        </div>
                        <div class="get"><router-link to="/auth"><v-btn style="background-color: #222B4C; color: white;"
                                    dark>
                                    Get Started
                                </v-btn></router-link>
                        </div>
                    </v-carousel-item>
                </v-carousel>
        </div>

        <div class="about">
            <div>
                <h3>
                    About Moment
                </h3>
                <p class="bot">
                    Moment is a multi-functional platform where authors and readers can have access
                    <br>to their own content. It aims to be a traditional bookworm's heaven and a blog to
                    <br>get access to more text based content. Our vision is to foster an inclusive and
                    <br>vibrant community where diversity is celebrated. We encourage open-
                    <br>mindedness and respect for all individuals, regardless of their backgrounds or
                    <br>beliefs. With moment, you can share your mind anywhere, anytime.
                </p>
            </div>
            <div class="mage">
                <img src="../unsplash_87gLIFoj79c.png" alt="logo">
            </div>
        </div>
        <div class="why">
            <h2>Why you should join Moment</h2>
            <p class="goal">
                Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in
                interactions,
                <br>connecting with like-minded peers, have access to favorite content based on interests and able to
                communicate your great
                <br>ideas with people
            </p>

            <div class="box">
                <div>
                    <img src="../Group1.png" id="pic">
                    <h4>Analytics</h4>
                    <p class="boxes">Analytics to track the number
                        <br>of views, likes and comment
                        <br>and also analyze the
                        <br>performance of your articles
                        <br>over a period of time
                    </p>
                </div>
                <div>
                    <img src="../Group2.png" id="pic">
                    <h4>Social interactions</h4>
                    <p class="boxes">
                        Users on the platform
                        <br>interact with posts they like,
                        <br>comment and engage in of your
                        <br>articles discussions
                    </p>
                </div>
                <div>
                    <img src="../Group3.png" id="pic">
                    <h4>Content creation</h4>
                    <p class="boxes">
                        Write nice and appealing with
                        <br>our in-built markdown, a rich
                        <br>text editor
                    </p>
                </div>
            </div>
        </div>
        <div class="eclipse">
            <img src="../unsplash_ZHvM3XIOHoE.png"
                style="margin-left: 40px; padding: 50px 0 50px 30px; border-radius: 50%;">
            <h2 style="font-size: 15px; padding:100px 0 0 100px;">
                "Moment has become an integral part of my online experience. As a user of this incredible blogging platform,
                I
                <br>have discovered a vibrant community of individuals who are passionate about sharing their ideas and
                engaging
                <br>in thoughtful discussions."
                <p style="padding: 20px 0 0 0 ;">
                    <b>Oloruntoba Oluwaferanmi,</b> Software developer at Apple
                </p>
                <router-link to="/auth">
                    <v-btn style="background-color: #222B4C; color: white;" dark>
                        Join Moment
                    </v-btn>
                </router-link>
            </h2>

        </div>
        <div class="eclipse-3">
            <div><img src="../Maskgroup(2).png" style="margin-left: 110px; padding: 50px 0 30px 30px;"></div>
            <div><img src="../Maskgroup(1).png" style="margin-left: -160px; padding: 300px 0 20px 0px;"></div>
            <div><img src="../Maskgroup.png" style="margin-left: 40px; padding: 165px 0 30px 30px;"></div>

            <h2 style="font-size: 35px; padding:50px 0 0 100px;">
                Write, read and connect
                <br>with great minds on moment
                <p style="padding: 30px 0 0 0 ; font-size: 13px;">
                    Share people your great ideas, and also read write-ups based on your
                    <br>interests. Connect with people of same interests and goals.
                </p>
                <router-link to="/auth">
                    <v-btn style="background-color: #222B4C; color: white;" dark>
                        Get Started
                    </v-btn>
                </router-link>
            </h2>

        </div>

        <!-- <v-app><v-rating></v-rating></v-app> -->
    </div>

    <footer class="bd-footer py-4 py-md-5 mt-5" style="background-color: bisque;">
        <div class="container py-4 py-md-5 px-4 px-md-3">
            <div class="row">
                <div class="col-lg-3 mb-3">
                    <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/"
                        aria-label="Bootstrap">
                        <img src="../moment.png" width="200px" height="100px" class="d-block me-2" />
                        <span class="fs-5"></span>
                    </a>

                </div>
                <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                    <h5>Explore</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="/">Community</a></li>
                        <li class="mb-2"><a href="https://blog.getbootstrap.com/">Trending Blogs</a></li>
                        <li class="mb-2"><a href="https://cottonbureau.com/people/bootstrap">Chatter for teams</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Support</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="/docs/5.2/getting-started/">Support Docs</a></li>
                        <li class="mb-2"><a href="/docs/5.2/examples/starter-template/">Join Slack</a></li>
                        <li class="mb-2"><a href="/docs/5.2/getting-started/vite/">Contact</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Official Blog</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                        <li class="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Engineering
                                Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.navbar-nav {
    margin-left: 200px;
    padding-left: 0px;
    padding-bottom: 0px;
    justify-content: space-around;
}

.nav-link {
    color: #222B4C;
    padding: 5px 0 0 0;
}

.v-btn-link {
    width: 10px;
}

.x-small-button {
    font-size: 10px;
    padding: 2px 4px;
}

.img {
    padding-left: 30px;

}

p .img {
    margin-bottom: 2px;
}

.tell {
    position: relative;
    display: inline-block;
    background-color: black;
    width: 100%;
}

.image {
    display: block;
    opacity: 0.6;
}

/* Style the carousel item images to take the full width of the carousel container */
.v-carousel-item img {
  width: 100%;
  height: auto; /* Maintain the aspect ratio of the images */
}

/* Optional: Adjust the height of the carousel container if needed */
.v-carousel {
  max-height: 500px; /* Set a maximum height for the carousel container */
}
.well {
    position: absolute;
    top: 30%;
    left: 45%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

h1{
    font-size: 38px;
}

.get {
    position: absolute;
    top: 45%;
    left: 23%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 14px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#un {
    font-size: 20px;
}

.about {
    display: flex;
}

h3 {
    padding: 20px;
}

.bot {
    padding: 0 20px;
}

.mage {
    margin-left: 90px;
    padding-top: 20px;
}

.why {
    background-color: #ffff;
    text-align: center;
    padding: 45px 0 30px;
}

.goal {
    font-size: 14px;
    padding: 20px 0 20px 0;
}

.box {
    display: flex;
    margin-left: 100px;
    text-align: justify;
    
}

#pic {
    padding-left: 80px;
}

h4 {
    padding-left: 90px;
}

.boxes {
    padding-left: 90px;

}

.eclipse {
    background-color: bisque;
    display: flex
}

.eclipse-3 {
    background-color: white;
    display: flex
}
</style>