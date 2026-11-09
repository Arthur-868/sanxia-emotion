export const site = {
  title: '峡江记忆',
  subtitle: '人机互动中三峡巴蜀 IP 文创视频设计',
  tagline: '四件文物 · 四位情绪安慰师',
  heroTitle: '峡江记忆',
  climax: '它把不一样的美，熔在了一起。'
}

export const artifacts = [
  {
    no: '01',
    emotion: '喜',
    role: '喜 · 治愈你的笑',
    name: '击鼓说唱俑',
    era: '东汉',
    intro: '愁眉苦脸干嘛？来，我给你唱一段，保准你笑出来。',
    accent: 'turquoise',
    image: './artifact-01.png',
    kind: 'figurine',
    suggestions: ['我不开心', '我压力好大', '好无聊'],
    faq: [
      { kw: ['不开心', '难过', '伤心', '低落'], reply: '来，先跟我笑一个。笑是会传染的——我笑了两千年，还没停过。' },
      { kw: ['压力', '焦虑', '烦'], reply: '把烦心事先放一放，听我敲两下鼓。天大的事，也大不过今天这一笑。' },
      { kw: ['无聊', '没意思'], reply: '无聊？那我现编一段，包你捧腹。' }
    ]
  },
  {
    no: '02',
    emotion: '怒',
    role: '怒 · 平复你的火气',
    name: '东汉乌杨石阙',
    era: '汉魏',
    intro: '有火气？来，站我面前。我站了两千年，你的火，烧不穿我。',
    accent: 'turquoise',
    image: './artifact-02.png',
    kind: 'que',
    suggestions: ['我很生气', '我受了委屈', '我想发火'],
    faq: [
      { kw: ['生气', '愤怒', '火大', '气死'], reply: '先别急着发作。我站了两千年，风霜雨雪都见过，你的火，也烧不穿我。' },
      { kw: ['委屈', '不公平'], reply: '石头的硬，是把委屈扛下来，而不是砸出去。慢慢说，我在听。' },
      { kw: ['发火', '爆发'], reply: '深呼吸，数到三，再决定要不要发这通火。' }
    ]
  },
  {
    no: '03',
    emotion: '哀',
    role: '哀 · 抱抱不一样的你',
    name: '青铜鸟形尊',
    era: '战国',
    intro: '觉得自己不一样、很孤单？没关系，我也是。',
    accent: 'turquoise',
    image: './artifact-03.png',
    kind: 'bird',
    suggestions: ['我觉得孤单', '我和别人不一样', '我想哭'],
    faq: [
      { kw: ['孤单', '孤独', '一个人'], reply: '你看我，鱼嘴、鹰鼻、凤冠、鸭脚，谁都不像。可我不孤单，我带着好多好多朋友。你也有。' },
      { kw: ['不一样', '特别', '异类'], reply: '不一样，不是坏事。把它们放在一起，会变成一种新的、了不起的美。' },
      { kw: ['难过', '想哭', '失去'], reply: '难过就难过一会儿。我把自己熔成了神鸟，你也会把难过，熔成自己的翅膀。' }
    ]
  },
  {
    no: '04',
    emotion: '乐',
    role: '乐 · 陪你把日子过好',
    name: '青铜三羊尊',
    era: '商代',
    intro: '三羊开泰，好运常来。慢慢说，我听着。',
    accent: 'turquoise',
    image: './artifact-04.png',
    kind: 'zun',
    suggestions: ['我今天很开心', '怎么过得幸福', '日子好平淡'],
    faq: [
      { kw: ['开心', '快乐', '高兴'], reply: '好心情值得被记住。三羊开泰，愿你的开心像青铜一样长久。' },
      { kw: ['幸福', '满足'], reply: '幸福不用很大。三只羊，一口酒，一个好日子——这就是我眼里的乐。' },
      { kw: ['平淡', '日常'], reply: '把日子过得好看，就是最大的本事。我们用了三千年，还在学。' }
    ]
  }
]

export const accentVar = {
  patina: 'var(--turquoise)',
  gold: 'var(--turquoise)',
  cinnabar: 'var(--turquoise)',
  ivory: 'var(--turquoise)',
  turquoise: 'var(--turquoise)'
}
