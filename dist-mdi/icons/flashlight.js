import { h } from 'vue'
export default {
  $_icon: {
    name: "Flashlight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["flashlight"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,10L6,5H18L15,10H9M18,4H6V2H18V4M9,22V11H15V22H9M12,13A1,1 0 0,0 11,14A1,1 0 0,0 12,15A1,1 0 0,0 13,14A1,1 0 0,0 12,13Z"}
        ) 
      ]
    )
  }
}