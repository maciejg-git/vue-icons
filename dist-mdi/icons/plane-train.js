import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaneTrain",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["plane","train"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-plane-train"},
      [ 
        h(
          "path",
          {"d":"M20 8H14C12.34 8 11 9.34 11 11V18C11 19.66 12.34 21 14 21L13 22V23H14L16 20.97H18L20 23H21V22L20 21C21.66 21 23 19.66 23 18V11C23 9.34 21.66 8 20 8M14 19C13.45 19 13 18.55 13 18S13.45 17 14 17 15 17.45 15 18 14.55 19 14 19M20 19C19.45 19 19 18.55 19 18S19.45 17 20 17 21 17.45 21 18 20.55 19 20 19M21 16H13V10H21V16M6.66 14.53L7 17L5.95 18.06L4.19 14.88L1 13.11L2.06 12.03L4.56 12.4L8.43 8.53L1 4.62L2.42 3.21L11.61 5.33L15.5 1.44C16.06 .855 17.06 .855 17.62 1.44C18.21 2.03 18.21 3 17.62 3.56L14.18 7H14C11.79 7 10 8.79 10 11V11.19L6.66 14.53Z"}
        ) 
      ]
    )
  }
}