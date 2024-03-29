import { h } from 'vue'
export default {
  $_icon: {
    name: "MicrosoftDynamics365",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["microsoft","dynamics","365"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6,2L17.25,8.5L13.5,11.5L6,8V2M6,9L9.5,11.25L6,22L18,9V15L6,22V9Z"}
        ) 
      ]
    )
  }
}