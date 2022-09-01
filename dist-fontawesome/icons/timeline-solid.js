import { h } from 'vue'
export default {
  $_icon: {
    name: "Timeline",
    vendor: "Fa",
    type: ["solid"],
    tags: ["timeline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-timeline"},
      [ 
        h(
          "path",
          {"d":"M160 224H480V169.3C451.7 156.1 432 128.8 432 96C432 51.82 467.8 16 512 16C556.2 16 592 51.82 592 96C592 128.8 572.3 156.1 544 169.3V224H608C625.7 224 640 238.3 640 256C640 273.7 625.7 288 608 288H352V342.7C380.3 355 400 383.2 400 416C400 460.2 364.2 496 320 496C275.8 496 240 460.2 240 416C240 383.2 259.7 355 288 342.7V288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H96V169.3C67.75 156.1 48 128.8 48 96C48 51.82 83.82 16 128 16C172.2 16 208 51.82 208 96C208 128.8 188.3 156.1 160 169.3V224zM128 120C141.3 120 152 109.3 152 96C152 82.75 141.3 72 128 72C114.7 72 104 82.75 104 96C104 109.3 114.7 120 128 120zM512 72C498.7 72 488 82.75 488 96C488 109.3 498.7 120 512 120C525.3 120 536 109.3 536 96C536 82.75 525.3 72 512 72zM320 440C333.3 440 344 429.3 344 416C344 402.7 333.3 392 320 392C306.7 392 296 402.7 296 416C296 429.3 306.7 440 320 440z"}
        ) 
      ]
    )
  }
}