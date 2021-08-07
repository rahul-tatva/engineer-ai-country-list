import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountryForm from "./components/country/CountryForm";
import CountryList from "./components/country/CountryList";

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Translations {
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export interface CountriesData {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area?: number;
  gini?: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
}

function App() {
  const [searchedCountries, SetSearchedCountries] = useState<CountriesData[]>([]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/countries-list">
            <CountryList countriesList={searchedCountries} />
          </Route>
          <Route exact path="/">
            <CountryForm onCountriesSearched={(data : CountriesData[]) => SetSearchedCountries(data)} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
