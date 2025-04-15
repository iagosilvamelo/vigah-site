<template>
    <section id="beneficios" class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
          Benefícios do Marketing Indoor
        </h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Alcance seu público diretamente no ponto de venda com impacto visual e mensagem certeira. O marketing indoor é uma ferramenta poderosa para gerar engajamento e aumentar as vendas.
        </p>
  
        <div class="grid md:grid-cols-3 gap-8">
          <BenefitCard
            icon="📍"
            title="Alcance Direto"
            description="Fale com seu cliente no momento ideal: quando ele está no local e pronto para comprar."
          />
          <BenefitCard
            icon="🎯"
            title="Alta Efetividade"
            description="Mensagens personalizadas e segmentadas aumentam a chance de conversão."
          />
          <BenefitCard
            icon="📈"
            title="Aumento de Vendas"
            description="Promoções no ambiente físico impulsionam produtos estratégicos e sazonalidades."
          />
          <BenefitCard
            icon="💡"
            title="Fortalecimento de Marca"
            description="Reforce sua identidade visual e sua presença com conteúdos dinâmicos e envolventes."
          />
          <BenefitCard
            icon="📊"
            title="Mensuração de Resultados"
            description="Com tecnologia digital, é possível medir o impacto e ajustar as campanhas em tempo real."
          />
          <BenefitCard
            icon="🔊"
            title="Integração Multicanal"
            description="Combine com redes sociais, QR Codes e outras mídias para ampliar o alcance da mensagem."
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import BenefitCard from '@/Components/BenefitCard.vue'
  </script>