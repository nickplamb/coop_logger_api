
exports.loggerPostNewData = (request, response) => {
  let sentData = {
    api_key: request.query.api_key,
    humidity1: request.query.humidity_1,
    temp1: request.query. tempF_1,
    humidity2: request.query.humidity_2,
    temp2: request.query.tempF_2,
    doorLock: request.query.door_locked,
    batteryStatus: request.query.battery
  }

  Object.keys(sentData).forEach(key => {
    console.log(sentData[key])
  })
  // console.log(api_key)
  return response.status(200).send('success');

}


// module.exports = LoggerController;
  // api_key humidity_1 tempF_1 humidity_2 tempF_2 door_locked battery