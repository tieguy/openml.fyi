---
title: Back in the Saddle
date: '2025-09-24'
description: Vocabulary, ethics, and disclosures, and some news and links from The
  Week That Was in AI + Open.
tags:
- ethics
- community
- power
- defining-open
feature_image: /images/content/images/2025/09/52336503784_0e63714551_c.jpg
feature_image_alt: A variety of horse-themes sculptures, set in the middle of a desert.
feature_image_caption: '<span style="white-space: pre-wrap;">"</span><a href="https://www.flickr.com/photos/55893585@N08/52336504209"
  rel="noopener noreferrer"><span style="white-space: pre-wrap;">Wild Horse Art</span></a><span
  style="white-space: pre-wrap;">" by&nbsp;</span><a href="https://www.flickr.com/photos/55893585@N08"
  rel="noopener noreferrer"><span style="white-space: pre-wrap;">BLM Nevada</span></a><span
  style="white-space: pre-wrap;">&nbsp;is licensed under&nbsp;</span><a href="https://creativecommons.org/licenses/by/2.0/?ref=openverse"
  rel="noopener noreferrer"><span style="white-space: pre-wrap;">CC BY 2.0</span></a><span
  style="white-space: pre-wrap;">.</span>'
ghost_id: 68d2c3087de5b00001735630
---

## Vocabulary

It’s probably a lost cause, but as I restart the newsletter I’m going to try to stick to consistent vocabulary in this blog. A few things that are jumping out already since I last tried to communicate rigorously about this:

