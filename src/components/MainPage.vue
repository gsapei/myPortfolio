<template>

  <div class="background" id="layer-bg" ref="layerbg"/>
  <div class="topBrand" id="topBrand" ref="topBrand"> <userHeader/></div>
  <background ref="background"/>
  <div id="backgroundHue" ref="backgroundHue"/> <div id="backgroundHueNew" ref="backgroundHueNew"/> 
  <img id="scrollIcon" ref="scrollIcon" src="@/assets/images/parallax/scroll_icon.gif" @click="scrolltoId('cardTitle')"/>

  <v-slide-y-transition>
      <v-card class="colorPicker notPrintable" v-if="colorPicker">
          <v-row>
            <v-col>
              <v-btn class="colorButton" v-if="selectedTheme == 'themeBlue'" size="small" color="blue" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge dot bordered overlap color="red" style="top:10px;">
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn>  
              <v-btn class="colorButton" v-else size="small" color="blue" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeBlue')"></v-btn>
            </v-col>
            <v-col>
              <v-btn class="colorButton" v-if="selectedTheme == 'themeGreen'" size="small" color="green" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn>  
              <v-btn class="colorButton" v-else size="small" color="green" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeGreen')"></v-btn>
            </v-col>
            <v-col>
              <v-btn class="colorButton" v-if="selectedTheme == 'themeGold'" size="small" color="warning" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn> 
              <v-btn class="colorButton" v-else size="small" color="warning" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeGold')"></v-btn>
            </v-col>
            <v-col>
              <v-btn class="colorButton" v-if="selectedTheme == 'themeBlack'" size="small" color="surface-variant" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn> 
              <v-btn class="colorButton" v-else size="small" color="surface-variant" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeBlack')"></v-btn>
            </v-col>
          </v-row>
      </v-card>
  </v-slide-y-transition>  

  <v-container class="py-0 principal" >
    <v-card class="px-2 principalCard elevation-0"> 
      
        <v-row class="headerCard px-6 pb-4 pt-12" id="cardTitle" ref="headerCard">
          <v-col cols="8" style="min-width: 360px;">
            <div id="brandContent">
              <userHeader/>
            </div>
            <v-spacer></v-spacer>
          </v-col>
          <v-col class="notPrintable pt-5 pr-8" id="actionButtonContainer">
            <v-icon class="actionButton" icon="fa-solid fa-brush" @click="showColorPicker()"/>
            <v-icon class="actionButton" icon="fa-solid fa-print" @click="showDialogPrint()"/>
            <v-icon class="actionButton" icon="fa-solid fa-language" @click="changeLanguage()"/>
          </v-col>
        </v-row>

        
      <v-row class="py-4 px-8" id="content">  
        <v-col class="py-6 px-4">

          <v-row class="py-4">
            <v-col><userDescription/></v-col>
          </v-row>

          <v-row class="py-16">
            <v-col>
              <div id="userExperience">
                <userExperience/>
              </div>
            </v-col>
          </v-row>

          <v-row class="py-16">
            <v-col><userSkills/></v-col>
          </v-row>


          <v-row class="pt-6 notPrintable">
            <v-col><userProjects/></v-col>
          </v-row>

        </v-col>
      </v-row>

    <v-row style="height: 20px;"/>

    </v-card>


  </v-container>

  <v-dialog v-model="dialogPrint" class="dialogCV" transition="dialog-top-transition">
    <printCV/>
  </v-dialog>

</template> 

<script>
import { ref, computed, onMounted, watch } from "vue"
import { useTheme } from 'vuetify'
import { useStore } from 'vuex';
import { data } from '../data'

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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
import background from "@/components/Background.vue";
import printCV from "@/components/PrintCV.vue";

