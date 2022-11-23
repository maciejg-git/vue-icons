import { h } from 'vue'
export default {
  $_icon: {
    name: "AirplaneOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["airplane","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20.84 22.73L18 19.9L17.38 20.53L16 17.89L12.35 14.24L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L10.23 12.12L6.59 8.5L3.94 7.09L4.57 6.46L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73M16.67 9.92L20.56 6.03C21.15 5.45 21.15 4.5 20.56 3.91S19 3.33 18.44 3.91L14.55 7.8L9.94 6.74L17.74 14.54L16.67 9.92Z"}
        ) 
      ]
    )
  }
}