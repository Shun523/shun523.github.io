---
layout: post
title: "自己紹介ページつくってみた"
date: 2026-06-15
image: /images/blog/self-introduction/result.png
---

初学者にとってweb開発の一歩目となる自己紹介ページをHTML/CSSとちょっぴりAIも活用しながら作っていきます。

## 注意

HTML/CSSの開発環境の構築は割愛します。vscodeを使えばすぐにできるようになるはずです。

---

## まずは書く内容を考える

今回は
- 名前
- 出身地
- 趣味
- 今までやってた活動（部活動とか、コンペとか、モノ作りとか）
- 今後やりたいこと、興味のあること

ぐらいにしておきましょう。

## レイアウトを考える

自分で考えてみたい人は考えてみましょう。そしていいイメージが持てるならそれで行きましょう。もし持てないならAIをぜひ使ってみましょう。

僕はデザインのセンスがないので迷いなくChatGPTを起動します。(泣)\
ChatGPTには無料版でも使える「画像を生成」というモードがあります。これを押して以下のようなプロンプトを投げてみましょう。

---

>私がこれから作成する「自己紹介Webページ」の完成予想図を画像で生成してください。
>私はこの画像を設計図として、後から自分でHTMLとCSSを記述してWebページを制作します。そのため、以下の【コーディングを前提としたミニマルな設計条件】を厳守してください。
>
>【テーマ】
>全体の雰囲気は [ ここに好きなテーマを入力。例：ハッカーやアルゴリズムのようなサイバー風 / 落ち着いたカフェ風 / 明るいポップ調 ] にしてください。
>
>【デザインの厳格な条件】
>1. スタイル：完全な「フラットデザイン」。3D効果、複雑な光や影（ネオン発光やドロップシャドウなど）、グラデーションは一切使わず、単色（ベタ塗り）で構成してください。
>2. レイアウト：上から下へ要素が順番に並ぶ、シンプルな「1カラム（縦一列）」のレイアウトにしてください。要素を複雑に重ねたり、不規則に配置したりしないでください。
>3. 構成要素：一番上に自分の名前（ヘッダー）、次にプロフィール画像（シンプルな丸や四角）、自己紹介の文章、リスト形式の趣味やスキル、SNSのアイコンを含めてください。
>4. 背景と模様：すべての背景は「完全な一色（ベタ塗り）」にしてください。背景にドット、グリッド、ソースコードの羅列、幾何学模様、テクスチャなどの【複雑な模様】は一切描かないでください。
>
> 複雑なグラフィックや装飾は避け、「配色」と「シンプルな図形」の組み合わせだけでテーマを表現した、クリーンでモダンなWeb画面にしてください。

---

これで出力された画像がこちらです。

![完成予想図](/images/blog/self-introduction/target.png)

シンプルで作りやすそうですね。早速作っていきます。

[このサイトも参考にしてください](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Structuring_content)

ちゃんと勉強したい人はしっかり読むのをおすすめします！

## ファイルを作る

まずは使うファイルを作りましょう。
ルートディレクトリ直下にindex.htmlとcss/style.cssを作ります。
アイコンの写真を入れるためにimagesフォルダも作ってアイコン画像をこの中に入れておきましょう。

## 枠組みを作る

HTMLを書くときには基本となる構造があります。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>

```

これを基につくっていきます。

CSSは特にないですが、デフォルト設定がややこしいのでこれをリセットするプログラムを先に書いておきます。

```css
/* reset.css */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
*::before,
*::after {
 box-sizing: inherit;
}
ol, ul {
 list-style: none;
}
a {
 text-decoration: none;
 color: inherit;
}
img {
 display: block;
 max-width: 100%;
 height: auto;
}

```

今のままだとHTML側がCSSファイルの場所を確認できないのでメタ情報を一行書き足します。
具体的にはhead部分でCSSファイルのパスを指定してあげます。

```html
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/style.css">
    <title>自己紹介ページ</title>
  </head>

```

これで準備完了です。


## ヘッダーを作る

![ヘッダー](/images/blog/self-introduction/header.png)

この部分を作っていきます。

名前の両側にある模様は今回は作らない方向で行きます。HTMLとCSSを書き進めていくとこんな感じですね

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/style.css">
    <title>自己紹介ページ</title>
  </head>
  <body>
    <header>
        <h1>山田 花子</h1>
    </header>
  </body>
</html>

```

```css
/* reset.css */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
*::before,
*::after {
 box-sizing: inherit;
}
ol, ul {
 list-style: none;
}
a {
 text-decoration: none;
 color: inherit;
}
img {
 display: block;
 max-width: 100%;
 height: auto;
}

.header {
    background: #8d5025;
    padding: 20px;
}

.header h1 {
    color: white;
    text-align: center;
}

```
見た目はこんな感じ

![途中経過](/images/blog/self-introduction/header-making.png)

ここまでで読んだ方はどんな感想を持っているでしょうか？多分「初めて触る言語こんなに書けない」とか思ってる人は一定数いると思います。

そう思うのは結構自然で、この記事には私がプログラミングしている過程がどのようなものか映ってないですよね。

現場の声をお届けしておくと、コーディングしている時間よりもググってたりAIに聞いたりしてる時間の方が長いです。
こんな感じで

![検索中の画面](/images/blog/self-introduction/ggrks.png)


## メイン部分を作る

![メイン部分の画像](/images/blog/self-introduction/body.png)

