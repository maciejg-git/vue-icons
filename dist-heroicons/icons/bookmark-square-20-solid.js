import { h } from 'vue'
export default {
  $_icon: {
    name: "BookmarkSquare",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["bookmark","square"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bookmark-square"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.25 2C3.00736 2 2 3.00736 2 4.25V15.75C2 16.9926 3.00736 18 4.25 18H15.75C16.9926 18 18 16.9926 18 15.75V4.25C18 3.00736 16.9926 2 15.75 2H4.25ZM6 13.25V3.5H14V13.25C14 13.5058 13.8697 13.7439 13.6542 13.8818C13.4388 14.0196 13.1679 14.0382 12.9357 13.931L10 12.576L7.06429 13.931C6.83207 14.0382 6.56123 14.0196 6.34578 13.8818C6.13034 13.7439 6 13.5058 6 13.25Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}