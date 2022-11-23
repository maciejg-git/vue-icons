import { h } from 'vue'
export default {
  $_icon: {
    name: "ClockTimeElevenOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["clock","time","eleven","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 7V13H11L8.5 8.6L9.8 7.8L11 10V7H12.5Z"}
        ) 
      ]
    )
  }
}