export const loginUser = (username, password)  => {
    return fetch('/api/login', {
        method: 'post',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {username,
            password}
        )
    }).then(response => {
        return { status: response.status, body: response.json() };
    }).then(result => {
        if (result.status === 200) {
            return Promise.resolve(result.body);
        } else {
            return Promise.reject(result.status);
        }
    });
}