import { h } from 'vue'
export default {
  $_icon: {
    name: "Modx",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Brands"],
    tags: ["modx"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M356 241.8l36.7 23.7V480l-133-83.8L356 241.8zM440 75H226.3l-23 37.8 153.5 96.5L440 75zm-89 142.8L55.2 32v214.5l46 29L351 217.8zM97 294.2L8 437h213.7l125-200.5L97 294.2z"}
        ) 
      ]
    )
  }
}