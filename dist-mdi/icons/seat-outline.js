import { h } from 'vue'
export default {
  $_icon: {
    name: "SeatOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["seat","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15,5V12H9V5H15M15,3H9A2,2 0 0,0 7,5V14H17V5A2,2 0 0,0 15,3M22,10H19V13H22V10M5,10H2V13H5V10M20,15H4V21H6V17H18V21H20V15Z"}
        ) 
      ]
    )
  }
}