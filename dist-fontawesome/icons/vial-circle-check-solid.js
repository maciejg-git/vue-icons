import { h } from 'vue'
export default {
  $_icon: {
    name: "VialCircleCheck",
    vendor: "Fa",
    type: ["solid"],
    tags: ["vial","circle","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-vial-circle-check"},
      [ 
        h(
          "path",
          {"d":"M0 64C0 46.33 14.33 32 32 32H224C241.7 32 256 46.33 256 64C256 81.67 241.7 96 224 96V266.8C203.8 295.4 192 330.3 192 368C192 393.2 197.3 417.1 206.8 438.8C189.5 463.7 160.6 480 128 480C74.98 480 32 437 32 384V96C14.33 96 0 81.67 0 64V64zM96 192H160V96H96V192zM512 368C512 447.5 447.5 512 368 512C288.5 512 224 447.5 224 368C224 288.5 288.5 224 368 224C447.5 224 512 288.5 512 368zM412.7 324.7L352 385.4L323.3 356.7C317.1 350.4 306.9 350.4 300.7 356.7C294.4 362.9 294.4 373.1 300.7 379.3L340.7 419.3C346.9 425.6 357.1 425.6 363.3 419.3L435.3 347.3C441.6 341.1 441.6 330.9 435.3 324.7C429.1 318.4 418.9 318.4 412.7 324.7H412.7z"}
        ) 
      ]
    )
  }
}