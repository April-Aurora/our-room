# 我们的房间

一款温馨的轻 3D 房间探索游戏。剪纸拼贴、铅笔线条与奶油纸色构成一间可以慢慢填满的小屋。

你可以创建自己的角色，调整发型、肤色、衣服和五官；在房间里自由走动，浇花、做饭、拼世界地图、用 Switch 打开投影。出门约会或旅行后，把照片、票券、冰箱贴和玩偶带回家。冰箱与纪念票盒里的照片故事可以换成自己的内容。

方向键或 WASD 移动小人，点击地面自动寻路，点击物件靠近互动。底部提供平移、旋转和看全屋，滚轮或双指手势缩放；靠近物件按 E／空格互动，Escape 关闭弹窗。手机提供方向按钮。

人物、照片和进度保存在当前浏览器。设置中可以导出、导入 JSON 备份；照片在本地缩小保存，不会上传。示例旅程、风景和故事可以自行改写。

## 本地开发

安装 Node.js 后运行：

```sh
npm ci
npm test
npm run build
npm start
```

浏览器打开 `http://localhost:5188`。修改源码后重新运行构建。

构建生成源码入口使用的 `app.bundle.js`、可独立打开的 `我们的房间.html`，以及网站入口 `docs/index.html`。独立 HTML 已包含 Three.js、样式与游戏资源，无需外部脚本、图片或网络依赖。

## GitHub Pages

在仓库 Settings → Pages 中，将发布方式设为 **Deploy from a branch**，选择 **main** 分支和 **/docs** 目录后保存。`docs/index.html` 与 `.nojekyll` 随源码一同提交；每次修改后运行 `npm run build` 并提交更新的构建文件。

## 项目结构

- `app.js`：页面、物件互动和人物编辑器。
- `game.js`、`avatar.js`：游戏状态、存档与人物配置。
- `character.js`、`character3d.js`：头像与立体人物。
- `model3d.js`、`scene3d.js`、`explorer.js`：房间模型、镜头、碰撞和寻路。
- `worldmap.js`、`art.js`：本地绘制的地图与插画。
- `*.test.mjs`：人物、游戏规则、模型和寻路测试。
- `DESIGN.md`：视觉和布局约定。

需要支持 WebGL 和 JavaScript 的现代浏览器。换设备或清理浏览器数据前，请先导出存档。
