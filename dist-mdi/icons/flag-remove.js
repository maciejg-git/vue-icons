import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagRemove",
    vendor: "Mdi",
    type: [],
    tags: ["flag","remove"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flag-remove"},
      [ 
        h(
          "path",
          {"d":"M14.46,15.88L15.88,14.46L18,16.59L20.12,14.46L21.54,15.88L19.41,18L21.54,20.12L20.12,21.54L18,19.41L15.88,21.54L14.46,20.12L16.59,18L14.46,15.88M12.4,5H18V12C15.78,12 13.84,13.21 12.8,15H11L10.6,13H5V20H3V3H12L12.4,5Z"}
        ) 
      ]
    )
  }
}