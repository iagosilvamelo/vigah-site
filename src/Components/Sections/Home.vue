<template>
    <section id="home" class="bg-dark text-white min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32">
      <img src="@/assets/logo.png" alt="Vigah Logo" class="w-40 mb-6">
      <h1 class="text-4xl md:text-6xl font-bold">Sua marca no lugar certo.</h1>
      <p class="mt-4 text-lg md:text-2xl text-accent">Criatividade, estratégia e resultados para sua empresa.</p>
      <a :href="social.whatsapp" target="_blank" class="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-secondary transition">
        Fale com a Vigah
      </a>
    </section>
</template>

<script setup>
import { inject } from 'vue'
const social = inject('social')
</script>
