import { h } from 'vue'
export default {
  $_icon: {
    name: "BabyFace",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["baby","face"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-baby-face"},
      [ 
        h(
          "path",
          {"d":"M1,12C1,10.19 2.2,8.66 3.86,8.17C5.29,5.11 8.4,3 12,3C15.6,3 18.71,5.11 20.15,8.17C21.8,8.66 23,10.19 23,12C23,13.81 21.8,15.34 20.15,15.83C18.71,18.89 15.6,21 12,21C8.4,21 5.29,18.89 3.86,15.83C2.2,15.34 1,13.81 1,12M14.5,9.25A1.25,1.25 0 0,0 13.25,10.5A1.25,1.25 0 0,0 14.5,11.75A1.25,1.25 0 0,0 15.75,10.5A1.25,1.25 0 0,0 14.5,9.25M9.5,9.25A1.25,1.25 0 0,0 8.25,10.5A1.25,1.25 0 0,0 9.5,11.75A1.25,1.25 0 0,0 10.75,10.5A1.25,1.25 0 0,0 9.5,9.25M7.5,14C8.26,15.77 10,17 12,17C14,17 15.74,15.77 16.5,14H7.5M3,12C3,12.82 3.5,13.53 4.21,13.84C4.07,13.25 4,12.63 4,12C4,11.37 4.07,10.75 4.21,10.16C3.5,10.47 3,11.18 3,12M21,12C21,11.18 20.5,10.47 19.79,10.16C19.93,10.75 20,11.37 20,12C20,12.63 19.93,13.25 19.79,13.84C20.5,13.53 21,12.82 21,12Z"}
        ) 
      ]
    )
  }
}