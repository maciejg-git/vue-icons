import { h } from 'vue'
export default {
  $_icon: {
    name: "WeatherPartlyLightning",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["weather","partly","lightning"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,15C18.65,15 18.31,15.06 18,15.17V15C18,13.19 17.19,11.56 15.92,10.46C16.35,8.03 15.1,5.5 12.75,4.47C9.97,3.24 6.72,4.5 5.5,7.25C4.6,9.24 5,11.45 6.27,13H6A4,4 0 0,0 2,17A4,4 0 0,0 6,21H7C7,21 8,21 8,20C8,19 7,19 7,19H6A2,2 0 0,1 4,17A2,2 0 0,1 6,15H8A4,4 0 0,1 12,11A4,4 0 0,1 16,15V17H19A1,1 0 0,1 20,18A1,1 0 0,1 19,19H17C17,19 16,19 16,20C16,21 17,21 17,21H19A3,3 0 0,0 22,18A3,3 0 0,0 19,15M12,9C10.16,9 8.5,9.83 7.41,11.13C6.93,10.22 6.85,9.09 7.31,8.07C8.09,6.31 10.16,5.5 11.93,6.3C13.18,6.86 13.94,8.06 14,9.34C13.38,9.12 12.7,9 12,9M13.55,2.63C13,2.4 12.45,2.23 11.88,2.12L14.37,0.82L15.27,3.71C14.76,3.29 14.19,2.93 13.55,2.63M6.09,3.44C5.6,3.79 5.17,4.19 4.8,4.63L4.91,1.82L7.87,2.5C7.25,2.71 6.65,3.03 6.09,3.44M18,8.71C17.91,8.12 17.78,7.55 17.59,7L19.97,8.5L17.92,10.73C18.03,10.08 18.05,9.4 18,8.71M3.04,10.3C3.11,10.9 3.25,11.47 3.43,12L1.06,10.5L3.1,8.28C3,8.93 2.97,9.61 3.04,10.3M11.8,15H14.25L12.61,18.27H14.25L11.18,24L11.8,19.91H9.75"}
        ) 
      ]
    )
  }
}