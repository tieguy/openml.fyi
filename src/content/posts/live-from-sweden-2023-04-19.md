---
title: Live from Sweden
date: '2023-04-19'
description: Upcoming public panel moderation; shifting power via foundation models
  (open or not); public ability to understand via great WaPo visualization; modularity;
  and more.
tags:
- power
- transparency
- tooling
feature_image: /images/content/images/2023/04/B205FB19-E092-4FE9-9C81-3BA262132E85.jpeg
feature_image_alt: Sailboats in front of a church, with trees and birds, in the style
  of a pencil sketch.
ghost_id: 643fe8720b4f75003d95356a
---

## Intro

I’ve been doing a lot of speaking on ML of late (I think four streams/podcasts and one conference track in four weeks?) so the newsletter has suffered. Thanks to all of you who have referred me to speaking opportunities; it’s been fun! Today I'm coming to you live from Göteburg, Sweden, where I'll co-lead a track on machine learning and open tomorrow.

## Events

*(All streaming unless otherwise noted)*

- I’ll be moderating a panel with [panelists from Internet Archive, Creative Commons, and Wikimedia on May 2](https://blog.archive.org/2023/04/12/generative-ai-meets-open-culture/). Registration for the stream at the link.

## Values

*In this section: what values have helped define open? are we seeing them in ML?*

### Improves public ability to understand

- The Washington Post has [a great visualization and report on what data is used](https://www.washingtonpost.com/technology/interactive/2023/ai-chatbot-learning/) in one of the key semi-public data sets, C4. This is the kind of democratic oversight that (1) is extremely necessary and (2) can only happen when data sets are open(ish) enough to be accessible and legible to the media.
- On the flip side, #5 in this terrific list of “[Eight Things To Know About LLMs](https://cims.nyu.edu/~sbowman/eightthings.pdf)” is that “Experts are not yet able to interpret the inner workings of LLMs”. This is a nice, concise summary of the research in this area—and suggests that, at least for the moment, making models available to researchers is not a panacea for interpretability.

### Shifts power

I’ve mused here before that the “foundation models” approach is an important one to understand, not just technically but because whoever provides and controls those models will have a *lot* of power.

Daniel Jeffries, formerly (briefly?) of StabilityAI, [muses at length on who will “win” in foundation models](https://danieljeffries.substack.com/p/the-ai-powerhouses-of-tomorrow). His take: there will be “Foundation Model as a Service companies who basically offer intelligence as a service but even more importantly they offer piece of mind: Guardrails, logic fixes, safety measures, upgrades, rapid response to problems.” But getting there will be costly, and error-prone, because making the wrong choices at the beginning will mean throwing everything away to retrain. The essay ends with a long section on open business models in this space that is particularly worth reading.

One oversight in the Jeffries essay is the regulatory environment. I think this may push towards open (or at least transparent) in a way that regulation of traditional software has not. Besides the safety considerations I’ve already covered here repeatedly, there’s also a growing push within academia to do research based on open models. If you’re interested in reading more on that, here’s a long read [focused on natural language processing research](https://hackingsemantics.xyz/2023/closed-baselines/), and [a more recent editorial in Nature](https://www.nature.com/articles/d41586-023-01295-4). It will be interesting to see if this advocacy succeeds and tips the general policy balance in favor of open foundation models.

## Techniques

*In this section: open software defined, and was defined by, new techniques in software development. What parallels are happening in ML?*

### Model improvement

This paper is a very deep dive (with excellent, short executive summary) on what [terminology and techniques we might use to discuss safety and security in ML models](https://raw.githubusercontent.com/trailofbits/publications/master/papers/toward_comprehensive_risk_assessments.pdf). Highly recommended for anyone thinking about this; the comparisons to old techniques are problematic and we need to build better vocabulary if we want to get this right.

### Modularity

*New sub-section here; modularity is a key open source software technique, enabled by low-friction licensing. Are we seeing it in ML?*

- The HuggingFace team has published a paper demonstrating [the chaining of multiple models to create powerful outcomes](https://arxiv.org/abs/2303.17580). This may end up being an alternative (or complement) to specialized training.
- Langchain, an open source toolchain for interacting with LLMs, continues to be very actively developed, including [rapidly implementing techniques from academic papers](https://twitter.com/hwchase17/status/1647987713449263106). One to keep an eye on.

<figure class="kg-card kg-embed-card"><blockquote class="twitter-tweet"><p dir="ltr" lang="en">🤖Generative Agents🤖<br/><br/>Last week, Park et all released “Generative Agents”, a paper simulating interactions between tens of agents<br/><br/>We gave it a close read, and implemented one of the novel components it introduced: a long-term, reflection-based memory system<br/><br/>🧵 <a href="https://t.co/10QzhSuMiz">pic.twitter.com/10QzhSuMiz</a></p>— Harrison Chase (@hwchase17) <a href="https://twitter.com/hwchase17/status/1647987713449263106?ref_src=twsrc%5Etfw">April 17, 2023</a></blockquote>
<script async="" charset="utf-8" src="https://platform.twitter.com/widgets.js"></script>
</figure>

## Changes

*In this section: ML is going to change open—not just how we understand it, but how we practice it.*

### Creating new things

New unquestionably open models continue to proliferate. From the past few weeks:

- [MIT licensed text to image model](https://laion.ai/blog/paella/)
- [instruction-tuned open text LLM](https://www.databricks.com/blog/2023/04/12/dolly-first-open-commercially-viable-instruction-tuned-llm) based on [MIT-licensed EleutherAI Pythia](https://github.com/EleutherAI/pythia)
- [FB image segmentation model](https://github.com/facebookresearch/segment-anything)

And data sets too. This week it is [Red Pajamas](https://www.together.xyz/blog/redpajama), a new data set explicitly aimed at duplicating the Facebook LLaMA data set, so that others can reproduce the LLaMA model. Note that funding is a mix of academic, government, and startup, suggesting that the “everyone finds something” economic model of open source software will have at least some applicability in open(ish) ML.

### Ethically-focused practitioners

- David Widder and Dawn Nafus interviewed developers and wrote a paper on how those [developers think about (or don’t think about) accountability](https://arxiv.org/abs/2209.09780). The key, they find, is **modularity**. By treating pieces of software as just one step in a long software supply chain, we effectively always say “ethics is someone else’s problem”. The paper is about AI, but a good summary of a literature that applies to traditional open source as well.
- This [history of how academic computer science started to grapple with ethics in its curriculum](https://ruth.substack.com/p/how-computing-ethics-got-woke) is good (if too short!) It surfaces critiques that parallel Widder and Nafus—specifically, that much ethics education focuses on the individual’s role in a way that elides institutional responsibility.

### Changing regulatory landscape

- This piece argues that [security- and privacy-preserving models in the current technical paradigm are *impossible*](https://arxiv.org/pdf/2209.15259.pdf); there’s just too much uncertainty in how they work. The author is quite serious about this, having chosen to quit Google in order to publish it. I’m very curious how this ends up interacting with the coming AI regulatory regimes and existing regimes like GDPR.
- [EPIC has a *very* deep dive on proposed US government regulations](https://epic.org/framing-the-risk-management-framework-actionable-instructions-by-nist-in-their-govern-section/), specifically the NIST’s AI Risk Management Framework. This one covers *102* specific actions across five recommendation areas, and several detailed followups are available [here](https://epic.org/framing-the-risk-management-framework-actionable-instructions-by-nist-in-the-measure-section-of-the-ai-rmf/).

### Collaborative tooling

- In *anti*-collaboration news, I increasingly think that before LLMs create impactful “misinfo” themselves, they’ll accidentally create a misinfo crisis by burning out every human moderator on every platform, allowing *human* misinfo to flourish. Relevant to open, [GitHub will be one of the first victims of moderator burnout](https://fosstodon.org/@VincentTunru/110146668322885122).

## Misc.

- We continue to see more [small-human-language LLMs, this time from South Africa](https://lelapa.ai/products/vulavula/).
- Good, short essay on [why general-purpose AI tends to do better than special-purpose AI](https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf). Relevant to a traditional open approach of “build small pieces that can be reused”.
- A team including Mark Lemley have written a thorough summary of the state of American law on “[Foundation Models and Fair Use](https://arxiv.org/abs/2303.15715)”.
- StabilityAI, advised by Mark Lemley, has filed [a motion to dismiss the copyright case against it](https://drive.google.com/file/d/13s6U-WM9ur1-rCmVoUab49r910HeFaYA/view?usp=drivesdk). I have not had a chance to read all of it, but critically it alleges that the plaintiffs did not file for copyrights on the allegedly infringed works—which may end the case fairly quickly, without teaching us much about what the law is in this case.
- Recordings from [the DAIR’s “Stochastic Parrots Day” are now available](https://peertube.dair-institute.org/w/p/5k7JempgUbCAcpTjUZPuKQ).

## Closing note

I’ve been re-reading classic machine-learning related science fiction; please leave comments or ping me if you have suggestions!

One thing that has jumped out at me is that in Stephenson’s Diamond Age, the ML-like software is referred to as “pseudo-intelligence”. I really like this—it captures the almost-but-not-quite thereness.
