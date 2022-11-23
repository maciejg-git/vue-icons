import { h } from 'vue'
export default {
  $_icon: {
    name: "ChildDress",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["child","dress"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M224 64c0-35.3-28.7-64-64-64S96 28.7 96 64s28.7 64 64 64s64-28.7 64-64zM88 400v80c0 17.7 14.3 32 32 32s32-14.3 32-32V400h16v80c0 17.7 14.3 32 32 32s32-14.3 32-32V400h17.8c10.9 0 18.6-10.7 15.2-21.1l-31.1-93.4 28.6 37.8c10.7 14.1 30.8 16.8 44.8 6.2s16.8-30.7 6.2-44.8L254.6 207c-22.4-29.6-57.5-47-94.6-47s-72.2 17.4-94.6 47L6.5 284.7c-10.7 14.1-7.9 34.2 6.2 44.8s34.2 7.9 44.8-6.2l28.7-37.8L55 378.9C51.6 389.3 59.3 400 70.2 400H88z"}
        ) 
      ]
    )
  }
}