import { h } from 'vue'
export default {
  $_icon: {
    name: "WizardHat",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["wizard","hat"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21 22H3V20H21V22M19 19H5L11.1 2.6C11.3 2.2 11.6 2 12 2L18 5H13.9L19 19M10 7.5L11.04 7.97L11.5 9L11.97 7.97L13 7.5L11.97 7.03L11.5 6L11.04 7.03L10 7.5M13 15L10.94 14.07L10 12L9.07 14.07L7 15L9.07 15.93L10 18L10.94 15.93L13 15M13.97 11.97L15 11.5L13.97 11.03L13.5 10L13.04 11.03L12 11.5L13.04 11.97L13.5 13L13.97 11.97M15.97 15.97L17 15.5L15.97 15.03L15.5 14L15.04 15.03L14 15.5L15.04 15.97L15.5 17L15.97 15.97Z"}
        ) 
      ]
    )
  }
}