---
title: "The Truth Is In The Past. How the UNIX design philosophy inspired nowadays software development"
date: 2019-02-17
slug: the-truth-is-in-the-past-how-the-unix-design-philosophy-inspired-nowadays-software-development
language: en
source: jcfausto.com
original_url: "https://jcfausto.com/2019/02/the-truth-is-in-the-past-how-the-unix-design-philosophy-inspired-nowadays-software-development/"
archive_url: "https://web.archive.org/web/20190718030016/https://jcfausto.com/2019/02/the-truth-is-in-the-past-how-the-unix-design-philosophy-inspired-nowadays-software-development/"
recovered: true
redirect_from:
  - /2019/02/the-truth-is-in-the-past-how-the-unix-design-philosophy-inspired-nowadays-software-development/
---

I watched Jez Humble’s talk at Agile 2017 and among many insights, one particular thing caught my attention.

**He based his continuous delivery philosophy on the UNIX design philosophy.**

I’m a big fan of UNIX and everything it powers nowadays. However, this connection between UNIX’s design philosophy and Jez’s Continuous Delivery approach was very intriguing for me. You can watch the talk [here](https://www.agilealliance.org/resources/videos/continuous-delivery-in-agile/). Skip to minute 4:30 to watch the UNIX part of it.

I’ve read the referenced paper on his slide and surprisingly enough I discovered it very up to date as for what we’re having nowadays as trends in IT. You can read the paper UNIX Time-Sharing System: Forward. (McIlroy, M.D.; Pinson, E.N.; Tague, B.A.) [here](https://archive.org/details/bstj57-6-1899/page/n3).

## A quick Look at UNIX system design style and some parallels I made

---

**Make each program do one thing well. To do a new job, build an afresh rather than complicate old programs by adding new features.**

This principle could perfectly be a description of the overall idea behind Microservices. Also, I can related two of the SOLID principles with it: Single Responsibility and Open Closed.

**Expect the output of every program to become the input to another, as yet unknown, program. Don’t clutter output with extraneous information. Avoid stringently columnar or binary input formats. Don’t insist on interactive input.**

This sound a lot like an API and its relatives like Design by contract, APIs first.

**Design and build software, even operating systems, to be tried early, ideally within weeks. Don’t hesitate to throw away the clumsy parts and rebuild them.**

Impossible not to remember of a Prototype reading the principle above. Also, Iterations, Sprints, Fast feedback loops, Spikes.

**Use tools in preference to unskilled help to lighten a programming task, even if you have to detour to build the tools and expect to throw some of them out after you’ve finished using them.**

Workflow automation and supporting tools for software development such as IDEs, Analysers, CI/CD, Platforms, high-level languages, etc.

---

## Opinion

An insight I had while reading the paper was realizing how pretentious or arrogant some inventors/creators are when they believe that they truly invented something revolutionary or even when we master certain skills that we ignorantly think is new but are nothing but old very good software development most of the times with a cool name or wrapped up on a framework.

This kind of material should be more available to every developer. I’m sometimes concerned with people that take courses on HTML, CSS and JS and assume they’re good developers right after finishing the course. They have so much to learn as I do even after all these years of software development. Also, all the agile movement should acknowledge that in the great majority of the cases they just made smart things invented in the past more accessible or sellable.

So in general, I started to believe that part of the truth on how to build quality and sustainable software resides in the past and it’s just waiting for us to discover it. Perhaps this will reduce a lot of the hype we’ve seen lately and we’ll be able to focus more on what we really like, well at least the great majority of us: Software Development.
