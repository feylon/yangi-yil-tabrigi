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
  const fullText = `Hurmatli kursdoshlar – azamat o‘g‘il bolalar! 

Bugungi qutlug‘ sana – 14-yanvar, Vatan himoyachilari kuni bilan barchangizni chin qalbimdan tabriklayman! 

Sizlar – mardlik va jasoratning haqiqiy timsolisiz! Kelajakda Vatanimizga sadoqat bilan xizmat qiluvchi, himoya qiluvchi, tinchlik va osoyishtalikka hissa qo‘shuvchi kuchli va intiluvchan insonlar bo‘lib yetishasiz.

Sizlarga doimo bardavom sog‘lik, matonat, bilim va jasorat tilayman. Hayotingizda zafarlar, baxt va tinchlik barqaror bo‘lsin! Har doim yurt, oila va yaqinlaringizning faxri bo‘ling!

Bayramingiz muborak bo‘lsin, ❤️🥳`;
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
    font-size: 1.3rem;
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: center;
  }
  </style>
  