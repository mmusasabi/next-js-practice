
# Non-Gm-Trpg（仮）

開発中だよ

環境構築参考：[10分で作るNext.jsとDockerを使ったSSR+SPA環境](https://qiita.com/Yuta_Yamamoto/items/4e972621b85f45a68176)

## 動かし方

```
docker-compose up -d
docker-compose exec next bash
```

からの

```
yarn dev => http://localhost:3030/
  Starts the development server.

yarn build
  Builds the app for production.

yarn start
  Runs the built app in production mode.
```

です。

## TODO: デプロイ？メモ

https://zeit.co/home
https://dev.classmethod.jp/server-side/serverless/zero-configuration-zeit-now/

というのが有るらしい。使えたら面白いかもなー？