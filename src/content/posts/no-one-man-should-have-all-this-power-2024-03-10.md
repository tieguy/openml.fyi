---
title: all this power / 2024-03-09
date: '2024-03-09'
description: Getting angry about Senator Vance’s call for… open? and some good examples
  of what smart open could look like.
tags:
- power
- regulation
- defining-open
feature_image: /images/content/images/2024/03/lightning-small.png
feature_image_alt: Person leaning forward to grab lightning bolts, generated vaguely
  in the style of an art deco propaganda poster.
ghost_id: 65eca7bfded7480001d8aa04
---

Never a boring day in open source AI land. I want to start with a quick note about a sitting Senator endorsing open source AI and ... me getting very angry about it.

🤔:

<figure class="kg-card kg-embed-card"><blockquote class="twitter-tweet"><p dir="ltr" lang="en">There are undoubtedly risks related to AI. One of the biggest: <br/><br/>A partisan group of crazy people use AI to infect every part of the information economy with left wing bias. Gemini can’t produce accurate history. ChatGPT promotes genocidal concepts.  <br/><br/>The solution is open source <a href="https://t.co/lfkf9c3fzU">https://t.co/lfkf9c3fzU</a></p>— J.D. Vance (@JDVance1) <a href="https://twitter.com/JDVance1/status/1764471399823847525?ref_src=twsrc%5Etfw">March 4, 2024</a></blockquote>
<script async="" charset="utf-8" src="https://platform.twitter.com/widgets.js"></script></figure>

