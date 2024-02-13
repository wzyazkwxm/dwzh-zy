window.config = {
  // 网站标题
  siteName: '开源爱好者订阅转换',
  // API 地址
  apiUrl: 'https://cfysjd.wzry623090.workers.dev',
  // 短域名服务地址
  shortUrl: 'https://suo.yt',
 // 主订阅规则 
  remoteConfigName: '私房菜'
  remoteConfigUrl: 'https://cdn.jsdelivr.net/gh/NotSFC/subconverter-config@main/external-config/sfc.ini'
//  DNS防泄漏规则
  remoteConfigName:'DNS防泄漏'
  remoteConfigUrl :'https://cf.buliang0.cf/clash-rules/nodnsleak.ini',

  // 首页菜单
  menuItem: [
    {
      title: '首页',
      link: '/',
      target: '',
    },
    {
      title: 'GitHub',
      link: 'https://github.com/stilleshan/subweb',
      target: '_blank',
    },
  ],
};
