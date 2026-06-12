# ポートフォリオで使用しているHTMLタグとJavaScriptの解説

この文書は、`index.html` と `js/script.js` で使っている要素を学習用に整理したものです。
単に「何のタグか」だけでなく、このポートフォリオの中でどんな役割を持っているかも説明します。

## HTML全体の構造

今回のHTMLは、大きく分けると次の構造です。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  ページの設定
</head>
<body>
  画面に表示される内容
</body>
</html>
```

HTMLでは、`head` にページの設定を書き、`body` に実際に表示する内容を書きます。

## `<!DOCTYPE html>`

これはHTMLタグではなく、DOCTYPE宣言です。

```html
<!DOCTYPE html>
```

ブラウザに「このファイルは現代的なHTMLとして解釈してください」と伝えます。
基本的にHTMLファイルの一番上に必ず書きます。

## `<html>`

HTML文書全体を囲む一番外側の要素です。

```html
<html lang="ja">
```

`lang="ja"` は、このページの主な言語が日本語であることを表します。
検索エンジンや読み上げソフトがページを理解しやすくなります。

## `<head>`

ページそのものには直接表示されない設定を書く場所です。

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <title>しーたけ | Portfolio</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/script.js" defer></script>
</head>
```

ページタイトル、文字コード、CSSファイル、JavaScriptファイルなどを読み込んでいます。

## `<meta>`

ページに関する設定情報を書くタグです。

### 文字コード

```html
<meta charset="UTF-8">
```

日本語を正しく表示するための指定です。
基本的にHTMLでは入れておくべき設定です。

### viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

スマホやタブレットで表示したときに、画面幅に合わせてレイアウトするための指定です。
レスポンシブデザインではほぼ必須です。

### description

```html
<meta name="description" content="しーたけのポートフォリオ。...">
```

ページの説明文です。
検索結果やSNS共有時の説明として使われることがあります。

## `<title>`

ブラウザのタブや検索結果に表示されるページタイトルです。

```html
<title>しーたけ | Portfolio</title>
```

サイトの内容が一目でわかる名前にします。

## `<link>`

外部ファイルを読み込むタグです。

```html
<link rel="stylesheet" href="css/style.css">
```

ここではCSSファイルを読み込んでいます。

`rel="stylesheet"` は「これはスタイルシートです」という意味です。
`href="css/style.css"` はCSSファイルの場所です。

## `<script>`

JavaScriptファイルを読み込むタグです。

```html
<script src="js/script.js" defer></script>
```

`src` でJavaScriptファイルの場所を指定しています。
`defer` は「HTMLの読み込みが終わってからJavaScriptを実行する」という指定です。

今回のようにHTMLの要素をJavaScriptで操作する場合、`defer` を付けておくと安全です。

## `<body>`

ブラウザ画面に表示される内容全体を囲むタグです。

```html
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
```

今回のページでは、`header`、`main`、`footer` の3つに大きく分けています。

## `<header>`

ページ上部のヘッダー部分を表します。

```html
<header class="site-header">
  ...
</header>
```

今回のヘッダーには、サイト名とナビゲーションメニューを入れています。

`class="site-header"` はCSSやJavaScriptからこの要素を扱うための名前です。

## `<a>`

リンクを作るタグです。

```html
<a class="brand" href="#top" aria-label="トップへ戻る">
  ...
</a>
```

`href="#top"` は、同じページ内の `id="top"` が付いた場所へ移動するリンクです。

ナビゲーションでも使っています。

```html
<a href="#profile">Profile</a>
```

これは `id="profile"` が付いたセクションへ移動します。

## `<span>`

文章の一部や小さな部品を囲むためのタグです。

```html
<span class="brand-mark">S</span>
<span class="brand-text">Siitake</span>
```

`span` 自体には強い意味はありません。
CSSで見た目を変えるための小さな入れ物として使っています。

今回だと、ロゴの `S` と `Siitake` の文字を別々に装飾するために使っています。

## `<button>`

ボタンを作るタグです。

```html
<button class="menu-button" type="button" aria-label="メニューを開く" aria-controls="site-nav" aria-expanded="false">
  <span></span>
  <span></span>
  <span></span>
</button>
```

スマホ表示のメニュー開閉ボタンとして使っています。

`type="button"` は、フォーム送信用ではなく普通のボタンであることを表します。

中の3つの `span` は、CSSでハンバーガーメニューの3本線として表示しています。

## `<nav>`

ナビゲーションを表すタグです。

```html
<nav id="site-nav" class="site-nav" aria-label="メインナビゲーション">
  ...
</nav>
```

