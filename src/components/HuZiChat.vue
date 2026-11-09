<script setup>
import { ref, nextTick } from 'vue'
import ipCutout from '../assets/ip-cutout.png'

const messages = ref([
  { role: 'hu', text: '你好呀，我是虎子。想知道三峡博物馆的什么？' }
])
const input = ref('')
const typing = ref(false)
const boxEl = ref(null)

const suggestions = [
  '鸟形尊是什么？',
  '虎钮錞于是做什么的？',
  '大溪彩陶有多老？',
  '三峡博物馆在哪？'
]

const FAQ = [
  {
    kw: ['鸟', '神鸟', '不一样', '尊'],
    reply: '你问的是那只「什么都是、又什么都不是」的神鸟。它身上有鱼嘴、鹰喙鼻、兽耳、凤冠、鸽身、鸭脚——巴人把六种生灵，熔进了同一件青铜里。所以它不孤单，它带着好多好多朋友。'
  },
  {
    kw: ['虎钮錞于', '錞于', '鼓', '虎'],
    reply: '青铜虎钮錞于，是巴人的「錞于王」——一只老虎蹲在鼓顶。敲响它，山会回应，水会回应，人心也会回应。'
  },
  {
    kw: ['大溪', '彩陶', '陶'],
    reply: '大溪文化彩陶，有六千多岁了。红陶上描几笔黑彩，画的是水波和鱼纹。那时候的人，已经懂得把日子过得好看。'
  },
  {
    kw: ['景云碑', '碑'],
    reply: '景云碑是长江三峡唯一出土的汉碑，碑上三百六十七个字，把两千年前的人名留到了今天。时间带不走的，石头替你留着。'
  },
  {
    kw: ['博物馆', '在哪', '地址', '参观', '三峡'],
    reply: '重庆中国三峡博物馆，坐落在重庆渝中区、长江边上。镇馆之宝有青铜鸟形尊、虎钮錞于、景云碑、大溪彩陶这些。'
  },
  {
    kw: ['情绪'],
    reply: '四件文物，四种情绪——温柔、勇气、铭记、归属。它们各有各的不一样，放在一起，就成了一种新的美。'
  },
  {
    kw: ['视频', '交互', '短片', '长视频'],
    reply: '我们有交互短视频和交互长视频：短视频可以点选分支，长视频由我串讲，观众也能参与选情节。'
  },
  {
    kw: ['虎子', '你是谁'],
    reply: '我是虎子，峡江记忆的主角色 IP，也是这场情绪之旅的讲解员。你刚才说的每一个字，我都听见了。'
  },
  {
    kw: ['你好', '嗨', 'hi', 'hello', '在吗'],
    reply: '你好呀，我在这儿。想问点什么？'
  },
  {
    kw: ['谢谢', '感谢'],
    reply: '不客气。有空常来，和文物们说说话。'
  }
]

const fallback = '这个问题我还在学。不过你可以问我：鸟形尊、虎钮錞于、大溪彩陶、景云碑，或者三峡博物馆本身。'

function matchReply(t) {
  const s = t.toLowerCase()
  for (const item of FAQ) {
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
    messages.value.push({ role: 'hu', text: matchReply(t) })
    typing.value = false
    scrollBottom()
  }, 650 + Math.random() * 400)
}
</script>

<template>
  <div class="chat">
    <div class="chat-head">
      <span class="chat-avatar"><img :src="ipCutout" alt="虎子头像" /></span>
      <div class="chat-who">
        <span class="chat-name">虎子 · AI 讲解员</span>
        <span class="chat-status"><i class="dot"></i>在线</span>
      </div>
    </div>

    <div ref="boxEl" class="chat-body" aria-live="polite">
      <div
        v-for="(m, i) in messages"
        :key="i"
        class="msg"
        :class="m.role === 'user' ? 'msg-user' : 'msg-hu'"
      >
        <span v-if="m.role === 'hu'" class="msg-avatar"><img :src="ipCutout" alt="" /></span>
        <p class="bubble">{{ m.text }}</p>
      </div>
      <div v-if="typing" class="msg msg-hu">
        <span class="msg-avatar"><img :src="ipCutout" alt="" /></span>
        <p class="bubble typing"><i></i><i></i><i></i></p>
      </div>
    </div>

    <div class="chat-sug">
      <button v-for="s in suggestions" :key="s" class="chip" @click="send(s)">{{ s }}</button>
    </div>

    <form class="chat-input" @submit.prevent="send()">
      <input
        v-model="input"
        type="text"
        placeholder="问问虎子关于三峡博物馆的问题…"
        aria-label="输入问题"
      />
      <button type="submit" class="send" :disabled="typing">发送</button>
    </form>
  </div>
</template>

<style scoped>
.chat {
  width: 100%;
  max-width: 760px;
  margin: clamp(2.5rem, 6vw, 4.5rem) auto 0;
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
  overflow: hidden;
  border: 1px solid var(--turquoise);
  flex-shrink: 0;
}
.chat-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 16%;
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
.chat-status {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--muted);
}
.chat-status .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--turquoise);
}

.chat-body {
  height: 320px;
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
  overflow: hidden;
  border: 1px solid var(--line);
  flex-shrink: 0;
  margin-top: 2px;
}
.msg-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 16%;
}
.bubble {
  padding: 0.65rem 0.95rem;
  border-radius: 12px;
  font-size: 0.92rem;
  line-height: 1.7;
  white-space: pre-wrap;
}
.msg-hu .bubble {
  background: var(--surface-2);
  color: var(--ivory);
  border: 1px solid var(--line);
  border-top-left-radius: 4px;
}
.msg-user .bubble {
  background: var(--turquoise);
  color: #ffffff;
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
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.92rem;
  cursor: pointer;
}
.send:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
