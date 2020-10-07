let cleanRoomPromise = new Promise(function (resolve, reject) {
  
  // clean room process
  let isRoomCleaned = false;

  if (isRoomCleaned) {
    resolve('room has been cleaned');
  } else {
    reject('garbage all around');
  }
});

cleanRoomPromise
  .then((message) => console.log('message is ', message))
  .catch((err) => console.log('received error is ', err));
