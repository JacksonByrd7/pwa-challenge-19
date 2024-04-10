const express = require('express');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));  