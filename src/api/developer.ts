import request from '@/utils/request'
import type { DeveloperDTO } from '@/types/DTO'

export class Developer {
  /**
   * 获取开发者详细信息
   * @param name 开发者名称
   * @returns 开发者详细信息
   */
  static async getDeveloperInfoByName(name: string) {
    return request.get<DeveloperDTO>(`/evaluate/${name}`)
  }

  /**
   * 获取开发者详细信息
   * @param ID 开发者ID
   * @returns 开发者详细信息
   */
  static async getDeveloperInfoByID(ID: string) {
    return request.get<DeveloperDTO>(`/${ID}`)
  }
}
