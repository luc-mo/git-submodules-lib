import { main as subMain } from '@sub-lib'

export const main = async() => {
  const data = await subMain()
  console.log({ data })
}