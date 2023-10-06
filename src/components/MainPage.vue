<template>

  <div class="background" id="layer-bg" ref="layerbg"/>
  <div class="topBrand" ref="topBrand"> <userHeader/></div>
  <background ref="background"/>
  <div id="backgroundHue" ref="backgroundHue"/> <div id="backgroundHueNew" ref="backgroundHueNew"/> 
  <img id="scrollIcon" ref="scrollIcon" src="@/assets/images/parallax/scroll_icon.gif"/>

  <v-slide-x-transition>
      <v-card class="colorPicker notPrintable" v-if="colorPicker">
          <v-col>
            <v-row>
              <v-btn v-if="selectedTheme == 'themeBlue'" size="small" color="blue" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge dot bordered overlap color="red" style="top:10px;">
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn>  
              <v-btn v-else size="small" color="blue" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeBlue')"></v-btn>
            </v-row>
            <v-row>
              <v-btn v-if="selectedTheme == 'themeGreen'" size="small" color="green" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn>  
              <v-btn v-else size="small" color="green" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeGreen')"></v-btn>
            </v-row>
            <v-row>
              <v-btn v-if="selectedTheme == 'themeGold'" size="small" color="warning" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn> 
              <v-btn v-else size="small" color="warning" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeGold')"></v-btn>
            </v-row>
            <v-row>
              <v-btn v-if="selectedTheme == 'themeBlack'" size="small" color="black" variant="text" icon="fa-solid fa-palette" @click="colorPicker=false">
                <v-badge bordered overlap color="red" style="top:10px;" dot>
                    <v-icon>fa-solid fa-palette</v-icon>
                </v-badge>
              </v-btn> 
              <v-btn v-else size="small" color="surface-variant" variant="text" icon="fa-solid fa-palette" @click="changeTheme('themeBlack')"></v-btn>
            </v-row>
          </v-col>
      </v-card>
  </v-slide-x-transition>  

  <v-container class="py-0 principal" >
    <v-card class="px-2 principalCard elevation-0"> 
      
      <div class="headerCard px-8 pb-4" id="cardTitle" ref="headerCard">
        <v-row>
          <v-col cols="10">
            <userHeader/>
          </v-col>
          <v-col cols="2">
            <v-card-actions class="notPrintable">
              <v-spacer></v-spacer>
              <v-btn class="actionButton" size="small" variant="plain" icon="fa-solid fa-print" @click="dialogPrint=true;"></v-btn>
              <v-btn class="actionButton" size="small" variant="plain" icon="fa-solid fa-language" @click="changeLanguage()"></v-btn>
              <v-btn class="actionButton" size="small" variant="plain" icon="fa-solid fa-brush" @click="showColorPicker()"></v-btn>
            </v-card-actions>
            
          </v-col>
        </v-row>
      </div>

        
      <v-row class="py-4 px-8" id="content">  
        <!--- Left Paragraph ---->       
        <v-col class="py-6 px-4">

          <v-row>
            <v-col><userDescription/></v-col>
          </v-row>

          <v-row class="pt-6">
            <v-col><userExperience ref="userExperienceObject"/></v-col>
          </v-row>

          <v-row class="pt-5">
            <v-col><userSkills/></v-col>
          </v-row>

          <v-row class="pt-5">
            <v-col><userLanguages/></v-col>
          </v-row>

          <v-row>
            <v-col><userContact/></v-col>
          </v-row>

          <v-row>
            <v-col><userSocial/></v-col>
          </v-row>

          <v-row class="pt-5">
            <v-col><userEducation/></v-col>  
          </v-row>

          <v-row class="pt-6 notPrintable">
            <v-col><userProjects/></v-col>
          </v-row>

        </v-col>
      </v-row>

    <v-row style="height: 20px;"/>

    </v-card>


  </v-container>

  <v-dialog v-model="dialogPrint" width="90%">
    <printCV/>
  </v-dialog>

</template> 

