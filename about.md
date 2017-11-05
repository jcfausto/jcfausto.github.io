---
layout: page
permalink: /about/index.html
title: Hi, I'm Julio...
tags: [jcfausto]
imagefeature: fourseasons.jpg
chart: true
---
<figure>
  <img src="{{ site.url }}/images/me-on-talking360x540.jpg" alt="Julio Cesar Fausto's picture">
  <figcaption>Hello there!</figcaption>
</figure>

{% assign total_words = 0 %}
{% assign total_readtime = 0 %}
{% assign featuredcount = 0 %}
{% assign statuscount = 0 %}

{% for post in site.posts %}
    {% assign post_words = post.content | strip_html | number_of_words %}
    {% assign readtime = post_words | append: '.0' | divided_by:200 %}
    {% assign total_words = total_words | plus: post_words %}
    {% assign total_readtime = total_readtime | plus: readtime %}
    {% if post.featured %}
    {% assign featuredcount = featuredcount | plus: 1 %}
    {% endif %}
{% endfor %}


...and this is my personal website. It currently has {{ site.posts | size }} posts in {{ site.categories | size }} categories which combinedly have {{ total_words }} words, which will take an average reader ({{ site.wpm }} WPM) approximately <span class="time">{{ total_readtime }}</span> minutes to read. {% if featuredcount != 0 %}There are <a href="{{ site.url }}/featured">{{ featuredcount }} featured posts</a>, you should definitely check those out.{% endif %} The most recent post is {% for post in site.posts limit:1 %}{% if post.description %}<a href="{{ site.url }}{{ post.url }}" title="{{ post.description }}">"{{ post.title }}"</a>{% else %}<a href="{{ site.url }}{{ post.url }}" title="{{ post.description }}" title="Read more about {{ post.title }}">"{{ post.title }}"</a>{% endif %}{% endfor %} which was published on {% for post in site.posts limit:1 %}{% assign modifiedtime = post.modified | date: "%Y%m%d" %}{% assign posttime = post.date | date: "%Y%m%d" %}<time datetime="{{ post.date | date_to_xmlschema }}" class="post-time">{{ post.date | date: "%d %b %Y" }}</time>{% if post.modified %}{% if modifiedtime != posttime %} and last modified on <time datetime="{{ post.modified | date: "%Y-%m-%d" }}" itemprop="dateModified">{{ post.modified | date: "%d %b %Y" }}</time>{% endif %}{% endif %}{% endfor %}. The last commit was on {{ site.time | date: "%A, %d %b %Y" }} at {{ site.time | date: "%I:%M %p" }} [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time "Temps Universel Coordonné").

I am **Agile Coach and Software Engineer**. I'm passionate about software development and everything that surrounds it. I'm currently working at [Affinitas](http://affinitas.de/).
Topics that I am interested in includes, but not limited to:

- Agile Software Development
- Software Engineering in general
- Product Development
- Customer centric approaches (UX/CX)
- Lean IT
- Leadership
- Peopleware

{% if site.owner.linkedin %}
Check more info here:
<a href="{{ site.owner.linkedin }}">LinkedIn</a>
{% endif %}

<figure>
	<img src="{{ site.url }}/images/me-bravi-floripa-brazil.jpg" alt="Julio Cesar Fausto at Bravi's Agile Meetup">
	<figcaption>On a meetup somewhere in Brazil</figcaption>
</figure>

I was born and grew up in Brazil and now I'm here in Germany growing even more and doing what I love to do: Learning new things everyday and share what I've learned with people.

<center><iframe style="height:400px;width:100%;max-width:800px;margin:30px auto;" src="https://upscri.be/f70b7b/?as_embed"></iframe></center>
