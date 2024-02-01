import { SecureStorage } from "@plasmohq/storage/secure"
 
let storage;

(async () => {
  storage = new SecureStorage()
  await storage.setPassword("roosevelt");
})()

export const setItemInStorage = async (key: string, value: any) => {
  await storage.set(key, value)
}

export const getItemFromStorage = async (key: string) => {
  const data = await storage.get(key)
  return data
}

