module.exports = {
  title: '黄敬鑫',
  description: '个人文档',
  serviceWorker: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.png'
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
        message: "发现新内容可用",
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
        text: 'Node',
        link: '/frontend/node/'
      },
      {
        text: 'Note',
        link: '/frontend/note/'
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
        text: 'Server',
        link: '/notes/server/'
      },
      {
        text: 'Software',
        link: '/notes/software/'
      },
      {
        text: 'Note',
        link: '/notes/note/'
      },
      ]
    },
    {
      text: '开发环境',
      link: '/development.md'
    },
    ],
    // edit for github
    // repo: 'https://github.com/huangjingxin',
    repoLabel: 'Github',
    docsRepo: 'huangjingxin/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '我来找错'
  }
}