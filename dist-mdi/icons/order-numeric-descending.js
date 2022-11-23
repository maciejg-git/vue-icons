import { h } from 'vue'
export default {
  $_icon: {
    name: "OrderNumericDescending",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["order","numeric","descending"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7 11H3V9H7V8H5C3.9 8 3 7.11 3 6V5C3 3.9 3.9 3 5 3H7C8.11 3 9 3.9 9 5V9C9 10.11 8.11 11 7 11M7 5H5V6H7M5 13H7C8.11 13 9 13.9 9 15V19C9 20.11 8.11 21 7 21H5C3.9 21 3 20.11 3 19V15C3 13.9 3.9 13 5 13M5 19H7V15H5M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z"}
        ) 
      ]
    )
  }
}