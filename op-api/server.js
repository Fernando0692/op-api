const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 4000;

app.use(express.static('./dist/crm-app'));
app.listen(PORT, () => {
    console.log(`server run on port: ${PORT}`);
})