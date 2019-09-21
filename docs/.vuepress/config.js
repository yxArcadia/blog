module.exports = {
  title: '网站标题',
  description: '网站描述',
  // 注入到当前页面的 HTML <head> 中的标签
  port:80,//端口
  base:"/blog/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  //base: 'blog', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    repo: 'yxArcadia/blog',
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间
	nav:[// 添加导航栏
      { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      { text: '博客', link: 'http://www.baidu.com/' }, // 外部链接
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/guide/': [
        {
          title: 'spring 基础',
          collapsable: true,
          children: [
            'spring/test1',
            'spring/test2',
            'spring/test3',
            'spring/test4',
          ]
        },
        {
          title: 'spring mvc框架',
          collapsable: true,
          children: [
          ]
        },
        {
          title: 'spring boot框架',
          collapsable: true,
          children: [
          ]
        },
        {
          title: 'spring cloud框架',
          collapsable: true,
          children: [
          ]
        }
      ],
      '/knowledge/': [
        {
          title: 'java se',
          collapsable: false,
          children: [
          ]
        }
      ]
    }
  }
};