<template>
        
        <v-row v-if="screenSize.width>600" class="titleContainer pa-5">
              <h1 class="titleItem pb-0">{{ principalTitle.toUpperCase() }}</h1>
              <h3 class="subtitleItem text-primary pt-0 pl-1">{{ principalSubtitle.toUpperCase() }}</h3>
        </v-row>

        <v-row v-else style="text-align: left; display: grid;" class="pl-4 pb-6">
          <h1 class="titleItem pb-1">{{ principalTitle.toUpperCase() }}</h1>
          <h3 class="subtitleItem text-primary pt-0 pl-0">{{ principalSubtitle.toUpperCase() }}</h3>
        </v-row>
        

</template>

<script>

import { onMounted,ref,computed } from 'vue'
import { useStore } from 'vuex';

export default {
  name: "userHeader",
  data(){

    const store = useStore();
    const userData = computed(() => store.getters['getData']);

    const userPhoto = computed(() => userData.value.userPhoto);
    const principalTitle = computed(() => userData.value.userName);
    const principalSubtitle = computed(() => userData.value.userPosition);
    const screenSize = ref('');
    onMounted(() => {
        screenSize.value=this.$vuetify.display;
    });

    const getImageUrl = (name) => {
      const url = new URL('../assets/images/' + name, import.meta.url).href;
      return url;
    }

    return {
      userPhoto,
      principalTitle,
      principalSubtitle,
      screenSize,
      getImageUrl
    }
  }
};
</script>

<style lang="scss" scoped>

  .titleContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    //border-radius: 10px;
    //background-color: rgba(255,255,255,.2);
    //backdrop-filter: blur(5px);
    //-webkit-backdrop-filter: blur(5px);
  }

  .titleItem{
    line-height: 0.9em;
    // -webkit-text-stroke: 2px;
    // -webkit-text-fill-color: rgba($color: #000000, $alpha: 0.1);
  }

  .subtitleItem{
    line-height: 0.9em;
    // -webkit-text-stroke: 2px;
    // -webkit-text-fill-color: rgba($color: #FFFFFF, $alpha: 0.6);
  }

@import "@/css/variables.scss";
</style>

<script>


</script>