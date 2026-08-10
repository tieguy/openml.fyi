---
title: Green boxes
date: '2025-11-10'
description: Thinking about actually writing code instead of writing newsletters,
  as well as a lot of other open+ml news.
tags:
- tooling
- community
feature_image: /images/content/images/2025/11/31860000906_4efed54fed_c.jpg
feature_image_alt: A large row of double-decker containers, mostly but not entirely
  green, on railcars curving into the distance.
ghost_id: 691186a87d74350001ba6bb6
---

I’ve been slow about this newsletter the past month because, frankly, I’ve been having a lot of good, productive fun with AI and that’s been consuming much of my spare time. I think it’s instructive to share how this is hitting for someone who basically hasn’t usefully coded in 20 years. I’ve tackled three big projects so far, none of which I would have attempted without LLM-aided coding, all of which have very different goals and constraints.

<figure class="kg-card kg-image-card kg-card-hascaption"><img alt="A grid of mostly white squares, showing coding contributions over time from last November to the current date. Virtually all the green and dark green squares in the grid (showing the highest activity) are in the past three weeks." class="kg-image" height="470" loading="lazy" sizes="(min-width: 720px) 720px" src="/images/content/images/2025/11/image.png" srcset="/images/content/images/size/w600/2025/11/image.png 600w, /images/content/images/size/w1000/2025/11/image.png 1000w, /images/content/images/2025/11/image.png 1563w" width="1563"/><figcaption><span style="white-space: pre-wrap;">My green squares. You can… see where I started playing with Claude Code in earnest.</span></figcaption></figure>

