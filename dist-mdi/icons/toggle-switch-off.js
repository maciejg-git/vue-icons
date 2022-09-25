import { h } from 'vue'
export default {
  $_icon: {
    name: "ToggleSwitchOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["toggle","switch","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-toggle-switch-off"},
      [ 
        h(
          "path",
          {"d":"M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M7,15A3,3 0 0,1 4,12A3,3 0 0,1 7,9A3,3 0 0,1 10,12A3,3 0 0,1 7,15Z"}
        ) 
      ]
    )
  }
}