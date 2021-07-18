"use strict"

// let onSuccess = (position) => {
//    let lat = position.coords.latitude;
//    let lng = position.coords.longitude
//    console.log(lat, lng)
// }

// let onError = (error) => {
//    console.error(); (error)
// }

// function geolocation() {
//    navigator.geolocation.getCurrentPosition(onSuccess, onError)
// }

function getLocal() {
   try {
      navigator.geolocation.getCurrentPosition(function (position) {
         let lat = position.coords.latitude;
         let lng = position.coords.longitude
         console.log(lat, lng)
      });
   } catch (error) {
      console.warn(error)
   }
}

getLocal()

