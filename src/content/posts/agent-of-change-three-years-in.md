---
title: Agent of Change, three years in
date: '2025-09-16'
description: About the next phase of the newsletter—what happens to open source when
  the LLM is an agent of change?
tags:
- essay
- community
- tooling
- power
feature_image: /images/content/images/2025/09/2443750706_da6b90b400_c.jpg
feature_image_alt: A marble sculpture of a child under an early printing press, and
  over a cornocupia that (unusually) has not only fruits but also letter blocks.
feature_image_caption: '<span style="white-space: pre-wrap;">The printing press as
  cornucopia, from the Library of Congress building. "</span><a href="https://www.flickr.com/photos/38782010@N00/2443750706"
  rel="noopener noreferrer"><span style="white-space: pre-wrap;">Putto with Screw
  Printing Press, Alphabet, &amp; Cornucopia (Washington, DC)</span></a><span style="white-space:
  pre-wrap;">" by&nbsp;</span><a href="https://www.flickr.com/photos/38782010@N00"
  rel="noopener noreferrer"><span style="white-space: pre-wrap;">takomabibelot</span></a><span
  style="white-space: pre-wrap;">&nbsp;is licensed under&nbsp;</span><a href="https://creativecommons.org/licenses/by/2.0/?ref=openverse"
  rel="noopener noreferrer"><span style="white-space: pre-wrap;">CC BY 2.0</span></a><span
  style="white-space: pre-wrap;">.</span>'
featured: true
ghost_id: 68c9fadf70cf4800017d5bd6
---

