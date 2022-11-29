import { h } from 'vue'
export default {
  $_icon: {
    name: "Voicemail",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["voicemail"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M144 160c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80zM263.8 320c15.3-22.9 24.2-50.4 24.2-80c0-79.5-64.5-144-144-144S0 160.5 0 240s64.5 144 144 144H496c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144c0 29.6 8.9 57.1 24.2 80H263.8zM496 320c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z"}
        ) 
      ]
    )
  }
}