import mongoose from 'mongoose';
const connectionString = process.env.DATABASE_URL || 'mongodb://mongodb/test';

mongoose.connect(connectionString);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('we are connected to mongodb!');
});
