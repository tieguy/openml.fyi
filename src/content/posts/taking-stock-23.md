---
title: Taking stock of open(ish) machine learning
date: '2023-06-15'
description: I’ve been writing this newsletter for about six months, so I thought
  it might be a good time to pause the news firehose, and instead review and synthesize
  what I’ve learned about the potential for open(ish?) machine learning. That took
  a while — so thanks for your patience, and welcome back!
tags:
- essay
- defining-open
- economics
- tooling
feature_image: /images/content/images/2023/06/LuisVilla4_1800s_shopkeeper_seen_from_behind_looking_at_shelves_34a64dc0-336a-4a73-be97-7bdc3783253b-1.png
feature_image_alt: 1800s shopkeeper, seen from behind, looking at their store with
  shelves full of goods
featured: true
ghost_id: 648b2075855aec000165dd72
---

I’ve been writing this newsletter for about six months, so I thought it might be a good time to pause the news firehose, and instead review and synthesize what I’ve learned about the potential for open(ish?) machine learning. That took a while — so thanks for your patience, and welcome back!

Please, please - if you have any feedback, feel free to email me or use the comment section on the openml.fyi website.

## TL;DR

(And it is long, sorry!)

- tech and economics are trending surprisingly positive for open, with several promising research directions, albeit from a *very* poor starting point
- training data and human communities are mixed, but with several important opportunities that public-benefit-oriented organizations could invest in to help maximize collaboration in the future
- the state of regulation is extremely negative for open, with poor levels of community organizing, and no obvious way to maximize distributed, empowering innovation while simultaneously respecting the ethical demands of a powerful new tech

## Why is this timely?

Beyond the steady drumbeat I’ve been writing about in the [newsletter](/), “open” ML hit the news in two significant ways since the last newsletter.

