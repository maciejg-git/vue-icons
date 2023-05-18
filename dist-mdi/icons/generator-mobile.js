import { h } from 'vue'
export default {
  $_icon: {
    name: "GeneratorMobile",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["generator","mobile"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M4 2H2V19C2 20.11 2.9 21 4 21H12.1C12.03 20.68 12 20.34 12 20C12 19.66 12.03 19.32 12.1 19H4V2M13 17C13.91 15.79 15.36 15 17 15C18.64 15 20.09 15.79 21 17H22V6C22 4.89 21.11 4 20 4H8C6.9 4 6 4.89 6 6V17H13M20 6V8H14V6H20M14 10H20V12H14V10M7 11L10 5V9H12L9 15V11H7M14.17 19C14.06 19.31 14 19.65 14 20C14 20.35 14.06 20.69 14.17 21C14.58 22.17 15.7 23 17 23C18.66 23 20 21.66 20 20C20 18.34 18.66 17 17 17C15.69 17 14.58 17.84 14.17 19Z"}
        ) 
      ]
    )
  }
}