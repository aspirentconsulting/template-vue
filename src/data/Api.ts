/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BadRequestResult {
  /** @format int32 */
  statusCode?: number;
}

export interface Greeting {
  name?: string | null;
}

export interface InsertSprocketRequest {
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  pitchDiameterInches?: number;
  /** @format int32 */
  outsideDiameterInches?: number;
  /** @format int32 */
  pitchInches?: number;
}

export interface SprocketResponse {
  /** @format uuid */
  id: string;
  deleted: boolean;
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  pitchDiameterInches?: number;
  /** @format int32 */
  outsideDiameterInches?: number;
  /** @format int32 */
  pitchInches?: number;
}

export interface SprocketResponsePageResponse {
  responses: SprocketResponse[];
  /** @format int32 */
  totalCount: number;
}

export interface UpdateSprocketRequest {
  /** @format uuid */
  id?: string;
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  pitchDiameterInches?: number;
  /** @format int32 */
  outsideDiameterInches?: number;
  /** @format int32 */
  pitchInches?: number;
}

export interface User {
  /** @minLength 3 */
  name: string;
}

export interface WeatherForecast {
  /** @format date */
  date?: string;
  /** @format int32 */
  temperatureC?: number;
  /** @format int32 */
  temperatureF?: number;
  summary?: string | null;
}

import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type HeadersDefaults,
  type ResponseType,
} from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title ASC.API
 * @version 1.0
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  login = {
    /**
     * No description
     *
     * @tags Login
     * @name GetGreet
     * @request GET:/Login
     */
    getGreet: (params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Login`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name GreetUserByPath
     * @request GET:/Login/GreetUser/{name}
     */
    greetUserByPath: (name: string, params: RequestParams = {}) =>
      this.request<string, string>({
        path: `/Login/GreetUser/${name}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name GreetUserByPost
     * @request POST:/Login/GreetUserByPost
     */
    greetUserByPost: (data: User, params: RequestParams = {}) =>
      this.request<Greeting, string>({
        path: `/Login/GreetUserByPost`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @tags Sprocket
     * @name InsertSprocket
     * @request POST:/api/Sprocket
     */
    insertSprocket: (data: InsertSprocketRequest, params: RequestParams = {}) =>
      this.request<SprocketResponse, BadRequestResult>({
        path: `/api/Sprocket`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprocket
     * @name UpdateSprocket
     * @request PUT:/api/Sprocket
     */
    updateSprocket: (data: UpdateSprocketRequest, params: RequestParams = {}) =>
      this.request<SprocketResponse, BadRequestResult>({
        path: `/api/Sprocket`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprocket
     * @name DeleteSprocket
     * @request DELETE:/api/Sprocket/{id}
     */
    deleteSprocket: (id: string, params: RequestParams = {}) =>
      this.request<SprocketResponse, BadRequestResult>({
        path: `/api/Sprocket/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprocket
     * @name FindSprocketById
     * @request GET:/api/Sprocket/{id}
     */
    findSprocketById: (id: string, params: RequestParams = {}) =>
      this.request<SprocketResponse, BadRequestResult>({
        path: `/api/Sprocket/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sprocket
     * @name FindAllSprockets
     * @request GET:/api/Sprocket/paginated
     */
    findAllSprockets: (
      query?: {
        /**
         * @format int32
         * @default 0
         */
        page?: number;
        /**
         * @format int32
         * @default 10
         */
        pageSize?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SprocketResponsePageResponse, any>({
        path: `/api/Sprocket/paginated`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  weatherForecast = {
    /**
     * No description
     *
     * @tags WeatherForecast
     * @name GetWeatherForecast
     * @request GET:/WeatherForecast
     */
    getWeatherForecast: (params: RequestParams = {}) =>
      this.request<WeatherForecast[], any>({
        path: `/WeatherForecast`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
