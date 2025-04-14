<template>
  <header class="fixed top-0 left-0 w-full bg-dark text-white z-50 shadow-md transition-all duration-300">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <img
        v-if="showLogoInNav"
        src="../assets/logo.png"
        alt="Vigah Logo"
        class="w-28 transition-opacity duration-300 opacity-100"
      />
      <div v-else class="w-28"></div>

      <ul class="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
      <li><a href="#home" @click.prevent="scrollTo('home')" class="hover:text-accent transition">Início</a></li>
      <li><a href="#descricao" @click.prevent="scrollTo('descricao')" class="hover:text-accent transition">Sobre</a></li>
      <li><a href="#indoor" @click.prevent="scrollTo('indoor')" class="hover:text-accent transition">Marketing Indoor</a></li>
      <li><a href="#beneficios" @click.prevent="scrollTo('beneficios')" class="hover:text-accent transition">Benefícios</a></li>
      <li><a href="#social" @click.prevent="scrollTo('social')" class="hover:text-accent transition">Social</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showLogoInNav = ref(false)

const handleScroll = () => {
  const scrollY = window.scrollY
  showLogoInNav.value = scrollY > window.innerHeight * 0.7
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollTo = (id) => {
  const element = document.getElementById(id)
  const offset = 100 

  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }
}
</script>