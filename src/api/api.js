import * as axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.cryptonator.com/api/ticker/btc-usd"
});

export const quotationAPI = {
    getQuotation() {
        return instance.get().then(res => res.data);
    }
}