const express =require("express");
// console.log(__dirname);
const path=require("path")
// console.log(path);
const app = express();
// app.use((req, res, next) => {
//   console.log(`路由路径：${req.originalUrl}`);
//   next();
// });
app.use(express.static(path.join(__dirname, "public")));
app.use("/bootstrap", express.static(path.join(__dirname, "node_modules/bootstrap/dist")));
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get("*", (req, res) => {
  res.send("網站首頁");
});

app.listen(3000, () => {
  console.log("伺服器已啟動 http://localhost:3000");
});
