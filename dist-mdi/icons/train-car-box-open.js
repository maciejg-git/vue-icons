import { h } from 'vue'
export default {
  $_icon: {
    name: "TrainCarBoxOpen",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["train","car","box","open"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M1 7V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V7H1M16 16H8V9H16V16Z"}
        ) 
      ]
    )
  }
}