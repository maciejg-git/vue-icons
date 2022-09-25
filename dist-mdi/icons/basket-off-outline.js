import { h } from 'vue'
export default {
  $_icon: {
    name: "BasketOffOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["basket","off","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-basket-off-outline"},
      [ 
        h(
          "path",
          {"d":"M2.39 1.73L1.11 3L6.92 8.81L6.79 9H2C1.45 9 1 9.45 1 10C1 10.09 1 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C18.68 21 18.86 20.96 19.03 20.92L20.84 22.73L22.11 21.46L2.39 1.73M5.5 19L3.31 11H9.11L11.26 13.15C10.5 13.44 10 14.16 10 15C10 16.1 10.9 17 12 17C12.84 17 13.56 16.5 13.85 15.74L17.11 19H5.5M23 10L22.97 10.27L20.93 17.73L19.3 16.1L20.7 11H14.2L12.2 9H14.8L12 4.8L10.4 7.2L8.96 5.76L11.17 2.45C11.36 2.16 11.68 2 12 2S12.64 2.16 12.83 2.44L17.21 9H22C22.55 9 23 9.45 23 10Z"}
        ) 
      ]
    )
  }
}