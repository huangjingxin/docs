module.exports = {
  title: '黄敬鑫',
  description: '前端学习历程',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
  ],
  port: 2005,
  themeConfig: {
    lastUpdated: '最后更新',
    sidebar: 'auto',
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '前端文档',
        items: [{
            text: 'Vue',
            link: '/frontEnd/vue/Vue.md'
          },
          {
            text: 'Tailwind',
            link: '/frontEnd/tailwind/tailwind.md'
          },
          {
            text: 'Animate',
            link: '/frontEnd/animate/animate.md'
          },
          {
            text: 'Npm',
            link: '/frontEnd/npm/'
          },
          {
            text: '学习笔记',
            link: '/frontEnd/misc/'
          },
        ]
      },
      {
        text: '记事本',
        items: [
          {
            text: 'Windows',
            link: '/notes/windows/'
          },
          {
            text: 'Vuepress',
            link: '/notes/vuepress/'
          },
          {
            text: '常用符号',
            link: '/notes/symbol/special-symbols.md'
          },
          {
            text: 'Git',
            link: '/notes/git/'
          },
          {
            text: '其它',
            link: '/notes/misc/'
          },
        ]
      },

      {
        text: '开发环境',
        link: '/development/Vue.md'
      },
    ]



  }
}