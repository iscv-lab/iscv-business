import { PostStatus } from '@globaltypes/posts'
import { IMyDocument } from '..'

export type IPost = {
  businessId: number
  images?: string[]
  videos?: string[]
  content: string
  hashtag: string
  job?: string
  status: PostStatus
} & IMyDocument
