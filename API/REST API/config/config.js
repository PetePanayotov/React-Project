const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: 'mongodb+srv://user:1234567p@SoftUni-niwzl.mongodb.net/origami?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token',
        privateKey: "Victoria's secret",
        cookie: 'auth'
    },
    production: {}
};

module.exports = config[env];