export default (username, password) => {
    return new Promise((resolve, reject) => {
        if (username == 'test' && password == 'user') {
            return resolve(true);
        } else {
            return reject( new Error('Invalid credentials'));
        }
    })
}