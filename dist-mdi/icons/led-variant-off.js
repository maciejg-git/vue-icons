import { h } from 'vue'
export default {
  $_icon: {
    name: "LedVariantOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["led","variant","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,3C10.05,3 8.43,4.4 8.08,6.25L16.82,15H18V13H16V7A4,4 0 0,0 12,3M3.28,4L2,5.27L8,11.27V13H6V15H9V21H11V15H11.73L13,16.27V21H15V18.27L18.73,22L20,20.72L15,15.72L8,8.72L3.28,4Z"}
        ) 
      ]
    )
  }
}