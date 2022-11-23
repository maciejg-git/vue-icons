import { h } from 'vue'
export default {
  $_icon: {
    name: "VolcanoOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["volcano","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18 8H11L9 13H6L2 22H22L18 8M7.3 15H10.35L10.85 13.74L12.35 10H16.5L19.35 20H5.08L7.3 15M13 1H15V5H13V1M16.12 5.47L18.95 2.64L20.36 4.05L17.54 6.88L16.12 5.47M7.64 4.05L9.05 2.64L11.88 5.46L10.47 6.88L7.64 4.05Z"}
        ) 
      ]
    )
  }
}