import axios from "axios"
const slackServices = axios.create({
  baseURL: "https://6c95-39-53-91-23.ngrok.io",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function slackservices_get__read(payload) {
  return slackServices.get(`/`)
}
function slackservices_post_currentjson_create(payload) {
  return slackServices.post(`/current.json`, payload.data)
}
export const apiService = {
  slackservices_get__read,
  slackservices_post_currentjson_create
}