export default {
  name: "MainPage",
  setup() {
    const store = useStore();
    store.dispatch('setData',data);

    const topBrand = ref(null);
    const headerCard = ref(null);
    const background = ref(null);
    const scrollIcon = ref(null);
    const layerbg = ref(null);
    const backgroundHue = ref(null);
    
    const dialogPrint = ref(false);
    const selectedTheme = ref('themeBlue');
    const colorPicker = ref(false);
    const theme = useTheme();

    const templateLanguage = computed(() => store.getters['getTemplateLanguage']);

    //prevents background reset positions after calling dialogPrint 
    watch(dialogPrint, (value) => {
      if(!value) { 
        setTimeout(() => {
          background.value.resetParallaxVertical(); 
        }, 100);
      }
    });

    onMounted(() => {

      // Moving the topBrand and scrollIcon horizontally
      document.addEventListener("mousemove",  (e) => {
        try {
          let _w = window.innerWidth/2;
          let _mouseX = e.clientX;
          topBrand.value.style.left = `${50 - (_mouseX - _w) * 0.002}%`;
          scrollIcon.value.style.left = `${-(_mouseX - _w) * 0.006}%`;

        } catch { }
      });

      //-------- GSAP animations -----------
      gsap.fromTo("#topBrand",
              {
                opacity: 1,
                scale: 1,
                y: 0
              },
              {
              scrollTrigger: {
                trigger: '#layer-bg',
                start: "top",
                end: "center",
                  scrub: 1,
                },
                opacity: 0,
                scale: 0.1,
                y: 200                  
              }
            );

      gsap.fromTo("#scrollIcon",
        {
          opacity: 1,
          scale: 1,
          y: 0
        },
        {
        scrollTrigger: {
          trigger: '#layer-bg',
          start: "top",
          end: "center",
            scrub: 1,
          },
          opacity: 0,
          scale: 0.1,
          y: 200                  
        }
      );


      gsap.fromTo("#brandContent",
        {
          opacity: 0,
          y: "-100%",
        },
        {
          scrollTrigger: {
            trigger: "#brandContent",
            toggleActions: "play pause pause reverse", 
          },
          duration: 0.4,
          opacity: 1,
          y: 0,
        }
      );             

    })

    const showDialogPrint = () => {
      dialogPrint.value=true;
    }

    const scrolltoId = (id) => {
      var access = document.getElementById(id);
      access.scrollIntoView({behavior: 'smooth'}, true);
    }

    const showColorPicker = () => {
      colorPicker.value=!colorPicker.value;
    }

    const changeTheme = (newTheme) => {
      theme.global.name.value = newTheme;
      if(newTheme=='themeBlue'){ 
        backgroundHue.value.style.setProperty("--bg-color", 'none');
        selectedTheme.value = newTheme;
      }
      if(newTheme=='themeGreen'){ 
        //document.body.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          backgroundHue.value.style.setProperty("--bg-color", 'MediumSpringGreen') 
          //document.body.style.setProperty("--bg-color", 'LightSeaGreen') 
        }, 1);
        selectedTheme.value = newTheme;
      }
      if(newTheme=='themeGold'){ 
        //backgroundHue.value.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          backgroundHue.value.style.setProperty("--bg-color", 'Coral') 
        }, 1);
        selectedTheme.value = newTheme;
      }
      if(newTheme=='themeBlack'){ 
        //backgroundHue.value.style.setProperty("--bg-color", 'none');
        setTimeout(function () {
          backgroundHue.value.style.setProperty("--bg-color", 'Black') 
        }, 1);
        selectedTheme.value = newTheme;
      }
      colorPicker.value = false;
    };

    const changeLanguage = () => {
      //Hardcoding :S
      if(templateLanguage.value === 'spanish') { store.dispatch('setTemplateLanguage','english'); }
      else { store.dispatch('setTemplateLanguage','spanish'); }
    }

    return {
      colorPicker,
      selectedTheme,
      changeTheme,
      changeLanguage,
      showColorPicker,
      scrolltoId,
      dialogPrint,
      topBrand,
      background,
      headerCard,
      scrollIcon,
      layerbg,
      backgroundHue,
      showDialogPrint
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
    printCV,
    background,

  }
}

</script>

<style lang="scss" scoped>

@import "@/css/background.scss";

.principal :deep(p) {
color: lightgray;
}

.principal :deep(h4) {
color: lightgray;
}

.dialogCV{
  width: 90%;
}

#colorSelector{
  position: absolute;
  z-index: 200;
}

#scrollIcon{
  opacity: 0.5;
  position: fixed;
  width: 40px;
  top: calc(100vh - 60px);
  z-index: 9999;
  margin-left: 50%;
  transform: translate(-50%,0);
  cursor: pointer;
}


.principal{
  margin-top: 100vh;
  min-width: 100%;
  padding-left: 10% !important;
  padding-right: 10% !important;
  background: linear-gradient(#383652 60px, #383652 50px, #2f122e, #03011d);
}

.principalCard{
  //border-top-left-radius: 120px 120px;
  //clip-path: polygon(60% 2%, 0% 2%, 0% 100%, 100% 100%, 100% 0%, 65% 0%);
  padding-top: 200px;
  background-color:rgba(255,255,255,0);
}


.headerCard{
  text-align: left !important;
  flex-wrap: nowrap;
}

.topBrand{
  position: absolute;
  text-align: center;
  top: 20vh;
  left: 50%;
  transform: translate(-50%, 0);
}

.colorPicker{
  -webkit-text-stroke: 1.2px black;
  position: fixed !important;
  background-color:rgba(255,255,255,.05);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 2px;
  width: 240px;
  height: 44px;
  top: 10px;
  left: calc( 50% - 260px / 2 );
  z-index: 1;
}

#actionButtonContainer{
  margin-left: 0px;
  padding-left: 0px;
  //min-width: 150px;
  text-align: right;
}

.actionButton{
  margin-left: 15px;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
}

.actionButton:hover{
  color: rgba($color: var(--v-theme-primary), $alpha: 1);
  transform: scale(1.30);
  transition: all 300ms;
}

.colorButton{
  font-size: 1rem;
}


</style>