---
title: "6 characteristics of complex systems and how they relate to modern software development"
date: 2019-02-24
slug: 6-characteristics-of-complex-systems-and-how-they-relate-to-modern-software-development
language: en
source: jcfausto.com
original_url: "https://jcfausto.com/2019/02/6-characteristics-of-complex-systems-and-how-they-relate-to-modern-software-development/"
archive_url: "https://web.archive.org/web/20190718022948/https://jcfausto.com/2019/02/6-characteristics-of-complex-systems-and-how-they-relate-to-modern-software-development/"
recovered: true
redirect_from:
  - /2019/02/6-characteristics-of-complex-systems-and-how-they-relate-to-modern-software-development/
---

When I look back to my understanding of agile and lean software development, when I first came in contact with these topics years ago, I do realize that I missed it totally at that time.

Now, some years later, I do think I have a better understanding about it to a point where I feel comfortable to share with you some ground knowledge that I came to learn later and that made me see these topics from a totally different perspective.

Why do some people say that software development is an activity in the domain of complex systems or a complex adaptive process?

At first, you have to have an overall understanding of what complexity means in software development and where it comes from. The whole concept is far more closely related to a new way of thinking on how to do things than to a formal model that you can apply. But, don’t get me wrong on that because I’m not telling that this has nothing to do with science.

Complexity is the subject of a whole research field in science. The act of programming a piece of software is something that can be simple and formal also. Thus, the complexity comes from all the other elements that are part of this process nowadays and the new way of thinking I’m referring to is mainly related on how to best handle all these interactions in order to extract optimal results out of them.

What I’ll share here is mostly empirical knowledge acquired during my journey – something based on my previous experiences. That said, let’s jump to the main characteristics of a complex system and understand how it influenced the current approaches we use nowadays in software development.

## 1 – Large number of inter-related elements

As far as I understand, a system is a set of inter-related elements that work together and depends on each other; no matter if simple or complex, every system will be composed this way.

Complex systems have a larger number of inter-related elements when compared to simple systems. Also, complex systems’ elements frequently are not single elements but other systems that can also be complex. Thus, we can craft a definition of a complex system as being a system of systems.

### The Human Body As An Example Of A Complex System

The human body, for example, is a good example of a complex system. Our body is composed of several inter-related systems with specific intents that only have a meaning when working together and in balance. Also, the environment where we live has a huge impact on our bodies, indicating that the environment itself is also part of the system.

As well as the human body, modern software development is composed of multiple systems that only make sense when working together and in balance. The market, customer, company, stakeholders, managers, leadership, developers, office space, computer, weather, and many more components are parts of this system and can influence its performance.

### No Every System’s Component Is Obvious

It might sound strange to consider the weather or the office space as part of the system right? But in fact, it isn’t. The layout of the office or the weather conditions can also play a decisive role in how effectively you are to navigate through a complex system. A decision to be made on a really hot day on an uncomfortable place can be influenced by such factors. There’s a lot of research proving that, and this is something that rarely we take into account, right?

When I see software development approaches insisting on treating people better, providing better conditions for them to work, create better work environments, I immediately connect such efforts to the fact that they’re as well part of the complex system that is supposed to build quality software and play an important role on final results.

## 2 – Non-linear

You might remember from your math lessons what linearity means but anyways I’d like to give a quick and dirty explanation.

Linearity is an observed property of a relationship; you have to have at least two elements interacting with each other – usually, each element provide an input – in order to observe linearity. When measuring the combined result of this interaction, a direct, constant and predictable proportionality can be observed. The result of the interactions between these elements can be represented by a straight line on a graph. Thus, linearity is the idea that combining the input of two elements will yield the sum of the respective output [1]. Increasing or decreasing one of the elements n times will result in also increasing or decreasing the result n times.

