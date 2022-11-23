import { h } from 'vue'
export default {
  $_icon: {
    name: "GlassWaterDroplet",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["glass","water","droplet"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 0C55.1 0 46.6 3.7 40.6 10.2s-9.1 15.2-8.5 24.1L60.9 437.7c3 41.9 37.8 74.3 79.8 74.3H307.3c42 0 76.8-32.4 79.8-74.3L415.9 34.3c.6-8.9-2.4-17.6-8.5-24.1S392.9 0 384 0H64zm51 297.5L98.4 64H349.6L333 297.5 320 304c-20.1 10.1-43.9 10.1-64 0s-43.9-10.1-64 0s-43.9 10.1-64 0l-13-6.5zM288 196c0-24-33.7-70.1-52.2-93.5c-6.1-7.7-17.5-7.7-23.6 0C193.7 125.9 160 172 160 196c0 33.1 28.7 60 64 60s64-26.9 64-60z"}
        ) 
      ]
    )
  }
}