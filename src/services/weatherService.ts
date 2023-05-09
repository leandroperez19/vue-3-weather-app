import { AxiosError, isAxiosError } from "axios";
import baseService from "./baseServiceConfig";
import { type DailyForecasts, type FiveDaysInfo, type locationInfo } from "@/types/weather.interface";
import type DataResponse from "@/types/dataResponse.interface";


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

export const getCurrentWeather = async (
  locationKey: string
): Promise<DataResponse<DailyForecasts[] | null>> => {
  let data = null;
  let error: string | null = null;

  try {
    const url = `/currentconditions/v1/${locationKey}?details=true`;
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
