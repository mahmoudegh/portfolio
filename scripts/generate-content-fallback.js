const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const data = {
  work: JSON.parse(fs.readFileSync(path.join(root, "data/work.json"), "utf8")),
  skills: JSON.parse(fs.readFileSync(path.join(root, "data/skills.json"), "utf8")),
};
const output = `// Generated from data/work.json and data/skills.json. Do not edit directly.\nwindow.portfolioContentFallback = ${JSON.stringify(data, null, 2)};\n`;

fs.writeFileSync(path.join(root, "assets/js/content-fallback.js"), output);
