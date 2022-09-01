import { h } from 'vue'
export default {
  $_icon: {
    name: "ClockTimeSeven",
    vendor: "Mdi",
    type: [],
    tags: ["clock","time","seven"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-clock-time-seven"},
      [ 
        h(
          "path",
          {"d":"M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M12.5 12.2L9.8 17L8.5 16.2L11 11.8V7H12.5V12.2Z"}
        ) 
      ]
    )
  }
}