It’s been a whirlwind year or so since I last wrote here. For [me personally](https://www.sonarsource.com/company/press-releases/sonar-to-acquire-tidelift/), for the country, and of course for AI. But I didn’t stop writing just because of that. Being honest, the bitter fight around definitions of open for AI put me off. I respect the passion (and anger), but especially with everything else going on, I did not want to engage—which put me off the whole exercise.

Turn the page one year (well, 11 months since my last post) and I am not sure that I have *time*to write more but… boy is there now a lot to say outside the important-but-narrow question of “open or not”.

## What is next for open and ML?

The first wave of this newsletter was focused on what it meant for models themselves to be (or not be) open—with an occasional subtopic on the impact of ML on open. Now, that subtopic is becoming pretty central. If [respected senior devs](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/) are using LLMs to code—what does that mean for open source projects and the people who love and/or consume them?

In other words, what happens to open source when [the LLM is an agent of change](/printing/)?

Pulling on that thread opens up a lot of questions. Probably the best known is of course “LLMs generate a lot of bad pull requests, what does that mean for open”. And that is important! But there’s a lot, lot more. Among other topics I want to explore:

## **Open Experience & Culture**

- **Consumers of open are now LLMs, not humans:** What does it mean for open source maintainers if their primary consumers are LLMs, rather than people (or if we're being honest, dependency trees)?
- **Craft, post-LLM:** Ana Hevesi gets at a key thing here—a lot of us *liked* the idea of (and sometimes even the practice of) coding-as-craft. How does LLM-aided coding change that? And since that thread of craft-as-autonomy was (I suspect) more important to open source than to the rest of the industry, does that impact open more?

<figure class="kg-card kg-embed-card"><blockquote class="mastodon-embed" data-embed-url="https://hachyderm.io/@anthrocypher/115198236194466811/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://hachyderm.io/@anthrocypher/115198236194466811" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;" target="_blank"> <svg height="32" viewbox="0 0 79 75" width="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M63 45.3v-20c0-4.1-1-7.3-3.2-9.7-2.1-2.4-5-3.7-8.5-3.7-4.1 0-7.2 1.6-9.3 4.7l-2 3.3-2-3.3c-2-3.1-5.1-4.7-9.2-4.7-3.5 0-6.4 1.3-8.6 3.7-2.1 2.4-3.1 5.6-3.1 9.7v20h8V25.9c0-4.1 1.7-6.2 5.2-6.2 3.8 0 5.8 2.5 5.8 7.4V37.7H44V27.1c0-4.9 1.9-7.4 5.8-7.4 3.5 0 5.2 2.1 5.2 6.2V45.3h8ZM74.7 16.6c.6 6 .1 15.7.1 17.3 0 .5-.1 4.8-.1 5.3-.7 11.5-8 16-15.6 17.5-.1 0-.2 0-.3 0-4.9 1-10 1.2-14.9 1.4-1.2 0-2.4 0-3.6 0-4.8 0-9.7-.6-14.4-1.7-.1 0-.1 0-.1 0s-.1 0-.1 0 0 .1 0 .1 0 0 0 0c.1 1.6.4 3.1 1 4.5.6 1.7 2.9 5.7 11.4 5.7 5 0 9.9-.6 14.8-1.7 0 0 0 0 0 0 .1 0 .1 0 .1 0 0 .1 0 .1 0 .1.1 0 .1 0 .1.1v5.6s0 .1-.1.1c0 0 0 0 0 .1-1.6 1.1-3.7 1.7-5.6 2.3-.8.3-1.6.5-2.4.7-7.5 1.7-15.4 1.3-22.7-1.2-6.8-2.4-13.8-8.2-15.5-15.2-.9-3.8-1.6-7.6-1.9-11.5-.6-5.8-.6-11.7-.8-17.5C3.9 24.5 4 20 4.9 16 6.7 7.9 14.1 2.2 22.3 1c1.4-.2 4.1-1 16.5-1h.1C51.4 0 56.7.8 58.1 1c8.4 1.2 15.5 7.5 16.6 15.6Z" fill="currentColor"></path></svg> <div style="color: #787588; margin-top: 16px;">Post by @anthrocypher@hachyderm.io</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script async="" data-allowed-prefixes="https://hachyderm.io/" src="https://hachyderm.io/embed.js"></script></figure>

- **Can TDD make contributions more robust?** One big challenge for every open community, predating LLMs, is assessing new contributions. If LLMs make it easy to build lots of test frameworks, does that make it easier to build communities? Or is that outweighed by all the other negatives? Will it even happen?

## **Open Code Infrastructure**

- [**TIMTOWTDI v. batteries included**](https://wiki.c2.com/?ThereIsMoreThanOneWayToDoIt=)**:** what do LLMs mean for language design? I've heard this argued both ways: that LLMs really like having a big standard library, because then there are lots of examples of how to use it; and that LLMs don't care because they'll piece together next-token predictions anyway.
- **New languages:** what does it mean for the progress of new languages if LLMs can't be trained without sample code? eg, are we killing the next Rust?
- **MCP as the new RSS:** RSS was very good for open source CMSs for a while; [if MCP is the new RSS](https://blog.jonudell.net/2025/05/28/mcp-is-rss-for-ai/) then is that also good for open source?

## **Security, Complexity, and Compliance**

- **What does this mean for the complexity of our stacks?**There's some suggestion that LLMs tend to pull in dependencies like there is no tomorrow, but there's also suggestions that they will make stacks smaller by writing small bits of code that would previously have been libraries.
- **Modernizing and securing:** if a C→Go or C→Rust LLM-centric toolchain gets really good, is that good for C-based legacy communities? Bad? Something else?
- **Security regulations and LLMs:**Very related to the previous two points, how does this interact with the [Cyber Resilience Act](https://opensourcesecurity.io/2025/2025-03-CRA_luis_villa/) and other forthcoming security regulations? Can a stack with a lot of vibe coding said to be truly secure? On the flip side, if there exist ways to use an LLM to reduce dependency counts or port to a more secure language, can any codebase *without*LLM evaluation truly be said to be conform to industry best practices?

## **Accessibility & Democratization**

- **Open data enabler?** We've been talking about open data for a long time, but since using data is hard to consume and manipulate, open data has never been as big as open code. But if open data + vibecoding = powerful, does that make open data way more relevant?
- **Liberator for non-coders?** Many vibe coding techniques don't seem particularly great at legacy codebases, so existing open codebases + vibecoding does not necessarily create human flourishing. But… could we get there? For example, I used to say that "Word is more freeing than LibreOffice because I can't fix LibreOffice crashes". But if Claude *can* fix LibreOffice crashes… that's potentially huge.
- **Complexity enabler?** The long battle between Emacs-UX-maximalism and Apple-UX-minimalism has been a clear triumph for minimalism in most domains, but if LLM + MCP + an accessibility stack makes UX complexity tractable for normal humans, does that advantage open desktops or even the shell? (Enabler here could be in either the positive and negative senses: one could easily see "use the f'ing AI" becoming the new "[read the f'ing manual](https://en.wikipedia.org/wiki/RTFM)" as an excuse for bad design.)

## **Community & Governance**

- **Licensing:** are we going to see licenses that are more actively AI hostile and that somehow work (a "dark forest internet" of open)? Or more pro-community in some way?
- **Awareness:** I admit it: I’m personally dejected that it felt like we'd made a lot of headway in getting CTOs and CISOs to admit that 60-80% of "their" code was actually open source and now… that attention has gotten laser focused on the CEOs claiming that 90% of their code would be written by LLMs. If open falls off the corporate radar again—is that good, bad, mixed?

## **Power and centralization**

- Of course the original purpose of the newsletter, **what “open” might mean in the context of models, is**[**as hot and relevant as ever**](https://www.interconnects.ai/p/latest-open-artifacts-13-the-abundance).

We’re in a new world. Our new equivalents of kernel and compiler aren’t (yet?) free—but they weren’t when free software started either. So open isn’t over, but it will absolutely change.

## What is next for this newsletter?

I can’t make any guarantees about this newsletter’s new frequency, but we’re not seeing enough good discussion about what ML means for open. Which means I have an itch to scratch. We’ll see how that fits with “also having a day job and a kid”.

In the meantime, pass it around to your friends, comment here, and discuss on [Bluesky](https://bsky.app/profile/lu.is) and [Mastodon](http://social.coop/@luis_in_brief/)—discussion and subscriptions are absolutely the best way to get me to write more!
