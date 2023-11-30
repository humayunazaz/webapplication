export interface ISunrisePayload {
  lat: string;
  lng: string;
  date: string;
}

export interface ISunriseDTO {
  astronomical_twilight_begin: string;
  astronomical_twilight_end: string;
  civil_twilight_begin: string;
  civil_twilight_end: string;
  day_length: string;
  nautical_twilight_begin: string;
  nautical_twilight_end: string;
  solar_noon: string;
  sunrise: string;
  sunset: string;
}

export interface ISunriseResponse {
  status: string;
  results: ISunriseDTO;
}
