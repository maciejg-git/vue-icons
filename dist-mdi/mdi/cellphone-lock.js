import { h } from 'vue'
export default {
  $_icon: {
    name: "CellphoneLock",
    vendor: "Mdi",
    type: "",
    tags: ["cellphone","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cellphone-lock"},
      [ 
        h(
          "path",
          {"d":"M17,1H7A2,2 0 0,0 5,3V6H7V4H17V20H7V18H5V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M8.8,11V9.5C8.8,8.1 7.4,7 6,7C4.6,7 3.2,8.1 3.2,9.5V11C2.6,11 2,11.6 2,12.2V15.7C2,16.4 2.6,17 3.2,17H8.7C9.4,17 10,16.4 10,15.8V12.3C10,11.6 9.4,11 8.8,11M7.5,11H4.5V9.5C4.5,8.7 5.2,8.2 6,8.2C6.8,8.2 7.5,8.7 7.5,9.5V11Z"}
        ) 
      ]
    )
  }
}