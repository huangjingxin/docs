module.exports = {
  title: '黄敬鑫',
  description: '学习历程',
  serviceWorker: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }],
  ],
  port: 2400,
  dest: 'public',

  themeConfig: {
    lastUpdated: '最后更新',
    sidebar: 'auto',
    searchMaxSuggestions: 8,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容可用",
        buttonText: "刷新"
      }
    },
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '前端',
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
        items: [{
            text: 'Windows',
            link: '/notes/windows/'
          },
          {
            text: 'Linux',
            link: '/notes/linux/'
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
            text: '学习笔记',
            link: '/notes/misc/'
          },
        ]
      },
      {
        text: '开发环境',
        link: '/development.md'
      },
    ],
    // edit for github
    repo: 'https://github.com/huangjingxin',
    repoLabel: 'Github',
    docsRepo: 'huangjingxin/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '我来找错'


  }
}