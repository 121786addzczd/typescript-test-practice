## セットアップに使用したコマンド
```shell
mkdir jest-lesson
cd jest-lesson
npm init -y
npm i -D typescript
npx tsc --init
npm i -D jest @types/jest ts-jest
npx ts-jest config:init
sed -i '' 's/echo \\"Error: no test specified\\" \&\& exit 1/jest/' package.json
npm test
# npm test コマンド実行後、No tests found, exiting with code 1が表示されればセットアップOK
```