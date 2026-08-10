---
title: Transparency and other rules / 2022-11-21
date: '2022-11-22'
description: RAIL adoption; observations on “release early, release often” in ML;
  and a micro-essay on transparency.
tags:
- licensing
- transparency
- regulation
feature_image: /images/content/images/2022/11/90C1B99C-D08F-4F2D-AD56-042914B8A7D2.jpeg
feature_image_alt: Colorful turkeys in a vaguely anime-inspired style.
ghost_id: 637dbed7a503d9003db476b6
---

This past weekend I officiated at my sister’s wedding. (She has an actual degree in ML but doesn’t work in the space at the moment.) Anyway, that kept me away from the screen, which is great for everyone except this newsletter.

## RAIL adoption update

Me, a few weeks ago: “[virtually all of the signs [about the Responsible AI License (RAIL)] point towards a license that could be very widely adopted](https://blog.tidelift.com/evaluating-the-rail-license-family)”

Today:

<figure class="kg-card kg-embed-card"><blockquote class="twitter-tweet"><p dir="ltr" lang="en">🚀Around 1 week ago we reached +1000 model repos in the <a href="https://twitter.com/huggingface?ref_src=twsrc%5Etfw">@huggingface</a> Hub with an OpenRAIL license!🙌 <br/><br/>🤔Some considerations to take into account that might help to steer things and work towards a more clear and user friendly approach to Responsible AI Licensing: 🧵</p>— Carlos Muñoz Ferrandis (@Carlos_MFerr) <a href="https://twitter.com/Carlos_MFerr/status/1594986911202148353?ref_src=twsrc%5Etfw">November 22, 2022</a></blockquote>
<script async="" charset="utf-8" src="https://platform.twitter.com/widgets.js"></script>
</figure>

Compare less than 500 mentions of the Hippocratic License on GitHub after a couple of years of effort. Whether you like the RAIL approach or not, it’s something to be reckoned with.

## Open(ish?) science model gets released, pulled

Meta and [the Papers With Code community](https://paperswithcode.com/about) released a Large Language Model (LLM) called Galactica that was tuned for “science”—eg, things like summarizing the state of scientific knowledge in a topic. They then withdrew it a few days later after much public criticism about the quality and biases in its outputs. The license used for the model is, per GitHub, [Creative Commons non-commercial](https://github.com/paperswithcode/galai/blob/main/LICENSE-MODEL.md). A couple observations:

### Non-commercial?

I’m trying to be [open to experimentation](/ish/) around concepts of “open”, but it’s unclear to me what role non-commercial clauses have to play in the AI space. “Non-commercial” is a bad proxy for “ethical”, given that regulation is likely (as a practical matter) to be *more* binding on for-profits than individuals. It could indicate “we want to build a community not dominated by corporations”, but this particular project is… mostly dominated by Meta. So what’s the theory where non-commercial makes sense?

### Release Early, Withdraw Often?

Case studies will be written about this release. Some thoughts on how, in particular, this interacts with open(ish) and open’s traditional “release early, release often” mindset.

#### Moderation is (a) product

As the tech industry [has been reminded in other contexts this week](https://www.theverge.com/2022/10/28/23428132/elon-musk-twitter-acquisition-problems-speech-moderation), moderation of inputs and outputs is now a core part of many kinds of products. Regardless of what one thinks of the critiques of Galactica (and I think [many](https://twitter.com/mmitchell_ai/status/1593351384573038592) [are](https://twitter.com/Michael_J_Black/status/1593133722316189696) [valid](https://twitter.com/emilymbender/status/1593256027298091010)) it’s clear that releasing tools with poor content outputs is going to draw criticism.

It’s not clear how “open” works can react to really sharp critique of this sort, because the presumption is that (once released) access is continuous and ongoing, while critics (not unreasonably!) often want bad models to be, essentially, unreleased. Do you release with the best you can do plus disclaimers, and then hope others will fix it up further? Release under a license with restrictions, and hope those are sufficient even if the technology is unrestricted? We’re going to see a lot of people learning about this the very hard way in upcoming months.

#### Withdrawing a demo, but not the code itself?

Papers with Code has withdrawn the *live demo* of their model but the code and pytorch models are (as of this writing) still available on GitHub and HuggingFace.

<figure class="kg-card kg-embed-card"><blockquote class="twitter-tweet"><p dir="ltr" lang="en">Thank you everyone for trying the Galactica model demo. We appreciate the feedback we have received so far from the community, and have paused the demo for now. Our models are available for researchers who want to learn more about the work and reproduce results in the paper.</p>— Papers with Code (@paperswithcode) <a href="https://twitter.com/paperswithcode/status/1593259033787600896?ref_src=twsrc%5Etfw">November 17, 2022</a></blockquote>
<script async="" charset="utf-8" src="https://platform.twitter.com/widgets.js"></script>
</figure>

Note the difference between the terms of that tweet (“still available for researchers”) and the terms of the *license on the model as specified by Github and Huggingface*, which is still CC BY-NC 4.0.

I’m unclear how, if one believes there’s a deep ethical conundrum resulting from publication of the model as a service, there is no similar result from continuing to publish the model without any enforcement whatsoever of even the loosest terms. As this space continues to evolve, we’re going to have to figure out how to negotiate this tension between high ethical standards and the difficulty (impossibility?) of recalling models once they are out in the wild.

## Transparent licenses as regulatory aid?

For a variety of reasons, I think that ethical/“responsible” licenses, especially as currently constituted, are likely not useful to address AI’s ethical challenges. Without going into why that is right now (easily an entire separate essay) I’d like to explore an alternative: licenses focused on transparency and regulability. These are still very raw thoughts; I’d very much welcome feedback on them via comments or email.

### Background: Lessig’s modalities of regulation

In his seminal *Code and Other Laws of Cyberspace*, Lawrence Lessig proposed that there were [four ways in which we regulate](https://wikijuris.net/cyberlaw/regulation/#lessigs-modalities-of-regulation-law-architecture-norms-and-the-market): (1) law, (2) technical architectures, (3) social norms and (4) markets.

Since Lessig wrote, I’ve come to appreciate that one key way in which the architectural "modality" of regulation interacts with the other three modalities (law, norms, and markets) is through *transparency.* If a technique is architecturally easily comprehensible or particularly visible, it is easier to use law and norms to influence it. Conversely, technologies that are harder to understand or monitor are harder to regulate.

So, if (at least for the sake of argument) one accepts that licenses are not the ideal place to do regulation of ethical questions, one could instead ask “are licenses a useful way to *empower* other modes of ethical regulation?” In other words, can we use licensing clauses to make it easier for other mechanisms (like shame, or governments, or insurers) to regulate?

### Three examples: voting, jail sentencing, Washington regulation

My thesis (that transparency can be a way to enable other modes of regulation) is one that already has some traction in related spaces. For example, auditing is now the gold standard in the voting space—since it’s hard to look at all the moving pieces of voting software, the law in many US states now requires audits, which are often [enabled with open-source software](https://www.voting.works/risk-limiting-audits). Similarly, the EFF has long advocated for [transparency in sentencing software](https://www.eff.org/deeplinks/2021/12/shining-light-black-box-technology-used-send-people-jail-2021-year-review); while a software license absolutely cannot replace this sort of advocacy, it might complement it. Finally, the EU and other jurisdictions are beginning to require transparency in certain AI systems—and citing the by-default lack of transparency as a reason for regulation.

### One counter(?)-example

[This paper](https://dl.acm.org/doi/pdf/10.1145/3531146.3533241) is very important, and I hope to go into it more in a following week. But the short version is that a “focus on acontextual governance … undermines [the] ability to achieve normative outcomes”. In other words, almost by definition, merely publishing metadata (what the paper calls “metadata maximalism”) is going to be insufficient to make change in the real world. I agree with the core critique that merely creating conditions for transparency will never be enough; other forms of regulation *must* be pursued, and it will *never* be enough for an ethically-concerned entity to merely say “welp, let’s publish under this license and then our ethical responsibilities are done”. But I still want to explore this space to help understand what might best *complement* those other approaches.

### So what can we do?

This is an incomplete list of ideas we could adopt in a transparency-focused AI model license.

#### Interpretation guidance

Many open licenses have traditionally opened with a statement of the purpose of the license, but (to the best of my knowledge) none of them attempt to specify what interpretive standards or context that *judges* should apply. Were a license drafted specifically to increase regulability, a concise statement to this effect could be created—including a specific request that, where consistent with local law, judges should interpret the text with the goal of the increasing transparency. One could also imagine, more boldly, encouraging judges to interpret the license in light of EU court rulings on the subject, regardless of the jurisdiction in which the license will be enforced. This introduces some uncertainty, but (given that most large businesses are already subject to EU law in various ways) may be a useful way to globally extend the impacts of progressive litigation in this area.

#### Enhanced information

Open licenses have always required certain notice requirements. Those could be supplemented with (or even replaced with) information about the model. This could build on the industry’s work on model cards, requiring (for example) that any model cards provided with the original model be surfaced to end users, similar to how (for example) [the ODbL requires users of Open Street Map to surface attribution](https://wiki.osmfoundation.org/wiki/Licence/Attribution_Guidelines).

#### Modification information

Though typically ignored, many open source licenses contain requirements that those who modify state that they modified the code. (eg, Apache 2.0 4(b)) Such rules arguably make much *more* sense for AI than they do for traditional code, and could be enhanced by (for example) requiring publication and inspectability of any data sets used for additional training—even where the original data set is too large (or too sensitive) to be feasibly released.

#### End-user modification

Many current open-ish AI techniques are trivially modifiable, in the sense that the models themselves are available as a file, usable by anyone who has access to PyTorch and the relevant configuration files. But the day is presumably not far off where many open-ish models are distributed through more proprietary mechanisms, which prevent end-users from removing, modifying, or testing the model. The LGPL has long attempted to prohibit this sort of behavior by requiring that it be possible to remove and modify libraries, in order to empower debugging and reverse-engineering. (eg, LGPL v3 4(b)(1)) This concept could be borrowed and strengthened for a transparent ML license.

#### Anti-explainability

There are a variety of techniques under development to help third parties audit and explain the behaviors of models. They all, to some extent or another, depend on levels of access to probe the model. There are not many techniques that can be borrowed from older open source licenses in this domain, but one could imagine at least (at a minimum) drafting some broad language patterned on the DRM language in GPL v3. The final version of that language attempted to stop licensees from claiming that reverse-engineering was illegal under statutes aimed at preventing hacking.

#### Usage registry

Traditional open source licenses have shied away from usage registries, on grounds that those are too cumbersome or [otherwise problematic](https://wiki.debian.org/DesertIslandTest). However, I think requiring users to register their usage is an area worth exploring. The analogy here is to product recall registries, which may be useful if a model needs to be “recalled” as a result of privacy, safety, or other *regulatory* issues.

#### Services

Most of the above suggestions are moot if the license is escapable merely by running the model as part of a service, which is likely to be the default distribution model for many There are a variety of approaches to managing this, including the Cryptographic Autonomy License. Its [early drafts](https://medium.com/h-o-l-o/some-legal-aspects-of-the-cryptographic-autonomy-license-cal-c95e18c90388) were particularly strong on this, but were watered down for OSI compliance—unlikely to be a design criteria in this space.

### Enforcement

Of course, all of the above are not useful unless enforcement mechanisms are present. I suspect that distributed, low-level enforcement could become interesting and impactful (as GPL enforcement has become in the embedded space). But an organization trying to make a go of “transparency as regulation” would likely want to pre-announce an investment in enforcement, perhaps in partnership with both developers and regulators. The early history of the Free Software Foundation offers a useful model for this, where enforcement was paired with education to attempt to make the license both strong *and digestible*, by (among other things) improving documentation and issuing the LGPL.

## Happy Thanksgiving

Finally, to my American readers, happy Thanksgiving. Here’s [the holiday parade, as imagined by a deeply, deeply twisted generative AI](https://imgur.com/gallery/KnsemzG).
