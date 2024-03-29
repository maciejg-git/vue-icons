import { h } from 'vue'
export default {
  $_icon: {
    name: "TruckTrailer",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["truck","trailer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22,15V17H10A3,3 0 0,1 7,20A3,3 0 0,1 4,17H2V6A2,2 0 0,1 4,4H17A2,2 0 0,1 19,6V15H22M7,16A1,1 0 0,0 6,17A1,1 0 0,0 7,18A1,1 0 0,0 8,17A1,1 0 0,0 7,16Z"}
        ) 
      ]
    )
  }
}