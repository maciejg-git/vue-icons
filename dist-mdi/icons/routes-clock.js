import { h } from 'vue'
export default {
  $_icon: {
    name: "RoutesClock",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["routes","clock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16.5 13H15V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13M16 9C14.04 9 12.27 9.82 11 11.12V7H17L19 5L17 3H11V2L10 1L9 2V6H3L1 8L3 10H9V20C7.9 20 7 20.9 7 22H12.41C13.46 22.63 14.69 23 16 23C19.87 23 23 19.87 23 16S19.87 9 16 9M16 20.85C13.32 20.85 11.15 18.68 11.15 16S13.32 11.15 16 11.15 20.85 13.32 20.85 16 18.68 20.85 16 20.85Z"}
        ) 
      ]
    )
  }
}