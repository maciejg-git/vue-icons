import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric10BoxMultiple",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["numeric","10","box","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3 5V21H19V23H3C1.9 23 1 22.11 1 21V5H3M16 13H18V7H16V13M21 1H7C5.9 1 5 1.9 5 3V17C5 18.11 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.9 22.11 1 21 1M12 15H10V7H8V5H12V15M20 13C20 14.11 19.11 15 18 15H16C14.9 15 14 14.11 14 13V7C14 5.9 14.9 5 16 5H18C19.11 5 20 5.9 20 7V13Z"}
        ) 
      ]
    )
  }
}