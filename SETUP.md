# セットアップ手順 / Setup

## 🇯🇵 公開までの手順

このフォルダの中身を、GitHubのリポジトリの**一番上（ルート）**に置きます。

1. zipを右クリックして「すべて展開」します。
2. 展開されたフォルダを開き、`_config.yml`、`_posts`、`index.html` などが**直接見える画面**にします。
3. その画面で Ctrl+A を押して、全部選択します。
4. GitHubのリポジトリで **Add file → Upload files** を開き、選んだものをドラッグ＆ドロップします。
5. Commit する前に、一覧のファイル名が `_config.yml`、`index.html` のように始まっているか確認します（`my-site/` や `site/` が先頭に付いていたら NG です）。
6. **Commit changes** を押します。
7. **Settings → Pages** で Source を **Deploy from a branch**、Branch を **main / (root)** にして Save します。

公開URLは `https://ka2uH.github.io/style_ka2u/` です。
リポジトリ名を `ka2uH.github.io` に変えたら、`_config.yml` の `baseurl` を `""` にしてください。

## 書き換える場所
- `about.html`：自己紹介（名前や今取り組んでいることを足せます）
- `contact.html`：連絡方法（コメントアウトされた例を参考に、フォームやSNSを追加）

## 記事の追加方法
1. `_templates/log-template.md` をコピーして `_posts/` に入れます。
2. ファイル名を `YYYY-MM-DD-title.md` にします。
3. `title_ja`、`title_en`、`date`、`tags` を書き換えて、本文を書きます。
4. Commit すると、ホームの記録の線（マーカー）とログの一覧に自動で追加されます。

## 公開する情報に注意
本名、学校名、住所、電話番号などは、載せる範囲を決めてから公開してください。一度公開すると、あとで消しても検索結果やアーカイブに残ることがあります。

---

## 🇬🇧 Setup

Put the contents of this folder at the **root** of your GitHub repository.

1. Extract the zip and open the extracted folder until you see `_config.yml`, `_posts` and `index.html` directly.
2. Select everything (Ctrl+A) and drag it onto **Add file → Upload files**.
3. Before committing, check that file names start with `_config.yml`, `index.html` and so on, with no `my-site/` or `site/` prefix.
4. Commit, then go to **Settings → Pages** and choose **Deploy from a branch**, **main / (root)**.

The site will be at `https://ka2uH.github.io/style_ka2u/`. If you rename the repository to `ka2uH.github.io`, set `baseurl` to `""` in `_config.yml`.

To add a post, copy `_templates/log-template.md` into `_posts/`, rename it `YYYY-MM-DD-title.md`, and edit it.
