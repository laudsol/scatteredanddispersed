exports.handler = (event) => {
    
    const formatGeoData = require('./formatGeoData.js')
        
        var AWS = require('aws-sdk');
        var s3 = new AWS.S3();
     
        return new Promise((resolve, reject) => {
            s3.getObject({
                Bucket: 'jewish-geographic-timeline-data',
                Key: 'Geographic_data.csv'
            }, function(err, response) {
                if (err) {
                    console.log('got error', err);
                    reject(err)
                } else {
                    const formattedData = formatGeoData(response);
                    resolve(formattedData)
                }
            });
        })
    };