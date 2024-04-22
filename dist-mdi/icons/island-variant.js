import { h } from 'vue'
export default {
  $_icon: {
    name: "IslandVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["island","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M15 15.26V13H11L15 9H12L15 6H13L16 3L19 6H17L20 9H17L21 13H17V15.76C19.13 16.47 20.68 17.67 21 19C19.3 18.87 17.62 18.54 16 18C14.79 18.61 13.37 19 12 19C10.71 19 9.17 18.58 8 18C6.37 18.54 4.72 18.87 3 19C3.54 16.77 7.4 15 12 15C13.05 15 14.06 15.09 15 15.26M8 19C8 19 5 20 2 20V22C5 22 8 21 8 21C8 21 10 22 12 22C14 22 16 21 16 21C16 21 19 22 22 22V20C19 20 16 19 16 19C16 19 14 20 12 20C10 20 8 19 8 19Z"}
        ) 
      ]
    )
  }
}