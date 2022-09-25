import { h } from 'vue'
export default {
  $_icon: {
    name: "VanityLight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["vanity","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-vanity-light"},
      [ 
        h(
          "path",
          {"d":"M22 20H16C16 18.34 17.34 13 19 13S22 18.34 22 20M12 13C10.34 13 9 18.34 9 20H15C15 18.34 13.66 13 12 13M5 13C3.34 13 2 18.34 2 20H8C8 18.34 6.66 13 5 13M14.82 6C14.26 4.44 12.53 3.64 11 4.2C10.14 4.5 9.5 5.17 9.18 6H2V8H4V12H6V8H9.18C9.5 8.85 10.15 9.5 11 9.82V12H13V9.82C13.85 9.5 14.5 8.85 14.82 8H18V12H20V8H22V6H14.82Z"}
        ) 
      ]
    )
  }
}