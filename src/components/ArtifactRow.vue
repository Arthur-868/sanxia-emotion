<script setup>
import { artifacts, accentVar } from '../data/artifacts'
import ArtifactFigure from './ArtifactFigure.vue'
import ipCutout from '../assets/ip-cutout.png'
</script>

<template>
  <section id="artifacts" class="artifacts section">
    <div class="artifacts-head">
      <p class="kicker" v-reveal>重庆中国三峡博物馆 · 镇馆之宝</p>
      <h2 class="h-display" v-reveal>四件文物，四种个性</h2>
    </div>
    <div class="artifacts-row">
      <div
        v-for="(a, i) in artifacts"
        :key="a.no"
        class="card"
        v-reveal
        :style="{ '--accent': accentVar[a.accent], transitionDelay: (i * 0.12) + 's' }"
      >
        <div class="card-fig scallop">
          <ArtifactFigure :kind="a.kind" />
        </div>
        <h3 class="card-name">{{ a.name }}</h3>
        <p class="card-era">{{ a.era }}</p>
        <div class="bubble">
          <img class="bubble-avatar" :src="ipCutout" alt="虎子" />
          <p class="bubble-text">{{ a.line }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.artifacts {
  gap: clamp(2rem, 5vw, 3.5rem);
}
.artifacts-head {
  max-width: 720px;
}
.artifacts-head h2 {
  font-size: clamp(1.9rem, 4.4vw, 3rem);
  margin-top: 0.6rem;
}
.artifacts-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1rem, 2.4vw, 2rem);
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}
.card {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(180deg, var(--surface), var(--surface-2));
  padding: 1.6rem 1.1rem 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.card-fig {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 50% 44%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 72%),
    radial-gradient(circle at 50% 50%, var(--surface-2), var(--ink) 84%);
  border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent);
}
.card-fig :deep(svg) {
  width: 56%;
  height: 56%;
  color: var(--accent);
}
.card-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.4;
  margin-top: 1.1rem;
  color: var(--ivory);
}
.card-era {
  font-size: 0.76rem;
  color: var(--muted);
  letter-spacing: 0.06em;
  margin-top: 0.2rem;
}
.bubble {
  margin-top: 1.1rem;
  display: flex;
  gap: 0.55rem;
  align-items: flex-start;
  text-align: left;
  width: 100%;
}
.bubble-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--turquoise);
  object-fit: cover;
  object-position: 50% 16%;
  flex-shrink: 0;
}
.bubble-text {
  flex: 1;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 10px;
  border-top-left-radius: 3px;
  padding: 0.5rem 0.7rem;
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--ivory);
}
@media (max-width: 1024px) {
  .artifacts-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 560px) {
  .artifacts-row {
    grid-template-columns: 1fr;
  }
}
</style>
