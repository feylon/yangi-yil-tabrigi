<template>
 <div class="wrapper">
      <div class="heading">
        <h3>Qolgan vaqt</h3>
        <h1>
            <span v-if="!yangi_yil_otdi">2024</span>
            
            <span v-else>{{ yangi_yil_otdi }}</span>
        </h1>
      </div>
      <div class="countdown">
        <div class="box">
          <span class="num" id="day-box">{{sana}}</span>
          <span class="text">Kun</span>
        </div>
        <div class="box">
          <span class="num" id="hr-box">{{ soat }}</span>
          <span class="text">soat</span>
        </div>
        <div class="box">
          <span class="num" id="min-box">{{ minut }}</span>
          <span class="text">Minut</span>
        </div>
        <div class="box">
          <span class="num" id="sec-box">{{sekund}}</span>
          <span class="text">Soniya</span>
        </div>
      </div>
    </div>
    <div class="tabrik_text">
    {{tabrik_soz}}
    </div>
    <video  src="./assets/1.mp3" loop ref="video"   ></video>
</template>
<script setup>
import { useRoute } from 'vue-router';
import {ref} from "vue";
console.log(location)
let router = useRoute();
let tabrik = `Assalomu alaykum, hurmatli ${location.hash.split("#/happy/:")[1].split("_").join(" ")}. Sizni kirib kelayotgan 2024-yil bilan samimiy muborakbod etaman. Ushbu yaqinlashib kelayotgan yangi 2025-yil sizga omadli va barokatli kelsin, oilaviy baxt hamda yuqori kayfiyat yil davomida sizni va yaqinlaringizni tark etmasin. 2024-yil barchamizga uchun muborak bo'lsin! 

Hurmat bilan Toshkent Axborot Texnologiyalari Universiteti Samarqand filiali talabasi - 
  Ergashev Jamshid!`;
  let tabrik_soz = ref("");
  let i = 0;
let timer =   setInterval(() => {
    if(i < tabrik.length){

        tabrik_soz.value +=  tabrik[i];
        i ++;
    }
    else clearInterval(timer);
  }, 130);
// ------------------------------
 let sana = ref(0);
 let soat = ref(0);
 let minut = ref(0);
 let sekund = ref(0);
 let yangi_yil_otdi = ref("")
function hisob() {
    let endDate = new Date(2025, 0, 1, 0, 0);
let endTime = endDate.getTime();

  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(timer2);
    yangi_yil_otdi.value = "YANGI YIL KELDI !!!";
   
  } else {
     sana.value = Math.floor(remainingTime / oneDay);
     soat.value = Math.floor((remainingTime % oneDay) / oneHr);
     minut.value = Math.floor((remainingTime % oneHr) / oneMin);
     sekund.value = Math.floor((remainingTime % oneMin) / 1000);

   
  }
}
let timer2 = setInterval(hisob, 1000);
hisob();
// 
let video = ref();


setInterval(() => {
    
   video.value.play();
}, 1000);

</script>
<style></style>