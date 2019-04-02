module.exports = {
  title: '黄敬鑫',
  description: '你的奋斗，终将伟大',
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
            text: '其它',
            link: '/notes/misc/'
          },
        ]
      },
      {
        text: '开发环境',
        link: '/development.md'
      },
    ],
    repo: 'https://github.com/huangjingxin/docs',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'huangjingxin/docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '我来找错'


  }
}