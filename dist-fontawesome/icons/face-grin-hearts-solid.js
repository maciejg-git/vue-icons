import { h } from 'vue'
export default {
  $_icon: {
    name: "FaceGrinHearts",
    vendor: "Fa",
    type: ["solid"],
    tags: ["face","grin","hearts"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-face-grin-hearts"},
      [ 
        h(
          "path",
          {"d":"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256.3 331.8C208.9 331.8 164.1 324.9 124.5 312.8C112.2 309 100.2 319.7 105.2 331.5C130.1 390.6 188.4 432 256.3 432C324.2 432 382.4 390.6 407.4 331.5C412.4 319.7 400.4 309 388.1 312.8C348.4 324.9 303.7 331.8 256.3 331.8H256.3zM199.3 129.1C181.5 124.4 163.2 134.9 158.4 152.7L154.1 168.8L137.1 164.5C120.2 159.7 101.9 170.3 97.14 188.1C92.38 205.8 102.9 224.1 120.7 228.9L185.8 246.3C194.4 248.6 203.1 243.6 205.4 235L222.9 169.1C227.6 152.2 217.1 133.9 199.3 129.1H199.3zM353.6 152.7C348.8 134.9 330.5 124.4 312.7 129.1C294.9 133.9 284.4 152.2 289.1 169.1L306.6 235C308.9 243.6 317.6 248.6 326.2 246.3L391.3 228.9C409.1 224.1 419.6 205.8 414.9 188.1C410.1 170.3 391.8 159.7 374 164.5L357.9 168.8L353.6 152.7z"}
        ) 
      ]
    )
  }
}