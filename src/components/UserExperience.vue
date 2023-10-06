<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary">EXPERIENCIA LABORAL</h2> 
    </v-row>
    <div class="experienceContainer">
      <v-row v-for="data in userExperience" :key="data.name" class="pb-1 experience">
        <v-col class="px-0">
          <h4> {{ data.name }} </h4>
          <p style="color: grey;">({{ data.year }})</p>
          <p v-html="data.description"></p>
        </v-col>
      </v-row>
    </div>  
  </div>
</template>

<script>

import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  name: "userExperience",
  data(){
    const store = useStore();
    const userData = computed(() => store.getters['getData']);
    
    const userExperience = computed(() => userData.value.userExperience);
    return {userExperience}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";

  @media print{
    .experience {
      page-break-inside: always;
    }
  
  }
    

</style>