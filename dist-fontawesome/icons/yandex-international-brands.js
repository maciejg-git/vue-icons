import { h } from 'vue'
export default {
  $_icon: {
    name: "YandexInternational",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Brands"],
    tags: ["yandex","international"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M129.5 512V345.9L18.5 48h55.8l81.8 229.7L250.2 0h51.3L180.8 347.8V512h-51.3z"}
        ) 
      ]
    )
  }
}