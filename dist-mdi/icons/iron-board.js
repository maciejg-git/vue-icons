import { h } from 'vue'
export default {
  $_icon: {
    name: "IronBoard",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["iron","board"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-iron-board"},
      [ 
        h(
          "path",
          {"d":"M19 6H16V4.8C16 3.68 16.56 2.63 17.5 2C18.44 2.63 19 3.68 19 4.8V6M15.28 13.63L19.59 19C20.38 19.06 21 19.7 21 20.5C21 21.33 20.33 22 19.5 22S18 21.33 18 20.5C18 20.42 18 20.34 18 20.26L14 15.23L10 20.26C10 20.34 10 20.42 10 20.5C10 21.33 9.33 22 8.5 22S7 21.33 7 20.5C7 19.7 7.63 19.06 8.41 19L12.72 13.63L9 9H3V7H21V9H19L15.28 13.63M14 12L16.42 9H11.58L14 12Z"}
        ) 
      ]
    )
  }
}