この部分を作っていきます。まずは構造を考えていきましょう。

全体をmainタグで囲ってアイコンの部分と自己紹介の部分をそれぞれ１つのセクションに分け、その中の趣味,スキル,SNSをdivタグで区切るのが自然な気がします。
各見出しの左端にロゴを付ける方法が分からなかったので調べてみるとCSSで画像と文字を横並べにするのがよさそうです。
共通のデザインでいいところ（例えば趣味，スキル，SNSの部分）はクラスを使って共通のCSSを使えるようにすると書く量が減っていいですね。
では一気に実装してメイン部分を完成させていきます！

![メイン部分完成画像](/images/blog/self-introduction/body-making.png)

```html

<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/style.css">
    <title>自己紹介ページ</title>
  </head>
  <body>
    <header>
        <h1>秋山 竣</h1>
    </header>

    <main>
      <section>
        <img src="images/self-logo.JPG" class="self-logo">
      </section>

      <section class="self-intro">
        <div class="title">
          <img src="/images/技術職の人物アイコン.png" class="logo">
          <h2>自己紹介</h2>
        </div>
        <p>はじめまして 秋山竣です。</p>
        <p>岡山大学工学部情報工学コース2年で、DS部技術部長をやってます。</p>
        <p class="greet">よろしくお願いします！</p>
        <div class="details">
          <div class="hobby-title">
            <img src="/images/ゲームアイコン.png" class="logo">
            <h2>趣味</h2>
          </div>
          <div class="hobby-content">
            <ul>
              <li>競技プログラミング</li>
              <li>アクションゲーム</li> 
              <li>雑談</li>
            </ul>
          </div>

          <div class="hobby-title">
            <img src="/images/ノートPCアイコン.png" class="logo">
            <h2>スキル</h2>
          </div>
          <div class="hobby-content">
            <ul>
              <li>C++</li>
              <li>HTML/CSS</li>
            </ul>
          </div>

          <div class="hobby-title">
            <img src="/images/ハートのマーク.png" class="logo">
            <h2>SNS</h2>
          </div>
          <div class="SNS-content">
            <a href="https://x.com/Siitake_7"><img src="/images/logo-black.png" class="logo"></a>
            <a href="https://www.instagram.com/siitakesan_7/"><img src="/images/Instagram_Glyph_Gradient.png" class="logo"></a>
            <a href="https://github.com/Shun523"><img src="/images/GitHub_Invertocat_Black.png" class="logo"></a>
          </div>
        </div>
      </section>
    </main>
  </body>
</html>

```

```css
/* reset.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::before,
*::after {
    box-sizing: inherit;
}

ol,
ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

main {
    width: min(560px, calc(100% - 32px));
    margin: 0 auto;
}

header {
    width: min(560px, calc(100% - 32px));
    margin: 0 auto;
    display: block;
    align-items: center;
    background: #8d5025;
    padding: 20px;
}

header h1 {
    color: white;
    text-align: center;
}

body {
    background: #FFFDF1;
    padding: 0px 40px;
}

.self-logo {
    display: block;
    margin: auto;
    padding: 30px;
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
}

.self-intro p {
    margin-left: 40px;
}

.greet {
    padding-bottom:10px;
    padding-top: 10px;
}

.title {
    display: flex;
    margin-left: 30px;
    padding: 10px;
    border-bottom: 3px solid #0d5025;
    margin-bottom: 10px;
    gap: 10px;
}

.logo {
    height: 40px;
}

.hobby-title {
    display: flex;
    background-color:#FAEACE;
    margin-left: 30px;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
}

.hobby-content {
    margin-left: 30px;
    padding: 20px;
    background-color: #FFFFFF
}
.hobby-content ul {
    list-style-type: disc;
    margin-left: 20px;
}
.SNS-content {
    display: flex;
    justify-content: center;
    margin-left: 30px;
    padding: 20px;
    gap: 100px;
    background-color: #FFFFFF
}

```

見栄えのために色やサイズも変更しています。気になる方はCSSのmain部分の差異を要確認。
極力CSSファイルが短くなるように努力はしたんですがかなり長くなってしまいました…
あとはフッター部分だけですね。

## フッター部分を作る

![フッター部分の画像](/images/blog/self-introduction/hooter.png)

ここまで作ってきたならもう簡単ですね。footerタグを使ってぱぱっと作ります。

```html
<footer>
      <p>&copy; 2026 Shun Akiyama</p>
</footer>
```

```css
footer {
    display: block;
    margin: 0 auto;
    background-color: #8d5025;
    text-align: center;
    color: #FFFFFF;
    width: min(560px, calc(100% - 32px));
}
```
![完成画像](/images/blog/self-introduction/result.png)

これで完成にします。

## ページを公開する

作成したページは自分しか見れない状態です。せっかくなのでほかの人からも見れるようにしましょう。

今回はGithub pagesというものを使います。これは静的サイトを簡単に公開できるようなサービスです。

使い方は簡単で、GithubにpushしてリポジトリのSettingからPagesに飛びルートディレクトリを設定するだけです。

デプロイが完了すると"https://ユーザー名.github.io/リポジトリ名/"というURLで公開されます。

僕の場合はこれですね
[https://Shun523.github.io/self-introduction/](https://shun523.github.io/self-introduction/)

ぜひいろんな人に見てもらうのはもちろんですが、何よりいろんな人の作品,コードを見てどのように作られているのか観察して技術を盗んでいきましょう！
