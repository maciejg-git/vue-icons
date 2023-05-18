import { h } from 'vue'
export default {
  $_icon: {
    name: "RadioactiveCircleOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["radioactive","circle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12 4C16.4 4 20 7.6 20 12S16.4 20 12 20 4 16.4 4 12 7.6 4 12 4M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M15 17.2L13.2 14.2C12.8 14.4 12.4 14.5 12 14.5S11.1 14.4 10.8 14.2C10.3 15.1 9.6 16.2 9 17.2C9.9 17.7 10.9 18 12 18S14.1 17.7 15 17.2M15 6.8L13.2 9.8C13.9 10.2 14.5 11 14.5 12H18C18 9.8 16.8 7.8 15 6.8M12 13C12.6 13 13 12.6 13 12S12.6 11 12 11 11 11.4 11 12 11.4 13 12 13M6 12H9.5C9.5 11.1 10 10.3 10.8 9.8C10.3 8.9 9.6 7.8 9 6.8C7.2 7.8 6 9.8 6 12Z"}
        ) 
      ]
    )
  }
}