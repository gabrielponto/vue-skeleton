import Vue from 'vue';
import store from '../store/index';

export default {
    endpoint: '',
    getApiUrl: function(url) {
        return Vue.config.apiUrl + url;
    },
    getUrl: function(ensureEndsWithSlash) {
        if (typeof(ensureEndsWithSlash) == 'undefined') {
            ensureEndsWithSlash = false;
        }
        let url = this.getApiUrl(this.endpoint);
        if (ensureEndsWithSlash && !url.endsWith('/')) {
            return url + '/';
        }
        return url;
    },
    getAuthHeaders: function() {
        return {'Authorization': 'Token ' + store.state.authentication.user.token }
    },
    get: function(url, params) {
        this.endpoint = url;
        if (typeof(params) == 'undefined') params = {};
        return Vue.http.get(this.getUrl(), {params: params, headers: this.getAuthHeaders() });
    },
    post: function(url, data, params) {
        this.endpoint = url;
        if (typeof(params) == 'undefined') params = {};
        if (typeof(data) == 'undefined') data = {};
        return Vue.http.post(this.getUrl(true), data, {headers: this.getAuthHeaders() });
    },
    put: function(url, data, params) {
        this.endpoint = url;
        if (typeof(params) == 'undefined') params = {};
        if (typeof(data) == 'undefined') data = {};
        return Vue.http.put(this.getUrl(true), data, {headers: this.getAuthHeaders() });
    },
    delete: function(url) {
        this.endpoint = url;
        return Vue.http.delete(this.getUrl(true), {headers: this.getAuthHeaders() });
    },
    /**
     * Make unauthenticated requests
     * @param {Object} params 
     */
    getRaw: function(params) {
        return Vue.http.get(this.getUrl(), {params});
    },
    postRaw: function(data, params) {
        if (typeof(params) == 'undefined') params = {};
        if (typeof(data) == 'undefined') data = {};
        return Vue.http.post(this.getUrl(), data);
    }
}