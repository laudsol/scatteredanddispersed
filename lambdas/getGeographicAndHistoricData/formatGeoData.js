const formatGeoData = (data) => {
    const stringifiedData = data.Body.toString('utf-8')
    const headerIndex = stringifiedData.match('\r\n').index
    const geoDataRows = stringifiedData.slice(headerIndex).split('\r\n')
    
    const dataObject = stringifiedData
      .slice(0, headerIndex)
      .split(',')
      .reduce((prev, curr) => {
        prev[curr] = ''
        return prev
      }, {})

    const geoDataArray = stringifiedData
      .slice(headerIndex)
      .split('\r\n')
      .slice(1)  

    const formattedGeoData = geoDataArray
    .reduce((prev, curr) => {
      let dataArr = curr.split(',')
      let populatedDataObject = Object.keys(dataObject).reduce((prev, curr, i) => {
        let expandedObj = prev
        expandedObj[curr] = dataArr[i]
        return expandedObj
      }, {})
      return [
        ...prev,
        populatedDataObject
      ]
    }, [])
    
    return formattedGeoData
}

module.exports = formatGeoData