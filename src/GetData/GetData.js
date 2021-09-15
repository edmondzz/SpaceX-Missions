import axios from "axios";

export const graphql = {
    getData,
}
const url = "https://api.spacex.land/graphql/";

const headers = {
    'Content-Type': 'application/json',
};

function getData(query) {
    return axios.post(url, { query }, { headers });
}
