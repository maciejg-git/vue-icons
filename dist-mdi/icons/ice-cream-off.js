import { h } from 'vue'
export default {
  $_icon: {
    name: "IceCreamOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["ice","cream","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-ice-cream-off"},
      [ 
        h(
          "path",
          {"d":"M22.11 21.46L2.39 1.73L1.11 3L4.95 6.84C4.37 7.38 4 8.14 4 9C4 10.66 5.34 12 7 12L12 22L14.7 16.59L20.84 22.73L22.11 21.46M12 17.53L8.89 11.31C8.95 11.26 9 11.21 9.08 11.16C9.21 11.24 9.35 11.3 9.5 11.37L13.21 15.1L12 17.53M7.15 3.95C8.07 2.2 9.89 1 12 1C14.89 1 17.25 3.22 17.5 6.05C18.91 6.28 20 7.5 20 9C20 10.66 18.66 12 17 12L16.4 13.2L7.15 3.95Z"}
        ) 
      ]
    )
  }
}