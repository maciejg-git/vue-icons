import { h } from 'vue'
export default {
  $_icon: {
    name: "Passport",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["passport"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-passport"},
      [ 
        h(
          "path",
          {"d":"M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V4A2,2 0 0,0 18,2H6M12,5A5,5 0 0,1 17,10A5,5 0 0,1 12,15A5,5 0 0,1 7,10A5,5 0 0,1 12,5M12,6C11.59,6.62 11.25,7.29 11.04,8H12.96C12.75,7.29 12.42,6.62 12,6M10.7,6.22C9.78,6.53 9,7.17 8.54,8H10C10.18,7.38 10.4,6.78 10.7,6.22M13.29,6.22C13.59,6.78 13.82,7.38 14,8H15.46C15,7.17 14.21,6.54 13.29,6.22M8.13,9C8.05,9.32 8,9.65 8,10C8,10.35 8.05,10.68 8.13,11H9.82C9.78,10.67 9.75,10.34 9.75,10C9.75,9.66 9.78,9.33 9.82,9H8.13M10.83,9C10.78,9.32 10.75,9.66 10.75,10C10.75,10.34 10.78,10.67 10.83,11H13.17C13.21,10.67 13.25,10.34 13.25,10C13.25,9.66 13.21,9.32 13.17,9H10.83M14.18,9C14.22,9.33 14.25,9.66 14.25,10C14.25,10.34 14.22,10.67 14.18,11H15.87C15.95,10.68 16,10.35 16,10C16,9.65 15.95,9.32 15.87,9H14.18M8.54,12C9,12.83 9.78,13.46 10.7,13.78C10.4,13.22 10.18,12.63 10,12H8.54M11.04,12C11.25,12.72 11.59,13.38 12,14C12.42,13.38 12.75,12.72 12.96,12H11.04M14,12C13.82,12.63 13.59,13.22 13.29,13.78C14.21,13.46 15,12.83 15.46,12H14M7,17H17V19H7V17Z"}
        ) 
      ]
    )
  }
}