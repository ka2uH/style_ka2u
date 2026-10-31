---
layout: page
title: Log
permalink: /log/
---

学習ログと活動記録の一覧です。 / All my learning logs and activity records.

{% if site.posts.size == 0 %}
まだ記事がありません。/ No posts yet.
{% else %}
<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}{% if post.tags.size > 0 %} · {{ post.tags | join: ", " }}{% endif %}</span>
    <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
  </li>
{% endfor %}
</ul>
{% endif %}
