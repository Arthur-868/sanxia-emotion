<script setup>
import { accentVar } from '../data/artifacts'
import ArtifactFigure from './ArtifactFigure.vue'

defineProps({
  artifact: { type: Object, required: true },
  index: { type: Number, required: true },
  total: { type: Number, required: true }
})
</script>

<template>
  <section
    class="chapter section"
    :id="`chapter-${index}`"
    :data-chapter="index"
    :class="{ flip: index % 2 === 1, climax: artifact.hero }"
    :style="{ '--accent': accentVar[artifact.accent] }"
  >
    <div class="chapter-glow" aria-hidden="true"></div>
    <div class="chapter-grid">
      <div class="vitrine" v-reveal>
        <div class="case">
          <div class="case-top">
            <span class="case-no">{{ artifact.no }}</span>
            <span class="case-emotion">{{ artifact.emotion }}</span>
          </div>
          <div class="case-stage scallop">
            <div class="spot">
              <ArtifactFigure :kind="artifact.kind" />
            </div>
          </div>
          <div class="case-label">
            <h4 class="case-name">{{ artifact.name }}</h4>
            <dl class="meta">
              <div class="meta-row"><dt>年代</dt><dd>{{ artifact.era }}</dd></div>
              <div class="meta-row"><dt>材质</dt><dd>{{ artifact.material }}</dd></div>
              <div class="meta-row"><dt>出土</dt><dd>{{ artifact.origin }}</dd></div>
            </dl>
          </div>
        </div>
      </div>
      <div class="copy">
        <p class="kicker" v-reveal>{{ artifact.no }} / {{ String(total).padStart(2, '0') }} · 情绪文物</p>
        <h2 class="emo emo-word" v-reveal>{{ artifact.emotion }}</h2>
        <h3 class="h-display hook" v-reveal>{{ artifact.hook }}</h3>
        <p class="prose" v-reveal>{{ artifact.body }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.chapter {
  overflow: hidden;
}
.chapter-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(42% 46% at 30% 50%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 72%);
}
.chapter-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
}
.chapter.flip .chapter-grid {
  direction: rtl;
}
.chapter.flip .chapter-grid > * {
  direction: ltr;
}

.vitrine {
  display: flex;
  justify-content: center;
}
.case {
  width: 100%;
  max-width: 420px;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: clamp(20px, 2.6vw, 30px);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(240, 235, 225, 0.55));
  position: relative;
}
.case::before,
.case::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid color-mix(in srgb, var(--accent) 70%, transparent);
  pointer-events: none;
}
.case::before {
  top: -1px;
  left: -1px;
  border-right: 0;
  border-bottom: 0;
  border-top-left-radius: 14px;
}
.case::after {
  bottom: -1px;
  right: -1px;
  border-left: 0;
  border-top: 0;
  border-bottom-right-radius: 14px;
}
.case-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.case-no {
  font-size: 0.8rem;
  color: var(--accent);
  letter-spacing: 0.24em;
  font-weight: 500;
}
.case-emotion {
  font-family: var(--font-hand);
  color: var(--muted);
  font-size: 0.92rem;
  letter-spacing: 0.1em;
}
.case-stage {
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  margin: 1.2rem 0;
}
.spot {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 50% 44%, color-mix(in srgb, var(--accent) 18%, transparent), color-mix(in srgb, var(--accent) 4%, transparent) 46%, transparent 72%),
    radial-gradient(circle at 50% 50%, var(--surface-2), var(--ink) 82%);
  border: 1px solid color-mix(in srgb, var(--accent) 26%, transparent);
}
.spot :deep(svg) {
  width: 56%;
  height: 56%;
  color: var(--accent);
  filter: drop-shadow(0 0 22px color-mix(in srgb, var(--accent) 45%, transparent));
}
.case-label {
  border-top: 1px solid var(--line);
  padding-top: 1.1rem;
}
.case-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.12rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.7rem;
  color: var(--ivory);
}
.copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
.emo-word {
  font-size: clamp(3.2rem, 8vw, 6rem);
  color: var(--accent);
}
.hook {
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 700;
}
.prose {
  margin-top: 0.3rem;
}
.chapter.climax .case {
  border-color: rgba(55, 179, 160, 0.32);
}

@media (max-width: 820px) {
  .chapter-grid,
  .chapter.flip .chapter-grid {
    grid-template-columns: 1fr;
    direction: ltr;
  }
  .vitrine {
    order: -1;
  }
  .emo-word {
    font-size: clamp(2.8rem, 15vw, 4.4rem);
  }
}
</style>
