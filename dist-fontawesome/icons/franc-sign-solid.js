import { h } from 'vue'
export default {
  $_icon: {
    name: "FrancSign",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["franc","sign"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-franc-sign"},
      [ 
        h(
          "path",
          {"d":"M288 32C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H112V192H256C273.7 192 288 206.3 288 224C288 241.7 273.7 256 256 256H112V320H192C209.7 320 224 334.3 224 352C224 369.7 209.7 384 192 384H112V448C112 465.7 97.67 480 80 480C62.33 480 48 465.7 48 448V384H32C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320H48V64C48 46.33 62.33 32 80 32H288z"}
        ) 
      ]
    )
  }
}