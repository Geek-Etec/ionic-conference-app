
export interface UserOptions {
  userName: string,
  name?: string,
  surname?: string,
  emailAddress?: string,
  isActive?: boolean,
  roles?: Array<string>,
  password: string,
  token?: string
}
