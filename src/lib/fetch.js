import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://api.twitch.tv/helix" ,
    timeout: 6000,
    headers: {
        'Client-ID': '0r7i8cu8mrldfrtsyyocgj3hu77mcf',
        'Authorization': 'Bearer i1qfs7o30jspmsl0i6y085yycepic3'
    }
});

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',
}

const request = async (contentType, method, url, data) => {
    try {
        const config = {
            url,
            method,
        }

        if (method === FetchConsts.GET) {
            config.params = {
                ...data
            }

        } else {
            config.data = data
        }

        console.log('@@[Request Config]', config);

        const result = await axiosInstance(config);

        return result?.data

    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                console.log('로그인 만료됨. 로그인으로 이동합니다');
            } else {
                console.log("e", e)
            }
        } else {
            console.log("e", e)
        }

    } finally {
    }
}

const FetchJson = {
    get: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.POST, url, data),
    put: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.PUT, url, data),
    delete: (url, data) => request(FetchConsts.APPLICATION_JSON, FetchConsts.DELETE, url, data),
}


export {FetchJson};