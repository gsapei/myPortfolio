<template>
  <div class="px-4">
    <v-row>
      <h2 class="text-primary">PROYECTOS RECIENTES</h2> 
    </v-row>

    <v-row>
      <v-col class="px-0" id="projectCardContainer">
        <v-card class="text-center projectCard px-6 pb-4 pt-4" v-for="data in userProjects" :key="data.name" elevation="2" @click="openProject(data)">
          
          <v-row>
            <v-col class="justify-center">
              <h4 class="text-primary" style="font-weight: lighter;"> {{ data.name }} </h4>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col class="pa-0">
              <img :src="getImageUrl(data.images[0])" style="width: 100%;" />
            </v-col>
          </v-row>
          
        </v-card>
      </v-col>
      
    </v-row>  
  </div>

  <v-dialog v-model="dialogProject" width="90%" scrollable>
      <ProjectDetail :project="projectName"/>
  </v-dialog>

</template>

<script>
import ProjectDetail from '@/components/ProjectDetail.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "userProjects",
  data(){
    const store = useStore();
    const userData = computed(() => store.getters['getData']);
    const dialogProject = ref(false);
    const projectName = ref(null);

    onMounted(() => {

      //Animation of cards
      gsap.utils.toArray("#projectCardContainer").forEach(section => {
        gsap.fromTo(section.querySelectorAll(".projectCard"),
        {
          x: 25
        },
        {
          scrollTrigger: {
            trigger: section,
            toggleActions: "play pause pause reverse", 
          },
          duration: 0.2,
          x: 0,          
        }
      );    

      });
      

    })

    const openProject = (project) => {
      projectName.value = project;
      dialogProject.value = true;
    }

    const getImageUrl = (name) => {
      const url = new URL('../assets/images/projects/' + name, import.meta.url).href;
      return url;
    }

    const userProjects = computed (()=> userData.value.userProjects);

    return {
      userProjects,
      dialogProject,
      projectName,
      getImageUrl,
      openProject,
      ScrollTrigger
    }
  },
  components: {
    ProjectDetail
  }
};

</script>

<style lang="scss" scoped>

  #projectCardContainer{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .projectCard{
    width: 300px;
    aspect-ratio: 16/11;
    flex-grow: 1;
    
    border: 2px solid;
    border-radius: 5px;
    border-color: rgba($color: #000000, $alpha: 0.2);

    &:hover {
      filter: brightness(95%);
      -webkit-filter: grayscale(0%);
      -moz-filter:    grayscale(0%);
      -ms-filter:     grayscale(0%);
      -o-filter:      grayscale(0%);
      transition: all 0.5s ease;
    } 

    &:not(:hover) {
      filter: brightness(100%);
      filter: gray;
      -webkit-filter: grayscale(100%);
      -moz-filter:    grayscale(100%);
      -ms-filter:     grayscale(100%);
      -o-filter:      grayscale(100%);
      transition: all 0.5s ease;
    }    
  }

  .projectHeader{
    border: solid primary 3px;
    background-color: grey;
  }

  @import "@/css/variables.scss";

</style>