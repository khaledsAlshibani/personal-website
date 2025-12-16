export interface HeaderContent {
  id: number
  titlePrefix?: string
  title: string
  description: string
  img: {
    src: string
    alt: string
    width?: number
    height?: number
  }
}
