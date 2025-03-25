
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
    'index.csr.html': {size: 59538, hash: '975f472eb66b9c22be6491857d2dbd4b97f962dc6fe0e73e38a96f43b5ccf27f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: 'd3c3f95ce780facb466a748f7b19740555ad349cd4995040b41fcdb2731105d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Computer_Course/index.html': {size: 83469, hash: 'c82f97454e61fc7292df2f20b00d7f7a52036b0c7958e401f97e7294f3b3dccd', text: () => import('./assets-chunks/Computer_Course_index_html.mjs').then(m => m.default)},
    'styles-U2E6ZNPF.css': {size: 58876, hash: 'VuFmlo8lKeI', text: () => import('./assets-chunks/styles-U2E6ZNPF_css.mjs').then(m => m.default)}
  },
};
