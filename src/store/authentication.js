const authentication = {
    state: {
        user: {
            token: null,
            data: null
        },
        loginFailed: false,
        loginFailedReason: null
    },
    mutations: {
        login(state, payload) {
            state.user.token = payload.token;
        },
        setData(state, data) {
            state.user.data = data;
        },
        setLoginFailed(state, payload) {
            state.loginFailed = payload.loginFailed;
            state.loginFailedReason = payload.message;
        },
    },
    getters: {
        isLogged: state => {
            return state.user.token != null;
        }
    }
}

export default authentication;