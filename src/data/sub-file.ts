import { main } from '@sub-lib'

export const mainSubFile = async() => {
  const data = await main()
  console.log({ data })
}