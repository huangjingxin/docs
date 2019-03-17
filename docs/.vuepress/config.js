module.exports = {
  title: '黄敬鑫',
  description: '前端学习历程',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
  ],
  port: 2400,
  dest:'public',
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
            text: 'JavaScript',
            link: '/frontend/javascript/'
          },
          {
            text: 'CSS',
            link: '/frontend/css/'
          },
          {
            text: 'HTML',
            link: '/frontend/html/'
          },
          {
            text: '学习笔记',
            link: '/frontend/notes/'
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
            text: 'Git',
            link: '/notes/git/'
          },
          {
            text: '常用符号',
            link: '/notes/symbol/special-symbols.md'
          },
          {
            text: '其它',
            link: '/notes/misc/'
          },
        ]
      },
      {
        text: '开发环境',
        link: '/development/vue-cli.md'
      },
    ]



  }
}