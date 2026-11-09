<script setup>
defineProps({
  progress: { type: Number, default: 0 },
  active: { type: Number, default: -1 },
  total: { type: Number, default: 6 }
})
defineEmits(['go'])
</script>

<template>
  <nav class="rail" aria-label="章节导航">
    <div class="rail-track" aria-hidden="true">
      <span class="rail-fill" :style="{ height: `${Math.round(progress * 100)}%` }"></span>
    </div>
    <ol class="rail-dots">
      <li v-for="n in total" :key="n">
        <button
          class="rail-dot"
          :class="{ active: active === n - 1 }"
          :aria-label="`跳转到第 ${n} 章`"
          :aria-current="active === n - 1 ? 'true' : undefined"
          @click="$emit('go', n - 1)"
        ></button>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.rail {
  position: fixed;
  right: clamp(14px, 2vw, 32px);
  top: 50%;
  transform: translateY(-50%);
  z-index: 40;
  display: flex;
  gap: 12px;
  align-items: center;
}
.rail-track {
  position: relative;
  width: 1px;
  height: 40vh;
  background: var(--line);
}
.rail-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--turquoise);
  transition: height 0.2s linear;
}
.rail-dots {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.rail-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid var(--muted);
  background: transparent;
  cursor: pointer;
  transition: background 0.25s var(--ease), border-color 0.25s var(--ease), transform 0.25s var(--ease);
}
.rail-dot:hover {
  border-color: var(--turquoise);
  transform: scale(1.25);
}
.rail-dot.active {
  background: var(--turquoise);
  border-color: var(--turquoise);
}
@media (max-width: 720px) {
  .rail {
    display: none;
  }
}
</style>
