import { h } from 'vue'
export default {
  $_icon: {
    name: "ClockEnd",
    vendor: "Mdi",
    type: "",
    tags: ["clock","end"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-clock-end"},
      [ 
        h(
          "path",
          {"d":"M12,1C8.14,1 5,4.14 5,8A7,7 0 0,0 12,15C15.86,15 19,11.87 19,8C19,4.14 15.86,1 12,1M12,3.15C14.67,3.15 16.85,5.32 16.85,8C16.85,10.68 14.67,12.85 12,12.85A4.85,4.85 0 0,1 7.15,8A4.85,4.85 0 0,1 12,3.15M11,5V8.69L14.19,10.53L14.94,9.23L12.5,7.82V5M15,16V19H3V21H15V24L19,20M19,20V24H21V16H19"}
        ) 
      ]
    )
  }
}