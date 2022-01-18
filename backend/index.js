const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`);
})