import { API_ENDPOINT_NODEJS } from '@constants/index'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class AxiosServices {
  instance: AxiosInstance
  constructor() {
    const instance = axios.create({ baseURL: API_ENDPOINT_NODEJS })
    instance.interceptors.response.use(this.handleSuccess, this.handleError)
    instance.interceptors.request.use(async (config) => {
      return config
    }, this.handleError)
    axios.defaults.withCredentials = true
    this.instance = instance
  }

  handleSuccess(response: any) {
    return response
  }
  handleError(error: any) {
    return Promise.reject(error)
  }
  get<T>(url: string, config?: AxiosRequestConfig<any> | undefined) {
    return this.instance.get<T>(url, config)
  }
  getImage(url: string) {
    return this.instance.get(url, { responseType: 'blob' })
  }
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) {
    return this.instance.post<T>(url, data, config)
  }
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) {
    return this.instance.put<T>(url, data, config)
  }
  delete<T = any>(url: string, config?: AxiosRequestConfig<any> | undefined) {
    return this.instance.delete<T>(url, config)
  }
}
export default new AxiosServices()
