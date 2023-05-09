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

  export interface CurrentWeather {
    WeatherIcon: number;
    LocalObservationDateTime: string;
    WeatherText: string;
    RelativeHumidity: number;
    Pressure:{
      Imperial:{Value: number}
    }
    Temperature : {
      Metric:{Unit: string; UnitType: number; Value: number}
    };
    Wind:{
      Speed:{
        Imperial:{Value: number}
      }
    };
    TemperatureSummary:{
      Past24HourRange:{
        Minimum:{
          Metric:{
            Value: number
          }
        },
        Maximum:{
          Metric:{
            Value: number
          }
        }
      }
    };
    PrecipitationSummary:{
      Precipitation:{
        Metric:{
          Value: number
        }
      }
    }
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