import { h } from 'vue'
export default {
  $_icon: {
    name: "PercentBoxOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["percent","box","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.1 3 19 3M19 19H5V5H19V19M17 15.22C17 16.2 16.2 17 15.22 17C14.24 17 13.45 16.2 13.45 15.22C13.45 14.24 14.24 13.45 15.22 13.45C16.2 13.45 17 14.24 17 15.22M8.5 17.03L7 15.53L15.53 7L17.03 8.5L8.5 17.03M7.05 8.83C7.05 7.84 7.84 7.05 8.83 7.05C9.81 7.05 10.6 7.84 10.6 8.83C10.6 9.81 9.81 10.6 8.83 10.6C7.84 10.6 7.05 9.81 7.05 8.83Z"}
        ) 
      ]
    )
  }
}