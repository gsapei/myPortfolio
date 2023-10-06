<template>

    <div id="backgroundContainer">
        <img class="background" id="layer-bg" ref="layerbg"/>
        <img class="background" id="layer-1" ref="layer1"/>
        <img class="background" id="layer-2" ref="layer2"/>
        <img class="background" id="layer-3" ref="layer3"/>
        <img class="background" id="layer-4" ref="layer4"/>
        <div class="fog-container"> <div class="fog-img fog-img-first"></div> <div class="fog-img fog-img-second"></div> </div>
        <img class="background" id="layer-5" ref="layer5"/>
        <img class="background" id="layer-6" ref="layer6"/>
    </div>

</template>

<script>

import { ref, onMounted } from 'vue'

export default {
  name: "userSocial",
  setup(){

    const layerbg = ref(null);
    const layer1 = ref(null);
    const layer2 = ref(null);
    const layer3 = ref(null);
    const layer4 = ref(null);
    const layer5 = ref(null);
    const layer6 = ref(null);

    onMounted(() => {
        layer1.value.style.backgroundPositionX = `50%`;
        layer2.value.style.backgroundPositionX = `50%`;
        layer3.value.style.backgroundPositionX = `50%`;
        layer4.value.style.backgroundPositionX = `50%`;
        layer5.value.style.backgroundPositionX = `50%`;
        layer6.value.style.backgroundPositionX = `50%`;
        // the DOM element will be assigned to the ref after initial render
        document.addEventListener("mousemove", parallaxHorizontal);
        document.addEventListener("scroll", parallaxVertical);
    })

    // Move layers of background horizontally
    const parallaxHorizontal = (e) => {
        let _w = window.innerWidth/2;
        let _mouseX = e.clientX;

        /* 
        //SLOW!  
        let factor = 15
        const backgrounds = document.getElementById("backgroundContainer");
            for (const child of backgrounds.children) {
            console.log(child.tagName);
            child.style.backgroundPositionX = `${50 + (_mouseX - _w) * 1/factor}%`;
        }
        */
       
        layer1.value.style.backgroundPositionX = `${50 + (_mouseX - _w) * 0.025}%`;
        layer2.value.style.backgroundPositionX = `${50 + (_mouseX - _w) * 0.030}%`;
        layer3.value.style.backgroundPositionX = `${50 + (_mouseX - _w) * 0.035}%`;
        layer4.value.style.backgroundPositionX = `${50 + (_mouseX - _w) * 0.040}%`;
        layer5.value.style.backgroundPositionX = `${50 + (_mouseX - _w) * 0.045}%`;
        layer6.value.style.backgroundPositionX = `${50 + (_mouseX - _w) * 0.070}%`;
        
    }

    // Move layers of background vertically
    const parallaxVertical = (e) => {

      var scrollPosition = window.scrollY;
      var limit = layerbg.value.offsetTop + layerbg.value.offsetHeight;  
      if (scrollPosition > layerbg.value.offsetTop && scrollPosition <= limit-370){   
        layer1.value.style.backgroundPositionY = `${scrollY * 0.01}%`;
        layer2.value.style.backgroundPositionY = `${scrollY * 0.05}%`;
        layer3.value.style.backgroundPositionY = `${scrollY * 0.08}%`;
        layer4.value.style.backgroundPositionY = `${scrollY * 0.110}%`;
        layer5.value.style.backgroundPositionY = `${scrollY * 0.145}%`;
        layer6.value.style.backgroundPositionY = `${scrollY * 0.200}%`;    
      }

    }

    return {
        layerbg,
        layer1,
        layer2,
        layer3,
        layer4,
        layer5,
        layer6,
    }
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/background.css";
</style>