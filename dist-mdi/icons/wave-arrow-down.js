import { h } from 'vue'
export default {
  $_icon: {
    name: "WaveArrowDown",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["wave","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 7H22V9H20C18.62 9 17.26 8.65 16 8C13.5 9.3 10.5 9.3 8 8C6.74 8.65 5.37 9 4 9H2V7H4C5.39 7 6.78 6.53 8 5.67C10.44 7.38 13.56 7.38 16 5.67C17.22 6.53 18.61 7 20 7M12 22L8 18H11V11H13V18H16L12 22Z"}
        ) 
      ]
    )
  }
}