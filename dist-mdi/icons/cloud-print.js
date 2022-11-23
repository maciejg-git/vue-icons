import { h } from 'vue'
export default {
  $_icon: {
    name: "CloudPrint",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["cloud","print"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M21.86 10.5C21.1 9.63 20.15 9.13 19 9C19 7.05 18.32 5.4 16.96 4.04C15.6 2.68 13.95 2 12 2C10.42 2 9 2.5 7.75 3.43S5.67 5.62 5.25 7.15C4 7.43 2.96 8.08 2.17 9.1S1 11.28 1 12.58C1 14.09 1.54 15.38 2.61 16.43C3.57 17.36 4.7 17.85 6 17.95V22H18V18H18.5C19.75 18 20.81 17.56 21.69 16.69C22.56 15.81 23 14.75 23 13.5C23 12.35 22.62 11.35 21.86 10.5M16 20H8V13H16V20M15 15H9V14H15V15M15 17H9V16H15V17M15 19H9V18H15V19Z"}
        ) 
      ]
    )
  }
}