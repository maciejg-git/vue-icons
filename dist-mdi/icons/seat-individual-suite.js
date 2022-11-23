import { h } from 'vue'
export default {
  $_icon: {
    name: "SeatIndividualSuite",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["seat","individual","suite"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7,13A3,3 0 0,0 10,10A3,3 0 0,0 7,7A3,3 0 0,0 4,10A3,3 0 0,0 7,13M19,7H11V14H3V7H1V17H23V11A4,4 0 0,0 19,7Z"}
        ) 
      ]
    )
  }
}