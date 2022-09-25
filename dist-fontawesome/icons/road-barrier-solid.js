import { h } from 'vue'
export default {
  $_icon: {
    name: "RoadBarrier",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["road","barrier"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-road-barrier"},
      [ 
        h(
          "path",
          {"d":"M32 32C49.67 32 64 46.33 64 64V96H149.2L64 266.3V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32V32zM309.2 288H234.8L330.8 96H405.2L309.2 288zM458.8 96H533.2L437.2 288H362.8L458.8 96zM202.8 96H277.2L181.2 288H106.8L202.8 96zM576 117.7V64C576 46.33 590.3 32 608 32C625.7 32 640 46.33 640 64V448C640 465.7 625.7 480 608 480C590.3 480 576 465.7 576 448V288H490.8L576 117.7z"}
        ) 
      ]
    )
  }
}