import type IUser from '@/entries/users'

export interface IPost {
  user: IUser
  id: number
  title: string
  body: string
}

export interface IPostResponse extends Omit<IPost, 'user'> {
  userId: number
}
