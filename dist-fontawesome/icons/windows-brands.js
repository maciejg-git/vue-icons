import { h } from 'vue'
export default {
  $_icon: {
    name: "Windows",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Brands"],
    tags: ["windows"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"}
        ) 
      ]
    )
  }
}