<template>
    <v-row class="px-4">
      <v-col>

        <v-row class="pt-6 notPrintable">
          <h2 class="text-primary">REDES SOCIALES</h2> 
        </v-row>        
      
        <v-row class="notPrintable">
          <v-col class="px-0" v-for="data in userSocial" :key="data.name">
            <a :href="'http://' + data.link">
              <v-icon color="primary" :icon="data.icon" class="icons"></v-icon>
            </a>
          </v-col>          
        </v-row> 

      </v-col>
    </v-row> 

</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';

export default {
  name: "userSocial",
  data(){
    const store = useStore();
    const userData = computed(() => store.getters['getData']);

    const iconSize=ref('medium');
    const userSocial = computed(()=> userData.value.userSocial);
    return {
      iconSize,
      userSocial,
    }
  }
};

</script>

<style lang="scss" scoped>
  p{
    text-align: left !important;
  }
  @import "@/css/variables.scss";
</style>