console.log("Welcome to the main module")


import { populateCelebrityList } from "./argentina/argentinaCelebrities/ArgentinaCelebrityList.js"
populateCelebrityList()








import { populateCityList } from "./argentina/argentinaCities/ArgentinaCityList.js"
populateCityList()






































import { useCeleb } from "./iceland/celebrities/icelandCelebrityDataProvider.js"
import { celebList } from "./iceland/celebrities/icelandCelebrityList.js"

const allTheCelebs = useCeleb()
celebList()

import { ThialandCityList } from "./thailandscripts/thailand-cities/thailandCitiesList.js";

ThialandCityList();
