# Denoハンズオン

## やること
- Denoの紹介
- Denoをインストール
- とりあえずTypeScriptを実行してみる
- FizzBuzzしてみる
- packageを使ってみる(servest)
  - Hello Worldの表示
  - index.htmlの表示
  - (おまけ)Reactコンポーネントを返してみる

## Denoの紹介

- Nodejsに代わる新しいjavascript, typescriptのランタイム
- tsファイルがそのまま実行できる
- Moduleの扱いが全然違う
  - ES Modulesに統一
    - `modules.exports = ...`や`require()`のようなCommonJS形式はエラーになる
  - 指定パスは元ファイルからの相対パス or 絶対パス
  - 拡張子は省略不可

## Denoをインストール

[公式](https://deno.land/#installation)を参照

## とりあえずTypeScriptを実行してみる

```bash
$ deno run https://deno.land/std/examples/welcome.ts
```

- 中身は単純に`console.log()`しているだけのtsファイル
- URL先からDLして実行している

## FizzBuzzしてみる

```typescript
let num: number = 1;

while (num < 100) {
  let output: string = "";
  if(num%3 === 0) {
    output += "Fizz";
  }
  if(num%5 === 0) {
    output += "Buzz";
  }
  if(output === "") {
    output += num.toString();
  }
  console.log(output);
  num++;
}
```

実行してみよう
```bash
$ deno run FizzBuzz.ts
```

## packageを使ってみる(servest)

### Hello Worldの表示

1. `server.ts`を作成
1. `servest`をimport

    ```typescript
    import { createApp } from "https://servestjs.org/@/mod.ts";
    ```
1. 以下を記述

    ```typescript
    const app = createApp();
    app.handle("/", async req => {
      await req.respond({
        status: 200,
        headers: new Headers({
          "content-type": "text/plain; charset=UTF-8"
        }),
        body: "Hello World"
      });
    });
    app.listen({port: 8888});
    ```
1. 実行してみる（エラー）

    ```bash
    $ deno run server.ts
    ```
    - denoはファイル実行時に権限を与える必要がある
    - 実行に必要な権限だけ与えればよいため、無用なセキュリティリスクを考慮する必要が無い

1. 実行してみる

    ```bash
    $ deno run --allow-net server.ts
    ```
    [http://localhost:8888](http://localhost:8888)にアクセスしてみよう


### index.htmlの表示

1. `index.html`を作成する
1. `simple_web.ts`を作成する(or `server.ts`を修正する)
1. 実行してみる

    ```bash
    $ deno run --allow-net --allow-read simple_web.ts
    ```
    [http://localhost:8888](http://localhost:8888)にアクセスしてみよう

### React Componentを返してみる

[servestのexample](https://deno.land/x/servest@v1.1.6)を参照
