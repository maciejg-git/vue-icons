import { h } from 'vue'
export default {
  $_icon: {
    name: "AxisXRotateCounterclockwise",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["axis","x","rotate","counterclockwise"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-axis-x-rotate-counterclockwise"},
      [ 
        h(
          "path",
          {"d":"M12,14L16,10L20,14H16.9C16.44,18.56 14.42,22 12,22C10.12,22 8.47,19.92 7.62,16.84L9.37,15.83C9.87,18.31 10.86,20 12,20C13.4,20 14.57,17.45 14.91,14H12M1.11,17.13L13.89,9.75L13.96,10.54L10.5,14H10.54L2.11,18.87L1.11,17.13M21.89,5.13L22.89,6.87L17.88,9.76C17.79,9.03 17.67,8.33 17.5,7.66L21.89,5.13M12,2C14.3,2 16.23,5.1 16.82,9.32L16,8.5L14.87,9.63C14.5,6.37 13.35,4 12,4C10.42,4 9.12,7.27 9,11.42L7,12.57V12C7,6.5 9.24,2 12,2Z"}
        ) 
      ]
    )
  }
}