A quick list of the projects; for more details on them as projects, see [my blog](https://lu.is/2025/11/three-llm-assisted-projects/).

- **News, Fixed**: scraping and rewriting [Fix The News](https://fixthenews.com/) (where I’m a paid subscriber) to create a *positive*daily newspaper for my 9yo. Currently purely personal, though I could see a future where it gets productized enough to donate to Fix The News.
- **“Marvin-to-model”**: scripts and canned prompts to extract information from my task manager ([Amazing Marvin](https://amazingmarvin.com/)), and then use a model to conduct GTD-style daily and weekly reviews. Almost certainly permanently purely personal, though I could see the GTD prompts becoming collaborative—and I could eventually see replacing Marvin on the backend as well.
- **Prompts for concluding a license:** a set of scripts and (planned, but not yet really implemented) prompts to analyze an open source repo to assess its license. This has significant [human in the loop problems](https://productpicnic.beehiiv.com/p/human-in-the-loop-is-a-thought-terminating-cliche) so I’m not sure it will ever see the light of day. But I think it’s a more promising route than training models on this problem.

## Some observations:

Things I’ve noticed as a result of Actually Doing The Thing:

- The dopamine hit from LLM-assisted coding is very similar to the “intermittent variable rewards” dynamic of social media—but without most of the rage. It is very plausible that lots of senior devs are reporting they are more productive in part because they’re having more fun.
- Each of my new tools relies heavily on FOSS libraries, but I suspect many fewer than would have been the case in pre-LLM code. Hard to say if this makes existing “core” libraries even more important and valuable or… what.
- Related: this easy velocity makes it very tempting to fork and rewrite things (as I’ve been tempted to do to one existing Marvin sync tool). It will be interesting to see which projects nail the sweet spot of iterating so quickly that it is better to merge with upstream than fork. Is there going to be a Linus of the new wave, with a knack for orchestrating teams and tools in a way that allows things to move very quickly even at large scale?
- I have not pushed past building command line tools. I understand the LLMs are good for basic web apps, but I am not confident in either myself or the LLM as a sysadmin. So this is not yet the promised land where everyone can control their own computers. But it’s a big move nevertheless.
- How are we going to collaborate on “skills”? Open source has always shined brightest in spaces where there are relatively objective specifications (like Unix or http) to constrain and guide behavior. “skills” (plain English descriptions of how to do things, for LLMs) have neither spec nor compiler, so are outside of this sweet spot. But in both my GTD and license-analysis projects, there are plain-English prompts that would benefit from the iterative, collaborative improvement that open *can*do so well. Will we figure out how to do that? I hope so—it could potentially unlock really powerful forms of knowledge sharing.

## Open experience & culture

*How LLMs are changing the culture and lived experience of open source communities*

- [The concept of "groupcore"](https://blog.metalabel.com/what-the-world-needs-now-is-groupcore/?ref=the-metalabel-blog-newsletter): I don’t necessarily endorse everything in here, but I think there’s something to this notion of “groupcore”—how collective identity and coordination can still feel relevant to humans in our current space.
- “[The Library’s New Front Door](https://newsletter.dancohen.org/archive/the-librarys-new-entryway/?utm_source=Robin_Sloan_sent_me)”: an experienced librarian talks about how LLMs *can*be a much better starting point for library patrons—if librarians can meet those patrons halfway. This is far from guaranteed, of course; see for example [what LLMs are doing to Wikipedia’s traffic](https://www.404media.co/wikipedia-says-ai-is-causing-a-dangerous-decline-in-human-visitors/) (bad) but also this list of very [cool things the British Museum is doing with LLMs](https://www.openobjects.org.uk/2025/10/ai-and-machine-learning-in-libraries-promising-but-not-ready-yet/). The question begged by Wikipedia’s situation is if/how open can similarly think creatively.
- “[The Majority AI View](https://www.anildash.com/2025/10/17/the-majority-ai-view/)”: Anil Dash is at his critical best here, capturing an important vein within tech of people who are excited about LLMs and terrified of the changes in power and ethics it could portend. I agree with him that this is the “majority view” in the rank and file of the tech industry right now, not just in open.
- [Nato Lambert on burnout in AI](https://www.interconnects.ai/p/burning-out?r=bi0r&utm_campaign=post&utm_medium=web), which he links to open’s challenges in this space (since it is indisputable that the for-profit models, seeing a chance to have unimaginable wealth and power, are burning people up in ways open can’t/won’t/shouldn’t). See also his thoughts on [AI 2027](https://substack.com/app-link/post?publication_id=48206) and why he thinks it is overly aggressive.

## Infrastructure for open development

*How LLMs are changing the technical infrastructure and tooling of open development*

- [Veteran Apache developer uses Claude to upgrade Eleventy after 5 years](http://intertwingly.net/blog/2025/10/05/Upgrading-Eleventy-After-5-Years.html): Upgrading old dependencies is the sort of boring work that lots of open source projects struggle with. Here Sam Ruby gives a practical case study of using AI to handle technical debt and framework migrations. This is going to be a real win for maintenance, I think.
- [Claude as storytelling tool for code comprehension](https://bsky.app/profile/funbucket.dev/post/3m2wacnmrfs2b): An interesting skeet (and discussion) about using Claude Code to literally tell a *story*about what has happened in a codebase. This is one of these things that is impactful when done well, but where humans really struggle—because it requires a lot of manual digging. So LLM-assistance is imperfect but can still be very useful.
- [Fedora Council discussing AI governance](https://pagure.io/Fedora-Council/tickets/issue/542): This is a long, thoughtful example of writing an AI policy in the open. Won’t bore with the tidbits, but suffice to say that transparency and accountability are major themes, as you’d expect. And suggests that at least large projects do have the resources to tackle this problem reasonably frontally, using our best practices and existing governance infrastructure.

## Security, complexity, and compliance

*Security challenges, regulatory compliance, and managing complexity in LLM-enhanced development*

- [Richard Fontana on AI-assisted development and open source legal issues](https://www.redhat.com/en/blog/ai-assisted-development-and-open-source-navigating-legal-issues): Sadly this is not on the much-missed opensource.com, but here’s Richard with RH’s take on the legal landscape of AI-assisted development in open source contexts.

## Access and barriers

*How AI is changing who can participate in open source and what barriers remain*

- [Core testing infrastructure for AI research relies on hardware subsidies](https://bsky.app/profile/ameyagodbole.bsky.social/post/3m3xiiump422a): A neat thread on some open AI research that casually mentions several skeets deep that it relied on a huge compute subsidy from NVidia. This is going to continue to be a problem.
- [LangChain hits $1.25B valuation](https://techcrunch.com/2025/10/21/open-source-agentic-startup-langchain-hits-1-25b-valuation/): On the one hand, I mentioned langchain really early in its development, so having seen this sort of coming feels nice, and of course this suggests that VC will continue to turn money into open code. On the other hand, I am old enough to remember [VA Linux](https://www.cnet.com/culture/10-years-gone-the-va-linux-systems-ipo/).

## Other good news

I really recommend Jenny Chase’s [annual “things I think about solar” thread](https://skywriter.blue/pages/did:plc:iqovm6hqjgnc2kwzocjyjwpe/post/3m3mcz7plms2v) as one of the best ways to learn about how the (non-US?) world is increasingly powering everything. It is not purely good news (many barriers to adoption, still) but surely one of the best things the world has going for it right now.
