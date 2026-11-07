const fs = require('fs');
const path = require('path');

// GitHub Pages serves this entry point when /conduta/ is opened directly.
const routeDirectory = path.join(__dirname, '..', 'dist', 'conduta');
fs.mkdirSync(routeDirectory, { recursive: true });
fs.copyFileSync(path.join(routeDirectory, '..', 'index.html'), path.join(routeDirectory, 'index.html'));
