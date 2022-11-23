import { h } from 'vue'
export default {
  $_icon: {
    name: "BroadcastOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["broadcast","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17.6 14.2C17.9 13.5 18 12.8 18 12C18 8.7 15.3 6 12 6C11.2 6 10.4 6.2 9.8 6.4L11.4 8H12C14.2 8 16 9.8 16 12C16 12.2 16 12.4 15.9 12.6L17.6 14.2M12 4C16.4 4 20 7.6 20 12C20 13.4 19.6 14.6 19 15.7L20.5 17.2C21.4 15.7 22 13.9 22 12C22 6.5 17.5 2 12 2C10.1 2 8.3 2.5 6.8 3.5L8.3 5C9.4 4.3 10.6 4 12 4M3.3 2.5L2 3.8L4.1 5.9C2.8 7.6 2 9.7 2 12C2 15.7 4 18.9 7 20.6L8 18.9C5.6 17.5 4 14.9 4 12C4 10.2 4.6 8.6 5.5 7.3L7 8.8C6.4 9.7 6 10.8 6 12C6 14.2 7.2 16.1 9 17.2L10 15.5C8.8 14.8 8 13.5 8 12.1C8 11.5 8.2 10.9 8.4 10.3L10 11.9V12.1C10 13.2 10.9 14.1 12 14.1H12.2L19.7 21.6L21 20.3L4.3 3.5L3.3 2.5Z"}
        ) 
      ]
    )
  }
}