import { h } from 'vue'
export default {
  $_icon: {
    name: "ShareCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["share","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M14 16V13C10.39 13 7.81 14.43 6 17C6.72 13.33 8.94 9.73 14 9V6L19 11L14 16Z"}
        ) 
      ]
    )
  }
}