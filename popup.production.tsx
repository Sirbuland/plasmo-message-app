import { MemoryRouter } from "react-router-dom"
import { setItemInStorage } from "~app/utils/storage";

import { Routing } from "~routes/index.production"

chrome.storage.local.get(["contentScrapped"], (result) => {
  setItemInStorage('paragraphs', result.contentScrapped || result);
})

function IndexPopup() {
  return (
    <MemoryRouter>
      <Routing />
    </MemoryRouter>
  )
}

export default IndexPopup
