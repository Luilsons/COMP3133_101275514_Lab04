const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
    },
    city: {
        type: String,
        required: true,
        match: [/^[a-zA-Z\s]+$/, 'City name must contain only alphabets and spaces']
    },
    website: {
        type: String,
        required: true,
        match: [/^https?:\/\/.+/, 'Invalid URL, must start with http:// or https://']
    },
    zip: {
        type: String,
        required: true,
        match: [/^\d{5}-\d{4}$/, 'Zip code must follow the format 12345-1234']
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, 'Phone format must be 1-123-123-1234']
    }
});

module.exports = mongoose.model('User', userSchema);
