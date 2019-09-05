// https://docusaurus.io/docs/site-config

// This site does not use built-in docusuarus versioning or docusaurus publish
// projectriff.io is generated by running a docusarus build per version
// See /website/README.md for details about adding versions

const siteConfig = {

  // for gh-pages publishing using `npm run publish`
  projectName: 'projectriff.io',
  organizationName: 'projectriff',
  cname: 'projectriff.io',

  title: 'riff is for functions',
  tagline: '',

  url: 'https://projectriff.io',
  baseUrl: '/',

  docsUrl: 'docs',
  customDocsPath: 'docs',
  docsSideNavCollapsible: true,
  editUrl: 'https://github.com/projectriff/projectriff.io/blob/master/docs/',

  // used only in pages/en/versions.js
  versions: [
    { name:'v0.5.x (snapshots)', url:'docs/v0.5/getting-started' },
    { name:'v0.4.x', url:'docs/v0.4/getting-started' },
    { name:'v0.3.x', url:'docs/v0.3/getting-started' }
  ],

  headerLinks: [
    {doc: 'v0.4/getting-started', label: 'Docs'},
    {blog: true, label: 'Blog'},
    {href: 'https://github.com/projectriff', label: 'GitHub', external: true},
  ],

  headerIcon: 'img/riff-white.svg',
  footerIcon: 'img/riff-white.svg',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#52adc8',
    secondaryColor: '#111111',
  },

  // theme for syntax highlighting
  highlight: {
    theme: 'default',
    hljs: function(hljs) {
      hljs.configure({languages: []});
    },
  },

  // on-page navigation
  onPageNav: 'separate',

  // no .html extensions
  cleanUrl: true,

  // open Graph and twitter card images
  ogImage: 'img/riff.svg',
  twitterImage: 'img/riff.svg',
  
  // show all blog posts in sidebar
  blogSidebarCount: '5',

  // add code copy-to-clipboard
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ]
};

module.exports = siteConfig;
