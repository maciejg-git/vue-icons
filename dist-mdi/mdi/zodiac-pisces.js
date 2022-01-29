import { h } from 'vue'
export default {
  $_icon: {
    name: "ZodiacPisces",
    vendor: "Mdi",
    type: "",
    tags: ["zodiac","pisces"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-zodiac-pisces","innerHTML":"<path d='M20,11H18C18.11,8.19 18.73,5.42 19.81,2.82L18,2.06C16.81,4.9 16.13,7.92 16,11H8C7.87,7.92 7.19,4.9 6,2.06L4.14,2.82C5.24,5.41 5.87,8.18 6,11H4V13H6C5.89,15.81 5.27,18.58 4.19,21.18L6,21.94C7.19,19.1 7.87,16.08 8,13H16C16.13,16.08 16.81,19.1 18,21.94L19.86,21.18C18.76,18.59 18.13,15.82 18,13H20V11Z' />"},
    )
  }
}