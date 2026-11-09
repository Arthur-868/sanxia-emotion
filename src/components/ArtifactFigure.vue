<script setup>
defineProps({
  kind: { type: String, required: true }
})
</script>

<template>
  <svg v-if="kind === 'figurine'" class="fig" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="60" cy="26" r="9" />
    <path d="M44 42 Q60 36 76 42 L72 64 Q60 70 48 64 Z" />
    <ellipse cx="60" cy="50" rx="13" ry="15" />
    <path d="M50 66 L46 84 M70 66 L74 84" />
  </svg>

  <svg v-else-if="kind === 'que'" class="fig" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M22 30 H98 L92 40 H28 Z" />
    <rect x="30" y="40" width="60" height="7" />
    <rect x="33" y="47" width="13" height="51" />
    <rect x="74" y="47" width="13" height="51" />
    <path d="M33 98 H87" />
  </svg>

  <svg v-else-if="kind === 'zun'" class="fig" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M36 20 H84 L76 34 H44 Z" />
    <path d="M46 34 H74 L66 88 H54 Z" />
    <path d="M52 88 H68 L71 102 H49 Z" />
    <circle cx="49" cy="44" r="4" />
    <circle cx="60" cy="42" r="4" />
    <circle cx="71" cy="44" r="4" />
  </svg>

  <svg v-else class="fig" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M36 60 C36 78 52 88 62 88 C74 88 86 80 90 66 C92 58 88 50 80 46 L66 44 L54 48 C44 52 36 54 36 60 Z" />
    <path d="M36 62 L24 52 M32 70 L18 66" />
    <path d="M80 46 L82 30 M82 30 L76 26 M82 30 L88 24" />
    <path d="M80 46 C88 42 93 43 94 46" />
    <circle cx="73" cy="47" r="2.4" fill="currentColor" stroke="none" />
    <path d="M54 88 V99 M66 88 V99 M54 99 l-4 3 M50 99 l3 3 M66 99 l-4 3 M62 99 l3 3" />
  </svg>
</template>

<style scoped>
.fig {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
