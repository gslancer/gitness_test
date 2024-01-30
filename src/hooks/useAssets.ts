/*
 * @Author: horyan
 * @Date: 2022-12-30 12:50:23
 * @LastEditTime: 2022-12-30 13:04:31
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/hooks/useAssets.ts
 */

export default () => {
  const getAssetsFile = (folder: string, name: string): string => {
    return new URL(`../assets/${folder}/${name}`, import.meta.url).href
  }

  return { getAssetsFile }
}
