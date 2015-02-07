Package.describe({
  summary: "A library of intersection algorithms covering all SVG shape types",
  version: '0.1.1',
  name: "solo999:kld-intersections",
  git: "https://github.com/solo999/meteor-kld-intersections"
});

Npm.depends({
  "kld-intersections": "0.1.1"
});

Package.onUse(function (api) {

  api.add_files([
    'lib/kld-intersections.js',
  ], ['client','server']);
  
  api.export([
    'Intersection'
  ], ['client','server']);
});
