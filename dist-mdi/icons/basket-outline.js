import { h } from 'vue'
export default {
  $_icon: {
    name: "BasketOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["basket","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-basket-outline"},
      [ 
        h(
          "path",
          {"d":"M22 9H17.21L12.83 2.44C12.64 2.16 12.32 2 12 2S11.36 2.16 11.17 2.45L6.79 9H2C1.45 9 1 9.45 1 10C1 10.09 1 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45 22.55 9 22 9M12 4.8L14.8 9H9.2L12 4.8M18.5 19L5.5 19L3.31 11H20.7L18.5 19M12 13C10.9 13 10 13.9 10 15S10.9 17 12 17 14 16.1 14 15 13.1 13 12 13Z"}
        ) 
      ]
    )
  }
}