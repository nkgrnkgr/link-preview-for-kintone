<h1 align="center" >link-preview-for-kintone</h1>

<p align="center">
<img width="200px" src="https://github.dev.cybozu.co.jp/raw/taiki-nishi/link-preview-for-kintone/master/dist/images/iconReadme.png" />
</p>

### kintone のリンクに TwitterCard 風のプレビューをつけることができます

<p align="center">
<img width="50%" src="https://github.dev.cybozu.co.jp/raw/taiki-nishi/link-preview-for-kintone/master/dist/images/preview.png" />
</p>
<p align="center">
<img width="50%" src="https://github.dev.cybozu.co.jp/raw/taiki-nishi/link-preview-for-kintone/master/dist/images/preview_large.png" />
</p>

#### How to add extension to chrome

1. zip ファイルを[こちら](https://github.dev.cybozu.co.jp/raw/taiki-nishi/link-preview-for-kintone/master/linkPreview.zip?raw=true)からダウンロード
1. ダウンロードした zip ファイルを展開する
1. chrome を開き拡張機能の管理画面を表示する
1. 画面右上のデベロッパーモードをオンにする
1. 画面上部のパッケージ化されていない拡張機能を読み込むボタンをクリック
1. 展開したフォルダ内の"dist"フォルダを選択する

#### For developer

```bash
npm ci
npm run build -- --watch
```
