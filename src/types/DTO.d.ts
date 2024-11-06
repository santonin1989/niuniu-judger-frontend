export interface DeveloperDTO {
  id: number | null
  githubId: string // GitHub ID
  username: string // GitHub用户名
  avatarUrl: string | null // GitHub头像链接
  bio: string | null // GitHub用户简介
  company: string | null // 公司
  location: string | null // 所在地
  email: string | null // 邮箱
  publicRepos: number // 公开仓库数
  name: string | null // 真实姓名
  profileUrl: string | null // 个人主页链接
  blog: string | null // 博客链接
  talentRank: number // 得分
  nation: string | null // 所属国家
  nationConfidence: number // 所属国家置信度
  domain: string | null // 领域
  domainConfidence: number // 领域置信度
  followerScore: number // 粉丝评分
  followersCount: number // 粉丝数
  followingCount: number // 关注数
  pageRankScore: number // 页面评分？
  contributionValue: number // 贡献值
  htmlUrl: string | null // ？
  comment: string | null // 评价
}
