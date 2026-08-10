---
title: Why open(ish)?
date: '2022-10-09'
updated: '2023-01-10'
description: “Open” is a shortcut to a bundle of values, and the new generation of
  open will weigh those values differently. This newsletter is about those values,
  and those changes.
tags:
- essay
- defining-open
- power
- community
feature_image: /images/content/images/2022/10/LuisVilla4_blue_door_mostly_open_in_a_brick_building_oil_painti_9270ee1f-a0c8-42b7-b60f-49405b5d3757.png
featured: true
ghost_id: 63434eba478f06003d51a5fe
---

"open" is a shortcut; a single word that sometimes refers to a mix of values, rules, and techniques. Like any cognitive shortcut, sometimes this aids efficiency by allowing people with slightly different rules and values to simply use "open" and get close enough to move forward together; at other times it creates friction when various similar-but-not-identical definitions create misunderstanding and even anger.

I believe ML is likely to launch a third(ish) wave of open(ish), characterized by different economics, different development cycles, different communities of practice, and very different social impact from previous cycles. During this wave,  the term "open" will be defined anew for—*and by*—a fresh influx of people; hopefully learning both from past lessons and from new contexts.

Because the term is in flux, I do not want to waste my short life arguing over rigid rules, and this newsletter will try very hard not to [gatekeep](https://www.urbandictionary.com/define.php?term=Gatekeeping) over "open". Instead, I want to focus on the values—both the broad social and economic values that make open important, and the very personal ones that have kept me eager to engage in liberatory software.

This essay is a work-in-progress. One of my goals of writing the newsletter is to help sharpen my own intuitions on these hard issues in this new space, so I will likely return to and revise this on a semi-regular basis. *[Jan. 2023: I've added a changelog at the bottom to track major changes.]*

## Why now? What open(ish) change?

Why will ML unsettle "open"? More on that to come, but a few critical intuitions:

- **"creation engines":** The web, by and large, made it easier to consume and share. ML promises to make it easier to comprehend and *to create—*as one person put it, we will replace search engines with creation engines. I think that is likely to fundamentally change the role of software in society, which in turn changes the promise, and responsibility, of open(ish).
- **Ethically-focused practitioners:** The culture of the AI community centers ethics, often specifically referring to first-wave open (including its sometimes-openly-sexist leaders) as a lesson in how *not* to practice ethics. As a result, many AI practitioners explicitly reject the "freedom" to run a program for racist, sexist, or other purposes. Because of the influence of these practitioners, open will have to (at the very least) advance strong counter-arguments.
- **Changing regulatory landscape:** Open's low cost and high flexibility enables "move fast", and so also forces us to discuss "break things". Machine learning will amplify that, because it is drawing more broad-ranging regulatory scrutiny than any previous software field. We could respond in a number of ways, but "we don't need to respond at all" is no longer credible—the only question is who will respond and how.
- **Collaborative tooling:** The culture and beliefs of the first wave of open was shaped by a wave of libre, network-centric tools that were *actively better* than the tools used by proprietary software. (Open had git first, for example.) The second wave was shaped by a shift to the cloud, which undermined our theory of empowerment and changed the economics of the space. ML-assisted tooling will likely lead to similarly radical changes in the economics and culture of collaboration—which in turn will impact open.
- **And more:** I strongly suspect ML is going to be somewhere between "the web" and "the printing press" in terms of its impact on human society. That means some of it will be impossible to predict—which is both fun and terrifying. Here we go!

## Open(ish) values

The most important values that I look at when I'm assessing "open-ish":

- **Easy entry:** Can interested people 'just show up' and meaningfully contribute? For a long time, the cost of training and data appeared to be insurmountable, which is why I did not pay much attention to ML for a long time. That has changed in a variety of (exciting!) ways but is still an important risk and consideration.
- **Governance:** This might as little as [the right to fork](https://opensource.com/article/19/1/forking-good) or might be more elaborate, and might be a mix of technological, normative, or legal, but must give some say to those outside the inner circle.
- **Legibility:** How comprehensible is this software to outsiders (impacted humans, users, governments, etc.?) This is sometimes called transparency, but I think we often confuse "the thing available to read" with "can anyone actually read it" and "does anyone actually read it", so I prefer legibility for now.
- **Ethical outcomes:** [I care a lot about the morality of software](https://lu.is/blog/2016/03/23/free-as-in-my-libreplanet-2016-talk/), but I think it's plausible that corporate-style-open is a net utilitarian good even when it sometimes empowers bad actors. So I'm both open to licenses that enforce ethical outcomes, and also trying not to rush to judgment *against* the scariest possible outcomes of unencumbered ML projects.

## Open(ish) techniques

I am more concerned with the outcomes of open than the specifics of how open is done. That said, the two obviously blur into each other. So these techniques are important in my personal evaluation of open(ish), but I am not as wedded to them as I am to the values when evaluating a project's open(ish)ness.

- **Real collaboration:** Projects conducted entirely inside a single entity are fairly uninteresting, even if their license is open in a formal sense. Information flow should be amongst peers, not hub-and-spoke.
- **Repair and improvement:** In theory open enhances the ability of individuals to repair and improve code, but in practice the overwhelming complexity of modern software makes this difficult. ML is likely to be even more complex, so (for the moment) I treat this as a nice-to-have.
- **Normative tools:** It's important to transmit (and enforce) community norms,  especially in rapidly growing communities. However, traditional open's fixation on licensing as the One True Technique for this purpose was wrong. As a result, I'm very tolerant of experimentation in this area.

## Open(ish) joys

Opens I'm *most happy* to work on and learn about includes those that are:

- **Humane:** Open works best when it is rooted in joyful, inclusive communities of humans. (But successful open projects will still need leadership, vision, and urgency.)
- **Radical:** Open can change the world, not just refine it. (But that has to be tempered with equity and empathy for those being disrupted, and a firm dedication not to let the good blind us to the bad—or vice versa.)
- **Fundamental:** Open can be what everything else builds on. (But it has to provide for those who maintain, or else you build on quicksand.)
- **Optimistic:** Open empowers people to do amazing things, and most people are good most of the time. (This does not give us a free pass to ignore bad things being done with our tools.)

## Finally, open(ish) power

In discussing this recently with a good friend, he asked—pointedly—"what does ML do to power in the industry"? This made me realize the first draft of this essay had a lot of words, none of which were "power"—even though I've been asking that question for at least [fifteen years now](https://lu.is/blog/2007/08/07/freedom-for-users-which-users-did-you-mean-exactly-or-of-users-user-deployers-and-user-consumers/).

So: If your discussion of what "open" means doesn't discuss what it means to power in the industry, it isn't really a discussion of open in its real fullness. Many of us got into open because of how it challenged traditional sources of power in the industry, and many of us were surprised when open ended up often reinforcing or reintroducing existing power structures. The new open(ish) may, or may not, do the same—but we need to ask that question up front, and not sweep it under the rug.

## Changelog

- Early Jan, 2023: I added "finally, open(ish) power".
