<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary">EDUCACION</h2> 
    </v-row>

    <v-row v-for="data in userEducation" :key="data.name" class="pb-1">
      <v-col class="px-0">
        <h4> {{ data.title }} </h4> 
        <p style="color: gray;"> ({{ data.year }}) </p>         
        <p> {{ data.institute }} </p>            
      </v-col>
    </v-row>  
  </div>
</template>

<script>

import { computed } from "vue";
import { useStore } from 'vuex';

export default {
  name: "userEducation",
  data(){
    const store = useStore();
    const userData = computed(() => store.getters['getData']);

    const userEducation = computed(() => userData.value.userEducation);
    return {userEducation}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>