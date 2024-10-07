<template>
  <Main />
  <Education />
  <Project />
  <Contacts />
</template>

<script>
import { WOW } from "wowjs";
import "animate.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap's JavaScript is imported

import Contacts from "@/components/Contacts.vue";
import Main from "@/components/Main.vue";
import Education from "@/components/Education.vue";
import Project from "@/components/Project.vue";

export default {
  name: "HomeView",
  components: {
    Contacts,
    Main,
    Education,
    Project,
  },
  mounted() {
    new WOW().init();
  },
};
</script>
