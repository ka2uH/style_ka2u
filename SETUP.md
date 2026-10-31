# セットアップ手順 / Setup guide

## 🇯🇵 公開までの手順

1. GitHubにログインし、**`ユーザー名.github.io`** という名前のリポジトリを作る（Publicにする）。
   例：ユーザー名が `taro123` なら `taro123.github.io`
2. このフォルダの中身（`my-site` フォルダの中のファイル全部）をリポジトリにアップロードする。
   - 一番簡単なのは、リポジトリのページで **Add file → Upload files** を選び、ファイルとフォルダをドラッグ＆ドロップする方法。
   - 慣れてきたら GitHub Desktop や `git push` に移行する。
3. `_config.yml` の `YOUR-USERNAME` を自分のGitHubユーザー名に書き換える（2か所）。
4. リポジトリの **Settings → Pages** を開き、Source を **Deploy from a branch**、Branch を **main / (root)** にして Save。
5. 1〜2分待って `https://ユーザー名.github.io` を開く。

## 書き換える場所（TODO）
- `_config.yml`：サイト名、説明、ユーザー名
- `about.md`：自己紹介
- `contact.md`：連絡方法（メールアドレスは直書きせず、フォームやSNSを推奨）
- `_posts/2026-10-31-hello.md`：最初の記事

## 記事の追加方法
1. `_templates/log-template.md` をコピーして `_posts/` に入れる。
2. ファイル名を `YYYY-MM-DD-タイトル.md` に変更する。
3. 中身を書いて保存（コミット）すると、Logページに自動で並ぶ。

## 公開してはいけない情報
本名、学校名、住所、電話番号などは、載せる範囲を決めてから公開してください。一度公開すると、あとで消しても検索結果やアーカイブに残ることがあります。

---

## 🇬🇧 Setup in English

1. Create a **public** repository named `USERNAME.github.io` on GitHub.
2. Upload all files in this folder (use **Add file → Upload files**, or GitHub Desktop / `git push`).
3. Replace `YOUR-USERNAME` in `_config.yml` (2 places).
4. Go to **Settings → Pages**, set Source to **Deploy from a branch**, Branch to **main / (root)**, then Save.
5. Wait 1–2 minutes and open `https://USERNAME.github.io`.

To add a post: copy `_templates/log-template.md` into `_posts/`, rename it `YYYY-MM-DD-title.md`, and edit it.

Be careful about personal information (full name, school, address, phone number) before publishing.
