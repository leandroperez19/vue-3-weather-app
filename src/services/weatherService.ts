import { AxiosError, isAxiosError } from "axios";
import baseService from "./baseServiceConfig";

export interface DataResponse<T> {
  data: T;
  error: string | null;
}

export interface locationInfo {
  Key: string;
  Type: string;
  LocalizedName: string;
  Version: number;
  Rank: number;
  Country: { ID: string; LocalizedName: string };
  AdministrativeArea: { ID: string; LocalizedName: string };
}

export interface DailyForecasts {
  DateTime: string;
  IconPhrase: string;
  Link: string;
  MobileLink: string;
  EpochDateTime: number;
  PrecipitationProbability: number;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  IsDaylight: boolean;
  Temperature: { Unit: string; UnitType: number; Value: number };
}

export interface Headline {
  Category: string;
  EffectiveDate: string;
  EndDate: string;
  Link: string;
  MobileLink: string;
  Text: string;
  EffectiveEpochDate: number;
  EndEpochDate: number;
  Severity: number;
}

export interface FiveDaysInfo {
  DailyForecasts: DailyForecasts[];
  Headline: Headline;
}

export const getAutocompletedCountries = async (
  value: string
): Promise<DataResponse<locationInfo[] | null>> => {
  let data = null;
  let error: string | null = null;

  try {
    const url = `/locations/v1/cities/autocomplete?q=${value}`;
    const res = await baseService.get(url);
    data = res.data;
  } catch (e) {
    const err: AxiosError | any = e;
    error = isAxiosError(err) ? err.message : `Unknown error: ${e}`;
  }

  return { data, error };
};

export const getOneHourForecast = async (
  locationKey: string
): Promise<DataResponse<DailyForecasts[] | null>> => {
  let data = null;
  let error: string | null = null;

  try {
    const url = `/forecasts/v1/hourly/1hour/${locationKey}`;
    const res = await baseService.get(url);
    data = res.data;
  } catch (e) {
    const err: AxiosError | any = e;
    error = isAxiosError(err) ? err.message : `Unknown error: ${e}`;
  }

  return { data, error };
};

export const getTwelveHoursForecast = async (
  locationKey: string
): Promise<DataResponse<DailyForecasts[] | null>> => {
  let data = null;
  let error: string | null = null;

  try {
    const url = `/forecasts/v1/hourly/12hour/${locationKey}`;
    const res = await baseService.get(url);
    data = res.data;
  } catch (e) {
    const err: AxiosError | any = e;
    error = isAxiosError(err) ? err.message : `Unknown error: ${e}`;
  }

  return { data, error };
};

export const getFiveDaysForecast = async (
  locationKey: string
): Promise<DataResponse<FiveDaysInfo | null>> => {
  let data = null;
  let error: string | null = null;

  try {
    const url = `/forecasts/v1/daily/5day/${locationKey}`;
    const res = await baseService.get(url);
    data = res.data;
  } catch (e) {
    const err: AxiosError | any = e;
    error = isAxiosError(err) ? err.message : `Unknown error: ${e}`;
  }

  return { data, error };
};
