<template>
    <section id="indoor" class="bg-black text-white py-16 px-6 md:px-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
        <h2 class="text-4xl font-bold mb-6" data-aos="fade-up">Sua marca em destaque com <span class="text-primary">Marketing Indoor</span></h2>
        <p class="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
            Alcance seu público no momento certo, no lugar certo. Com a Vigah, você exibe sua marca em telas estrategicamente posicionadas em locais de alto fluxo de pessoas.
        </p>
        <p class="text-lg mb-6" data-aos="fade-up" data-aos-delay="300">
            Apresente seu produto com criatividade e impacto através de vídeos dinâmicos e chamativos. Seja lembrado por quem realmente importa!
        </p>
        <a :href="social.whatsapp"
            target="_blank" 
            class="inline-block mt-4 bg-primary text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition"
            data-aos="fade-up"
            data-aos-delay="400"
        >
            Quero anunciar com a Vigah
        </a>
        </div>

        <div class="rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-up">
        <video autoplay muted loop playsinline class="w-full h-auto rounded-xl">
            <source src="@/assets/videos/anuncie-aqui.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
        </video>
        </div>
        
    </div>
    </section>
</template>

<script setup>
import { inject } from 'vue'
const social = inject('social')
</script>
