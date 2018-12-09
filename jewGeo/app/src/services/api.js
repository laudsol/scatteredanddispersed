/* eslint-disable */
const awsGeoLambda = 'https://9x969kf0l4.execute-api.us-east-2.amazonaws.com/default/getGeographicAndHistoricData';
const googleGeocoding = 'https://maps.googleapis.com/maps/api/geocode/json?'
const axios = require('axios')

module.exports = {
    getGeoDataFromAWS: function(){
        return axios.get(awsGeoLambda).then(res => res);
    },
    convertLocationstToLatLong: function(address, key){
        const keyString = '&key='+key
        const url = googleGeocoding+address+keyString
        return axios.get(url).then(res => res);
    }
}





