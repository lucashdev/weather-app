const key = 'b9b908419027444abf8221657232708';

const fetchData = async (city) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = await fetchResponse.json();

  return data;
};

export default fetchData;