<script>
import { ref, computed, onMounted } from "vue"
import { useTheme } from 'vuetify'
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
    const userExperienceObject = ref(null);
    const backgroundHue = ref(null);
    
    const dialogPrint = ref(false);
    const selectedTheme = ref('themeBlue');
    const colorPicker = ref(true);
    const theme = useTheme();

    const templateLanguage = computed(() => store.getters['getTemplateLanguage']);

    onMounted(() => {
        layerbg.value.style.backgroundPositionX = `50%`;

        // Moving the background
        document.addEventListener("mousemove",  (e) => {
          try {
            let _w = window.innerWidth/2;
            let _mouseX = e.clientX;
            topBrand.value.style.left = `${50 - (_mouseX - _w) * 0.003}%`;
          } catch { }
        });
        document.addEventListener("scroll", (e) => {
          try {
            var limit = layerbg.value.offsetTop + layerbg.value.offsetHeight;  
            console.log(window.scrollY)
            switch(true){
              case (window.scrollY<800): {              
                topBrand.value.style.top = `${3.8 + window.scrollY * 0.023}%`;
                topBrand.value.style.opacity = `${100 - window.scrollY * 0.35}%`;

                //topBrand.value.style.transform = `scale(${100 - window.scrollY * 0.35}%)`;
                topBrand.value.childNodes[0].childNodes[0].style['font-size'] = `${35 - window.scrollY * 0.08}pt`;
                topBrand.value.childNodes[0].childNodes[1].style['font-size'] = `${24 - window.scrollY * 0.056}pt`;
                scrollIcon.value.style.opacity = `${100 - window.scrollY * 0.6}%`;
                //changeTheme('themeBlue');
                break;    
              }
              /*
              case (window.scrollY>=570 && window.scrollY<=1710): {
                if(selectedTheme.value!='themeGreen'){ changeTheme('themeGreen'); }
                break;   
              }
              case (window.scrollY>1710 && window.scrollY<=2730): {
                if(selectedTheme.value!='themeBlack'){ changeTheme('themeBlack'); }   
                break;
              }
              case (window.scrollY>2730): {
                if(selectedTheme.value!='themeGold'){ changeTheme('themeGold'); } 
                break;
              }
              default:
              changeTheme('themeBlue');
              break;
              */
            }
            /*
            console.log(window.scrollY)
            if(window.scrollY>=1824){{
                changeTheme('themeGold');             
              }
            }
            if(window.scrollY>=2900){{
                changeTheme('themeBlack');             
              }
            }*/
            
          } catch {}
        });

    })
    

    function scrolltoId(id){
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
      userExperienceObject,
      backgroundHue
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

p {
color: lightgray;
}

h4 {
color: white;
}


#colorSelector{
  position: absolute;
  z-index: 200;
}

#scrollIcon{
  opacity: 0.9;
  position: absolute;
  width: 40px;
  top: calc(100vh - 60px);
  z-index: 9999;
  margin-left: 50%;
  transform: translate(-50%,0);
}


.principal{
  margin-top: 100vh;
  min-width: 100%;
  padding-left: 10% !important;
  padding-right: 10% !important;
  background: linear-gradient(#383652 150px, #383652 50px, #2f122e, #020016)
  
}

.principalCard{
  //border-top-left-radius: 120px 120px;
  //clip-path: polygon(60% 2%, 0% 2%, 0% 100%, 100% 100%, 100% 0%, 65% 0%);
  padding-top: 200px;
  background-color:rgba(255,255,255,0);
}


.headerCard{
  text-align: left !important;
}

.topBrand{
  position: absolute;
  text-align: center;
  top: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
}

#topBrandEventHandler{
  position: absolute;
  display: block;
  top: 150px;
  left: 50%;
  height: 200px;
  width: 300px;
  transform: translate(-50%, 0);
  background-color: red;
}


.colorPicker{
  position: fixed !important;
  background-color:rgba(255,255,255,.0);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  width: 35px;
  height: 162px;
  top: 50%;
  left: 0px;
  transform: translate(0, -50%);
  z-index: 1;
}


</style>