<template>
    <video  src="./assets/1.mp3" loop ref="video"   ></video>
    <div class="typing-container">

      <div class="text-box">
        <h1>{{ displayedText }}</h1>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  // Matnni, typing tezligini va boshqa parametrlarni e'lon qilish
  const fullText = `Mening akajonim ❤️❤️ 

Bugungi muqaddas sana  14-yanvar, Vatan himoyachilari kunida Sizlarni chin qalbimdan tabriklayman! Siz – bizning hayotimizdagi eng katta tayanchim, ishonchim va faxrim bo‘lgan insonsizlar .

 Akajon, Sizning mardligingiz, donoligingiz va har birimizga mehribonlik bilan qilayotgan e’tiboringiz uchun cheksiz minnatdorman. Siz har doim o‘z oilangiz, yaqinlaringiz va Vatan uchun fidoyi bo‘lgan haqiqiy himoyachisiz.❤️❤️

 Sizga bardavom sog‘lik, cheksiz baxt, tinch va osuda hayot tilayman. Har bir qadamda omad va zafarlar hamroh bo‘lsin. Yashayotgan har kuningiz quvonchga to‘lsin, qalbingiz esa mangu shod bo‘lsin!

Bayramingiz muborak bo‘lsin, mening eng mehribon va jasur akajonimlarim ! ❤️❤️`;
  const displayedText = ref("");
  const typingSpeed = 100; // Harflar orasidagi vaqt (ms)
  
  const currentIndex = ref(0);
  
  // Typing funksiyasi
  const startTyping = () => {
    const interval = setInterval(() => {
      if (currentIndex.value < fullText.length) {
        displayedText.value += fullText[currentIndex.value];
        currentIndex.value++;
      } else {
        clearInterval(interval); // Matn to'liq yozilgandan so'ng intervalni to'xtatish
      }
    }, typingSpeed);
  };
  
  // Komponent yuklanganda typingni boshlash
  onMounted(() => {
    startTyping();
  });
  let video = ref();


setInterval(() => {
    
   video.value.play();
}, 1000);

  </script>
  
  <style scoped>
  .typing-container {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    min-height: 100vh;
    background-image: url("https://source.unsplash.com/1600x900/?nature,stars");
    background-size: cover;
    background-position: center;
    color: white;
    font-family: "Arial", sans-serif;
  }
  
  .text-box {
    width : 100%;
    background: rgba(0, 0, 0, 0.6);
    /* padding: 20px 40px; */
    border-radius: 10px;
    min-height: 100vh;

    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }
  
  h1 {
    font-size: 2rem;
    line-height: 1.3;
    letter-spacing: 1px;
    text-align: center;
  }
  </style>
  