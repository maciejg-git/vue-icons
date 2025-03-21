import { h } from 'vue'
export default {
  $_icon: {
    name: "MicrosoftXboxControllerMenu",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["microsoft","xbox","controller","menu"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M6,7H18V9H6V7M6,11H18V13H6V11M6,15H18V17H6V15Z"}
        ) 
      ]
    )
  }
}