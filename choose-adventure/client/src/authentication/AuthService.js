const AuthService = {
    login : user => {
        return fetch('/user/login', {
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return {isAuthenticated : false, user : {username : ""}};
        });
    },
    logout : () => {
        return fetch('/user/logout')
            .then(res => res.json())
            .then(data => data);
    },
    // SYNC BACKEND AND FRONTEND TOGETHER SO AUTHENTICATED STATE WILL PERSIST
    isAuthenticated : () => {
        return fetch('/user/authenticated')
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(data => data);
                else
                    return { isAuthenticated : false, user : {username : ""}};
            });
    }
}

export default AuthService;