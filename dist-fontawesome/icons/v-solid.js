import { h } from 'vue'
export default {
  $_icon: {
    name: "V",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["v"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M51.7 34.5c16.3-6.8 35 .9 41.8 17.2L224 364.8 354.5 51.7c6.8-16.3 25.5-24 41.8-17.2s24 25.5 17.2 41.8l-160 384c-5 11.9-16.6 19.7-29.5 19.7s-24.6-7.8-29.5-19.7l-160-384c-6.8-16.3 .9-35 17.2-41.8z"}
        ) 
      ]
    )
  }
}