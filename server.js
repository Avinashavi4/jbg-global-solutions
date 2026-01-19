const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all other routes - serve corresponding HTML files
app.get('/:page', (req, res) => {
    const page = req.params.page;
    if (page.endsWith('.html')) {
        res.sendFile(path.join(__dirname, page));
    } else {
        res.sendFile(path.join(__dirname, `${page}.html`));
    }
});

app.listen(PORT, () => {
    console.log(`JBG Global Solutions website running on port ${PORT}`);
});
