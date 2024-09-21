import { h } from 'vue'
export default {
  $_icon: {
    name: "Snowplow",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["snowplow"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M298.9 64l68.6 160L256 224l-64-64 0-96 106.9 0zM445.1 242.7l-87.4-204C347.6 15.3 324.5 0 298.9 0L176 0c-26.5 0-48 21.5-48 48l0 112-32 0c-17.7 0-32 14.3-32 32l0 106.8C26.2 316.8 0 355.3 0 400c0 61.9 50.1 112 112 112l256 0c61.9 0 112-50.1 112-112c0-17.2-3.9-33.5-10.8-48l42.8 0 0 50.7c0 17 6.7 33.3 18.7 45.3l54.6 54.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L576 402.7l0-82.7 0-84.8L633 164c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-57 71.2c-9.1 11.3-14 25.4-14 40l0 52.8-64 0 0-31.3c.1-2.4-.2-4.8-.6-7.1s-1.2-4.7-2.2-6.8zM368 352c26.5 0 48 21.5 48 48s-21.5 48-48 48l-256 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l256 0zM144 400a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm216 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm-56-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM200 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"}
        ) 
      ]
    )
  }
}