import fs from "fs"
import {join} from "path"

const galleryDirectory = join(process.cwd(), "public", "gallery")

export function getAllGalleryImages() {
  const paths = fs.readdirSync(galleryDirectory)
  const images = paths.sort().reverse().map(path => {
    return {
        path: path,
        name: path.substring(0, path.lastIndexOf(".")),
    }
  })

  return images
}