import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareGooglePlus",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Brands"],
    tags: ["square","google","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM64 256c0-55.3 44.7-100 100-100c27 0 49.5 9.8 67 26.2l-27.1 26.1c-7.4-7.1-20.3-15.4-39.8-15.4c-34.1 0-61.9 28.2-61.9 63.2c0 34.9 27.8 63.2 61.9 63.2c39.6 0 54.4-28.5 56.8-43.1H164V241.8h94.4c1 5 1.6 10.1 1.6 16.6c0 57.1-38.3 97.6-96 97.6c-55.3 0-100-44.7-100-100zm291 18.2v29H325.8v-29h-29V245h29V216H355v29h29v29.2H355z"}
        ) 
      ]
    )
  }
}