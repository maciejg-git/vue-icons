import { h } from 'vue'
export default {
  $_icon: {
    name: "OctagramEdit",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["octagram","edit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2.2 16.06L3.88 12L2.2 7.94L6.26 6.26L7.94 2.2L12 3.88L16.06 2.2L17.74 6.26L21.8 7.94L20.94 10C20.38 10.06 19.82 10.3 19.38 10.75L11 19.13V20.53L7.94 21.8L6.26 17.74L2.2 16.06M19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19L21.87 15.17L19.83 13.13M21.17 15.88L15.04 22H13V19.96L19.13 13.83L21.17 15.88L21.17 15.88Z"}
        ) 
      ]
    )
  }
}