- I still dislike the general usage of “AI” for everything under the sun. Since LLMs are the core technology that is impacting coding the most I will try to stick to that, though I may slip back to AI from time to time when I’m tired or when I just need some variation.
- I have found the definition of "agent" to be excruciatingly vague, but [in this post Simon Willison provides a useful definition of AI "agents"](https://simonwillison.net/2025/Sep/18/agents/): *“An LLM agent runs tools in a loop to achieve a goal.”* I might clarify by saying “to achieve *the controller’s* goal” but this is still very helpful for me.
- “[jagged frontier](https://www.oneusefulthing.org/p/on-working-with-wizards)” is a new bit of jargon that I dropped into the last newsletter (and indeed the newsletter’s tagline in some places). In short, it is a helpful reminder that LLMs are advancing very rapidly but very unevenly—so you have to be careful about extrapolating from your own experience.

## Actual news

### Open experience & culture

*How LLMs are changing the culture and lived experience of open source communities*

- How even do we begin to measure the impacts of LLMs? Gergely Orosz points [this morning](https://bsky.app/profile/gergely.pragmaticengineer.com/post/3lzilrn3j2c25) to a very basic question: “is kicking off agents in parallel actually worth it?” Certainly there’s a suggestion from what companies are saying in public statements that… [we’re not seeing much impact](https://bsky.app/profile/miriamposner.com/post/3lzj4rnuxik2l). And yet devs are *feeling*impact. (I really want to get into [Dr. Cat Hicks’ work](https://www.drcathicks.com/research) on the psychology of this soon; my [coworker Edgar Kussberg is also writing and thinking about it.](https://www.infoworld.com/article/4061078/the-productivity-paradox-of-ai-assisted-coding.html)) I still think this is less blockchain, more web1.0 / iPhone—but we have to be honest that the data to back that up isn’t there yet.
- [Open is a labor movement](https://social.coop/@chrisjrn/115237592849168947) (whether we want to admit that or not) so it is very interesting to see what other labor groups are saying [about LLMs](https://laborcenter.berkeley.edu/a-first-look-at-labors-ai-values/). If you have pointers to open communities that have made similar statements (especially in 2025, rather than earlier) I would be very interested—please share!

### Infrastructure for open development

*How LLMs are changing the technical infrastructure and tooling of open development*

- [C](https://zed.dev/blog/sequoia-backs-zed#introducing-deltadb-operation-level-version-control)[RDT-based revision control:](https://zed.dev/blog/sequoia-backs-zed#introducing-deltadb-operation-level-version-control) what if version control was redesigned with deeply collaborative (i.e., many coders *at the same time*) coding was the priority? And yes, by coders here obviously they mean “LLM agents”. But it is very interesting to hear about tooling that acknowledges that code is way more than just code these days. (Not a great sign, though, that this innovation is coming from VC and not from [a week-long hackathon](https://github.blog/open-source/git/git-turns-20-a-qa-with-linus-torvalds/).)

### Access and barriers

*How AI is changing who can participate in open source and what barriers remain*

- [Toward AGI: What is Missing?](https://mark-riedl.medium.com/toward-agi-what-is-missing-c2f0d878471a): Mark Riedl suggests that to advance the state of the art in AI is going to require some extremely capital-intensive investments. In particular, getting AI techniques to understand “the world” will require a loooot of investment in simulating that same real world (sometimes called “[world models](https://www.quantamagazine.org/world-models-an-old-idea-in-ai-mount-a-comeback-20250902/)”). This could be a two-edged sword: this sort of infrastructure often becomes open (because it’s a complement to the actual source of revenue) but it also costs a pile of capex (which leads towards corporate-captured open).

<figure class="kg-card kg-embed-card"><blockquote class="bluesky-embed" data-bluesky-cid="bafyreif5c5vyc3yizd7lrjcaosjkz4ixn6kthhyg2na37s26rge5wwd3h4" data-bluesky-uri="at://did:plc:3igkkqe5nkm66olc4y2syzpy/app.bsky.feed.post/3lzf2jq4bck2t"><p lang="en">Making simulation environments is equivalent to creating dataset generators.</p>— <a href="https://bsky.app/profile/did:plc:3igkkqe5nkm66olc4y2syzpy?ref_src=embed">Mark Riedl (@markriedl.bsky.social)</a> <a href="https://bsky.app/profile/did:plc:3igkkqe5nkm66olc4y2syzpy/post/3lzf2jq4bck2t?ref_src=embed">2025-09-21T23:32:56.394Z</a></blockquote><script async="" charset="utf-8" src="https://embed.bsky.app/static/embed.js"></script></figure>

- Some stories about people writing useful and/or fun tools with a combination of LLMs and existing open infrastructure: My old partner-in-crime Christian Schaller [writing a 3d-printing tool he might not otherwise have tried to build](https://blogs.gnome.org/uraeus/2025/09/09/more-adventures-in-the-land-of-ai-and-open-source/); [Danny O'Brien's writes "day in the life of an llm user"](https://www.oblomovka.com/wp/2025/08/29/llms-for-the-old-and-infirm/), detailing a whole day’s command-line usage of llms; and Simon Willison’s [list of *124* tools he’s built with AI](https://simonwillison.net/2025/Sep/4/highlighted-tools/).
- My point in the last newsletter about LLMs making open data more accessible really resonated with John Fleck:

<figure class="kg-card kg-embed-card"><blockquote class="mastodon-embed" data-embed-url="https://fediscience.org/@jfleck/115219727016588075/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://fediscience.org/@jfleck/115219727016588075" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;" target="_blank"> <svg height="32" viewbox="0 0 79 75" width="32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"></path></svg> <div style="color: #787588; margin-top: 16px;">Post by @jfleck@fediscience.org</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script async="" data-allowed-prefixes="https://fediscience.org/" src="https://fediscience.org/embed.js"></script></figure>

### Power and Centralization

*Who controls AI development, and how power dynamics are shifting in the open source ecosystem*

In comparison to the almost blissfully "borderless" ethos of traditional open, open LLMs are almost inextricably bound up in the current moment's nationalism. Two must-reads on that, both from Nathan Lambert of the Allen Institute:

- [China's open source AI trajectory](https://www.interconnects.ai/p/on-chinas-open-source-ai-trajectory): Nathan’s most recent analysis on China concludes that, exactly because so much of the Chinese AI effort is hyper-competitive and perfectly happy to see corporate efforts start and fail, they will keep a lot of it open (or at least open weights).
- [The American DeepSeek Project](https://www.interconnects.ai/p/the-american-deepseek-project): Nathan’s (pre-)response to this is an “American DeepSeek”, trying to keep key AI knowledge and skills reproducible and in the open—and in the US.

One does have to wonder what Europe could do on this front if it weren’t sending [a quarter-trillion a year to US tech companies.](https://social.wildeboer.net/@jwildeboer/115242012592992060)

### Misc, inside the bubble

- ["Not a Robot" game](https://neal.fun/not-a-robot/): Make sure to play through at least level four! And then you’ll be hooked.
- [AlignmentAlignment](https://alignmentalignment.ai/): the question of “alignment” is a silly one (as I pointed out in the old newsletter, OpenAI can’t even align its own board much less its AI) and this new organization takes it exactly as seriously as it should.

### Outside the bubble

*Each week I'll try to pull something from one or two of my favorite non-AI news sources.*

- [When Africa’s internet breaks, this ship answers the call](https://restofworld.org/2025/africa-internet-cable-repair-ship/): Our digital miracles rest on very real-world stuff, and here Rest of World reports on the (sole!) ship repairing Africa's undersea internet cables. If you read [Wired’s Mother Earth Mother Board](https://www.wired.com/1996/12/ffglass/) back in the day, this is a must-read followup.

## Closing note I: on my use of, and the overall utility of, LLMs

I plan to write this newsletter essentially unaided, since writing is very much a part of my thinking process and my goal here is in large part about clarifying my thinking (with educating an audience as a very excellent side effect!) (Also my voice is… weird and LLMs definitely don’t capture it.)

That said, I am using LLMs to help *prepare* the newsletter, and I want to document that a bit—both for transparency and because I think it helps make clear how useful modern LLMs are.

- Claude has helped me create an iOS Shortcut that lets me quickly share links into a Google Sheet, and almost entirely wrote a Google Script that pulls those links into a Google Doc. These save me a bunch of copying and pasting, which 💯 increases the odds of this newsletter coming out on a regular basis.
- [lex.page](http://lex.page/), which I'm experimenting with as a writing tool, pulled in the links and wrote a one-sentence summary. Those summaries serve as a refresher, since sometimes I don't recall *why* I saved a link. But then I pretty much rewrite all of that.

Tying together my personal experience and the big-picture questions in the newsletter: Claude, at least, seems very eager to suggest custom solutions for me over anything off the shelf or purely-open—eg encouraging me to build a Google Script instead of using or installing an existing link-archiving tool. I don’t think that’s a bad thing, per se, but I wonder what it indicates for the age-old “buy v build” dynamic. Will this meaningfully change the percentage of code in the average stack written by “[a person in Nebraska](https://xkcd.com/2347/)”? And is that good or bad?

## Closing note II: on ethics of LLMs

I do not plan for the refreshed newsletter to touch much on the ethics of LLMs in and of themselves. The topic is complex, and fraught, and frankly even starting to type this paragraph fills me with dread at the idea of people yelling at me about it.

This isn't to say I'm not aware, or don't care. Politics, power, and the climate, among other things, are never far from my mind. (Most of my volunteering these days is about climate, with all three of my non-profit board hats having important climate angles.) But they won't be the focus of the newsletter—they'll come up when it naturally fits into the context of what it means for open.
