import fetch from 'node-fetch';

class Controllers {
	getLocation = (req, res) => {
		res.render('index')
	}

	getCity = async (req, res) => {
		const city = req.body.city
		const API_KEY = 'c594d603005aa6abb1a7c6108f287df5'
		let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
		try {
			fetch(url)
				.then(res => res.json())
				.then(data => {
					if (data.message === 'city not found') {
						res.render('index', {
							city: data.message,
							des: undefined,
							icon: undefined,
							wind: undefined,
							temp: undefined,
							windSpeed: undefined,
							windDeg: undefined
						})
					} else {
						const city = data.name;
						const des = data.weather[0].description;
						const icon = data.weather[0].icon;
						const temp = Math.round(data.main.temp);
						const windSpeed = data.wind.speed;
						const windDeg = data.wind.deg;

						res.render('index', { city, des, icon, temp, windSpeed, windDeg })
					}
				})
		} catch (error) {
			res.render('index', {
				city: 'Somesing wrong',
				des: null,
				icon: null,
				temp: null,
				windSpeed: null,
				windDeg: null
			})
		}
	}
}

export default new Controllers();