import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowsToCircle",
    vendor: "Fa",
    type: "Solid",
    tags: ["arrows","to","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-arrows-to-circle"},
      [ 
        h(
          "path",
          {"d":"M9.372 9.372C21.87-3.124 42.13-3.124 54.63 9.372L159.1 114.7V95.1C159.1 78.33 174.3 63.1 191.1 63.1C209.7 63.1 223.1 78.33 223.1 95.1V191.1C223.1 196.3 223.1 200.5 221.6 204.2C220 207.1 217.7 211.5 214.7 214.6L214.6 214.7C211.5 217.7 207.1 220 204.2 221.6C200.5 223.1 196.3 223.1 191.1 223.1H95.1C78.33 223.1 63.1 209.7 63.1 191.1C63.1 174.3 78.33 159.1 95.1 159.1H114.7L9.372 54.63C-3.124 42.13-3.124 21.87 9.372 9.372V9.372zM384 256C384 291.3 355.3 320 320 320C284.7 320 256 291.3 256 256C256 220.7 284.7 192 320 192C355.3 192 384 220.7 384 256zM96 352C78.33 352 64 337.7 64 320C64 302.3 78.33 288 96 288H192H192.1C200.9 288 208.8 291.6 214.6 297.3L214.7 297.4C217.7 300.5 220 304 221.6 307.8C223.1 311.5 224 315.7 224 319.1V416C224 433.7 209.7 448 192 448C174.3 448 160 433.7 160 416V397.3L54.63 502.6C42.13 515.1 21.87 515.1 9.373 502.6C-3.124 490.1-3.124 469.9 9.373 457.4L114.7 352L96 352zM448 64C465.7 64 480 78.33 480 96V114.7L585.4 9.373C597.9-3.124 618.1-3.124 630.6 9.373C643.1 21.87 643.1 42.13 630.6 54.63L525.3 160H544C561.7 160 576 174.3 576 192C576 209.7 561.7 224 544 224H448C439.2 224 431.2 220.4 425.4 214.7L425.3 214.6C422.3 211.5 419.1 207.1 418.4 204.2C416.9 200.5 416 196.4 416 192.1V191.1V96C416 78.33 430.3 64 448 64H448zM525.3 352L630.6 457.4C643.1 469.9 643.1 490.1 630.6 502.6C618.1 515.1 597.9 515.1 585.4 502.6L480 397.3V416C480 433.7 465.7 448 448 448C430.3 448 416 433.7 416 416V320C416 319.1 416 319.9 416 319.9C416 315.6 416.9 311.5 418.4 307.8C419.1 303.1 422.3 300.4 425.4 297.4C431.1 291.6 439.1 288 447.9 288C447.9 288 447.1 288 448 288H544C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L525.3 352z"}
        ) 
      ]
    )
  }
}