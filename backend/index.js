import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({ message: 'Backend API working' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend is working on ${PORT}`);
});