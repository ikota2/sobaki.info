// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// // /v3.0/stations_list/?lang=ru_RU&format=json&apikey=b4bb1709-f368-422c-9466-87821be7f87c
//
// module.exports = function(app: any) {
//   app.use(
//     '/v3.0/stations_list/',
//     createProxyMiddleware({
//       target: 'https://api.rasp.yandex.net',
//       changeOrigin: true,
//     })
//   );
// };
//
// export {};


// @ts-ignore
const proxy = require("http-proxy-middleware");

module.exports = function(app: { use: (arg0: any) => void; }) {
  // app.use(
  //   proxy("/api/breeds", {
  //     target: "https://api.rasp.yandex.net",
  //     secure: false,
  //     changeOrigin: true
  //   })
  // );

  app.use(
    proxy("/v3.0/stations_list/?direction=на%20Москву&lang=ru_RU&format=json&apikey=b4bb1709-f368-422c-9466-87821be7f87c", {
      target: "https://api.rasp.yandex.net",
      secure: false,
      Accept: 'application/json',
      changeOrigin: true
    })
  );

};
