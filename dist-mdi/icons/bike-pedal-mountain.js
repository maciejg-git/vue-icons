import { h } from 'vue'
export default {
  $_icon: {
    name: "BikePedalMountain",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bike","pedal","mountain"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M6.82 5C5.87 5 5.05 5.67 4.86 6.61L4.04 10.71C4 10.84 4 10.97 4 11.1V12.9C4 13.03 4 13.16 4.04 13.29L4.86 17.39C5.05 18.33 5.87 19 6.82 19H13.38C14.14 19 14.83 18.57 15.17 17.89L16.79 14.66C16.89 14.45 16.96 14.23 17 14H18V13H20V11H18V10H17C16.96 9.77 16.89 9.55 16.79 9.34L15.17 6.11C14.83 5.43 14.14 5 13.38 5H6.82M6.82 7H7.38L9.88 12L7.38 17H6.82L6 12.9V11.1L6.82 7M11.62 11L9.62 7H13.38L15 10.24V11H11.62M11.62 13H15V13.76L13.38 17H9.62L11.62 13Z"}
        ) 
      ]
    )
  }
}