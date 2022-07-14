import { h } from 'vue'
export default {
  $_icon: {
    name: "BusMarker",
    vendor: "Mdi",
    type: "",
    tags: ["bus","marker"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bus-marker"},
      [ 
        h(
          "path",
          {"d":"M12 2C7.58 2 4 2.5 4 6V16A3 3 0 0 0 5 18.22V20A1 1 0 0 0 6 21H7A1 1 0 0 0 8 20V19H14A8 8 0 0 1 13 15.5A5.55 5.55 0 0 1 15.38 11H6V6H18V10A4.07 4.07 0 0 1 18.5 10A5.34 5.34 0 0 1 20 10.22V6C20 2.5 16.42 2 12 2M7.5 14A1.5 1.5 0 1 1 6 15.5A1.5 1.5 0 0 1 7.5 14M18.5 12A3.54 3.54 0 0 0 15 15.5C15 18.1 18.5 22 18.5 22S22 18.1 22 15.5A3.54 3.54 0 0 0 18.5 12M18.5 16.8A1.2 1.2 0 1 1 18.5 14.4A1.29 1.29 0 0 1 19.7 15.6A1.15 1.15 0 0 1 18.5 16.8Z"}
        ) 
      ]
    )
  }
}