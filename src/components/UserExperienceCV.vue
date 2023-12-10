<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary pb-4">EXPERIENCIA LABORAL</h2> 
    </v-row>
    <div class="experienceContainer">
      <v-row id="arrowExperienceContainer" v-for="data in userExperience" :key="data.name" class="pb-1 experience">
        
        <v-col class="px-0 pt-3" style="max-width: 30px;">
          <v-icon class='arrowExperience' icon="fa-solid fa-chevron-right" size="small" cols="1"/>
        </v-col>

        <v-col class="textExperience px-0" cols="11">
          <h4> {{ data.name }} </h4>
          <p style="color: grey;">({{ data.year }})</p>
          <p v-html="data.description"></p>
        </v-col>

      </v-row>
    </div>  
  </div>
</template>

<script>

import { computed, onMounted } from "vue";
import { useStore } from 'vuex';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "userExperience",
  data(){
    const store = useStore();
    const userData = computed(() => store.getters['getData']);
    const userExperience = computed(() => userData.value.userExperience);

    return {
      userExperience,
      ScrollTrigger
    }
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";

  .arrowExperience{
    font-size: 12pt;
    color: black;
  }

  @media print{
    .experience {
      page-break-inside: always;
    }
  
  }
    

</style>