Senator Vance is responding, of course, to Google’s Gemini release and particularly its controversial (for mostly the wrong reasons!) image generation. I won’t get into the details here, but suffice to say that Senator Vance’s friends first actively cheered to get Google to [fire most of the smart people they had working on AI ethics](https://www.nytimes.com/2022/05/02/technology/google-fires-ai-researchers.html), and are now outraged that the AI is… not ethical. (I can’t 🤔enough in this micro-essay, apparently.)

Senator Vance therefore comes to accidentally the right thing: if society wants to *actually govern* these beasts (which will, like all things, be [only partially through the law](https://en.wikipedia.org/wiki/Pathetic_dot_theory)) we need to be able to understand them—which is going to require transparency, whether by “open” or other means.

## Values

*In this section: what values have helped define open? are we seeing them in ML?*

### Lowers barriers to technical participation

A technical theme I keep seeing lately: **data hosts introducing hosted data workspaces**, where you can play with their data in a way that is easier for you and safer for them. The latest is [ARCHWay from Internet Archive](https://archive-it.org/post/introducing-archway/), for working with their web archives.

This has interesting valences for open: it enables access to those who might otherwise be deterred by download and storage costs, but also puts in place a loooot more controls on what you can do with it once you do have access.

### Improves public ability to understand

“Who gets to test software” is a question the security community has long grappled with, and is central to questions of power in the industry: **if you can use legal threats to prevent people from testing your software, you have a huge degree of control**, and that control that threatens democratic governance.

So I generally like this new open letter stating plainly that society *needs* open evaluation and [calling for safe harbors to protect those trying to do that evaluation](https://sites.mit.edu/ai-safe-harbor/). This is not open per se, but very aligned with transparency and governance questions also reached by open. I hope Senator Vance takes this up!

### Shifts power

One locus of power right now, of course, is who can afford to use the legal system to support or weaken their claims. Facebook has spent the past couple of years working to build caselaw making it *harder* to scrape, and ... [apparently just stopped](https://blog.ericgoldman.org/archives/2024/02/facebook-drops-anti-scraping-lawsuit-against-bright-data-guest-blog-post.htm)?

I don’t want to read too much into a single case, but the linked post goes there: Meta really wants to scrape everyone else’s data to train AI, and perhaps that has trumped their desire to prevent others from scraping “their” data. If dropping this case marks a permanent change in Meta’s litigation strategy, rather than just a pause, it is an important change in the legal landscape: one that’s pro-open-community (in the sense that it may make more data accessible to everyone for training) but definitely anti-privacy and perhaps ultimately pro-centralization.

## Techniques

*In this section: open software defined, and was defined by, new techniques in software development. What parallels are happening in ML?*

### Deep collaboration

“How to extract opinions from a community in a healthy, respectful, valid way” is a really, really tough problem. So I was intrigued to find out last week that Anthropic and the Collective Intelligence project partnered last year to use [deliberative polling](https://www.smarter-together.org/story/understand-levers-public-opinion-deliberative-polling-self-moderated-platforms/) to build a “[constitution](https://www-cdn.anthropic.com/b43359be43cabdbe3a8ffd60ea8a68acf25cb22e/Anthropic_CollectiveConstitutionalAI.pdf)” for Anthropic’s AIs to be trained on.

The resulting constitution is somewhat milquetoast (literally designed by committee!), but far better than the original Anthropic constitution, about which said the less the better. (They do get points for trying, though!)

Paired with the last newsletter’s [Alignment Assembly (now nearing completion!)](https://openfuture.eu/blog/alignment-assembly-on-ai-and-the-commons/), I am thrilled to see this new approach to collaboration—and I hope open communities can use add it to the toolkit to replace much of our “scream in issue trackers” approach to consensus-building.

### Model improvement

If (big if!) the number of open(ish) models continues to increase, we’re going to have to figure out how to not just compare them but also compare them *efficiently*. [This paper](https://arxiv.org/abs/2402.18756) tackles that, suggesting that not much comparison may be needed. [Commentary and some related links](https://sigmoid.social/@LChoshen/112021980665910901).

### Instilling norms

#### Enforcing norms by gatekeeping collaboration

Software Heritage is a great aggregator of historical open source software, and so of course is being used to train code-focused LLMs. [They have a statement of principles](https://www.softwareheritage.org/2023/10/19/swh-statement-on-llm-for-code/) that, rather than focusing on *legal* terms, essentially says **“we won’t *work with you* unless you play by these norms”.** That’s backed up by their API terms of service, which says “you can only do bulk downloads by... working with us”.

I have heard this same basic approach echoed now by a number of data-hosting organizations: (1) we have open data, but (2) we have very finite amount of staff time, and (3) downloads, at AI-scale, are not no-cost to us, so (4) we’re gatekeeping bulk downloads and staff time through ethical tests (more formal in SW Heritage’s case, less formal in others).

That’s arguably not pristinely open source in the traditional sense: it uses bulk data access to enforce terms you won’t find in the licenses of the individual files. But—in the original “[what even is open right now](/ish/)” sense of this newsletter—I think this is a growing trend.

In the meantime, whether or not it is *open*, it apparently can be *pragmatically workable*: the SW Heritage data set has now been used as the basis for [a HuggingFace/NVidia/ServiceNow collaboration](https://www.servicenow.com/company/media/press-room/huggingface-nvidia-launch-starcoder2.html) to produce the StarCoder 2 LLM. (StarCoder 1 had previously had been based on scrapes of GitHub.)

#### Lazy critique

I liked [this rant on “lazy” AI critique](https://redeem-tomorrow.com/the-average-ai-criticism-has-gotten-lazy-and-thats-dangerous), which acknowledges that some AI is impactful and useful and urges us to work harder to sharpen our critique. If we’re going to instill norms in the industry, we have to engage with the strongest pro-AI arguments, not the weakest ones.

### Transparency-as-technique

[This thread](https://twitter.com/AmandaAskell/status/1765207842993434880) from an Anthropic researcher, **breaking down the “system prompt” for their new “Claude” system**, is a really intriguing read and demonstrates a very important (and novel?) form of transparency. I would legitimately love to read papers from several disciplines breaking down this prompt, as well as reporting from major news outlets on the internal processes of its creation. This is the sort of thing Sen. Vance should be cheering on.

## Joys

*In this section: open is at its best when it is joyful. ML has both joy, and darker counter-currents—let’s discuss them.*

### Humane

iA Writer is not open source, but I love the spirit with which they are approaching AI. Their thinking on how to [integrate (or not) ChatGPT with your writing process (hidden inside a note on Shortcuts!](https://ia.net/writer/support/basics/apple-shortcuts#edit-with-chatgpt)) is worth the quick read for anyone grappling with how to integrate AI in a *humane* way.

### Pointless and fun anyway

I loved this [hacking project on an AI clock that, among other things, is admittedly frequently wrong](https://www.theverge.com/23669343/ai-clock-chatgpt-poems-rhymes-diy-project). The resulting kickstarter has [some smart things to say about APIs and service survivability](https://aiclock.substack.com/p/update-7-poem1-is-now-live-on-kickstarter) as well.

## Changes

*In this section: ML is going to change open—not just how we understand it, but how we practice it.*

### Ethically-focused practitioners

- [This paper on AI risk assessment](https://crfm.stanford.edu/open-fms/) is really long and has a lot to say, all worth reading. It jumped out at me in part beacuse it asks (more thoroughly than most) the critical question “risks, *compared to what*”? It’s an approach anyone thinking about the ethics of open in this space needs to learn and model. (Worth noting: the [Open Source Initiative likes it](https://opensource.org/blog/new-risk-assessment-framework-offers-clarity-for-open-ai-models), which I suspect signals some worthwhile thinking there about how open has tradeoffs and risks—not something OSI has ever formally recognized!)
- [Mozilla has released a long paper](https://blog.mozilla.org/en/mozilla/ai/next-steps-for-mozilla-and-trustworthy-ai/) on how they see the moment in AI. Among other things, it’s worth calling out because it specifically speaks to the question of norms.

### Collaborative tooling

One key change resulting from the current moment is that (to the extent open communities survive in a recognizable form) it seems likely we’re increasingly going to depend on centralized services in an *irreplaceable* way. GitHub is *hard* to replace, but the key bits, like git itself, are there, and there are multiple open(ish) competitors. That may not be the case in AI, not just because of GPUs, but because of dynamic data sources that do not lend themselves well to distribution. AccessNow has an [in-depth paper grappling with that dynamic in the context of humanitarian aid](https://www.accessnow.org/private-tech-humanitarian-mapping/), calling out that **data collection by big tech is now often a prerequisite for “mere” aid**. I don’t love the phrase “data colonialism”, because it is often applied to genuinely voluntary and mutually-beneficial transactions, or to data that really should be humanity’s common heritage. But some of the stuff in this paper... oof.

## Misc.

- As they say, [**read the whole thing**](https://ethanmarcotte.com/wrote/generative/).
- This [paper on **what *search is for***](https://dl.acm.org/doi/10.1145/3649468) is really interesting and wide-ranging. In particular, the notion of the web as an ecosystem, not just a big pile of documents, really resonates with how I’m thinking about open right now.

<figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://dair-community.social/@emilymbender/112005035810535349"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Prof. Emily M. Bender(she/her) (@emilymbender@dair-community.social)</div><div class="kg-bookmark-description">We argue that it is important to reassert the central research focus of the field of information retrieval, because information access is not merely an application to be solved by the so-called ‘AI’ techniques du jour. Rather, it is a key human activity, with impacts on both individuals and society. &gt;&gt;</div><div class="kg-bookmark-metadata"><span class="kg-bookmark-author">Distributed AI Research Community</span></div></div></a></figure>

- A lot of talk about [the **water costs of AI** right now](https://www.theatlantic.com/technology/archive/2024/03/ai-water-climate-microsoft/677602/), which is a real problem. But context is also important: the *annual* water usage of one of the data centers cited here can be similar to the *daily* water usage of some desert golf courses. The solution here, as with many scarcities, is often going to be shifting uses from older, less valuable uses to newer, more impactful ones.
- OpenAI has responded to **Elon Musk’s lawsuit** by [alleging that Elon was fine with making OpenAI a for-profit—as long as he was in charge](https://openai.com/blog/openai-elon-musk). Related, [a good lawyer-intensive read on the (very recent!) caselaw that will likely impact how this case is handled by the courts](https://lawprofessors.typepad.com/business_law/2024/03/spins-roulette-wheel-moelis-and-openai.html).
- This is a bit out there, but I like this paper that tries to capture an important question: [**what does use of AI as a thinking aid do to our *moral* intuitions**](https://link.springer.com/article/10.1007/s11098-023-02083-6)?

## Closing note

Bruce Schneier has [a long, interesting essay on the historical metaphor of the “frontier” in tech](https://www.schneier.com/blog/archives/2024/02/how-the-frontier-became-the-slogan-of-uncontrolled-ai.html), and particularly in AI.

It is worth reading, but I think it is worth calling out because the essay only mentions indigenous people *once*. That’s a very big gap, not just because it erases those people from the American frontier story, but importantly because lots of web denizens are feeling that “pressure” right now: what is it like to have powerful entities extracting from you and pushing you out of the way?

This is *not* to say the two are morally equivalent; the American Frontier story is inherently a story of genocide, so if you initiate a historically-grounded discussion of tech-as-oppressor, lean on Ludd instead.

But I don’t think you can fully understand the dynamics at play in AI until you do what American historians have mostly failed to do about the frontier: take seriously the human dynamic of who is displaced, why, and how they fight back.
