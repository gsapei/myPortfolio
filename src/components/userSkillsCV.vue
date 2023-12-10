<template>
    <div class="px-4">
      <v-row>
        <h2 class="text-primary">HABILIDADES</h2> 
      </v-row>    
  
      <v-row>
  
        <v-col v-for="(skillCategory,index) in userSkills" :key="skillCategory" class="pb-4" cols="6">
                     
            <v-row class="pt-4">
              <h4 class="pb-4">{{skillCategory.category.toUpperCase()}}</h4> 
            </v-row>
  
            <v-row v-for="data in skillCategory.skills" :key="data" class="pb-2 px-1 dontBreakOnPrint">
                <p>
                  {{data.name.toUpperCase()}}
                </p>
                <!-- <p> <b> {{ data.percent }}%</b> </p> -->
            </v-row>
            
          </v-col> 
  
      </v-row>
  
    </div>
  </template>
  
  <script>
  
  import { computed } from 'vue'
  import { useStore } from 'vuex';
  
  
  export default {
    name: "userSkills",
    data(){
      const store = useStore();
      const userData = computed(() => store.getters['getData']);
  
      const userSkills = computed(()=> userData.value.userSkills);
      return {userSkills}
    }
  };
  
  </script>
  
  <style lang="scss" scoped>
    @import "@/css/variables.scss";
  </style>