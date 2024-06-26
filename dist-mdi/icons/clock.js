import { h } from 'vue'
export default {
  $_icon: {
    name: "Clock",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["clock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"}
        ) 
      ]
    )
  }
}