<template>

        <div class="big-container" id="big-container">
            <img src="@/assets/images/big.png" class="big-img" id="big-img" alt="">
            <Small v-for="i in 25" :key="i" />
          </div>
    
  </template>
  
  <script>
    export default {
        mounted(){
        let size = 100
        const bigImg = document.getElementById('big-img')
        const bigContainer = document.getElementById('big-container')
        let left = 0;
        let top = 0;
        bigContainer.addEventListener('mousemove',(e)=>{
            var rect = document.getElementById('big-container').getBoundingClientRect()

            left = e.clientX - rect.left
            top = e.clientY - rect.top

            bigImg.style.clipPath =`circle(${size}px at ${left}px ${top}px)`

        })
        
        bigContainer.addEventListener('mousemove',()=>{ 
            bigContainer.addEventListener('mouseenter',()=>{ 
            bigImg.style.clipPath =`circle(${size}px at ${left}px ${top}px)`
        })
        bigContainer.addEventListener('mouseleave',()=>{ 
            bigImg.style.clipPath =`circle(0px at ${left}px ${top}px)` 
        })
        })
       
    }
    }
  

  </script>
  
  <style scoped>
      .big-container{
       
          position: relative;
          display: grid;
          grid-template-columns: repeat(5,1fr);
          grid-gap: 10px;
          overflow: hidden;
          
      }
      .big-img{
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          clip-path: circle(0px at 0 0);
      }
  
  
  </style>