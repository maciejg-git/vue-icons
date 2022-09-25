import { h } from 'vue'
export default {
  $_icon: {
    name: "TrainCarCaboose",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["train","car","caboose"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-train-car-caboose"},
      [ 
        h(
          "path",
          {"d":"M23 9V7H15V6H16V4H8V6H9V7H1V9H2V15H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V15H22V9H23M4 15H3V9H4V15M11 12H6V9H11V12M18 12H13V9H18V12M21 15H20V9H21V15Z"}
        ) 
      ]
    )
  }
}