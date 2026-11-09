<script setup>
import { site } from '../data/artifacts'

const cells = [
  { label: 'IP · 虎子', href: '#ip' },
  { label: '情绪安慰师', href: '#artifacts' },
  { label: '交互视频', href: '#video' }
]
</script>

<template>
  <header class="hdr">
    <a class="cell brand" href="#top">
      <span class="brand-name">{{ site.title }}</span>
    </a>
    <a v-for="c in cells" :key="c.href" class="cell" :href="c.href">{{ c.label }}</a>
  </header>
</template>

<style scoped>
.hdr {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  height: 52px;
  box-shadow: 0 4px 16px rgba(28, 33, 29, 0.12);
}
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #889968;
  color: #1c211d;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-align: center;
  transition: background 0.2s var(--ease), color 0.2s var(--ease);
}
.cell:hover {
  background: #5e6b44;
  color: #ffffff;
}
.brand {
  justify-content: flex-start;
  padding-left: clamp(18px, 4vw, 44px);
}
.brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: 0.12em;
  white-space: nowrap;
}
@media (max-width: 640px) {
  .hdr {
    height: 48px;
  }
  .cell {
    font-size: 0.78rem;
    letter-spacing: 0.02em;
  }
  .brand-name {
    letter-spacing: 0.06em;
  }
}
</style>
