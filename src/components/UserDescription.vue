<template>
  <div>
    <v-row>
      <h2 class="px-4 text-primary">INTRODUCCION</h2> 
    </v-row>
    <v-row class="px-4 py-2" style="text-align: justify;">
      <p v-html="userDescription"></p>
    </v-row>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';


export default {
  name: "userDescription",
  setup(){
    const store = useStore();
    const userData = computed(() => store.getters['getData']);
    const userDescription = computed(() => userData.value.userDescription);
    return {userDescription}
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/variables.scss";
</style>