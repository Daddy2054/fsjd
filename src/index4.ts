/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(country: string) {
    const getApi = await axios(
      `https://restcountries.com/v2/name/${country}`
    );
    const data = getApi.data;
    const basicData = {
      capital: data[0].capital,
      region: data[0].region,
      numericCode: data[0].numericCode
    };
   // console.log(basicData);
    return basicData;
  }

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data
  const regionCapitals = [];
  for (let i = 0; i < data.length; i++) {
    regionCapitals.push(data[i].capital);
  }
  return regionCapitals;
}

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};

