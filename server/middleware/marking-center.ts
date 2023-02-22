// nuxt3 服务器中间件
const {
  public: { baseURL },
} = useRuntimeConfig();
console.log(baseURL);

export default defineEventHandler(async (event) => {
  if (event.node.req.url?.includes("/api")) {
    const { method, url } = event.node.req;
    const options: any = {
      responseType: "json",
    };
    options.headers = {
      "content-type": "application/json",
      accept: "application/json",
    };
    options.method = method;
    if (method !== "get" && method !== "GET") {
      options.body = JSON.stringify(await readBody(event));
    }
    const resBody = await $fetch(baseURL + url, options)
      .then((res) => res)
      .catch((err) => {
        return {
          code: "1",
          msg: "服务端错误",
          payload: null,
        };
      });
    return resBody;
  }
});
