/**
 * 将某些较大的数字转换为千分位显示
 * @param num 数字，比如star数、follower数
 */
export const formatBigNumber = (num: number) => {
  if (num < 1000) return num.toString()
  else if (num < 10000) return Math.floor(num / 1000) + ',' + (num % 1000)
  else return (num / 1000).toFixed(1) + 'k'
}

/**
 * 将[0,1]的小数转换为百分比字符串
 * @param num [0,1]的小数
 * @returns 百分比字符串
 */
export const factToPercent = (num: number) => {
  if (num <= 1) return (num * 100).toString().slice(0, 4) + '%'
  else return num
}

/**
 * 将[0,100]的数字转换为百分比字符串
 * @param num [0,100]的数字
 * @returns 百分比字符串
 */
export const numToPercent = (num: number) => {
  if (num <= 100) return num.toString().slice(0, 4) + '%'
  else return num
}
