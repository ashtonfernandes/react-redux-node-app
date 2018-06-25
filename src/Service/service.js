// I am used to call for all the apis and used through out the application.

// export const login = async (username, password) => {
//     const response = await fetch('/api/login', {
//         method: 'post',
//         headers: {
//             Accept: 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             username,
//             password
//         })
//     });

//     const json = await response.json();
//     return json;
// };

export const login = (username, password)  => {
    return fetch('/api/login', {
        method: 'post',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(
            username,
            password
        )
    }).then(response => {
        console.log(response);
        return { status: response.status, body: response.json() };
    }).then(result => {
        console.log(result);
        if (result.status === 200) {
            console.log(result);
            return Promise.resolve(result.body);
        } else {
            return Promise.reject(result.status);
        }
    });
}