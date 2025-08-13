// generate-status.js
const fs = require('fs');
const marked = require('marked');

const md = fs.readFileSync('status.md', 'utf8');
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Status</title>
  <!-- Refresh every 5 minutes -->
  <meta http-equiv="refresh" content="300">
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: auto;
      padding: 1rem;
    }
    footer {
      font-size: 0.8rem;
      color: #666;
      margin-top: 2rem;
      text-align: center;
    }
  </style>
</head>
<body>
  ${marked.parse(md)}

  <hr/>
  <footer>
    Refreshing in <span id="countdown">300</span> seconds
  </footer>

  <script>
    let seconds = 300;
    const countdownEl = document.getElementById('countdown');
    setInterval(() => {
      seconds--;
      if(seconds <= 0) {
        countdownEl.textContent = 0;
      } else {
        countdownEl.textContent = seconds;
      }
    }, 1000);
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html);
console.log('index.html generated with countdown');

