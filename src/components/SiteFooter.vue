<script setup>
import { site } from '../data/artifacts'
</script>

<template>
  <footer class="footer section">
    <div class="footer-glow" aria-hidden="true"></div>
    <p class="emo climax" v-reveal>{{ site.climax }}</p>
    <p class="prose footer-lead" v-reveal>
      不一样，不是坏事。把它们放在一起，有时候会变成一种新的、了不起的美。
    </p>
    <div class="footer-meta" v-reveal>
      <span>湖北大学知行学院 · 毕设作品</span>
      <span class="dot">·</span>
      <span>《峡江记忆》 · 人机互动中三峡巴蜀 IP 文创视频设计</span>
      <span class="dot">·</span>
      <span>文物资料来自馆藏公开资料，仅用于学术展示</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  align-items: center;
}
.footer-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(55% 45% at 50% 80%, rgba(55, 179, 160, 0.12), transparent 72%);
}
.climax {
  font-size: clamp(1.7rem, 4.4vw, 3rem);
  color: var(--turquoise);
  max-width: 20em;
  margin-bottom: 1.4rem;
  position: relative;
  z-index: 1;
}
.footer-lead {
  margin: 0 auto 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
}
.footer-meta {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.04em;
}
.dot {
  color: var(--turquoise);
}
</style>
