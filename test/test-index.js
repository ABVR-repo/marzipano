function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./', true, /\.js$/));
requireAll(require.context('./suite', true, /\.js$/));
// requireAll(require.context('./suite/**', true, /\.js$/));