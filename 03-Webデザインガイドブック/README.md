# マルチデバイス時代のWebデザインガイドブック
![赤本](http://ecx.images-amazon.com/images/I/51zeeeByVbL._SX352_BO1,204,203,200_.jpg "赤本")

### 1周目
+ 適当に中断しながら半日
+ 流し読みしながら軽くまとめ
+ どうもリンク先のデザインが変わっていることが多かった
 + 結構な頻度で結構違うデザインだったので、ここでの記載リンクは半数程度かも
+ 4章は後で写経するので要約だけ
 + 具体的なコードが載っているのは4章のみ
+ 章ごとがでかい、字が多い
 + 1章で既に集中が切れかけている様に見えるが
 + 3,5,6章はまたいつか
 + 4章は後ほど写経

### 1章 Webデザインの変化
+ 90年代と比べて色々変わった
 + 特に、デバイスが多様化したので今までの固定幅だといまいち
 + 閲覧するシチュエーションもまちまち
+ とはいえ、トレンドが変わったと言っても良い物は変わらない
 + [Think Insights (Google)](https://think.withgoogle.com/databoard)
 + [iOS ヒューマンインターフェイスガイドライン (Apple)](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/Introduction/Introduction.html)
 + [iOS ヒューマンインターフェイスガイドライン-日本語PDF(Apple)](https://developer.apple.com/jp/devcenter/ios/library/documentation/MobileHIG.pdf)
+ ユーザがどの様な環境で閲覧しているかはわからない
 + 低速回線かもしれないので、画像やデータ量を減らす工夫等も必要
 + 高密度ディスプレイかも知れないので、色々な大きさの画像を用意しなければならない
+ レスポンシブWebデザイン
 + スマートフォン専用のサイトが不要になる
 + 共通のHTMLを使うことに寄るメンテナンスのしやすさ
 + デバイスを判断してリダイレクトする等の処理も不要
 + 同一のURLになる
 + テイストを統一できる
 + [Media Queries](http://mediaqueri.es)
+ パララックス
 + スクロールに応じて画像やテキストが異なる速度で移動することで立体感や浮遊感を伝える
 + スクロール前提のため縦に長いのが一般的
 + キャンペーン用やファッション系等、ビジュアルデザインを重視する場合は効果的
 + 反面、読みやすさを重視する情報系サイトや階層が深いサイトには適していない
 + [unfold](http://unfold.no)
 + [Dean Oakley](http://deanoakley.com)
 + [ATANAI PLUS](http://atanaiplus.cz)
 + [Jarallax (jQuery-plugin)](http://www.jarallax.com)
+ モバイル・ファーストなWebデザイン
 + タッチデバイスは画面が小さい
 + 通信速度が遅い
 + ユーザの必要とする情報を見極め、シンプルにしなければならない
 + タッチ操作を前提とする
 + ボタンを大きくする
 + ボタンの間隔を広げる
 + フォントを大きくする
 + 背景色と文字色のコントラストを強くする
+ フラットデザイン
 + レスポンシブWebデザイン、モバイル・ファーストを考慮すると、シンプルデザインの方が実装しやすい
 + Modern UI(Windows)やGoogleのサービスがその流を後押しした
 + [フラットデザインはUIを進化させるか (上野学)](https://www.sociomedia.co.jp/4262)
 + グラデーションやテクスチャを使わず、単色にする
 + シャドウ等の立体感を出す表現を用いない
 + 角丸を用いない
 + 罫線を用いない
 + タイポグラフィを重視し、文字の大きさにメリハリを付ける
 + ピクトグラム風のアイコン
 + [Buffalo](http://builtbybuffalo.com)
 + [Windows Phone](http://www.windowsphone.com/en-us)
 + [Etch](http://etchapps.com)
+ インフォグラフィックス
 + 情報、データ等を視覚的に表現した物
 + 地下鉄路線図等
 + [Lokesh Dhakar](http://lokeshdhakar.com/coffee-drinks-illustrated)
 + [Cool Infographincs](http://www.coolinfographics.com)
 + [インフォグラフィックス](https://infogra.me/ja)
+ カンプ
 + カンプはレイアウト、パーツデザイン等も装飾したもので、実際のWebサイトの様に見えるもの
 + ボタン等は機能しない
+ プロトタイプ
 + 操作感や同線を確認することが目的
 + 装飾はあまりされていない
+ カンプのメリット
 + 説得、説明がしやすい
 + 印刷等をしてしまえば、指摘をするクライアント側の敷居が低い
+ カンプのデメリット
 + 操作感を体験出来ない
 + 全く同じ実物に仕上がるわけでは無い
 + 微修正の反映がプロトタイプより時間がかかる
+ 可変を前提にしたデザインを考える
 + リキッドレイアウト
 + フレキシブルレイアウト
 + エラスティックレイアウト
 + 可変グリッドレイアウト
+ リキッドレイアウト
 + コンテンツ全体の幅やボックスの幅を、ブラウザに合わせて変化させる
 + pxではなく%で指定する
 + 小さい画面でも横スクロールが発生しない
 + 大きすぎる画面だと間が抜けた感じになる
+ フレキシブルレイアウト
 + リキッドレイアウトに最小幅と最大幅を加えた様な考え
 + IE6,IE7などでは要注意
+ エラスティックレイアウト
 + %ではなくemで指定する
 + フォントサイズの変更があっても一定のレイアウトである
+ 可変グリッドレイアウト
 + ボックスを沢山並べたレイアウトとし、ブラウザ幅に応じて再配置する
 + JavaScriptを利用する
 + [The Grid System](http://www.thegridsystem.org)

### 2章 スマートフォンとタブレット用のWebデザイン
+ ヘッダーを機能的に使う
 + ファーストビューを広くするために、狭いヘッダーが多い
 + ヒットエリアを広くする
+ ナビゲーション
 + ボタン型
 + タブ型
 + アコーディオン型
 + リスト型
 + ダッシュボード型
 + カルーセル型
+ ファーストビューの領域を把握する
+ Retinaディスプレイ用の倍サイズの画像を用意する
+ コーポレイトサイトの主なレイアウト
 + 比較的メニュー数が少ないため、横並びメニューやリスト型が多い
 + [The Creative Company](http://www.thecreativeco.com.au)
+ ECサイトの主なレイアウト
 + 商品という要素を優先する
 + カテゴリーの分け方を工夫する
 + 商品一覧をグリッドでまとめる
 + 商品詳細ページをわかりやすく構成する
 + [THE STABLES](http://thestables.jp)
 + 写真の訴求力を重視するサイトはシンプルな配色とレイアウトが効果的
+ その他自由なレイアウト
 + [SAMOVIDIC](http://www.samovidic.com)
 + [SAMOVIDIC iPhone](http://www.samovidic.com/mobile/iphone)
 + [Brandified](http://www.brandified.co.uk/work)

### 3章 アプリのデザイン
+ 大胆に省略
 + 言語やIDE等の基礎知識
 + ジェスチャーについて
 + 解像度について
 + フォントについて

### 4章 レスポンシブWebデザイン
+ Viewport
 + タッチデバイスのブラウザが実装している仮想ウインドウ
 + デフォルト値、もしくはmetaで指定した値でページの幅を決める
+ Fluid Grids
 + 従来のpx指定で作るグリッドと異なり、emや%で指定する
 + 画面解像度の数だけ個別のグリッド幅を用意する必要がない
+ Flexible Images
 + Fluid Gridsの考えに基づき、画像サイズも可変にする
 + max-width: 100% 等
+ Media Queries
 + 解像度やウィンドウサイズ、デバイスの向き等を条件としてCSSを適用する技術
 + レイアウトや装飾を変更する条件となる幅をブレイクポイントと呼ぶ
 + 一般的には480px, 768px, 960pxである
 + コンテンツやテキストに重きを置き、それが崩れない様にするため、ブレークポイントはemで指定すると良い
+ ツール
 + [Viewport Resizer](http://lab.maltewassermann.com/viewport-resizer)
 + Adobe Edge Inspect
+ ナビゲーションをそのまま縮めるパターン
 + [Skinny Ties](http://skinnyties.com) 
+ メニューをまとめるパターン
 + [Tilde Inc](http://www.tilde.io)
 + [VOGUE](http://www.vogue.co.uk)
+ レイアウトを大幅に変えるパターン
 + [Kava Ruzova](http://www.kavaruzova.cz)
 + [Future Insights Live 2013](https://futureinsightslive.com/las-vegas-2013)

### 5章 プロトタイピングの活用
+ 大胆に省略
 + Web制作ワークフロー
 + スタイルガイド
 + フレームワーク
 + Sass

### 6章 サンプル & チュートリアル
+ 大胆に省略
 + 企画
 + ワイヤーフレーム
 + モック
 + 検証
