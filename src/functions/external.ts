import { axiosCall } from '@sub-lib'

export const externalLibFunction = async () => {
  console.log('Calling external function from "sub-lib"')
  return await axiosCall()
}