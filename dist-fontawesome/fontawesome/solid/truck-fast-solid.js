import { h } from 'vue'
export default {
  $_icon: {
    name: "TruckFast",
    vendor: "Fa",
    type: "Solid",
    tags: ["truck","fast"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-truck-fast"},
      [ 
        h(
          "path",
          {"d":"M112 0C85.49 0 64 21.49 64 48V96H16C7.163 96 0 103.2 0 112C0 120.8 7.163 128 16 128H272C280.8 128 288 135.2 288 144C288 152.8 280.8 160 272 160H48C39.16 160 32 167.2 32 176C32 184.8 39.16 192 48 192H240C248.8 192 256 199.2 256 208C256 216.8 248.8 224 240 224H16C7.163 224 0 231.2 0 240C0 248.8 7.163 256 16 256H208C216.8 256 224 263.2 224 272C224 280.8 216.8 288 208 288H64V416C64 469 106.1 512 160 512C213 512 256 469 256 416H384C384 469 426.1 512 480 512C533 512 576 469 576 416H608C625.7 416 640 401.7 640 384C640 366.3 625.7 352 608 352V237.3C608 220.3 601.3 204 589.3 192L512 114.7C499.1 102.7 483.7 96 466.7 96H416V48C416 21.49 394.5 0 368 0H112zM544 237.3V256H416V160H466.7L544 237.3zM160 464C133.5 464 112 442.5 112 416C112 389.5 133.5 368 160 368C186.5 368 208 389.5 208 416C208 442.5 186.5 464 160 464zM528 416C528 442.5 506.5 464 480 464C453.5 464 432 442.5 432 416C432 389.5 453.5 368 480 368C506.5 368 528 389.5 528 416z"}
        ) 
      ]
    )
  }
}