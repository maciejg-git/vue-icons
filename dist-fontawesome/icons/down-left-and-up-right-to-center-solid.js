import { h } from 'vue'
export default {
  $_icon: {
    name: "DownLeftAndUpRightToCenter",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["down","left","and","up","right","to","center"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M473 7c-9.4-9.4-24.6-9.4-33.9 0l-87 87L313 55c-6.9-6.9-17.2-8.9-26.2-5.2S272 62.3 272 72V216c0 13.3 10.7 24 24 24H440c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-39-39 87-87c9.4-9.4 9.4-24.6 0-33.9L473 7zM216 272H72c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l39 39L7 439c-9.4 9.4-9.4 24.6 0 33.9l32 32c9.4 9.4 24.6 9.4 33.9 0l87-87 39 39c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V296c0-13.3-10.7-24-24-24z"}
        ) 
      ]
    )
  }
}