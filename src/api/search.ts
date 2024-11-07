import type { DeveloperDTO } from '@/types/DTO'
import request from '@/utils/request'

export class Search {
  /**
   * 搜索开发者
   * @param name 开发者名称
   * @returns 开发者列表
   */
  static async searchDeveloper(name: string) {
    return request.get<DeveloperDTO[]>(`/searchByName`, {
      params: { name },
    })
  }

  /**
   * 搜索领域开发者
   * @param keyword 领域名称
   * @returns 开发者列表
   */
  static async searchDomain(keyword: string) {
    return request.get<DeveloperDTO[]>(`/searchbykeyword`, {
      params: { keyword: keyword },
    })
  }
}
