import { h } from 'vue'
export default {
  $_icon: {
    name: "RouterNetworkWireless",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["router","network","wireless"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 3.1L20.2 3.9C19 2.8 17.5 2.2 16 2.2C14.5 2.2 13 2.8 11.8 3.9L11 3.1C12.4 1.7 14.2 1 16 1C17.8 1 19.6 1.7 21 3.1M16 3.3C17.2 3.3 18.4 3.8 19.3 4.7L18.5 5.5C17.8 4.8 16.9 4.5 16 4.5C15.1 4.5 14.2 4.8 13.5 5.5L12.7 4.7C13.6 3.8 14.8 3.3 16 3.3M17 10H19C19.53 10 20.04 10.21 20.41 10.59C20.79 10.96 21 11.47 21 12V14C21 14.53 20.79 15.04 20.41 15.41C20.04 15.79 19.53 16 19 16H13V18H14C14.55 18 15 18.45 15 19H22V21H15C15 21.55 14.55 22 14 22H10C9.45 22 9 21.55 9 21H2V19H9C9 18.45 9.45 18 10 18H11V16H5C4.47 16 3.96 15.79 3.59 15.41C3.21 15.04 3 14.53 3 14V12C3 11.47 3.21 10.96 3.59 10.59C3.96 10.21 4.47 10 5 10H15V6H17V10M5 14H7V12H5V14M8.5 14H10.5V12H8.5V14M12 14H14V12H12V14Z"}
        ) 
      ]
    )
  }
}