import { h } from 'vue'
export default {
  $_icon: {
    name: "TrainCarCenterbeam",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["train","car","centerbeam"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M23 6V17H22C22 18.11 21.11 19 20 19S18 18.11 18 17H6C6 18.11 5.11 19 4 19S2 18.11 2 17H1V6H3V15H21V6H23Z"}
        ) 
      ]
    )
  }
}