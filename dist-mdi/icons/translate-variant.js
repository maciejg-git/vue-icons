import { h } from 'vue'
export default {
  $_icon: {
    name: "TranslateVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["translate","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 1H3C1.9 1 1 1.9 1 3V15L4 12H9V11C9 8.8 10.79 7 13 7V3C13 1.9 12.1 1 11 1M11 4L9.5 4C9.16 5.19 8.54 6.3 7.68 7.26L7.66 7.28L8.92 8.53L8.55 9.54L7 8L4.5 10.5L3.81 9.77L6.34 7.28C5.72 6.59 5.22 5.82 4.86 5H5.85C6.16 5.6 6.54 6.17 7 6.68C7.72 5.88 8.24 4.97 8.57 4L3 4V3H6.5V2H7.5V3H11V4M21 9H13C11.9 9 11 9.9 11 11V18C11 19.1 11.9 20 13 20H20L23 23V11C23 9.9 22.1 9 21 9M19.63 19L18.78 16.75H15.22L14.38 19H12.88L16.25 10H17.75L21.13 19H19.63M17 12L18.22 15.25H15.79L17 12Z"}
        ) 
      ]
    )
  }
}