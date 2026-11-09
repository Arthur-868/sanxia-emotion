<script setup>
import { ref, nextTick } from 'vue'
import ArtifactFigure from './ArtifactFigure.vue'

const props = defineProps({
  artifact: { type: Object, required: true }
})

const messages = ref([{ role: 'a', text: props.artifact.intro }])
const input = ref('')
const typing = ref(false)
const boxEl = ref(null)

const shared = [
  { kw: ['你好', '嗨', 'hi', 'hello'], reply: '你好呀，我在呢。想聊点什么？' },
  { kw: ['你是谁', '你是什么', '介绍'], reply: `我是「${props.artifact.name}」，${props.artifact.role}。` },
  { kw: ['谢谢', '感谢'], reply: '不客气。有空常来找我聊聊。' }
]
const fallback = '我还在慢慢学。你可以跟我说说你的心情，或者问问我是谁。'

function match(t) {
  const s = t.toLowerCase()
  for (const item of [...props.artifact.faq, ...shared]) {
    if (item.kw.some((k) => s.includes(k))) return item.reply
  }
  return fallback
}

function scrollBottom() {
  nextTick(() => {
    if (boxEl.value) boxEl.value.scrollTop = boxEl.value.scrollHeight
  })
}

function send(text) {
  const t = (text ?? input.value).trim()
  if (!t || typing.value) return
  messages.value.push({ role: 'user', text: t })
  input.value = ''
  typing.value = true
  scrollBottom()
  setTimeout(() => {
    messages.value.push({ role: 'a', text: match(t) })
    typing.value = false
    scrollBottom()
  }, 600 + Math.random() * 400)
}
</script>

<template>
  <div class="chat">
    <div class="chat-head">
      <span class="chat-avatar"><ArtifactFigure :kind="artifact.kind" /></span>
      <div class="chat-who">
        <span class="chat-name">{{ artifact.name }}</span>
        <span class="chat-role">{{ artifact.role }}</span>
      </div>
    </div>
    <div ref="boxEl" class="chat-body" aria-live="polite">
      <div v-for="(m, i) in messages" :key="i" class="msg" :class="m.role === 'user' ? 'msg-user' : 'msg-a'">
        <span v-if="m.role === 'a'" class="msg-avatar"><ArtifactFigure :kind="artifact.kind" /></span>
        <p class="bubble">{{ m.text }}</p>
      </div>
      <div v-if="typing" class="msg msg-a">
        <span class="msg-avatar"><ArtifactFigure :kind="artifact.kind" /></span>
        <p class="bubble typing"><i></i><i></i><i></i></p>
      </div>
    </div>
    <div class="chat-sug">
      <button v-for="s in artifact.suggestions" :key="s" class="chip" @click="send(s)">{{ s }}</button>
    </div>
    <form class="chat-input" @submit.prevent="send()">
      <input v-model="input" type="text" placeholder="和这位安慰师说说你的心情…" aria-label="输入" />
      <button type="submit" class="send" :disabled="typing">发送</button>
    </form>
  </div>
</template>

<style scoped>
.chat {
  width: 100%;
  max-width: 640px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: linear-gradient(180deg, var(--surface), var(--surface-2));
  overflow: hidden;
}
.chat-head {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 1.2rem;
  border-bottom: 1px solid var(--line);
}
.chat-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--turquoise);
  display: grid;
  place-items: center;
  background: var(--surface);
  flex-shrink: 0;
}
.chat-avatar :deep(svg) {
  width: 62%;
  height: 62%;
  color: var(--turquoise);
}
.chat-who {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}
.chat-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.98rem;
  color: var(--ivory);
}
.chat-role {
  font-size: 0.75rem;
  color: var(--muted);
}
.chat-body {
  height: 300px;
  overflow-y: auto;
  padding: 1.2rem 1.2rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.msg {
  display: flex;
  gap: 0.6rem;
  max-width: 86%;
}
.msg-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}
.msg-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  background: var(--surface);
  flex-shrink: 0;
  margin-top: 2px;
}
.msg-avatar :deep(svg) {
  width: 62%;
  height: 62%;
  color: var(--turquoise);
}
.bubble {
  padding: 0.65rem 0.95rem;
  border-radius: 12px;
  font-size: 0.92rem;
  line-height: 1.7;
  white-space: pre-wrap;
}
.msg-a .bubble {
  background: var(--surface-2);
  color: var(--ivory);
  border: 1px solid var(--line);
  border-top-left-radius: 4px;
}
.msg-user .bubble {
  background: var(--turquoise);
  color: #1c211d;
  border-top-right-radius: 4px;
}
.bubble.typing {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0.85rem 1rem;
}
.typing i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--muted);
  animation: blink 1.2s infinite;
}
.typing i:nth-child(2) { animation-delay: 0.2s; }
.typing i:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink {
  0%, 80%, 100% { opacity: 0.2; }
  40% { opacity: 1; }
}
.chat-sug {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.4rem 1.2rem 0.9rem;
}
.chip {
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 0.82rem;
  cursor: pointer;
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease);
}
.chip:hover {
  color: var(--turquoise);
  border-color: var(--turquoise);
}
.chat-input {
  display: flex;
  gap: 0.6rem;
  padding: 0.9rem 1.2rem 1.2rem;
  border-top: 1px solid var(--line);
}
.chat-input input {
  flex: 1;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ivory);
  font-family: var(--font-body);
  font-size: 0.92rem;
}
.chat-input input:focus {
  outline: 2px solid var(--turquoise);
  outline-offset: 1px;
}
.send {
  padding: 0 1.4rem;
  border-radius: 10px;
  border: none;
  background: var(--turquoise);
  color: #1c211d;
  font-family: var(--font-body);
  font-size: 0.92rem;
  cursor: pointer;
}
.send:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
