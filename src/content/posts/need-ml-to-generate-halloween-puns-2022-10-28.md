---
title: need ML to generate halloween puns
date: '2022-10-28'
description: No big meta-themes this week. Enjoy Halloween :)
tags:
- defining-open
- governance
- ethics
feature_image: /images/content/images/2022/10/LuisVilla4_sculpture_of_a_reclining_philosopher_with_jack-o-lan_1a8008b4-3407-4627-9337-2a1a88069825.png
feature_image_alt: A marble bust surrounded by leaves, over a background of poorly-generated
  jack-o-lanterns.
feature_image_caption: 'midjourney: sculpture of a reclining philosopher with jack-o-lantern
  head, white marble, background of colorful fall leaves'
ghost_id: 635c1b23fd45cf003d70d643
---

No big meta-themes this week. However, an observation: the industry seems to be coalescing quickly around "generative AI" as the name for "ML that makes creative things". I like it; harkens back (in a good way) to Prof. Jonathan Zittrain's conception of the "[generative internet](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=847124)" c. 2006. Expect to see that term a lot going forward.

## Open(ish) values

### Lowering barriers to entry

- **Open helps drive down costs, again:** Another week, another set of anecdotes suggesting that a lot of the "ML is really expensive" discourse was, at least in part, driven by "ML has essentially unlimited budgets".  Stable Diffusion's [RAM usage can be down to 1Gb](https://twitter.com/PatrickPlaten/status/1585678494763257861) (from 48Gb a month and some ago), Intel is releasing [10-100x acceleration patches for commonly-used training toolkits](https://intel.github.io/scikit-learn-intelex/), and [training steps are getting cut in half for big language models](https://twitter.com/XYOU/status/1585372593439531009?s=20&t=vyzqtbfMs2U3c2BAShH_Kg) (though still requiring [academic supercomputers](https://twitter.com/XYOU/status/1585372603996598272?s=20&t=vyzqtbfMs2U3c2BAShH_Kg)!) And here's [a job posting to do more](https://twitter.com/sarahookr/status/1584508753956597760?s=20&t=vyzqtbfMs2U3c2BAShH_Kg) of this sort of optimization. The barrier to entry is coming wayyy down.
- **Stable Diffusion continues to turn into an ecosystem:** Here's [a *giant* list of Stable Diffusion distributions, tools, etc](https://github.com/sw-yx/prompt-eng#stable-diffusion). And here's [the changes to it in just the past couple of weeks](https://github.com/sw-yx/prompt-eng/commit/584a0356bd8e429a61e9703af930525b24cff86b). *Meta:* I wish I had time to audit these for RAIL license compliance; it'd be a great way to understand license usage in the wild at a time when the licenses and other governance models are still adjustable.

### Making systems legible

- **What are we studying?** I've talked here, optimistically, about the growing toolkit for analyzing models, to help us understand (and therefore improve and govern) them. But this thread points out that much of "[AIthropology](https://twitter.com/morgs/status/1585511846970368002?s=20&t=vyzqtbfMs2U3c2BAShH_Kg)" is really [study of](https://twitter.com/mark_riedl/status/1585250293641408512?s=20&t=vyzqtbfMs2U3c2BAShH_Kg) *[OpenAI and OpenAI's choices](https://twitter.com/mark_riedl/status/1585250293641408512?s=20&t=vyzqtbfMs2U3c2BAShH_Kg)*, not study of "AI". The author points to [study of more open models](https://twitter.com/mark_riedl/status/1585251231072600065?s=20&t=vyzqtbfMs2U3c2BAShH_Kg) as a cure, but I have to wonder if the nature of training still means there's some black-box-ness. I will endeavor to be more clear here, going forward, between research and tools that are specific to a particular model, and research and tools that are more truly generic.
- **Bias evaluation:** Here's [another addition](https://huggingface.co/blog/evaluating-llm-bias) to the tools for evaluating bias in large language models—essentially an (open data) test suite of bias-inducing prompts. There's going to be a lot of these; will be interesting to see if this one comes out on top since it is coming out of Huggingface.

### Governance and ethics

- **Weinberg on Copilot:** Michael Weinberg, of many good things, has [a worthwhile piece](https://michaelweinberg.org/blog/2022/10/24/github-copilot-problem/) on the (potential) Copilot litigation. From the conclusion, something I increasingly wholeheartedly agree with: "Looking to copyright for solutions has the potential to stretch copyright law in strange directions, cause unexpected side effects, and misaddressing the thing you really care about."

## Open(ish) techniques

### Model improvement(?)

- **Training models for specific styles:** The first wave of copyright-infringement concerns in image-generating AIs were based on "styles" that the model learned somewhat 'organically' from captions in the training set. Now we've got a new technique that raises much more pointed questions, [deliberately teaching Stable Diffusion about ("finetuning") specific styles](https://twitter.com/hahahahohohe/status/1586039788355756033?s=20&t=jM06Kp2uq8gHnrLAu5fyvg). *Meta:* Is this open(ish)? I think yes, because "we don't need your permission to innovate" is, for better and for worse, a long-term correlate of traditional open.

<figure class="kg-card kg-image-card kg-card-hascaption"><img alt="Nine images of Morgan Freeman, laid out in a three by three grid. The images are in a variety of cartoon styles." class="kg-image" height="1080" loading="lazy" sizes="(min-width: 720px) 720px" src="/images/content/images/2022/10/morganfreeman.jpeg" srcset="/images/content/images/size/w600/2022/10/morganfreeman.jpeg 600w, /images/content/images/size/w1000/2022/10/morganfreeman.jpeg 1000w, /images/content/images/2022/10/morganfreeman.jpeg 1080w" width="1080"/><figcaption>Morgan Freeman in a variety of styles.</figcaption></figure>

### Instilling norms

- **Norm of outcome-focus:** It's very interesting to me, as a former QA guy, that the ML community treats *quality of outcomes* as worthy of academic research and publication, and that's taken seriously by practitioners! As best as I can tell, this is a side effect of ML's inherent unpredictability, and it feels like a very healthy norm to me—treat outcomes as importantly as you treat, say, performance or flexibility, and outcomes might actually improve. This thought brought to you by [this paper on using prompts to improve "reliability"](https://arxiv.org/abs/2210.09150)—including definitions of reliability in this context.

## Changes

### "creation engines"

At least this week, this section gets all the demos:

- Speak to a code-focused ML "like a product manager", get... [actual changes to code](https://twitter.com/geoffreylitt/status/1583149190179233795?s=20&t=vyzqtbfMs2U3c2BAShH_Kg)? 👀
- [Generate plot-heavy, coherent stories](https://twitter.com/KevinYa33964384/status/1582149319032852480?s=20&t=vyzqtbfMs2U3c2BAShH_Kg) by training language models to do very human things like "rewriting" and "editing".

<figure class="kg-card kg-image-card"><img alt="A flowchart, showing the following phases: Premise, Plan, Draft, Rewrite, Edit, Story. There is an extra arrow from Edit to Draft, implying that the process can loop through those steps repeatedly." class="kg-image" height="1289" loading="lazy" sizes="(min-width: 720px) 720px" src="/images/content/images/2022/10/FfTso3_UoAAHsZt.png" srcset="/images/content/images/size/w600/2022/10/FfTso3_UoAAHsZt.png 600w, /images/content/images/size/w1000/2022/10/FfTso3_UoAAHsZt.png 1000w, /images/content/images/2022/10/FfTso3_UoAAHsZt.png 1387w" width="1387"/></figure>

## Meta/misc.

Some notes on what AI means for open from conversations and thinking I had this week.

- **"Predictability"**: for users, a value of traditional open is *predictability:*they can read the license and figure out more or less what they can do, more or less quickly. I find this to be somewhat overrated (the scope of the GPL has never been super-predictable, but we got over that quickly when Linux became unavoidable) but it's still something I'll consider adding to my personal definition of [open(ish)](/ish/). We're definitely in a period where this is *not* the case in open ML, but I suspect that's inevitable—and through a combination of ethical concerns and government regulation we may never get back to the simple, predictable world of traditional open. Nevertheless it's a factor for us to keep in mind.
- **"Permissionless innovation":** While thinking about the throwback phrase 'generative', and the variety of weird/exciting/problematic tools around Stable Diffusion, I keep coming back to the idea of "permissionless innovation", which is sometimes attributed to Adm. Grace Hopper ([though perhaps not accurately](https://techliberation.com/2017/05/18/does-permissionless-innovation-even-mean-anything/))?

### Thanks!

Thanks for continuing to join me on this ride :)
