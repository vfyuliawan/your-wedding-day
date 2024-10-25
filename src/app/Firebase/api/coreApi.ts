// import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// const timeOut = 60000;

// const baseUrl = "http://localhost:8000";

// const apiVersion = "/api/v1";

// export const getBaseUrl = (): string => {
//   return baseUrl + apiVersion;
// };

// export const header = async () => {
//   return {
//     "Content-Type": "application/json",
//     channel: "MOB",
//     language: "IDN",
//     latitude: "0.0",
//     longitude: "0.0",
//   };
// };

// axios.interceptors.request.use((request) => {
//   console.debug("-------------------------------------------------------");
//   console.debug("METHOD : ", request.method);
//   console.debug("URL : ", request.url);
//   console.debug("REQUEST HEADER : ", request.headers);
//   console.debug("REQUEST BODY : ", JSON.stringify(request.data));
//   console.debug("");
//   console.debug("REQUEST...");
//   console.debug("-------------------------------------------------------");
//   return request;
// });


// axios.interceptors.response.use(
//     response => {
//       const resultResponse: AxiosResponse = response;
//       console.debug('');
//       console.debug('-------------------------------------------------------');
//       console.debug('RESPONSE : ');
//       console.debug('RESPONSE REQUEST URL: ', resultResponse.request._url);
//       console.debug('RESPONSE STATUS : ', response.status);
//       console.debug('RESPONSE HEADER : ', response.headers);
//       // console.debug('RESPONSE BODY : ', JSON.stringify(response.data));
//       console.debug('RESPONSE BODY : ', JSON.stringify(response.data));
//       console.debug('-------------------------------------------------------');
//       return response;
//     },
//     error => {
//       const errorResponse: AxiosResponse = error.response;
//       console.debug('');
//       console.debug('-------------------------------------------------------');
//       if (error.message !== 'Network Error') {
//         console.debug('RESPONSE REQUEST URL: ', errorResponse.request._url);
//       }
//       console.debug('RESPONSE STATUS : ', error.response.status);
//       console.debug('RESPONSE HEADER : ', error.response.headers);
//       console.debug('RESPONSE BODY : ', error.response.data);
//       console.debug('-------------------------------------------------------');
  
//       return Promise.reject(error);
//     },
//   );


//   export type ErrorMessageType = (msg?: AxiosError) => string;

//   async function RequestData(
//     config: AxiosRequestConfig,
//     isErrorCreate: boolean,
//     errorMessage?: ErrorMessageType,
//     dismissable?: boolean,
//   ): Promise<any> {
//     try {
//       // resetModal()
//       const resp = await axios(config);
//       if (resp.status === 200) {
//         if (resp.data.code === '00') {
//           return JSON.stringify(resp.data);
//         }
//         if (resp.data.code === '4301') {
//           return JSON.stringify(resp.data);
//         }
//         if (resp.data.code === '5101') {
//           return JSON.stringify(resp.data);
//         }
//         return null;
//       } else if (resp.status === 201) {
//         return JSON.stringify(resp.data);
//       } else if (resp.status === 303) {
//         ErrorHandler.ErrorResponse({
//           message: resp.data.message ?? '',
//           dismissable,
//         });
//       } else if (resp.status === 400) {
//         const e = resp.data.message;
//         ErrorHandler.ErrorResponse({
//           message: resp.data.message ?? '',
//           dismissable,
//         });
//       } else if (resp.data.message === 'Network Error') {
//         if (isErrorCreate) {
//           return CallBackError.NetworkError;
//         } else {
//           ErrorHandler.networkError({
//             message: resp.data.message ?? '',
//             dismissable,
//           });
//         }
//       } else if (resp.status === 401) {
//         await ErrorHandler.RefreshToken();
//       } else if (resp.status === 403) {
//         ErrorHandler.tokenExpired({
//           message: resp.data.error ?? '',
//         });
//       } else if (
//         resp.status === 404 ||
//         resp.status === 413 ||
//         resp.status === 422 ||
//         resp.status === 409
//       ) {
//         ErrorHandler.ErrorResponse({
//           message: resp.data.message ?? '',
//           dismissable,
//         });
//       } else if (resp.status === 500) {
//         ErrorHandler.ErrorResponse({
//           message: resp.data.message ?? '',
//           dismissable,
//         });
//       } else if (resp.status === 503 || resp.status === 525) {
//         ErrorHandler.serverNoResponse(dismissable);
//       } else if (resp.status === 504) {
//         ErrorHandler.timeout();
//       }
//       return null;
//     } catch (e) {
//       console.log('error request', e);
//       const error: AxiosError = e as AxiosError;
//       // console.log('e', error.request.url);
//       // console.log( 'e', error.message );
//       if (error.response?.status === 303) {
//         ErrorHandler.ErrorResponse({message: error, dismissable});
//       } else if (error.response?.status === 400) {
//         ErrorHandler.ErrorResponse({
//           message: error,
//           errorMessage: errorMessage ? errorMessage(error) : undefined,
//           dismissable,
//         }); //error.response.data.message ?? '');
//       } else if (error.message === 'Network Error') {
//         if (isErrorCreate) {
//           return CallBackError.NetworkError;
//         }
//         ErrorHandler.networkError({
//           message: error,
//           dismissable,
//         });
//       } else if (error.response?.status === 401) {
//         // ErrorHandler.ErrorResponse({message: error, dismissable});
  
//         await ErrorHandler.RefreshToken();
//       } else if (error.response?.status === 403) {
//         ErrorHandler.tokenExpired({
//           message: error,
//         });
//       } else if (
//         error.response?.status === 404 ||
//         error.response?.status === 413 ||
//         error.response?.status === 422 ||
//         error.response?.status === 409
//       ) {
//         ErrorHandler.ErrorResponse({message: error, dismissable});
//         if (error.response?.status === 404) {
//           iStorageRemoveItem([EnumIConstant.deeplinks]);
//         }
//       } else if (error.response?.status === 500) {
//         ErrorHandler.ErrorResponse({message: error, dismissable});
//       } else if (
//         error.response?.status === 503 ||
//         error.response?.status === 525
//       ) {
//         ErrorHandler.serverNoResponse(dismissable);
//       } else if (error.response?.status === 504) {
//         ErrorHandler.timeout();
//       }
//       return null;
//     } finally {
//       console.debug('::FINISH::');
//       console.debug('-------------------------------------------------------');
//       console.debug('');
//     }
//   }