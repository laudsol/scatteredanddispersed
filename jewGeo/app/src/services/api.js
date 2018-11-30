/* eslint-disable */
export const apiVal1 = 'Hello from API service1'
export const apiVal2 = 'Hello from API service2'

const https = require('https');
const awsGeoLambda = 'https://9x969kf0l4.execute-api.us-east-2.amazonaws.com/default/getGeographicAndHistoricData';

const axios = require('axios')

export const getGeoData = function(){
    return https.get(awsGeoLambda, response => response);
}

export const axiosCall = function(){
    return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.info = response))
}





