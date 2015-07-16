# Web制作者のためのCSS設計の教科書
![緑本](http://ecx.images-amazon.com/images/I/51rsbQOrZ0L._SX390_BO1,204,203,200_.jpg "緑本")

## 一週目
+ とりあえずざっと通して読んだだけ　90分

## 二週目
+ このREADMEを書くためにもう一週
+ 一部の項目は優先度を下げ後回しにした
+ 写経しつつ軽くまとめ
 + サンプルは本から引用（リファクタ後のコード）
+ 後で飛べる様に参考リンクを添える
 + 中身はまだ全く読んでいない

### 1章 設計とは
+ HTMLの構造に依存させない
+ 既存スタイルの一部を打ち消して再利用するのは悪い兆候
+ 絶対値の多用を避ける

### 2章 基本
+ 詳細度というのがある
 + !important
 + style属性
 + idセレクタ
 + classセレクタ、属性セレクタ、疑似クラス
 + 要素セレクタ、議事要素
 + ユニバーサルセレクタ
+ 実際には組み合わせで計算する
 + 計測ツール [Specificity Calculator](http://specificity.keegan.st/)
+ [サンプル](01-links)

### 3章 コンポーネント
+ カプセル化は言語的に出来ない
 + idセレクタで実現できる様に思えるが、容易にルールの組み合わせ次第で上書きされうる
+ OOCSS (Object Oriented CSS)
 + [OOCSS (Nicole Sullivan @stubbornella)](http://oocss.org/module.html)
 + [OOCSS-doc (Nicole Sullivan @stubbornella)](https://github.com/stubbornella/oocss/wiki)
+ 構造と見た目の分離
 + コンポーネントの基本構造と具体機能を分離する
 + [サンプル](02-alerts)
+ コンテナとコンテンツの分離
 + 場所に依存しないセレクタを書こう
 + 別の場所に微妙に異なる要素を置くときは、コンポーネントを拡張するという考え方
+ リント
 + [CSS Lint (Nicolas Zuckuss @slicknet)](http://csslint.net/)
 + [CSS Lint-doc (Nicolas Zuckuss @slicknet)](https://github.com/CSSLint/csslint/wiki/Rules)
+ SMACCS (Scalable and Modular Architecture for CSS)
 + OOCSSのガイドライン
 + [MCACCS (Jonathan Snook @snookca)](https://smacss.com/)
 + [MCACCS-ja (Jonathan Snook @snookca)](https://smacss.com/ja)
+ カテゴライズというのを提唱している
 + Base
 + Layout
 + Module
 + State
 + Theme
+ Base
 + プロジェクトにおける各要素のデフォルトスタイル
 + reset.cssやnormalize.cssがこれにあたる
 + htmlやbodyに定義するフォントやリンク色等
 + 基本的に書き換えることは無い
+ Layout
 + ヘッダー・フッダー・サイドバー等、構成の大枠
 + SMACSSではクラス属性にl-(layout-)を付けることを推奨している
+ Module
 + Layoutを除く、ページを構成するほぼ全ての要素
 + 多いので特に接頭辞を推奨していない
+ State
 + JS制御によって切り替わる様な状態を表すルール
 + 接頭辞はis-
 + コンポーネントの名前を含めることを推奨している .tabに対する.is-tab-active
+ Theme
 + テーマ切り換えを実現する様な場合
 + テーマ次第で変更するクラスにtheme-接頭辞を付与する
+ 命名規則
 + [サンプル](03-alerts-name)
+ BEM (Block, Element, Modifier)
 + [BEM (Yandex)](https://en.bem.info/)
+ Block
 + パッケージ名の様なイメージか
 + ex) .alert
+ Element
 + Blockを構成する要素
 + ex) .alert-title, .alert-body
 + Blockに対するElementは__で示す
 + -> .alert__title
+ Modifier
 + Elementのバリエーション
 + SMACSSのState等も含む
 + ex) alertとalert-warning
 + Modifierは_で繋ぐ
 + -> .alert_warning
+ MindBemding
 + Elementを__, Modifierを--で繋ぐというルール
+ 参考 [Pure(米Yahoo!)](http://purecss.io/)
+ 参考 [TopCoat(Adobe)](http://topcoat.io/)
+ MCSS
 + マルチレイヤーCSS
 + [英語](http://operatino.github.io/MCSS/en/)
 + [日本語](http://operatino.github.io/MCSS/ja/)
 + 今回はスキップ
+ FLOCSS
 + 著者の作成するガイドライン
 + [サイト](https://github.com/hiloki/flocss)

### 4章 コンポーネント設計の実践
+ 3度出てきたら最適化しよう
+ SOLID CSS
+ 単一責任の原則
 + 構造の責任と見た目の責任を分離して設計する
+ 開放/閉鎖の原則
 + 基底のルールを回収しながら使い回すのでは無く、Modifierで拡張する
+ アイコン
 + CSSスプライト
 + アイコンフォント
 + [サンプル](05-icon)
+ 見出し
 + [サンプル](06-heading)
+ メディア
 + [サンプル](07-media)
+ ナビゲーション
 + [サンプル](08-navigation)
 + [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
+ リンク
 + [サンプル](09-list)
+ グリッド
 + [サンプル](10-grid)
+ 汎用クラス
 + Modifier化する程ではない単位のUI
 + [サンプル](11-general)

### 5章 管理
+ [パフォーマンス最適化 (Google)](https://developers.google.com/speed/docs/best-practices/rules_intro)
+ Sass
 + 今回はスキップ

### 6章 運用ツール
+ ドキュメント
 + [iOSヒューマンインターフェイスガイドライン (Apple)](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html)
 + [GEL (BBC)](http://www.bbc.co.uk/gel)
 + [Google HTML/CSS Style Guide (Google)](http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml)
 + [Ideomatic CSS (Nicolas Gallagher)](https://github.com/necolas/idiomatic-css)
+ スタイルガイド
 + [MailChimp](https://ux.mailchimp.com/patterns)
 + [Starbucks Style Guide](http://www.starbucks.com/static/reference/styleguide)
 + [Salesforce1](http://sfdc-styleguide.herokuapp.com)
 + [GitHub](https://github.com/styleguide/css)
 + [Bootstrap](http://getbootstrap.com)
 + [A Pattern Apart Code](http://patterns.alistapart.com/)
 + [A Pattern Apart Code (Patchwork)](http://patterns.alistapart.com/patchwork.php)
+ スタイルガイドの作成
 + 今回はスキップ
+ ツール
 + リント [CSS Lint (Nicolas Zuckuss @slicknet)](http://csslint.net/)
 + 解析 [StyleStats](http://www.stylestats.org)
 + ブラウザ差異吸収 [Autoprefixer](https://github.com/ai/autoprefixer)
 + ソート、フォーマット、圧縮等 [CSSComb](http://csscomb.com)
 + 最適化、Minify化等 [CSSO](https://github.com/css/csso)
 + タスクランナー、自動化等 [Grunt](http://gruntjs.com)

### 7章 Web Components
+ 今回はスキップ
