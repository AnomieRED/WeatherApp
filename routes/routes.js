import Router from 'express';
import fetch from 'node-fetch';

const router = new Router();

router.get('/', (req, res) => {
   res.render('index')
});

router.post('/', (req, res) => {
   const city = req.body.city
   const API_KEY = 'c594d603005aa6abb1a7c6108f287df5'
   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
   try {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            if (data.message === 'city not found') {
               res.render('index', {
                  city: data.message,
                  des: null,
                  icon: null,
                  temp: null
               })
            } else {
               const city = data.name;
               const des = data.weather[0].description;
               const icon = data.weather[0].icon;
               const temp = data.main.temp;

               res.render('index', { city, des, icon, temp })
            }
         })
   } catch (error) {
      res.render('index', {
         city: 'Somesing wrong',
         des: null,
         icon: null,
         temp: null
      })
   }
});

export default router