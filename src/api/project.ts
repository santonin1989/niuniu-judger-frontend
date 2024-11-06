import request from '@/utils/request'
import type { ProjectType } from '@/types/project'

export class Project {
  /**
   * 获取用户参与的项目列表
   * @param ID GitHub ID
   * @returns 项目列表
   */
  static async getProjectList(username: string) {
    return request.get<ProjectType[]>(`/${username}/projects`)
  }

  /**
   * 获取项目贡献度
   * @param ID GitHub ID
   * @param projectID 项目 ID
   * @returns 项目贡献度
   */
  static async getProjectContribution(ID: string, projectID: string) {
    return request.get<number>(`/${ID}/contributionScore`, {
      params: { projectID },
    })
  }

  /**
   * 获取项目重要性
   * @param projectID 项目 ID
   * @returns 项目重要性
   */
  static async getProjectImportance(projectID: string) {
    return request.get<number>(`/projectImportance/${projectID}`)
  }
}
