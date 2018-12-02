/* eslint-disable */
const awsGeoLambda = 'https://9x969kf0l4.execute-api.us-east-2.amazonaws.com/default/getGeographicAndHistoricData';
const axios = require('axios')

export const getGeoDataFromAWS = function(){
    return axios.get(awsGeoLambda).then(res => res);
}





