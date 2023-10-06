<template>

  <div class="background" id="layer-1" ref="layer1"/>
  <div class="fog-container"> <div class="fog-img fog-img-first"></div> <div class="fog-img fog-img-second"></div> </div>
  <div class="background" id="layer-2" ref="layer2"/>

</template>

<script>

import { ref, onMounted } from 'vue'

export default {
  name: "userSocial",
  setup(){

    const layer1 = ref(null);
    const layer2 = ref(null);

    onMounted(() => {

      //fix initial position
        layer1.value.style.backgroundPositionX = `50%`;
        layer2.value.style.backgroundPositionX = `50%`;
        // the DOM element will be assigned to the ref after initial render
        document.addEventListener("mousemove", parallaxHorizontal);
        document.addEventListener("scroll", parallaxVertical);
    })

    // Move layers of background horizontally
    const parallaxHorizontal = (e) => {
      try{
        let _w = window.innerWidth/2;
        let _mouseX = e.clientX;
        let _depth0, _depth1, _depth2, _depth3, _depth4;
  
        // layer 1 movement
        _depth0 = `50%`;
        _depth1 = `${50 + (_mouseX - _w) * 0.01}%`;
        _depth2 = `${50 + (_mouseX - _w) * 0.015}%`;
        _depth3 = `${50 + (_mouseX - _w) * 0.025}%`;
        _depth4 = `${50 + (_mouseX - _w) * 0.045}%`;
        let x = `${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}, ${_depth0}`;
        layer1.value.style.backgroundPositionX = x;
  
        //layer 2 movement
        _depth1 = `${50 + (_mouseX - _w) * 0.055}%`;
        _depth2 = `${50 + (_mouseX - _w) * 0.07}%`;
        x = `${_depth2}, ${_depth1}`;
        layer2.value.style.backgroundPositionX = x;
      }
      catch{}
    }

    // Move layers of background vertically
    const parallaxVertical = (e) => {
      try{
        var scrollPosition = window.scrollY;
        var limit = layer1.value.offsetTop + layer1.value.offsetHeight;  
        let y, _depth1, _depth2, _depth3, _depth4;
        if (scrollPosition <= 228){   
          _depth1 = `${scrollY * 0.040}%`;
          _depth2 = `${scrollY * 0.026}%`;
          _depth3 = `${scrollY * 0.14}%`;
          _depth4 = `${scrollY * 0.18}%`;
          y = `${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
          layer1.value.style.backgroundPositionY = y;
  
          _depth1 = `${scrollY * 0.27}%`;
          _depth2 = `${scrollY * 0.34}%`;
          y = `${_depth2}, ${_depth1}`;
          layer2.value.style.backgroundPositionY = y;
        }
      }
      catch{}

    }

    return {
        layer1,
        layer2,
    }
  }
};

</script>

<style lang="scss" scoped>
  @import "@/css/background.scss";
</style>