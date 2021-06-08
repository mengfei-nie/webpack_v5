const requireContent = require.context('./image/svg', true, /\.svg$/);

requireContent.keys().forEach((filename) => {
  requireContent(filename);
});
