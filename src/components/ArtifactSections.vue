<script setup>
import { artifacts } from '../data/artifacts'
import ArtifactChat from './ArtifactChat.vue'
</script>

<template>
  <section id="artifacts" class="counselors">
    <div class="counselors-head">
      <p class="kicker" v-reveal>情绪咨询 · 喜怒哀乐</p>
      <h2 class="h-display" v-reveal>虎子引见的四位安慰师</h2>
    </div>
    <div class="counselor" v-for="(a, i) in artifacts" :key="a.no" :id="`counselor-${i}`">
      <div class="counselor-grid">
        <div class="intro" v-reveal>
          <p class="kicker">{{ a.no }} / {{ String(artifacts.length).padStart(2, '0') }} · 情绪安慰师</p>
          <h3 class="emo emotion">{{ a.emotion }}</h3>
          <h4 class="h-display name">{{ a.name }}</h4>
          <p class="era">{{ a.era }}</p>
          <p class="prose role">{{ a.role }}</p>
          <div class="img-slot scallop" :class="{ filled: a.image }">
            <img v-if="a.image" :src="a.image" :alt="`${a.name} 图片`" />
            <div v-else class="img-empty">
              <svg class="img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="8.5" cy="9.5" r="1.6" />
                <path d="M21 17 L15.5 11.5 L5 20" />
              </svg>
              <p class="img-hint">文物图片</p>
              <p class="img-note">建议 4 : 3 · 待嵌入</p>
            </div>
          </div>
        </div>
        <ArtifactChat :artifact="a" v-reveal />
      </div>
    </div>
  </section>
</template>

<style scoped>
.counselors {
  padding: clamp(60px, 8vw, 100px) clamp(24px, 7vw, 96px);
}
.counselors-head {
  max-width: 720px;
  margin-bottom: clamp(1.5rem, 4vw, 3rem);
}
.counselors-head h2 {
  font-size: clamp(1.9rem, 4.4vw, 3rem);
  margin-top: 0.6rem;
}
.counselor {
  padding: clamp(2.5rem, 6vw, 4.5rem) 0;
  border-top: 1px solid var(--line);
  scroll-margin-top: 70px;
}
.counselor-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
}
.intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
}
.emotion {
  font-size: clamp(3.5rem, 9vw, 6.5rem);
  color: var(--turquoise);
}
.name {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
}
.era {
  font-size: 0.82rem;
  color: var(--muted);
  letter-spacing: 0.08em;
}
.role {
  color: var(--muted);
}
.img-slot {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 4 / 3;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: linear-gradient(180deg, var(--surface), var(--surface-2));
  position: relative;
  overflow: hidden;
  margin-top: 1.4rem;
  display: grid;
  place-items: center;
}
.img-slot::before,
.img-slot::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  border: 1px solid var(--turquoise);
  pointer-events: none;
}
.img-slot::before {
  top: -1px;
  left: -1px;
  border-right: 0;
  border-bottom: 0;
  border-top-left-radius: 14px;
}
.img-slot::after {
  bottom: -1px;
  right: -1px;
  border-left: 0;
  border-top: 0;
  border-bottom-right-radius: 14px;
}
.img-slot img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.img-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
}
.img-icon {
  width: 42px;
  height: 42px;
  color: var(--turquoise);
  opacity: 0.7;
}
.img-hint {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--muted);
}
.img-note {
  font-size: 0.76rem;
  color: var(--muted);
  letter-spacing: 0.08em;
}
@media (max-width: 820px) {
  .counselor-grid {
    grid-template-columns: 1fr;
  }
}
</style>
