<template>
 <div class="wrapper">
      <div class="heading">
        <h3>Qolgan vaqt</h3>
        <h1>
            <span v-if="!yangi_yil_otdi">2023</span>
            
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
</template>
<script setup>
import { useRoute } from 'vue-router';
import {ref} from "vue";
let str = location.pathname.split("_").join(" ")
let name = ref((str.split("http://localhost:5173/xato/")[0]).split("/xato/:")[1])
let router = useRoute();
// ------------------------------
 let sana = ref(0);
 let soat = ref(0);
 let minut = ref(0);
 let sekund = ref(0);
 let yangi_yil_otdi = ref("")
function countdown() {
    let endDate = new Date(2024, 0, 1, 0, 0);
let endTime = endDate.getTime();

  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayTime) {
    clearInterval(i);
    yangi_yil_otdi.value = "YANGI YIL KELDI !!!";
   
  } else {
     sana.value = Math.floor(remainingTime / oneDay);
     soat.value = Math.floor((remainingTime % oneDay) / oneHr);
     minut.value = Math.floor((remainingTime % oneHr) / oneMin);
     sekund.value = Math.floor((remainingTime % oneMin) / 1000);

   
  }
}
let i = setInterval(countdown, 1000);
countdown();
</script>
<style></style>