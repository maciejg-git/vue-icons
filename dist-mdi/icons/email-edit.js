import { h } from 'vue'
export default {
  $_icon: {
    name: "EmailEdit",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["email","edit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-email-edit"},
      [ 
        h(
          "path",
          {"d":"M21,12.13C20.85,12.14 20.71,12.19 20.61,12.3L19.61,13.3L21.66,15.3L22.66,14.3C22.88,14.09 22.88,13.74 22.66,13.53L21.42,12.3C21.32,12.19 21.18,12.14 21.04,12.13M19.04,13.88L13,19.94V22H15.06L21.12,15.93M20,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H11V19.11L19.24,10.89C19.71,10.4 20.36,10.13 21.04,10.13C21.38,10.13 21.72,10.19 22.04,10.32V6C22.04,4.88 21.12,4 20,4M20,8L12,13L4,8V6L12,11L20,6"}
        ) 
      ]
    )
  }
}