ページ内の主要なリンク集を入れます。
今回だと、Profile、Skills、Interest、Achievement、History へのリンクを入れています。

`aria-label="メインナビゲーション"` は、読み上げソフトに「これはメインナビゲーションです」と伝えるための指定です。

## `<ul>` と `<li>`

箇条書きリストを作るタグです。

```html
<ul>
  <li><a href="#profile">Profile</a></li>
  <li><a href="#skills">Skills</a></li>
</ul>
```

`ul` は順番のないリストです。
`li` はリストの1項目です。

今回のナビゲーションやスキル一覧で使っています。

## `<main>`

ページの主な内容を表します。

```html
<main id="top">
  ...
</main>
```

1ページに基本的に1つだけ使います。
ヘッダーやフッターを除いた、ページの中心になる内容を入れます。

`id="top"` は、トップへ戻るリンクの移動先として使っています。

## `<section>`

ページ内の大きな区切りを表します。

```html
<section id="profile" class="section-block" aria-labelledby="profile-title">
  ...
</section>
```

今回のページでは、次のようにセクションを分けています。

- ヒーロー
- プロフィール
- 技術スタック
- 興味のある分野
- 実績
- 経歴

`section` には、その内容を説明する見出しを入れるのが自然です。

## `<div>`

汎用的な入れ物です。

```html
<div class="hero-content reveal">
  ...
</div>
```

`div` 自体には意味はありません。
レイアウトやCSSのために要素をまとめたいときに使います。

今回だと、ヒーロー部分の文章側、画像側、セクション見出しのまとまりなどに使っています。

## `<p>`

段落を表すタグです。

```html
<p class="hero-lead">
  岡山大学で情報工学を学びながら...
</p>
```

普通の文章を書くときに使います。
見出しではない説明文や自己紹介文は `p` に入れます。

## `<h1>`

ページの最も重要な見出しです。

```html
<h1 id="hero-title">考えて、作って、試す。<br>しーたけのポートフォリオ。</h1>
```

基本的には1ページに1つがわかりやすいです。
今回のページでは、ヒーロー部分の大きなタイトルとして使っています。

## `<h2>`

セクションごとの見出しです。

```html
<h2 id="profile-title">プロフィール</h2>
```

`Profile`、`Skills`、`Achievement` などの大きな区切りのタイトルに使っています。

## `<h3>`

`h2` よりも小さな見出しです。

```html
<h3>Web開発</h3>
```

今回だと、興味分野や実績カードの中の見出しに使っています。

見出しの階層は、基本的に `h1`、`h2`、`h3` の順に使います。

## `<br>`

改行を入れるタグです。

```html
考えて、作って、試す。<br>しーたけのポートフォリオ。
```

今回のヒーロータイトルでは、見た目として自然な場所で改行するために使っています。

文章中で多用するより、見出しの見え方を調整したいときに限定して使うのが良いです。

## `<img>`

画像を表示するタグです。

```html
<img src="images/YATTA.png" alt="YATTAと書かれたビジュアル">
```

`src` は画像ファイルの場所です。
`alt` は画像が表示できないときや読み上げソフト向けの説明です。

画像には基本的に `alt` を付けます。

## `<strong>`

重要なテキストを表します。

```html
<strong>Portfolio / Web / Competitive Programming</strong>
```

単に太字にしたいだけならCSSでもできますが、`strong` は「意味として重要」というニュアンスがあります。

## `<dl>`、`<dt>`、`<dd>`

説明リストを作るタグです。

```html
<dl class="profile-list">
  <div>
    <dt>名前</dt>
    <dd>しーたけ</dd>
  </div>
</dl>
```

`dl` は説明リスト全体です。
`dt` は項目名、`dd` はその説明です。

今回だと、プロフィールの「名前」「所属」のように、項目名と値がセットになっている情報に使っています。

## `<article>`

それ単体で独立した内容を表すタグです。

```html
<article>
  <h3>Web開発</h3>
  <p>HTML/CSS/JavaScriptを中心に...</p>
</article>
```

今回だと、興味分野や実績の1項目ずつに使っています。

`section` はページ内の大きな区切り、`article` はその中の独立した小さな内容、というイメージです。

## `<ol>`

順番のあるリストを作るタグです。

```html
<ol class="timeline">
  ...
</ol>
```

`ul` は順番のないリストですが、`ol` は順番のあるリストです。
経歴は時間の流れに沿って並ぶので、`ol` を使っています。

## `<time>`

日付や時刻を表すタグです。