The first was from [Mark Zuckerberg, in Facebook’s quarterly earnings call](https://s21.q4cdn.com/399680738/files/doc_financials/2023/q1/META-Q1-2023-Earnings-Call-Transcript.pdf). His take will be familiar to anyone who has followed open for the last few decades—open creates competitive advantages for big companies that can do open and then profit from the complements:

> I think there's an important opportunity to help create an open ecosystem [in LLMs]. If we can help be a part of this, then much of the industry will standardize on using these open tools and help improve them further. … Our approach to AI and our infrastructure has always been fairly open. We open source many of our state of the art models so people can experiment and build with them.

He went on to add specifics about particular model releases—not what one normally expects in an earnings call. (One of the models he mentioned, [LLaMA, is being cloned](https://github.com/openlm-research/open_llama), [repeatedly](https://www.together.xyz/blog/redpajama-7b), as we speak.)

In the second headline-grabber of that week, a [memo by a single Google engineer](https://simonwillison.net/2023/May/4/no-moat/) argued cogently (though narrowly) that “Google has no moat”. Again, the reasons will sound familiar to anyone who has been around open for a while—open’s argued superiority in technical capacity and distributed innovation:

> While our models still hold a slight edge in terms of quality, the gap is closing astonishingly quickly. Open-source models are faster, more customizable, more private, and pound-for-pound more capable. They are doing things with $100 and 13B params that we struggle with at $10M and 540B. And they are doing so in weeks, not months.

The question then is: are Zuckerberg and this Google engineer right? Will open machine learning have the same impact on the world that open software did? We don’t know yet, but we can start to see the outlines of the argument now—and where interested parties might act to shape the best outcomes for open.

### What do I mean by “open” in this context?

There is no formal definition of “open” in the machine learning space yet, so I will use the phrase “open ML” to refer to **machine learning development processes that allow for collaborative participation and iterative improvement.**

Key features of an open ML, in the sense that I will use it in this note, might include:

- training techniques that are least technologically accessible, and ideally economically plausible, to participants who are not backed by major corporations (including small business, academic, and "amateur" in the best sense of that word)
- training data that is at least transparent (eg, documented+investigable), and ideally replicable and redistributable. It should also be interchangeable with training data that must be private for legal reasons, though the exact shape of that interaction in complicated but important cases (like medical PII) remains somewhat opaque to me.
- governance of shared technical artifacts (like models and training data) that allows for modification, re-use, and re-implementation by hobbyists, analysts, and competitors, within the bounds set by relevant national laws. This will absolutely not be limited to IP licensing; governance will and should include various social and legal arrangements, like non-profits that host data.

I tentatively believe a flourishing open ML, as defined here, would have a positive  impact on the quality of ML models and on society's ability to integrate ML in a healthy way. However, it is important to stress that this belief is a tentative one—the interaction of such an approach with issues of bias, privacy, speech regulation, and other important societal concerns are still unclear and must be approached carefully.

## Strengths, Weaknesses, Threats, and Uncertainties

This note will use the SWOT (Strengths, Weaknesses, Opportunities, Threats) framework, and supplement it by identifying areas of major uncertainty. To help keep this manageable, I’ve organized the strengths, weaknesses, threats, and uncertainties into topical areas (like technology, economics, policy, etc.). The opportunities often cross over the topical areas, so I have combined those at the end.

### Development tools

Successful open collaborative communities require broadly accessible development tools to create and revise the deployed technology with high velocity.

#### strengths

- Essentially all **core ML development tools are open source**, with the (important) exception of NVidia’s hardware/software stack. So anyone building open(ish) ML has software tools that are mostly state-of-the-art relative to closed/proprietary competitors.
- **ML continues to be a high-publication area**, so the knowledge necessary to keep open development tools competitive is broadly accessible.
- The traditional weakness of open development in ML was training cost, which was high even if the tools themselves were free. However, **the cost of training is dropping** (from tens of millions of dollars to [hundreds of thousands even for large models](https://www.mosaicml.com/blog/mpt-7b)), and new techniques like [Low-Rank Adaptation (LoRA)](https://github.com/microsoft/LoRA) and [QLoRA](https://arxiv.org/abs/2305.14314) are making some types of training possible on desktop machines. Continued interest in lower-resource training from academics, hobbyists, and non-FAANG companies will likely accelerate creation of tools and techniques that enable distributed model development.

#### weaknesses

- **Open ML implementers have poor access to cutting-edge hardware**. It’s not just the cost of training, though that is substantial; it’s also the centralization of training on NVidia. The major competitors in the hardware space are either way behind, or focused on the edge (like Apple’s GPU work), so we can expect that training even moderately-sized models will remain dominated by NVidia’s proprietary stack for some time.
- **Iterative collaboration tools are at best immature, at worst non-existent.** The core of traditional open collaboration is the patch→communicate→compile→test cycle, and that does not really exist in ML. LoRA arguably enables this for some model architectures, but we don’t know if it (or other techniques) can enable the same sort of fast, iterative improvement that makes open most powerful.

#### threats

- **There will likely be significant patent wars around ML.** Exactly how those play out will remain to be seen but they likely won’t be favorable to open unless/until [Open Invention Network](http://openinventionnetwork.org/) joins the fray.
- **Research may take a turn for the closed,** following OpenAI’s refusal to release even the vaguest information about their latest models. Facebook says their research will stay open, but others will undoubtedly face economic or social pressure to follow OpenAI’s lead. Philanthropic research funders will particularly want to keep an eye on this trend.

#### uncertainties

- **ML technologies and techniques are iterating very quickly,** so we simply don’t know what is coming next. Will the next wave of approaches make things easier for distributed/decentralized open(ish) development? or harder?

### Economics

Successful open collaboration requires many participants, which means that the cost of participation must be low. Just a few years ago, this looked like a complete showstopper for open, and that may still be true—but the trend is more positive than I would have expected.

#### strengths

- **Economic complementarity between open/no-cost and proprietary/profitable layers of a technical stack may drive investment** in ML. In complementarity, a producer gives away part of their stack free (to drive improvement, or marketing, or for more idiosyncratic reasons) and then charges for an adjacent layer of the stack. This drove a lot of investment in open source software, including most notably Android. Zuckerberg’s Facebook appears ready to play this card hard in open(ish) ML, and [Stability.ai](https://stability.ai/) and other VC-backed startups also appear to be leaning in this direction.
- **There is economic** [**pressure to move inference to the “edges”**](https://github.com/ggerganov/llama.cpp/discussions/205), and [technical progress](https://ggml.ai/) on this challenge. That is incomplete (inference is not as interesting to open *development* as training is) but it could still help drive a virtuous cycle of capacity and hardware development, which could help training.

#### weaknesses

- The conventional wisdom remains that **the best models will be the largest, and therefore costliest, ones**. This will not matter for some domains (funny poetry) and will be very important for others (driving cars, writing contracts). This means extremely high training and execution costs for those domains that are most difficult, and in many cases, most valuable.
- **Reinforcement Learning from Human Feedback (RLHF) is important and benefits from large, centralized audiences.** For example, RLHF may be part of why the hosted Midjourney, with lots of feedback from users, appears to be quickly outpacing the open Stable Diffusion in quality. If RHLF remains an important training mechanism, which seems likely, it may create a winner-take-all (“[aggregator](https://stratechery.com/2015/aggregation-theory/)”) effect where hosted models with large audiences outpace distributed open models.

#### threats

- If there is an advantage to high spending, **“cheap” options could be vastly outspent,** because at least OpenAI/Microsoft and Google have strong incentive to pour vast sums of money into this space. Even if government and philanthropy increase their spending substantially, it’s hard to see how they could keep up.

#### uncertainties

- **VCs are currently very willing to** [**fund ML without business models**](https://www.wsj.com/articles/no-business-plan-no-problem-chatgpt-spawns-an-investor-gold-rush-in-ai-6bdbed3c). In past waves this has caused investment in fundamental open source infrastructure, which has been positive for open, but the long-term sustainability of such investment is poor. In addition, the current trend seems to be non-commercial public-access licenses, encouraged by VCs. So this wave may see high levels of not-quite-open investment, with strings attached that make the overall impact hard to predict.

### Government intervention

Government (including the judicial system) will be heavily involved in ML, and I don’t yet see how to square that with genuinely community-centric open.

#### strengths

- Transparency is a big emphasis of many ML regulatory proposals, particularly around training data and techniques. **Open-native models and approaches are much better positioned to meet transparency requirements than closed models.**

#### weaknesses and threats

(Combined weaknesses and threats in this area because the surprisingly dynamic nature of the regulatory space blurs the two a lot.)

- **ML regulation and judicial decisions will not be consistent from country to country.** This is bad for open, which benefits from globally-sized communities. If communities need one open model for the US, another for Europe, another for China, etc., then many of the collaborative benefits of open will be lost.
- **ML regulation will move surprisingly quickly**, with the EU already having voted on [in-depth proposals on AI liability](https://commission.europa.eu/business-economy-euro/doing-business-eu/contract-rules/digital-contracts/liability-rules-artificial-intelligence_en). That does not benefit movements that depend on part-timers operating on a shoestring to get their message out.
- **Open ML could become associated with “**[**racists/sexists training racist/sexist models**](https://www.vice.com/en/article/epzjpn/ai-chatbot-white-supremacist-gab)**”** in which case governments and proprietary competitors will regulate aggressively.
- **Open ML is easier for journalists to study and report on** ([ex 1](https://www.washingtonpost.com/technology/interactive/2023/ai-chatbot-learning/), [ex 2](https://www.bloomberg.com/graphics/2023-generative-ai-bias/)), because of its accessibility. Such media coverage, while accurate, may skew perception of the specific open models being studied, and possibly lead to more regulatory scrutiny of open overall.
- **Regulation will likely be very heavy-handed**, with OpenAI explicitly asking for heavy regulation, and seemingly getting a good reception in Washington for that message. To be clear, **it is possible that strict regulation is the right thing**—it’s already clear that open(ish) models are being used as the basis to create a variety of racist and sexist fine-tuned models, and as the basis for models that simply aren’t well-tested relative to their possible harms.
- **Litigation against open models and open data sets are likely to be common**, potentially creating liability that open communities are not ready for. (See, for example, the various GDPR and copyright claims against LAION.)

#### uncertainties

- **The Open Source Initiative, Creative Commons, Wikipedia, and the Internet Archive are all grappling with ML as quickly as they can**. (Me talking with [CC/WMF/IA](https://blog.archive.org/2023/04/12/generative-ai-meets-open-culture/); me [with OSI](https://blog.opensource.org/how-can-the-society-as-a-whole-maintain-control-of-ai-systems/).) We don’t yet know: (1) how quickly they can move, given the real concerns of their existing communities/stakeholders (2) what bridges they can build to ML practitioners, so that they have impact (3) what positions make sense for “open” in a world with deep, genuine ethical-political concerns about control of this technology.

### Training materials

I break training materials out as a separate section because it is both where the most genuine ML-adjacent communities are, and because it poses interesting challenges for open.

#### strengths

- The **systemic accessibility of training data is one of the few truly level playing fields** between open and closed ML. It remains to be seen whether this access (via fair use and [text and data mining (TDM)](https://felixreda.eu/2021/07/github-copilot-is-not-infringing-your-copyright/) exception) will hold up in court.
- We know that **public, high quality data sets can be created by volunteer communities**, whether hosted by non-profits like Wikimedia and Archive or by for-profits like Reddit, Flickr, GitHub, and Stack Overflow. This gives **volunteer, collaborative communities a standing that they lack in many other areas of tech policy**.

#### weaknesses

- **Open data and open creative communities are totally unprepared for the trust and safety burden** that has been thrust on them by their use in training. Compare how complex Wikipedia’s trust and safety efforts are, compared to how non-existent LAION or C4’s trust and safety efforts are. Similarly, many proprietary ML models are moderated by [large, expensive, traumatized teams in places like Kenya](https://www.vice.com/en/article/wxn3kw/openai-used-kenyan-workers-making-dollar2-an-hour-to-filter-traumatic-content-from-chatgpt). Open has no equivalent, or alternative, approach at this time, which may contribute to [bias issues](https://www.bloomberg.com/graphics/2023-generative-ai-bias/).

#### threats

- Many creators are making heart-felt pleas for licensing fees when their creations are used to train AI. It is highly likely that such **licensing fees would make it impossible for all but the largest companies to train ML models**, akin to the digital music oligopoly (Spotify, YouTube, Apple Music). This would ultimately be problematic for artists (just like other oligopolies in the creative industries) while stopping open ML as collateral damage.

#### uncertainties

- It is possible (though unlikely) that **fair use and TDM exceptions could be enforced in such a way that non-profits can train without restrictions, while for-profits have to license** their uses. If this does occur, it could introduce an actual “blue ocean” space for non-profit technologies to flourish with restrained commercial competition. That’s a complicated potential outcome—and a very long shot—but an interesting one to think about.

### Community and culture

Open is at its strongest when it has genuine community, motivating people to go above and beyond. The jury is out here, but I think there are a lot of good signs.

#### strengths

- It’s easy to build community around tech with a big “oooh” factor. And ML is definitely that. Not surprisingly, there **appear to be many communities around ML with amazing vitality**, not just in terms of code but also of creative outputs.
- **Huggingface is providing a strong platform for ML-centric communities**, and has strong incentives to continue doing that. This is not perfect—it’s never great to centralize on one platform—but in the meantime very real communities will be incubated there.

#### weaknesses

- The main weakness of open ML is (as described more above) the barriers to entry: cost and regulation. **Hard to build an open community if only a few people (relatively) can join.** This will change with time (the earliest open Unixes required university-level hardware!) but the faster it can change, the better.
- Related to the previous, if the recruitment pool for open developers is limited to (say) those who can buy the latest Mac hardware, that’s an upper limit of tens of millions of people—a great start—but not billions. **Many people,  languages, and** [**knowledges**](https://whoseknowledge.org/)**, will be left out.**

#### uncertainties

- **There are already growing “culture wars” inside the broader ML movement**, and it is unclear whether those will play out to the advantage of open or not. In particular, some groups genuinely believe that all research must be closely held (akin to nuclear secrets), while others want to stop most or all research in the space. Given that open has traditionally benefited from engagement by ideologically motivated developers those groups may draw support from more mainstream "open".
- There appears to be **a growing group that (deliberately or not) is conflating traditional open with “open, but non-commercial”**. If open-but-non-commercial becomes a norm, it may have some upsides for community formation—“define boundaries” and “eliminate free-riding” are [traditionally good techniques for commons formation](https://blog.tidelift.com/resilient-open-commons) in rivalrous-goods-centered commons. But of course there’s also extensive downsides, including splintered silos per-commercial-vendor and reduction in investment.

## Opportunities to pursue

The “opportunity” in SWOT is usually framed as an opportunity for a specific organization. In this section I’ll speak instead to the opportunities for those who would like to see open succeed as an approach in the ML space. What approaches, tasks, and investments might help make open ML more viable and competitive, and serve the many competing public interests in this pace?

### Communities and infrastructure

Developer-advocates, philanthropies, commercial entities with long time horizons, and others have a variety of important opportunities to help build communities and infrastructure for open ML communities.

- There is a significant need for a public-benefit non-profit that provides **standardized governance and trust and safety infrastructure to public-benefit data sets and data communities**. Think a combination of: C4 or LAION’s data sets; Wikimedia’s community building and trust and safety; and Linux Foundation’s scalability and limited liability structure. It could also use well-controlled API access for revenue and legal compliance, a model that WMF has been pioneering with its recent [Wikimedia Enterprise](https://enterprise.wikimedia.com/) work. This could greatly accelerate the availability of public-benefit data sets by allowing those communities to focus on their unique data (including regulatory compliance), rather than reinventing governance wheels.
- Given the plausible argument that [open techniques may have significant advantages when building smaller models](https://www.interconnects.ai/p/evaluating-open-llms), there is **an opening for a GNU- or Apache-like organization that aggregates many mid-size open models.** Such a project couldprovide technical community to creators, standardized expectations for consumers, and a coordinated voice in policy discussions. This role used to be tightly tied to provisioning of infrastructure (like GNU's ftp server or Apache’s revision control server). That has now been disaggregated (it is likely that such a group will use third-party hosted infrastructure) but that does not reduce the need for standardization, collaboration, and community among these somewhat overlooked models.
- The current **ML labor force is as ripe for organizing as any in the recent history of computing**, with many concerned with ethics and some actively believing that further development is deeply problematic. An open ML movement could be a useful complement to such labor organizing, by giving ethically concerned developers a set of tools and standards they can use (in a hot labor market) to evaluate employers.
- It is outside the scope of this note to go into much depth, but there are clearly **opportunities for for-profit investments in open and open-adjacent ML**, particularly around tooling for development and deployment. Better clarity about what open ML *is* will help investors and founders, just as it will help open communities.
- **There is demand for a standardized definition of open for ML.** My own sense is that a new definition is still somewhat premature, because there is still so much uncertainty in the space, but I see the arguments that there is a void that needs to be filled. In particular, confusion about "open" and "non-commercial" seems to be setting in quickly, which damages the general "open" brand and will confuse consumers and producers, slowing the overall development of the space.

### Regulatory opportunities

Policy advocacy groups and existing open organizations have several opportunities to influence upcoming regulation, which will have significant impact on the future of open ML.

- Since many of the best training sources are publicly-generated commons, there may be unique **opportunities to advocate for fair usage of the digital commons and organize the digital labor that creates them.** This advocacy will need to protect both the forest (the commons that society fruitfully draws on) and the trees (the creators who build the commons), a tricky but critical position. Or to put it another way: we cannot kill the patient (the valuable humanity-wide commons) to cure the disease (genuine problems with privacy, consent, and autonomy); what's needed is an effort to articulate this position in a way that will resonate with policy-makers.
- Large open players must build on the current work on security regulation ([eg](https://eclipse-foundation.blog/2023/02/23/cyber-resilience-act-good-intentions-and-unintended-consequences/)) to **develop relevant policy advocacy skills in the open community**. As part of this, **open** **ML communities need to build, and circulate, positive stories about open ML's impact**, to counter negative stories about openly racist and sexist finetuning of open models.
- Policy think tanks could take this as an opportunity to **study how open techniques could improve ML regulation for *all* models.** For example, many proprietary AI vendors are taking the position that disclosing training materials is practically impossible. If open models prove that training disclosure is feasible, policy activists will be able to demand that of *all* models. Similarly, proprietary models seem to pose significant antitrust problems, and a deeper understanding of open's management of power concentration could spur good policy proposals in that area. Success in this will require closing a cultural gap that has opened in the past decade between digital policy activists and the open community (perceived, with some truth, as too corporate) and free community (perceived, with some truth, to have confused the means of source availability with the ends of human flourishing).
- The printing press created copyright law; the industrial revolution created modern patents; modern interstate transit created modern trademark law. Advocacy groups like EFF and Creative Commons should be **preparing for the possibility of new intellectual property regimes** that seem likely to arise alongside non-IP regulatory regimes like product liability and privacy.

### Collaborative tooling and capacity

ML researchers and product developers (both in academia and in non-FAANG tech companies) could engage in a variety of work that improves ML’s collaborative capacity, including by driving down the cost and improving the accessibility of training and inference. These could include:

- Invest in developing **model quality metrics that go beyond token count**. This will allow open developers to compete on metrics other than training time/token count (which inherently favor well-resourced trainers). This is already a recognized need, and work is proceeding, but anything that can make it a bigger focus of researchers would help accelerate open.
- Pursue theories that **de-duplication and other pre-filtering of training data sets may reduce training costs** without compromising quality. If they prove viable, building open tooling to help with those processes ([like this one](http://collabora.com/news-and-blog/blog/2023/06/08/mlfix-to-quickly-fix-datasets/)) could substantially improve open's competitiveness in training.
- **Lower technical barriers to adoption *and improvement* of open data sets.** Open software libraries have become the de facto industry standard because of their quality and accessibility, which has given very high leverage for those doing auditing of software security (fix it once, fix it everywhere) and for new companies and competitors (who can reduce oligopolic power by starting new companies relatively cheaply and quickly). Similarly, making open data sets easy to use *and easy to improve* (though, for example, open source trust and safety tooling optimized for data) would raise all boats.
- Collaborate with other hardware manufacturers ([Apple](https://github.com/ggerganov/llama.cpp/pull/1642), [AMD](https://twitter.com/HPC_Guru/status/1668684159395725312?s=20)) to **improve performance on non-NVidia hardware**. This will grow the pool of potential developers who can participate in open ML collaboration.
- Continue **experimentation around distributed training.** Approaches to distributed training are still [relatively new](https://open-ish-machine-learning-news.ghost.io/ghost/#/editor/post/648b2075855aec000165dd72), but could help balance the playing field in training. In some variations on this approach, like [this one from Google](https://arxiv.org/pdf/1902.01046.pdf), it could also help reduce the RLHF gap for open models, and respect privacy as well.

## Conclusion

**I am cautiously optimistic about the near future of open(ish) machine learning.** Its arc will not be the same as open source software’s, because the economics, collaboration model, and regulatory spotlights are very different. But there is a possibility there to build some amazing, human things, and many opportunities for interested parties to jump in and help out.
