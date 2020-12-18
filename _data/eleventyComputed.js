var hyperspaceClient = null

try {
  hyperspaceClient = new HyperspaceClient()
} catch (err) {
  console.error('Error connecting to Hyperspace:', err)
}

module.exports = {
  rootPath: function(data) {
    // this is used to reliably generate relative URLs in templates
    // eg ${data.rootPath}fonts/index.css
    // will produce fonts/index.css if a file at /
    // and will produce ../fonts/index.css if a file at /sub/
    return data.page.url
      .split('/')
      .filter(function(x) {
        return x;
      })
      .map(function() {
        return '../';
      })
      .join('');
  },
  connected: function (data) {
    return hyperspaceClient && hyperspaceClient.serverReady()
  },
  hyperspaceClient
}
