const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const importUsers = async () => {
    try {
        const data = JSON.parse(fs.readFileSync('./UsersData.json', 'utf-8'));
        await User.insertMany(data);
        console.log('Users Imported Successfully');
        process.exit();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

importUsers();
