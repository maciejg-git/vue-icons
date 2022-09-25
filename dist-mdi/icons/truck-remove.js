import { h } from 'vue'
export default {
  $_icon: {
    name: "TruckRemove",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["truck","remove"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-truck-remove"},
      [ 
        h(
          "path",
          {"d":"M20 8H17V4H3C1.89 4 1 4.89 1 6V17H3C3 18.66 4.34 20 6 20S9 18.66 9 17H15C15 18.66 16.34 20 18 20S21 18.66 21 17H23V12L20 8M6 18.5C5.17 18.5 4.5 17.83 4.5 17S5.17 15.5 6 15.5 7.5 16.17 7.5 17 6.83 18.5 6 18.5M12.54 12.12L11.12 13.54L9 11.41L6.88 13.54L5.47 12.12L7.59 10L5.46 7.88L6.88 6.47L9 8.59L11.12 6.47L12.54 7.88L10.41 10L12.54 12.12M18 18.5C17.17 18.5 16.5 17.83 16.5 17S17.17 15.5 18 15.5 19.5 16.17 19.5 17 18.83 18.5 18 18.5M17 12V9.5H19.5L21.46 12H17Z"}
        ) 
      ]
    )
  }
}