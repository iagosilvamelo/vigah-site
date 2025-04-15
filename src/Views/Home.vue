<template>
  <div>
    <Menu />

    <Home />

    <DescriptionSection />

    <MarketingIndoorSection />

    <IndoorBenefit />

    <SocialSection />

    <Footer />
  </div>
</template>

<script setup>
import Menu from '@/Components/Sections/Menu.vue';
import Home from '@/Components/Sections/Home.vue';
import DescriptionSection from '@/Components/Sections/DescriptionSection.vue';
import MarketingIndoorSection from '@/Components/Sections/MarketingIndoorSection.vue';
import IndoorBenefit from '@/Components/Sections/IndoorBenefit.vue';
import SocialSection from '@/Components/Sections/SocialSection.vue';
import Footer from '@/Components/Sections/Footer.vue';
</script>