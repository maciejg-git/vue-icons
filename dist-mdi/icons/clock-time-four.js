import { h } from 'vue'
export default {
  $_icon: {
    name: "ClockTimeFour",
    vendor: "Mdi",
    type: [],
    tags: ["clock","time","four"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-clock-time-four"},
      [ 
        h(
          "path",
          {"d":"M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z"}
        ) 
      ]
    )
  }
}