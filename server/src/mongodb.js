const mongoose = require('mongoose');

require('dotenv').config({
    path: 'D:/TimePass/ST3-Project/server/src/urls.env',
});

mongoose.set('strictQuery', true);

mongoose.connection.on('open', () => {
    console.log('Database Connected!');
});
async function connectDatabase() {
    try {
        await mongoose.connect(
            'mongodb+srv://aniket7goyal:aniket7goyal@cluster0.lft1vpg.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDatabase;
