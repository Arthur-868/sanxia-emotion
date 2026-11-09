<script setup>
</script>

<template>
  <section id="video" class="video section">
    <div class="video-head">
      <p class="kicker" v-reveal>AIGC · 交互视频</p>
      <h2 class="h-display" v-reveal>让观众，也参与讲述</h2>
      <p class="prose" v-reveal>
        交互短视频用于平台传播，支持点击与分支选择；交互长视频由「虎子」串讲文物故事，观众参与情节选择。AIGC 辅助生成，低成本、可持续更新。
      </p>
    </div>
    <div class="stage" v-reveal role="img" aria-label="交互视频占位区域">
      <div class="stage-frame">
        <span class="stage-glyph" aria-hidden="true">▶</span>
        <p class="stage-label">交互视频 · 预留位置</p>
        <p class="stage-note">16 : 9 · 点击 / 分支选择 · 在此嵌入成片</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video {
  gap: clamp(2rem, 5vw, 4rem);
}
.video-head {
  max-width: 720px;
}
.video-head h2 {
  font-size: clamp(1.9rem, 4.4vw, 3.2rem);
  margin: 0.6rem 0 1.1rem;
}
.stage {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}
.stage-frame {
  aspect-ratio: 16 / 9;
  border: 1px solid var(--line);
  border-radius: 12px;
  background:
    radial-gradient(50% 60% at 50% 40%, rgba(55, 179, 160, 0.08), transparent 70%),
    var(--surface);
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 0.6rem;
  text-align: center;
}
.stage-glyph {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid var(--turquoise);
  color: var(--turquoise);
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
}
.stage-label {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--ivory);
}
.stage-note {
  font-size: 0.82rem;
  color: var(--muted);
  letter-spacing: 0.08em;
}
</style>
