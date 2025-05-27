import { h } from 'vue'
export default {
  $_icon: {
    name: "EyeClosed",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["eye","closed"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 17.5C8.2 17.5 4.8 15.4 3.2 12H1C2.7 16.4 7 19.5 12 19.5S21.3 16.4 23 12H20.8C19.2 15.4 15.8 17.5 12 17.5Z"}
        ) 
      ]
    )
  }
}