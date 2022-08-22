import fs from "fs"
import {join} from "path"

const galleryDirectory = join(process.cwd(), "public", "gallery")

export function getImageBySlug(slug) {
  const realSlug = slug.replace(/^\/gallery\//, "")
}

export function getAllGalleryImages() {
  const slugs = fs.readdirSync(galleryDirectory)
  const images = slugs.map(slug => getImageBySlug(slug))

  return images
}