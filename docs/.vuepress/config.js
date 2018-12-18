module.exports = {
  title: '黄敬鑫',
  description: '前端学习历程',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
  ],
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
            text: 'npm',
            link: '/frontEnd/npm/'
          },
        ]
      },
      {
        text: '记事本',
        items: [{
            text: 'Vuepress',
            link: '/notes/vuepress/'
          },
          {
            text: '常用符号',
            link: '/notes/symbol/special-symbols.md'
          },
          {
            text: 'git',
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
        link: '/development/Vue环境搭建.md'
      },
    ]



  }
}