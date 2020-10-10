const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const db = process.env.DATABASE_WZ;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('DATABASE CONNECTED');
}).catch(() => {
    console.log('Something went wrong with the database');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App running at port ${PORT}`);
})