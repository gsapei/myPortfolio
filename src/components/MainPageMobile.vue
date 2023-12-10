<template>
  <v-container>
    <v-col>
      
      <v-card-actions class="notPrintable">
        <v-spacer></v-spacer>
        <v-btn class="actionButton pr-3" size="small" variant="plain" icon="fa-solid fa-language" @click="changeLanguage()"></v-btn>
      </v-card-actions>
      
      <v-row> 
        <v-col> 
          <userHeader/> 
        </v-col> 
      </v-row>
      
      <v-row class="pb-6"> 
        <v-col> 
          <userDescription/> 
        </v-col> 
      </v-row>
      
      <v-row class="pb-6"> 
        <v-col> 
          <userEducation/> 
        </v-col> 
      </v-row> 

      <v-row class="pb-6">
        
        <v-col cols="6"> 
          <userContact/> 
        </v-col> 
          
        <v-col cols="6"> 
          <userSocial/> 
        </v-col> 

      </v-row>

      <v-row class="pb-6" > <v-col> <userLanguages/> </v-col> </v-row> 
      <v-row class="pb-6" > <v-col> <userSkills/> </v-col> </v-row>
      <v-row class="pb-6" > <v-col> <userExperience/> </v-col> </v-row>
      <v-row class="pb-6" > <v-col> <userProjects/> </v-col> </v-row>
    </v-col>
  </v-container>

</template> 


<script>
import { computed } from "vue"
import { useStore } from 'vuex';
import { data } from '../data'

// COMPONENTS:
import userHeader from '@/components/UserHeader.vue';
import userSkills from '@/components/UserSkills.vue';
import userLanguages from '@/components/UserLanguages.vue';
import userExperience from '@/components/UserExperience.vue';
import userContact from '@/components/UserContact.vue';
import userSocial from '@/components/UserSocial.vue';
import userEducation from '@/components/UserEducation.vue';
import userDescription from '@/components/UserDescription.vue';
import userProjects from '@/components/UserProjects.vue';

export default {
  name: "MainPageMobile",
  setup() {

    const store = useStore();
    store.dispatch('setData',data);

    const templateLanguage = computed(() => store.getters['getTemplateLanguage']);
    
    const changeLanguage = () => {
      //Hardcoding :S
      if(templateLanguage.value === 'spanish') { store.dispatch('setTemplateLanguage','english'); }
      else { store.dispatch('setTemplateLanguage','spanish'); }
    }

    return {
      changeLanguage
    }
  },
  components: {
    userHeader,
    userSkills,
    userLanguages,
    userExperience,
    userContact,
    userSocial,
    userEducation,
    userDescription,
    userProjects,
  }
}

</script>