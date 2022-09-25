import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountVoiceOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["account","voice","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-account-voice-off"},
      [ 
        h(
          "path",
          {"d":"M2,3.27L3.28,2L22,20.72L20.73,22L16.73,18C16.9,18.31 17,18.64 17,19V21H1V19C1,16.34 6.33,15 9,15C10.77,15 13.72,15.59 15.5,16.77L11.12,12.39C10.5,12.78 9.78,13 9,13A4,4 0 0,1 5,9C5,8.22 5.22,7.5 5.61,6.88L2,3.27M9,5A4,4 0 0,1 13,9V9.17L8.83,5H9M16.76,5.36C18.78,7.56 18.78,10.61 16.76,12.63L15.08,10.94C15.92,9.76 15.92,8.23 15.08,7.05L16.76,5.36M20.07,2C24,6.05 23.97,12.11 20.07,16L18.44,14.37C21.21,11.19 21.21,6.65 18.44,3.63L20.07,2Z"}
        ) 
      ]
    )
  }
}