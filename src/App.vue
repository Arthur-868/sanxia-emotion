<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteHero from './components/SiteHero.vue'
import ArtifactSections from './components/ArtifactSections.vue'
import IpStage from './components/IpStage.vue'
import VideoStage from './components/VideoStage.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="site">
    <SiteHeader />
    <SiteHero />
    <IpStage />
    <main>
      <ArtifactSections />
    </main>
    <VideoStage />
    <SiteFooter />
  </div>
</template>
