import { h } from 'vue'
export default {
  $_icon: {
    name: "TrainCarGondolaFull",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["train","car","gondola","full"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-train-car-gondola-full"},
      [ 
        h(
          "path",
          {"d":"M21 10C19.04 8.19 15.74 7 12 7S4.96 8.19 3 10H1V17H2C2 18.11 2.9 19 4 19S6 18.11 6 17H18C18 18.11 18.9 19 20 19S22 18.11 22 17H23V10H21M21 15H19V13H17V15H15V13H13V15H11V13H9V15H7V13H5V15H3V12H21V15Z"}
        ) 
      ]
    )
  }
}