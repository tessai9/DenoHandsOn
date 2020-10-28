import { createApp } from "https://servestjs.org/@/mod.ts";

const indexPage = await Deno.readFile("./index.html")

const app = createApp();
app.handle("/", async req => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "text/html; charset=UTF-8"
    }),
    body: indexPage
  });
});
app.listen({port: 8888});
