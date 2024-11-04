export interface DeveloperDTO {
  id: number
  githubId: string // GitHub ID
  username: string // GitHub用户名
  avatarUrl: string // GitHub用户头像
  bio: string // GitHub用户简介
  company: string // 公司
  location: string // 所在地
  email: string // 邮箱
  publicRepos: number // 公开仓库数
  name: string // 真实姓名
  profileUrl: string // 个人主页链接
  blog: string // 博客链接
  talentRank: number // 得分
  nation: string // 所属国家
  nationConfidence: number // 所属国家置信度
  domain: string // 领域
  domainConfidence: number // 领域置信度
  followersCount: number // 粉丝数
  followingCount: number // 关注数
  pageRankScore: number // 页面评分？
  contributionValue: number // 贡献值？
  htmlUrl: string // ？
  comment: string // 评价
}
