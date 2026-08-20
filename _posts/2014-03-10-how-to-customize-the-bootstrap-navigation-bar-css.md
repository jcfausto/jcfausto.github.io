---
title: "How to Customize the Bootstrap Navigation Bar CSS"
date: 2014-03-10
slug: how-to-customize-the-bootstrap-navigation-bar-css
language: en
source: jcfausto.com
original_url: "http://jcfausto.com/how-to-customize-the-bootstrap-navigation-bar-css/"
archive_url: "https://web.archive.org/web/20140310055505/http://jcfausto.com/how-to-customize-the-bootstrap-navigation-bar-css/"
recovered: true
redirect_from:
  - /how-to-customize-the-bootstrap-navigation-bar-css/
---

Last year i’ve done a course about Ruby on Rails programming called “[One Month Rails](http://onemonthrails.com)” and it was very good.

See the course post here (Brazilian portuguese only)

[Como eu aprendi ruby on rails em um mês e criei um web app do início ao fim](http://jcfausto.com/como-eu-aprendi-ruby-on-rails-em-um-mes-e-criei-um-web-app-do-inicio-ao-fim/)

At the end of the course i felt a litle bit sad, because i was able to create a web application with Ruby on Rails and i didn’t want to stop evolving the app.

So, this year, i started to make some experiments with the sample app in order to keep learning more about RoR and Web Development in general.

The first thing i’ve thought when i finished the course was that the standard “Bootstrap Navigation Bar” style wasn’t so good. Then, i’ve decided to learn how to change this standard style to a more modern and flat style.

Here is the original navigation bar:

[![FinalApp](http://jcfausto.com/wp-content/uploads/2013/08/FinalApp.png)](http://jcfausto.com/wp-content/uploads/2013/08/FinalApp.png)

Here is the final styled bootstrap navigation bar:

[![BootstrapNewNavBar](http://jcfausto.com/wp-content/uploads/2014/01/BootstrapNewNavBar.png)](http://jcfausto.com/wp-content/uploads/2014/01/BootstrapNewNavBar.png)

In my application stylesheet, i’ve changed the bootstrap “.navbar-inner” style to:

```

.navbar-inner {
@include box-shadow(none !important);
border: 0;
background: #36a5d3;
}
```

The “.navbar .brand” style also changed:

```

.navbar .brand {
padding: 18px 20px 10px;
text-shadow: none;
color: #fff;
}
```

I’ve changed the navigation links to this:

```

.navbar-inner .nav li a {
color: #fff;
padding-top: 20px;
padding-bottom: 20px;
text-shadow: none;
background: none;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
-webkit-transition: background 0.1s linear,opacity 0.1s linear;
-moz-transition: background 0.1s linear,opacity 0.1s linear;
-ms-transition: background 0.1s linear,opacity 0.1s linear;
-o-transition: background 0.1s linear,opacity 0.1s linear;
transition: background 0.1s linear,opacity 0.1s linear;
-webkit-font-smoothing: antialiased;
opacity: .9;
font-weight: 600;
}

.navbar-inner .nav li a:hover {
background: #0c618f;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
color: #fff;
opacity: 1;
}
```

And finally, it was necessary to adjust the hero unit margins:

```

.hero-unit {
margin-top: 15px;
}
```

And voila! After these small changes, the navigation bar has become more enjoyable, don’t you think?

You could see the app with this modified navigation bar running here: [http://vast-dawn-6062.herokuapp.com/](http://vast-dawn-6062.herokuapp.com/)

Feel free to comment about this style. I’m not experient in CSS, so forgive me for any unecessary element at styles.

Bye!
