import { h } from 'vue'
export default {
  $_icon: {
    name: "WaterSync",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["water","sync"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-water-sync"},
      [ 
        h(
          "path",
          {"d":"M12 3.2C12 3.2 6 10 6 14C6 17.3 8.7 20 12 20S18 17.3 18 14C18 10 12 3.2 12 3.2M12 8.5V10C14.2 10 16 11.8 16 14C16 14.8 15.8 15.6 15.3 16.2L14.2 15.1C14.4 14.8 14.5 14.4 14.5 14C14.5 12.6 13.4 11.5 12 11.5V13L9.8 10.8L12 8.5M8.7 11.8L9.8 12.9C9.6 13.2 9.5 13.6 9.5 14C9.5 15.4 10.6 16.5 12 16.5V15L14.2 17.2L12 19.5V18C9.8 18 8 16.2 8 14C8 13.2 8.2 12.4 8.7 11.8Z"}
        ) 
      ]
    )
  }
}