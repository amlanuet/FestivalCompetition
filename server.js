const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', upload.single('photo'), (req, res) => {
    const { name, objective } = req.body;
    const photo = req.file;
    // Save data to a database or file (this example just logs to console)
    console.log({ name, objective, photo });
    res.send('Submission received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
