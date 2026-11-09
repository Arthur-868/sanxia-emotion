<script setup>
import ipCutout from '../assets/ip-cutout.png'
import HuZiChat from './HuZiChat.vue'
import ipVideo from '../assets/ip-intro.mp4'
</script>

<template>
  <section id="ip" class="ip section">
    <div class="ip-grid">
      <div class="ip-copy">
        <p class="kicker" v-reveal>先认识我 · 峡江记忆主角色</p>
        <h2 class="emo ip-name" v-reveal>虎子</h2>
        <h3 class="h-display" v-reveal>你好，我是虎子，带路的那个人</h3>
        <p class="prose" v-reveal>
          我是「峡江记忆」的主角色 IP，三头身虎头虎脑的小男孩。往下走，四位「情绪安慰师」——喜、怒、哀、乐，都由我来给你引见。有我在，你不会迷路。
        </p>
      </div>
      <div class="ip-figure" v-reveal>
        <div class="standee">
          <img :src="ipCutout" alt="虎子 IP 角色形象" />
        </div>
        <p class="standee-cap">虎子 · 峡江记忆主角色</p>
      </div>
    </div>
    <HuZiChat />
    <div class="stage" v-reveal>
      <video class="stage-video" controls preload="metadata">
        <source :src="ipVideo" type="video/mp4" />
        你的浏览器不支持视频播放。
      </video>
      <p class="stage-note">虎子 · IP 自我介绍视频</p>
    </div>
  </section>
</template>

<style scoped>
.ip-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: clamp(2.5rem, 6vw, 6rem);
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}
.ip-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
.ip-name {
  font-size: clamp(3rem, 7vw, 5rem);
  color: var(--gold);
}
.ip-copy h3 {
  font-size: clamp(1.4rem, 2.8vw, 2rem);
  font-weight: 700;
}

.ip-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.standee {
  width: min(300px, 60vw);
  border: 1px solid var(--line);
  border-radius: 16px;
  background:
    radial-gradient(70% 45% at 50% 26%, rgba(15, 125, 111, 0.1), transparent 70%),
    linear-gradient(180deg, var(--surface), var(--surface-2));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 1.4rem;
  overflow: hidden;
}
.standee::before,
.standee::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid var(--gold);
  pointer-events: none;
}
.standee::before {
  top: -1px;
  left: -1px;
  border-right: 0;
  border-bottom: 0;
  border-top-left-radius: 16px;
}
.standee::after {
  bottom: -1px;
  right: -1px;
  border-left: 0;
  border-top: 0;
  border-bottom-right-radius: 16px;
}
.standee img {
  width: 88%;
  height: auto;
  display: block;
  filter: drop-shadow(0 12px 26px rgba(28, 33, 29, 0.16));
}
.standee-cap {
  margin-top: 1rem;
  font-family: var(--font-hand);
  color: var(--muted);
  font-size: 0.88rem;
  letter-spacing: 0.1em;
}

.stage {
  width: 100%;
  max-width: 1100px;
  margin: clamp(3rem, 7vw, 5rem) auto 0;
}
.stage-video {
  width: 100%;
  max-height: 72vh;
  display: block;
  margin: 0 auto;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: #121814;
  box-shadow: 0 18px 44px rgba(28, 33, 29, 0.18);
}
.stage-note {
  font-size: 0.82rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-align: center;
  margin-top: 0.9rem;
}
@media (max-width: 820px) {
  .ip-grid {
    grid-template-columns: 1fr;
  }
  .ip-figure {
    order: -1;
  }
}
</style>
