import { h } from 'vue'
export default {
  $_icon: {
    name: "PailOffOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pail","off","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20.84 22.73L17.35 19.24L17 21H7L5.9 15.5L7.73 14.43L8.64 19H15.36L15.65 17.54L9.31 11.2L4.27 14.11C3.79 14.39 3.18 14.23 2.9 13.75C2.62 13.27 2.79 12.66 3.27 12.38L7.85 9.74L6.38 8.27L4.65 9.27L4 6H3V4.89L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M17.96 6L16.5 13.3L18.2 15L20 6H21V4H7.2L9.2 6H17.96M11.5 7.63L11.08 7.88L12.53 9.33C12.97 9.05 13.13 8.46 12.86 8C12.58 7.5 11.97 7.35 11.5 7.63Z"}
        ) 
      ]
    )
  }
}