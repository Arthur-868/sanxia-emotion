<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { site, artifacts, accentVar } from '../data/artifacts'
import ArtifactFigure from './ArtifactFigure.vue'

const px = ref(0)
const py = ref(0)

function onMove(e) {
  px.value = e.clientX / window.innerWidth - 0.5
  py.value = e.clientY / window.innerHeight - 0.5
}

onMounted(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('mousemove', onMove, { passive: true })
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
})
</script>

<template>
  <header id="top" class="hero section">
    <div class="hero-glow" aria-hidden="true" :style="{ transform: `translate(${px * 34}px, ${py * 22}px)` }"></div>
    <svg class="hero-scape" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0 400 L0 250 L170 180 L330 300 L490 140 L650 280 L830 130 L1010 260 L1200 170 L1200 400 Z" fill="rgba(136,153,104,0.07)" />
      <path d="M0 400 L0 320 L230 250 L430 345 L630 230 L850 335 L1060 250 L1200 320 L1200 400 Z" fill="rgba(136,153,104,0.11)" />
      <path d="M0 400 L0 360 L310 300 L570 375 L830 295 L1090 365 L1200 335 L1200 400 Z" fill="rgba(240,235,225,0.9)" />
    </svg>
    <div class="hero-inner">
      <p class="kicker entrance" style="animation-delay: .1s">{{ site.subtitle }}</p>
      <h1 class="h-display hero-title entrance" style="animation-delay: .25s">{{ site.heroTitle }}</h1>
      <p class="emo hero-tag entrance" style="animation-delay: .4s">{{ site.tagline }}</p>
      <p class="prose hero-lead entrance" style="animation-delay: .55s">
        先认识虎子，再让他带你见四位情绪安慰师。喜怒哀乐，总有一个懂你。
      </p>
      <div class="hero-cta entrance" style="animation-delay: .7s">
        <a class="btn" href="#ip">先认识虎子</a>
        <span class="hero-hint">向下滚动 · 虎子带你看喜怒哀乐</span>
      </div>
    </div>
    <div class="hero-procession" :style="{ transform: `translate(${px * -14}px, ${py * -10}px)` }">
      <a
        v-for="(a, i) in artifacts"
        :key="a.no"
        class="procession-item entrance-pop"
        :href="`#counselor-${i}`"
        :style="{ animationDelay: (0.85 + i * 0.15) + 's', '--accent': accentVar[a.accent] }"
      >
        <span class="procession-spot scallop">
          <ArtifactFigure :kind="a.kind" />
        </span>
        <span class="procession-name">{{ a.name }}</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.hero {
  overflow: hidden;
}
.hero-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(58% 48% at 76% 34%, rgba(136, 153, 104, 0.18), transparent 70%),
    radial-gradient(46% 40% at 20% 84%, rgba(136, 153, 104, 0.1), transparent 70%);
  transition: transform 0.5s var(--ease);
}
.hero-scape {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 46%;
  pointer-events: none;
}
.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 760px;
}
.hero-title {
  font-size: clamp(3rem, 9vw, 6.4rem);
  margin: 1.1rem 0 0.5rem;
  letter-spacing: 0.02em;
}
.hero-tag {
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  color: var(--turquoise);
  margin-bottom: 1.5rem;
}
.hero-lead {
  margin-bottom: 2.3rem;
}
.hero-cta {
  display: flex;
  align-items: center;
  gap: 1.4rem;
  flex-wrap: wrap;
}
.btn {
  display: inline-block;
  padding: 0.85rem 1.7rem;
  border: 1px solid var(--turquoise);
  border-radius: 999px;
  color: #1c211d;
  background: var(--turquoise);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  transition: transform 0.25s var(--ease), background 0.25s var(--ease);
}
.btn:hover {
  transform: translateY(-2px);
}
.hero-hint {
  font-size: 0.82rem;
  color: var(--muted);
  letter-spacing: 0.06em;
}
.hero-procession {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  max-width: 880px;
  width: 100%;
  margin: 3.5rem auto 0;
  transition: transform 0.5s var(--ease);
}
.procession-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: inherit;
}
.procession-spot {
  width: clamp(72px, 13vw, 120px);
  height: clamp(72px, 13vw, 120px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 50% 44%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 72%),
    radial-gradient(circle at 50% 50%, var(--surface-2), var(--ink) 84%);
  border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s var(--ease);
}
.procession-item:hover .procession-spot {
  transform: translateY(-8px) scale(1.06);
  border-color: var(--turquoise);
  box-shadow: 0 16px 34px rgba(136, 153, 104, 0.4);
}
.procession-spot :deep(svg) {
  width: 54%;
  height: 54%;
  color: var(--accent);
}
.procession-name {
  font-size: 0.74rem;
  color: var(--muted);
  letter-spacing: 0.04em;
  text-align: center;
}
@media (max-width: 820px) {
  .hero-procession {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