```html
<time datetime="2025-04">2025/4</time>
```

人間に見える表示は `2025/4` ですが、`datetime="2025-04"` によって機械にも日付として伝えています。

## `<footer>`

ページ下部のフッターを表します。

```html
<footer class="site-footer">
  <p>&copy; <span id="current-year">2026</span> しーたけ</p>
  <a href="#top">Back to top</a>
</footer>
```

著作権表示やトップへ戻るリンクを入れています。

`&copy;` は著作権マークを表示するためのHTMLエンティティです。

## 今回よく使っている属性

## `class`

CSSやJavaScriptから要素を指定するための名前です。

```html
<section class="section-block reveal">
```

同じ `class` は複数の要素に付けられます。
今回の `reveal` は、スクロール時にふわっと表示する要素に付けています。

## `id`

ページ内で一意の名前です。

```html
<section id="profile">
```

同じ `id` は1ページ内で1回だけ使います。
ページ内リンクの移動先や、JavaScriptから特定の要素を取得するために使います。

## `aria-label`

見た目だけでは意味が伝わりにくい要素に、読み上げ用の説明を付ける属性です。

```html
<button aria-label="メニューを開く">
```

ボタンの中身が3本線だけでも、読み上げソフトには「メニューを開く」と伝わります。

## `aria-controls`

ボタンがどの要素を操作するかを表します。

```html
aria-controls="site-nav"
```

今回のメニューボタンは、`id="site-nav"` のナビゲーションを操作します。

## `aria-expanded`

開閉状態を表します。

```html
aria-expanded="false"
```

JavaScriptでメニューを開いたときに `true` に変更しています。

## JavaScript全体の役割

今回の `script.js` は、主に次の4つを担当しています。

1. フッターの年を現在の年にする
2. スマホメニューを開閉する
3. スクロールしたら要素を表示する
4. 今見ているセクションに合わせてナビを強調する

HTMLとCSSだけでも静的なページは作れます。
JavaScriptを少し加えることで、操作感や動きが出ます。

## `document.querySelector`

HTMLから条件に合う最初の要素を取得します。

```js
const menuButton = document.querySelector(".menu-button");
```

これは、`class="menu-button"` が付いた最初の要素を取得しています。

CSSのセレクタと同じように書けます。

## `document.querySelectorAll`

条件に合う要素をすべて取得します。

```js
const navLinks = document.querySelectorAll(".site-nav a");
```

これは、`.site-nav` の中にあるすべての `a` タグを取得しています。

戻り値は複数要素の集まりです。

## `const`

再代入しない変数を作るためのキーワードです。

```js
const currentYear = document.querySelector("#current-year");
```

今回のコードでは、取得したHTML要素を入れる変数に `const` を使っています。

## `if`

条件分岐です。

```js
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
```

`currentYear` が存在するときだけ、中の処理を実行します。

HTML側に該当する要素がない場合でもエラーにならないようにしています。

## `textContent`

要素の中のテキストを書き換えるプロパティです。

```js
currentYear.textContent = new Date().getFullYear();
```

フッターの年を現在の年に書き換えています。

## `new Date().getFullYear()`

現在の年を取得します。

```js
new Date().getFullYear()
```

例えば2026年なら `2026` が返ります。

## `addEventListener`

イベントが起きたときの処理を登録します。

```js
menuButton.addEventListener("click", () => {
    ...
});
```

これは、メニューボタンがクリックされたときに中の処理を実行します。

## アロー関数

短く関数を書くための構文です。

```js
() => {
    ...
}
```

今回のコードでは、クリック時の処理やスクロール監視時の処理を書くために使っています。

## `getAttribute`

HTML属性の値を取得します。

```js
const isOpen = menuButton.getAttribute("aria-expanded") === "true";
```

`aria-expanded` が `"true"` かどうかを調べています。

## `setAttribute`

HTML属性の値を書き換えます。

```js
menuButton.setAttribute("aria-expanded", String(!isOpen));
```

メニューを開いたら `aria-expanded="true"`、閉じたら `aria-expanded="false"` にします。

## `String()`

値を文字列に変換します。

```js
String(!isOpen)
```

`!isOpen` は真偽値ですが、HTML属性には文字列として入れるため `String()` で変換しています。

## `classList`

要素の `class` を操作するためのプロパティです。

### `classList.toggle`

```js
siteNav.classList.toggle("is-open", !isOpen);
```

第2引数が `true` なら `is-open` を追加し、`false` なら削除します。

今回のメニューでは、`is-open` が付くとスマホメニューが表示されます。

