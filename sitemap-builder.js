require("babel-register")({
    presets: ["es2015", "react"]
  });
  
  const router = require('./src/AppRouter').default;
  const Sitemap = require('react-router-sitemap').default;
  
  (
      new Sitemap(router)
          .build('https://homefirstautomation.vercel.app')
          .save('./public/sitemap.xml')
  );