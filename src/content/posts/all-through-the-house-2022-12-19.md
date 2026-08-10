---
title: all through the house
date: '2022-12-19'
description: I've been under the weather and busy at work, so things have been sporadic.
  I look forward to doing this more steadily in the new year. The rest of the world
  has not slowed down... Holiday ML poetry Every child there’s been From Aaron to
  Zeta We can build an AI Because we have the data Read the whole delightful thing,
  from Casey Fiesler. Top-down 'innovation' This preliminary report on data licensing
  for AI from the Global Partnership on Artificial Intelligence is, at some level,
  a pretty
tags:
- tooling
- labor
- defining-open
feature_image: /images/content/images/2022/12/D54C1104-2BA2-4033-9069-29A86B54B4A9.png
feature_image_alt: Two impressionistic Santas dancing under palm trees, generated
  by machine learning
ghost_id: 63a08fb5edb6d1003d158334
---

I've been under the weather and busy at work, so things have been sporadic. I look forward to doing this more steadily in the new year. The rest of the world has not slowed down...

## Holiday ML poetry

> Every child there’s been  
> From Aaron to Zeta  
> We can build an AI  
> Because we have the data

Read [the whole delightful thing](https://cfiesler.medium.com/twas-the-ai-bias-before-christmas-3255cd3acf77), from Casey Fiesler.

## Top-down 'innovation'

This [preliminary report on data licensing for AI](https://gpai.ai/projects/innovation-and-commercialization/intellectual-property-expert-preliminary-report-on-data-and-AI-model-licensing.pdf) from the Global Partnership on Artificial Intelligence is, at some level, a pretty good summary of the state of play in the relationship between IP and AI. (It conducted interviews with a couple of subscribers to this newsletter as part of their prep.)

In particular, Section 2.2 (p. 13-22) is a pretty good summary of all of the various challenges to data sharing in this context—if you're teaching a CLE in this area, you could do worse than assigning that summary as reading. Section 2.4, on the various types of IP rights that one can consider when writing a license, is also a useful checklist.

But the rest is... really rough. In particular, it irritates me that it has a very ad-hoc list of existing licenses, but with no attempt to evaluate their quality or usage. Compare [this 2021 paper on dataset governance](https://arxiv.org/abs/2108.02922), analyzing 1,000 published papers that relied on three retracted datasets. By basing their work on what's actually out there, and not just high-level legal theorizing, that paper shows very convincingly how licensing is really a very small part of dataset governance.

If we've learned anything from the past 25 years of open, it's that commodity documents adoptable by non-lawyers, *even if badly written*, are going to take a very large lead "in the market". Great research on governance of data sets will acknowledge and document that reality, and have a plan to do better. Lawyers operating in a vacuum will not succeed.

## Human Feedback: limitation to open(ish)?

A recurring theme here is how technical changes impact the economics of ML, and therefore how amenable (or not) it will be to competition from open(ish) directions.

One thing that we're seeing a lot of lately is so-called "reinforcement learning from human feedback", or RLHF. This is basically the notion that, if you want to train a large language model to have higher-quality outputs, one way to do that is to share the model's outputs with humans, gather what they think about those outputs, and use it to re-train the model. (This is straightforward to explain but is very complex to implement. It's also similar to what Google has done for ages with search results, part of Google Search's deep moat.) Anthropic and DeepMind have published on this technique, and GPTChat from OpenAI was trained with it. If you want a reasonably accessible technical explainer, [I recommend this one from Hugging Face](https://huggingface.co/blog/rlhf).

I mention RLHF here because if this becomes state of the art, the cost of training goes up, potentially by a lot—a setback for open(ish) ML, or at least some of the most expansive potential futures for it. This [genuinely entertaining, non-technical read](https://astralcodexten.substack.com/p/can-this-ai-save-teenage-spy-alex) on RLHF describes a company that human-rated 6,000 examples of violence—which only *halved* the difficulty in eliciting violence from their ML model. That sort of large-scale human input, in standardized ways, is tricky for open projects to elicit—it requires a lot of time, safety precautions, and possibly paid human participation. So how central that becomes to "best practice" AI will be something for open(ish) folks to keep an eye on as the space evolves.

## New open test frameworks

RLHF can potentially cause language models to just tell us what we want to hear—[this paper from Anthropic is great](https://www.anthropic.com/model-written-evals.pdf) on how "sycophantic" RHLF can make a model.

<figure class="kg-card kg-image-card kg-card-hascaption"><img alt="Two dialogues between a human and an RHLF model, one prompting for and receiving conservative responses, the other prompting for and receiving liberal responses." class="kg-image" height="730" loading="lazy" sizes="(min-width: 720px) 720px" src="/images/content/images/2022/12/image.png" srcset="/images/content/images/size/w600/2022/12/image.png 600w, /images/content/images/size/w1000/2022/12/image.png 1000w, /images/content/images/2022/12/image.png 1043w" width="1043"/><figcaption>Examples of how RLHF produces a very sycophantic response. </figcaption></figure>

I mention it here largely because [the test framework used in the paper is simultaneously released under CC BY 4.0](https://github.com/anthropics/evals). I'm excited about this practice—I hope that shared test suites will get reused, and as a result help us better understand and constrain the tested topics—which here includes gender bias, sycophanty, and "AI risk" topics like "will the model try to talk you out of rebooting it"(!).

## Misc.

- **Questions to ask yourself before writing on AI:** Five-point guide on "[how to report on AI](https://blogs.lse.ac.uk/polis/2021/05/05/how-to-report-effectively-on-artificial-intelligence/)" - some of this is pretty basic stuff, but nevertheless a good (and short) guide. So many reporters (and lets be honest, probably a lot of us writing about this for our managers, execs, etc.) are making a lot of basic mistakes; do yourself a favor and skim this before your next memo or blog post on this topic.
- **Negative impacts of large language models:** [Good editorial from Wired](https://www.wired.com/story/large-language-models-critique/) on the realities of negative impacts of large language models, and how tiring it is for activists to have to seemingly re-educate everyone every time one is published that lets you do insanely bad things. Compare Meta's reaction, quoted in that article, with [Deepmind (Google) on research into "safe" language models](https://www.deepmind.com/blog/building-safer-dialogue-agents).
- **Paradox of Reuse:** What happens if we all stop creating content and just use ML to create content instead, especially since that's what the MLs train on? [Good question; no great answers yet](https://nmvg.mataroa.blog/blog/the-paradox-of-reuse-language-models-edition/).
- **AI Risk:** I am heartened to see a lot more nuanced, rational discussion these days of the risk of sci-fi-style AI-created human extinction. Here's [a good thread (with a lot of outbound links) on the topic](https://threadreaderapp.com/thread/1591494093766787076.html), from an insider.

Happy holidays! See you in 2023.
