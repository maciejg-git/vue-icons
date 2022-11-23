import { h } from 'vue'
export default {
  $_icon: {
    name: "Knob",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["knob"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M13 10H11V4.1C11.3 4 11.7 4 12 4S12.7 4 13 4.1V10Z"}
        ) 
      ]
    )
  }
}