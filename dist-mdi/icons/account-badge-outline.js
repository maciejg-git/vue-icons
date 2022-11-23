import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountBadgeOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["account","badge","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14 20H4V17C4 14.3 9.3 13 12 13C13.5 13 15.9 13.4 17.7 14.3C16.9 14.6 16.3 15 15.7 15.5C14.6 15.1 13.3 14.9 12 14.9C9 14.9 5.9 16.4 5.9 17V18.1H14.2C14.1 18.5 14 19 14 19.5V20M23 19.5C23 21.4 21.4 23 19.5 23S16 21.4 16 19.5 17.6 16 19.5 16 23 17.6 23 19.5M12 6C13.1 6 14 6.9 14 8S13.1 10 12 10 10 9.1 10 8 10.9 6 12 6M12 4C9.8 4 8 5.8 8 8S9.8 12 12 12 16 10.2 16 8 14.2 4 12 4Z"}
        ) 
      ]
    )
  }
}