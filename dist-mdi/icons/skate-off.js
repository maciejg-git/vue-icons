import { h } from 'vue'
export default {
  $_icon: {
    name: "SkateOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["skate","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-skate-off"},
      [ 
        h(
          "path",
          {"d":"M19 15.81L13.36 10.16C15.22 10.62 17.63 11.05 18.53 12.95C18.95 13.57 19 14.71 19 15.81M20.95 17C20.92 17.21 20.87 17.41 20.8 17.6L22.32 19.12C22.68 18.5 22.92 17.77 23 17H20.95M10.5 7V6H9.2L10.2 7H10.5M22.11 21.46L20.84 22.73L19.66 21.55C19 21.83 18.27 22 17.5 22H1V20H5V18H2.03V3.92L1.11 3L2.03 2.09V2H2.12L2.39 1.73L22.11 21.46M14 18H7V20H14V18M18.06 19.95L16.11 18H16V20H17.5C17.69 20 17.88 20 18.06 19.95M10.5 5V2H5.2L8.2 5H10.5Z"}
        ) 
      ]
    )
  }
}