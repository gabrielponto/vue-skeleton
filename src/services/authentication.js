import api from './api';
import store from '../store/index';

export default {
    login: (username) => {
        store.commit('setLoginFailed', {loginFailed: false});
        api.endpoint = '/login/';
        var promise = api.postRaw({token: token});
        promise.then((response) => {
            if (response.data.token) {
                store.commit('login', {
                    token: response.data.token
                });
            }
        }, (response) => {
            store.commit('setLoginFailed', {loginFailed: true, message: response.body.message});
        });
        return promise;
    }
}