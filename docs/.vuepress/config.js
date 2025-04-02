module.exports = {
  title: '示例文档',
  description: '基于VuePress的知识管理框架',
  theme: 'vdoing',
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: '分类导航',
        link: '/categories/'
      },
      {
        text: '使用说明',
        link: '/guide/',
        items: [
          { text: '快速上手', link: '/pages/quick-start/' },
          { text: '基本结构', link: '/pages/basic-structure/' },
          { text: '评论功能配置', link: '/pages/comment-config/' }
        ]
      },
      {
        text: '自习室',
        link: '/study/',
        items: [
          { text: '学习笔记', link: '/pages/april-2025/' }
        ]
      },
      { text: '关于', link: '/about/' }
    ],
    // 侧边栏配置 - 会根据页面结构自动生成
    sidebarDepth: 2,
    sidebar: 'structuring',
    // 页面底部信息
    footer: {
      createYear: 2023,
      copyrightInfo: 'MIT Licensed | Copyright © 2023'
    },
    // 作者信息
    author: {
      name: '示例作者',
      link: 'https://github.com/'
    },
    // 博客配置
    blogInfo: {
      blogger: '示例作者',
      avatar: '/img/logo.png'
    },
    // 最后更新时间
    lastUpdated: '上次更新',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 目录结构
    category: true,
    tag: true,
    archive: true
  },
  // Markdown配置
  markdown: {
    lineNumbers: true
  },
  // 插件配置
  plugins: [
    ['thirdparty-search', {
      thirdparty: [
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=',
        }
      ]
    }],
    ['vuepress-plugin-baidu-autopush'],
    ['one-click-copy', {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: '复制成功',
      duration: 1000,
      showInMobile: false
    }],
    ['demo-block', {
      settings: {
        jsfiddle: false,
        codepen: true,
        horizontal: false
      }
    }],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: 'Ov23liloSwwVTBxIVaCj',
          clientSecret: '3a152cb7799f09ebe5498333ba3f37c52f9937d1',
          repo: 'yicode-code.github.io', // GitHub 仓库
          owner: 'yidou-code', // GitHub仓库所有者
          admin: ['yidou-code','new-info'], // 对仓库有写权限的人
          distractionFreeMode: false,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
          body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>' // GitHub issue 的内容
        }
      }
    ]
  ]
}
