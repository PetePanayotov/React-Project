const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://user:1234567p@SoftUni-niwzl.mongodb.net/origami?retryWrites=true&w=majority',
        privateKey: "Victoria's secret",
        cookieName: 'oreo'
    },
    
    production: {}
};

module.exports = config[env];