export const loginUser = (username, password)  => 
    fetch('/api/login', {
        method: 'post',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                username,
                password
            }
        )
    }).then(response => ({
          status: response.status, body: response.json()
    })).then(result => {
        if (result.status === 200) {
            return Promise.resolve(result.body);
        }
        Promise.reject(result.status);
    });