### `classList.remove`

```js
siteNav.classList.remove("is-open");
```

指定したクラスを削除します。
ナビのリンクを押したとき、メニューを閉じるために使っています。

### `classList.add`

```js
entry.target.classList.add("is-visible");
```

指定したクラスを追加します。
スクロールして要素が見えたら `is-visible` を追加し、CSSのアニメーションを発火させています。

## `forEach`

複数の要素に対して、1つずつ処理を行います。

```js
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        ...
    });
});
```

ナビリンクすべてにクリックイベントを設定しています。

## `IntersectionObserver`

要素が画面内に入ったかどうかを監視する機能です。

```js
const revealObserver = new IntersectionObserver((entries) => {
    ...
}, {
    threshold: 0.16
});
```

今回のページでは、スクロールして要素が見えたらふわっと表示するために使っています。

## `entries`

`IntersectionObserver` が監視している要素の状態が入った配列です。

```js
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        ...
    }
});
```

複数の要素を監視できるため、`entries` は配列として渡されます。

## `entry.isIntersecting`

監視対象が画面内に入っているかどうかを表します。

```js
if (entry.isIntersecting) {
    entry.target.classList.add("is-visible");
}
```

`true` なら画面内に入っています。

## `entry.target`

画面内に入った対象のHTML要素です。

```js
entry.target.classList.add("is-visible");
```

その要素に `is-visible` を追加しています。

## `unobserve`

監視をやめるメソッドです。

```js
revealObserver.unobserve(entry.target);
```

一度表示された要素は、何度も監視する必要がないため監視を止めています。

## `threshold`

どれくらい見えたら反応するかを指定します。

```js
threshold: 0.16
```

要素が16%くらい見えたら処理が実行されます。

## `rootMargin`

監視範囲を調整する指定です。

```js
rootMargin: "-35% 0px -55% 0px"
```

今回のコードでは、画面の中央付近に来たセクションを「現在見ているセクション」として扱いやすくするために使っています。

## テンプレートリテラル

バッククォートで囲む文字列です。

```js
`#${entry.target.id}`
```

`${...}` の中にJavaScriptの値を埋め込めます。

例えば `entry.target.id` が `profile` なら、`#profile` という文字列になります。

## `return`

処理をそこで終わらせます。

```js
if (!entry.isIntersecting) {
    return;
}
```

画面内に入っていない要素なら、その後の処理をしないようにしています。

## `!`

真偽値を反転する演算子です。

```js
!isOpen
```

`isOpen` が `true` なら `false` に、`false` なら `true` になります。

メニューを開閉するときに使っています。

## このJavaScriptで起きていること

### 1. フッターの年を自動更新

```js
currentYear.textContent = new Date().getFullYear();
```

HTMLに直接年を書いておくと、年が変わったときに修正が必要です。
JavaScriptで現在の年を入れることで、自動的に更新されます。

### 2. スマホメニューの開閉

```js
menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
});
```

ボタンを押すたびに、開いていれば閉じ、閉じていれば開きます。

HTMLの状態を `aria-expanded` で表し、CSS表示を `is-open` で切り替えています。

### 3. ナビリンクを押したらメニューを閉じる

```js
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
    });
});
```

スマホでメニューを開いたあと、リンクを押したら自動で閉じるようにしています。

### 4. スクロールで要素を表示

```js
entry.target.classList.add("is-visible");
```

最初はCSSで `opacity: 0` にしておき、画面内に入ったら `is-visible` を付けます。
するとCSSの transition によって、ふわっと表示されます。

### 5. 現在位置のナビを強調

```js
link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
```

今見えているセクションの `id` と、ナビリンクの `href` が一致したら、そのリンクに `is-active` を付けます。

たとえば `id="skills"` のセクションを見ているときは、`href="#skills"` のリンクが強調されます。

## HTML、CSS、JavaScriptの関係

今回のページでは、3つの役割は次のように分かれています。

- HTML: 内容と構造を作る
- CSS: 見た目を整える
- JavaScript: 操作や動きを付ける

例えばスマホメニューでは、次のように連携しています。

```html
<button class="menu-button" aria-expanded="false">
```

HTMLでボタンを作ります。

```css
.site-nav.is-open {
    display: block;
}
```

CSSで `is-open` が付いたときの見た目を決めます。

```js
siteNav.classList.toggle("is-open", !isOpen);
```

JavaScriptで `is-open` を付けたり外したりします。

このように、HTML、CSS、JavaScriptはそれぞれ別の役割を持ちながら連携しています。

