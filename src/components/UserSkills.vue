<template>
  <div class="px-4">

    <v-row>
      <h2 class="text-primary">HABILIDADES / HERRAMIENTAS</h2> 
    </v-row>    

      <v-row v-for="(skillCategory,index) in userSkills" :key="skillCategory" class="pb-4" cols="6">
        <v-col>
          <v-row class="pt-4">
            <h4 class="pb-4">{{skillCategory.category.toUpperCase()}}</h4> 
          </v-row>

          <v-row class="itemSkillContainer">
            <v-col v-for="data in skillCategory.skills" :key="data" class="px-1 itemSkill">
              <v-icon v-if="screenSize.width>600" :icon="data.icon" size="x-large" color="white" />
              <v-icon v-else :icon="data.icon" size="x-large" color="primary" />
              <v-row class="pt-2">
                <v-col>  <p style="text-align: center;"> {{ data.name }}</p> </v-col>
              </v-row>
            </v-col>
          </v-row>

        </v-col>         
      </v-row> 

  </div>
</template>

<script>

import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex';


export default {
  name: "userSkills",
  data(){
    const screenSize = ref('');
    onMounted(() => {
        screenSize.value=this.$vuetify.display;
    });

    const store = useStore();
    const userData = computed(() => store.getters['getData']);

    const userSkills = computed(()=> userData.value.userSkills);
    return {
      userSkills,
      screenSize
    }
  }
};

</script>

<style lang="scss" scoped>

.itemSkillContainer{
//  justify-content: center;
  --gap: 4px;
  gap: var(--gap);
  min-width: 100%;
}
.itemSkill{
  min-width: 100px;
  --box-size: calc((100% / 5) );
  max-width: var(--box-size);
  margin-top: 10px;
  transition: all 90ms;
  cursor: pointer;
  padding-top: 20px;
  text-align: center; 
  border: 1px solid;
  border-radius: 5px;
  border-color: rgba($color: #000000, $alpha: 0.4);
  background: linear-gradient(
                rgba($color: #FFFFFF, $alpha: 0.1) 5px,
                rgba($color: #FFFFFF, $alpha: 0.0) 5px
                );
  background-color: rgba($color: #FFFFFF, $alpha: 0.1)
}

.itemSkill:hover{
  background-color: rgba($color: #FFFFFF, $alpha: 0.15);
  border-color: rgba($color: #000000, $alpha: 0.7);
  transform: scale(1.12) translate(3px);
  transition: all 90ms;
  margin-left: 4px;
  margin-right: 10px; 
}

  @import "@/css/variables.scss";
</style>