
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Computer_Course"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 59538, hash: 'b389d1541905bf26fd4e14b7fa567f293e9878b9e57072e7fec6bac183a4febf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: '4027e47f54247ab3d0da6ded0dda5c420cf54395b75f03e77329613b6829ad3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Computer_Course/index.html': {size: 83507, hash: 'd8424b56534b34539d945e9a5803a588198a7be83d26dbcac0e2c27a5645c999', text: () => import('./assets-chunks/Computer_Course_index_html.mjs').then(m => m.default)},
    'styles-U2E6ZNPF.css': {size: 58876, hash: 'VuFmlo8lKeI', text: () => import('./assets-chunks/styles-U2E6ZNPF_css.mjs').then(m => m.default)}
  },
};