Now that we understand what linearity is, is easier to understand what is non-linearity. Non-linear relationships are unpredictable and increasing or decreasing one of the elements n times will not affect the result in the same proportion. Have you heard about the [Butterfly Effect](https://www.americanscientist.org/article/understanding-the-butterfly-effect)? This is a very good example of non-linearity.

[Modern software development is non-linear because even a minor change can product disproportionated consequences.](https://twitter.com/intent/tweet?url=https://wp.me/p5CfdI-3G&text=Modern%20software%20development%20is%20non-linear%20because%20even%20a%20minor%20change%20can%20product%20disproportionated%20consequences.&via=jcfausto&related=jcfausto)[Click To Tweet](https://twitter.com/intent/tweet?url=https://wp.me/p5CfdI-3G&text=Modern%20software%20development%20is%20non-linear%20because%20even%20a%20minor%20change%20can%20product%20disproportionated%20consequences.&via=jcfausto&related=jcfausto)

I bet you have heard many times that small bugs can cause big disasters, right? Did you remember what happened with NASA’s Mars climate orbiter that caused a $ 655 million machine to be useless due to a conversion issue[2]? The size of the bug/issue is not even closely similar to the size of the impact that it caused.

In day-to-day software development we made this same mistakes when we ignore for example the economics behind a decision to implement first a feature A instead of feature B, or when we ignore the impact that having a bad workplace can cause to your company’s results or even when we ignore the fact that not testing your software before shipping it to production is not a good idea nowadays if you want to iterate fast and build something sustainable by managing the technical debt you create and making things easier and safer to change later.

The size of the bug/issue is not even closely similar to the size of the impact that it caused. In day-to-day software development we made this same mistakes when we ignore for example the economics behind a decision to implement first a feature A instead of feature B, or when we ignore the impact that having a bad workplace can cause to your company’s results or even when we ignore the fact that not testing your software before shipping it to production is not a good idea nowadays if you want to iterate fast and build something sustainable by managing the technical debt you create and making things easier and safer to change later.

## 3 – Dynamic

[The capacity of staying immutable is not something that appeals to complex systems because they change constantly and the outcomes cannot be predicted accurately.](https://twitter.com/intent/tweet?url=https://wp.me/p5CfdI-3G&text=The%20capacity%20of%20staying%20immutable%20is%20not%20something%20that%20appeals%20to%20complex%20systems%20because%20they%20change%20constantly%20and%20the%20outcomes%20cannot%20be%20predicted%20accurately.%20&via=jcfausto&related=jcfausto)[Click To Tweet](https://twitter.com/intent/tweet?url=https://wp.me/p5CfdI-3G&text=The%20capacity%20of%20staying%20immutable%20is%20not%20something%20that%20appeals%20to%20complex%20systems%20because%20they%20change%20constantly%20and%20the%20outcomes%20cannot%20be%20predicted%20accurately.%20&via=jcfausto&related=jcfausto)

Usually, the outcome generated by a complex system is greater than the sum of its parts. In such systems, problems don’t have a unique solution. The challenge is to find one that can possibly solve temporarily the problem until the circumstances make it change again, forcing you to find a different solution for the “same problem”. Well, not exactly the same problem, although most people still believe it is. This phenomenon is called “emergence”.

**To learn more:**[Evolutionary design](https://www.martinfowler.com/articles/designDead.html).

To understand better what dynamic means for complex systems, let’s take a look in the car and the forest example. Imagine a car. Now imagine an experienced car engineer. Do you think that this engineer is capable of disassembling this car and reassemble it in a way that it stays exactly as it was initially? I do think so. Now think about the forest and all the elements that interact with it, such as the weather, the wind, the animals – including us -, and everything else that affects the forest. Do you know any engineer capable of disassembling and assembling a forest? I don’t believe so. It is impossible to define the forest exclusively as the sum of its parts because forests are complex systems that constantly change and have a relationship with lots of external systems that are also complex systems – winds, for instance.

### Modern Software Development Is Dynamic

There is a principle in modern software development that says that the software design should emerge and not be defined upfront. Any clues why? Exactly! Is because while the circumstances changes – business scenario, user needs – the software design will also change in response to this “emergent” circumstance.

The best way to deal with this characteristic is to use an experimental approach that can be able to fast respond to emergent changes in the environment.  In modern software development, we don’t impose solutions. Instead, we experiment in order to facilitate the path forward to be revealed. Thus, experimentation followed by sensing and concluded with a response is fundamental nowadays in software development companies.

## 4 – Evolutionary characteristics (co-evolution, adaptiveness)

Complex systems have a past that heavily influence the present. The decisions and happenings in the past shaped what the system is now, and this is something that cannot be reversed. This kind of systems evolves in response to environmental changes. The extent and depth of these changes are what makes the system reacts and change. This is a characteristic of evolutionary systems. Systems’ components and external elements evolve together on a series of small changes that leads to a certain momentary state.

Modern software development isn’t different. It’s heavily based on the premise that what we do should be a response to an external change. If business context, user needs, market demands, technology, change we should change as well in order to deliver the best response we can. This is something we know nowadays as “Adapt or die”.

We have seen many cases of big corporations that just disappeared because they were not able to change or adapt to modern times. Also, we constantly hear about the benefits of a start-up structure that due to its flexibility can easily change directions and explore quicker new opportunities or trends. In software development, we transitioned from the idea of specialists to the idea of generalists landing on a middle ground ofter referred to as “cross-functional” professionals. Such professionals have to expand their knowledge to other areas not directly connected to their specialty.

## 5 – Uncertainty

When you analyze a complex system by looking at its past, it’s somehow easy to reach the conclusion that you can predict how future events would be or that there’s a clearly defined co-relation between cause and effect that you can use for predicting future outcomes. Don’t fall into this pitfall. If you’re thinking like that, you’re forgetting that a complex system is unpredictable due to the constantly changing environments to which they are interacting with.

Modern software development is strongly dependant on the environment where it takes place. Oftentimes we refer to this environment as a “context”. I do believe that every context is different and modern software development practices should adapt to such specific contexts in order to bring any results. I’ve heard many stories on how people tried to use a certain approach that worked very well for company X but for their company it simply didn’t work. That’s because they missed considering the context. Every process, practice, a framework is created based on a certain context. If you don’t compare this context to yours when applying these ideas, you’ll certainly have trouble to make them work properly.

## 6 – Unordered nature

Unlike ordered systems, where cause and effect can be predicted with reasonable accuracy, complex systems can’t have such predictability. The complex interactions between its elements make cause and effect super hard to predict.  Bear in mind that most systems involving living relationships are considered complex systems: people, culture, value, ecosystems, etc. And the best way to fight against this characteristic is to react to changes by using experimentation, prototypes and continuous adjustments.

Modern software development evolved into a scenario where it became unordered. Apart from very small cases where studies have shown successfully anticipation of customer behaviors, most of the time companies they to assess the current context and experiment something to see if this something is the answer that best fits the environmental needs at that particular time. Modern approaches to software development became much more adaptive and responsive to external changes nowadays.

## In Conclusion

Studying and understanding what a complex system is and how we can work with it could help us understand why do we have all these different ways of developing products and why they are framed in certain ways that sometimes seems to be so uncontrolled, chaotic.

The point that all these approaches are trying to make is to find a way to enrich interactions between system’s elements, best react to environmental changes as fast as possible, and increase the chances to find the right answer for that particular moment with less cost.

Acknowledge that the work we do is complex and you’ll be on the right track. If you try to solve nowadays problems with old tools, that I’d say that you should urgently reconsider your options.

**An open question for further discussion**

If producing software is a complex adaptive task and in order to deal with such tasks we need to apply experimental and very flexible methods in order to find the most appropriate answer, how suitable are these large scale agile and lean approaches to software and product development?

Aren’t they too prescriptive to survive in such environments or trying to control an environment that cannot be controlled? Aren’t they trying to create order or bring linearity to a system that is by nature non-ordered and non-linear?

---

Read also: [The Difference Between Systems Thinking and Reductionist Thinking In Software Development](https://jcfausto.com/2019/06/the-difference-between-systems-thinking-and-reductionist-thinking-in-software-development/)

**References**:

[1][http://ieeexplore.ieee.org/document/6935936/](http://ieeexplore.ieee.org/document/6935936/)[http://news.mit.edu/2010/explained-linear-0226](http://news.mit.edu/2010/explained-linear-0226)

[2][https://www.scientificamerican.com/article/pogue-5-most-embarrassing-software-bugs-in-history/](https://www.scientificamerican.com/article/pogue-5-most-embarrassing-software-bugs-in-history/)
