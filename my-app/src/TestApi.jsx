const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
  params: {prefix: 'chicken soup'},
  headers: {
    'X-RapidAPI-Key': '69b56f0544mshe1d9f75b422a4e7p142f81jsn40c4bc0c5681',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});