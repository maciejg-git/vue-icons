import { h } from 'vue'
export default {
  $_icon: {
    name: "LandmarkDome",
    vendor: "Fa",
    type: ["solid"],
    tags: ["landmark","dome"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-landmark-dome"},
      [ 
        h(
          "path",
          {"d":"M264 0C277.3 0 288 10.75 288 24V34.65C368.4 48.14 431.9 111.6 445.3 192H448C465.7 192 480 206.3 480 224C480 241.7 465.7 256 448 256H63.1C46.33 256 31.1 241.7 31.1 224C31.1 206.3 46.33 192 63.1 192H66.65C80.14 111.6 143.6 48.14 223.1 34.65V24C223.1 10.75 234.7 0 247.1 0L264 0zM63.1 288H127.1V416H167.1V288H231.1V416H280V288H344V416H384V288H448V420.3C448.6 420.6 449.2 420.1 449.8 421.4L497.8 453.4C509.5 461.2 514.7 475.8 510.6 489.3C506.5 502.8 494.1 512 480 512H31.1C17.9 512 5.458 502.8 1.372 489.3C-2.715 475.8 2.515 461.2 14.25 453.4L62.25 421.4C62.82 420.1 63.41 420.6 63.1 420.3V288z"}
        ) 
      ]
    )
  }
}