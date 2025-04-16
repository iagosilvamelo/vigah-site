<template>
    <section id="home" class="bg-dark text-white min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32">
      <img src="@/assets/logo.png" alt="Vigah Logo" class="w-40 mb-6" data-aos="fade-up">
      <h1 class="text-4xl md:text-6xl font-bold" data-aos="fade-up" data-aos-delay="200">Sua marca em destaque.</h1>
      <p class="mt-4 text-lg md:text-2xl text-accent" data-aos="fade-up" data-aos-delay="300">Criatividade, estratégia e resultados para sua empresa.</p>
      <a :href="social.whatsapp" target="_blank"  data-aos="fade-up" data-aos-delay="400"
        class="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition">
        Fale com a Vigah
      </a>

      <a href="#descricao" @click.prevent="$scrollTo('descricao')" class="absolute bottom-8 animate-bounce">
      <svg class="w-8 h-8 text-white hover:text-primary transition" fill="none" stroke="currentColor" stroke-width="2"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
    </section>
</template>

<script setup>
import { inject } from 'vue'
const social = inject('social')
</script>
