import { h } from 'vue'
export default {
  $_icon: {
    name: "PersonHalfDress",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["person","half","dress"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8 352V128h6.9c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352h0zM58.2 182.3c19.9-33.1 55.3-53.5 93.8-54.3V384h0v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2z"}
        ) 
      ]
    )
  }
}