"use strict"

const setLocalData = (...rest) => {
   const data = [];
   data.push(...rest);
   localStorage.setItem('geolocation', JSON.stringify(data));
}

const onSuccess = (position) => {
   let lat = position.coords.latitude;
   let lng = position.coords.longitude;
   setLocalData(lat, lng);
}

const onError = () => {
   const el = document.querySelector('.geo');
   console.log('Geolocation is not supported')
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);


const renderWeather = () => {
   const geo = JSON.parse(localStorage.getItem('geolocation'));
   if (geo === null) {
      console.log('  ')
   } else {
      const API_KEY = 'c594d603005aa6abb1a7c6108f287df5'
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${geo[0]}&lon=${geo[1]}&appid=${API_KEY}`
      try {
         fetch(url)
            .then(res => res.json())
            .then(data => {
               const geo = document.querySelector('.location__text');
               if (!data.name) {
                  geo.textContent = 'Geolocation is not supported';
               } else {
                  geo.textContent = data.name
               }
            })
      } catch (error) {
         console.log(error);
      }
   }
}

setTimeout(renderWeather, 1000);