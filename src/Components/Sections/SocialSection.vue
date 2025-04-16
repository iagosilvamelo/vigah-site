<template>
    <section id="social" class="bg-black text-white py-12 px-6">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6" data-aos="fade-up">Conecte-se com a Vigah</h2>
        <p class="mb-8 text-lg text-[#aac6c9]" data-aos="fade-up" data-aos-delay="200">Acompanhe nossas redes e fique por dentro das novidades!</p>
  
        <div class="flex justify-center gap-6">
          <a
            :href="social.instagram"
            target="_blank"
            aria-label="Instagram"
            class="hover:scale-110 transition-transform duration-300"
            data-aos="fade-up"
          >
            <img src="@/assets/icons/instagram.svg" alt="Instagram" class="w-5 h-5" />
          </a>
          <a
            :href="social.facebook"
            target="_blank"
            aria-label="Facebook"
            class="hover:scale-110 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="@/assets/icons/facebook.svg" alt="Facebook" class="w-5 h-5" />
          </a>
          <a
            :href="social.linkedin"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:scale-110 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" class="w-5 h-5" />
          </a>
          <a
            :href="social.whatsapp"
            target="_blank"
            aria-label="WhatsApp"
            class="hover:scale-110 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src="@/assets/icons/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const social = inject('social')
  </script>
  