import { h } from 'vue'
export default {
  $_icon: {
    name: "ArmFlexOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["arm","flex","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arm-flex-outline"},
      [ 
        h(
          "path",
          {"d":"M7 7.76V16.25H11.08L11.68 15.34C12.84 13.55 14.93 12.75 16.47 12.75C17 12.75 17.45 12.84 17.79 13C18.7 13.41 18.95 14.18 19 14.74C19.08 15.87 18.5 17.03 17.5 17.71C16.6 18.33 14.44 19 11.87 19C10.12 19 7.61 18.69 5.12 17.3C5.41 14.85 6 10.88 7 7.76M7 3C4 7.09 3 18.34 3 18.34C5.9 20.31 9.08 21 11.87 21C14.86 21 17.39 20.21 18.64 19.36C21.64 17.32 21.94 12.71 18.64 11.18C18 10.89 17.26 10.75 16.47 10.75C14.17 10.75 11.5 11.96 10 14.25H9V7.09H11L12 4L7 3Z"}
        ) 
      ]
    )
  }
}