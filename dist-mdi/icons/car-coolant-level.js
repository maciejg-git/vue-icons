import { h } from 'vue'
export default {
  $_icon: {
    name: "CarCoolantLevel",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["car","coolant","level"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-car-coolant-level"},
      [ 
        h(
          "path",
          {"d":"M19 7V5H21V3H13V5H15V7H1V21H23V7H19M21 14.42C20.71 14.13 20.5 14 20 14C19.33 14 19.21 14.21 18.71 14.71S17.33 16 16 16 13.79 15.21 13.29 14.71 12.67 14 12 14C11.78 14 11.63 14.03 11.5 14.08C11.22 14.18 11.05 14.37 10.71 14.71C10.21 15.21 9.33 16 8 16S5.79 15.21 5.29 14.71 4.67 14 4 14C3.5 14 3.29 14.13 3 14.42V9H21V14.42Z"}
        ) 
      ]
    )
  }
}