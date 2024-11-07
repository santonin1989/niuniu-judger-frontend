import fs, { readFile } from 'fs'
import { load } from 'cheerio'

// 读取 HTML 文件
readFile('./nation.html', 'utf-8', (err, htmlString) => {
  if (err) {
    console.error(err)
    return
  }

  // 解析 HTML
  const $ = load(htmlString)
  const countries = []

  // 遍历表格
  $('table tbody tr').each((index, element) => {
    const cells = $(element).find('td')

    if (cells.length >= 4) {
      const enName = $(cells[2]).text().trim()
      const fullname = $(cells[1]).text().trim()
      const name = $(cells[0]).text().trim()

      countries.push({ name, fullname, enName })
    }
  })

  // 将结果保存为 countries.json 文件
  fs.writeFile('countries.json', JSON.stringify(countries, null, 2), err => {
    if (err) {
      console.error('保存 JSON 文件错误:', err)
    } else {
      console.log('JSON 文件已成功保存为 countries.json')
    }
  })
})
