// generate-status.js
const fs = require('fs');
const marked = require('marked');

const md = fs.readFileSync('status.md', 'utf8');
const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>Status</title></head>
     <style>
       body {
         font-family: Arial, sans-serif;
         max-width: 600px;
         margin: auto;
         padding: 1rem;
       }
     </style>
<body>${marked.parse(md)}</body>
</html>`;

fs.writeFileSync('index.html', html);
console.log('index.html generated');

