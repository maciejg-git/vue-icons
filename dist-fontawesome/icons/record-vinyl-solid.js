import { h } from 'vue'
export default {
  $_icon: {
    name: "RecordVinyl",
    vendor: "Fa",
    type: ["solid"],
    tags: ["record","vinyl"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-record-vinyl"},
      [ 
        h(
          "path",
          {"d":"M256 160C202.9 160 160 202.9 160 256s42.92 96 96 96c53.08 0 96-42.92 96-96S309.1 160 256 160zM256 288C238.3 288 224 273.7 224 256s14.33-32 32-32c17.67 0 32 14.33 32 32S273.7 288 256 288zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256c141.4 0 256-114.6 256-256S397.4 0 256 0zM256 384c-70.75 0-128-57.25-128-128s57.25-128 128-128s128 57.25 128 128S326.8 384 256 384z"}
        ) 
      ]
    )
  }
}