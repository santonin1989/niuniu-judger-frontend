# NiuniuJudger

该项目为“求实创造队”在2024年七牛云1024创作节参赛作品《Niuniu Judger》的前端部分，后端仓库请见https://github.com/Cihnomi/NiuniuJudger

## 前端技术栈

**Vue 3** + **TypeScript**: 主要开发框架和语言。

**Vite**: 快速的构建工具。

**Vue Router**: 用于路由管理。

**Axios**: 封装用于与后端 API 通信的请求。

**ESLint**: 代码静态检查工具，确保代码质量。

**Less**: CSS预处理器，提升样式开发效率。

## 推荐运行环境

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## 如何运行

1. 确保 `node` 版本在 **18.20.3** 附近（建议使用 Node v18.20.3，作者使用该版本进行开发）。
2. 将仓库克隆到本地，进入项目目录。
3. 运行 `npm install` 安装项目依赖。
4. 修改 `.env.development` 文件中的 `VITE_API_BASE_URL`，确保与后端服务器的 IP 地址和端口一致。

```
env复制代码# 开发环境配置

# 构建模式
VITE_NODE_ENV=development

# 后端 API 地址
VITE_API_BASE_URL='http://192.168.1.106:8080'
```

1. 运行 `npm run dev` 启动开发服务器。

## 如何构建

1. 修改 `.env.production` 文件中的 `VITE_API_BASE_URL`，确保与生产环境后端服务器的 IP 地址和端口一致。
2. 运行 `npm run build`，生成打包好的 `dist` 目录。

