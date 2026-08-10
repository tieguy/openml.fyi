---
title: Open data governance, after licensing
date: '2023-03-03'
updated: '2023-11-03'
description: Open IP licensing was great, but I increasingly believe isn’t going to
  "solve" open data (including open ML and open social) at scale. Instead, the leadership
  of the open community should be thinking about how we can create open data entities.
tags:
- essay
- open-data
- governance
- licensing
feature_image: /images/content/images/2023/03/54A9995D-F485-4AC7-9D02-F2C4EF6AE229.jpeg
feature_image_alt: Rusticly-dressed man herding cats, with a green valley and mountains
  in the far background. In the style of an oil painting,
ghost_id: 640241faf7f6f4003dc597a8
---

## TLDR:

Open IP licensing was great, but I increasingly believe isn’t going to "solve" open data (including open ML and open social) at scale. Instead, the leadership of the open community should be thinking about how we can create open data *entities* that can have the public interest-focus and “ease of use” of licensing, while circumscribing liability for open creators and responding to regulatory and technological changes.

## Intro

Open *software* projects have traditionally relied on copyright licensing as their primary governance tool. Experts have long realized that this has shortcomings, and many large projects have adopted additional layers of governance, but the default advice from many corners has been that licensing is *the* key touchstone of openness—or, when they've acknowledge that licensing is insufficient, they've failed to provide reusable, responsive governance models, leading to much sloppy copy-paste.

In this essay, I’ll attempt to explain why I think this is an actively wrong approach for more data-centric opens, including both open machine learning and open social.

### Environment is changing over time

Public IP licenses, by their nature and design, are fairly static — they’re hard to update. This has mostly been fine, because the environment in which open software operates has been fairly static. (One notable exception proves the rule: SaaS has come to dominate the software industry, and public software licensing has almost entirely failed to respond to this change in the environment.)

The *data* environment, in contrast, is very dynamic. New uses (like [facial recognition](https://creativecommons.org/2019/03/13/statement-on-shared-images-in-facial-recognition-ai/)) and new regulations (like the GDPR and AI Act) are being created regularly. It will be very difficult for a license-centric regime to keep up with these changes. Even in the simplest case (where the license intends to be maximally permissive, with no obligations, so not barring any undreamt-of uses) interactions of warranty disclaimers with new liability regimes may be difficult to predict ahead of time.

Even in the case where a license genuinely intends to be maximally permissive, new uses will challenge community understandings—making it hard for communities to process and handle what they thought they meant in the past. For example, noted free software advocates who have in the past roundly condemned rights-holders for arguing that fair use does not apply to new uses, have… recently argued that fair use does not apply to machine learning training. This sort of context change will make communities (correctly!) more leery of relying on inflexible licensing to manifest their intent over time.

### Environment is unpredictable across jurisdictions

Unlike the copyright laws that form the core of the public IP licensing regime, which have been roughly standardized through the Berne Convention, data-relevant law is extremely inconsistent across jurisdictions.

As a result, no license can work consistently or predictably across jurisdictions in the way we’ve come to expect of public IP licensing. A good example is the much-maligned Open Database License. It attempts to be both a contract and a license, and as a result may work substantially differently in the EU and US (especially post-Brexit). Similarly, there’s a strong argument to be made that public *data* licensing only works under US law if it is maximally permissive; any attempt to enforce conditions is (at least) legally dubious.

Contracts can, of course, be more restrictive than licenses—but to be effective, a contract likely requires a *contracting entity* in order to (1) create and (2) enforce the terms. Creating such an entity will be a substantially different exercise for open data projects than simply placing a license file in a directory for open software projects.

### Liability is increasing everywhere

Liability for software-and-data-centric services is here, and more is coming. Per the previous two points, this liability will come differently at different times and places.

This liability (whether imposed by legislation or the common law) will break the disclaimer-focused regime of open IP licensing. As a result, we’ll need more sophisticated ‌governance—we should expect to see more limited liability entities, for example. As governments move towards regimes that parallel traditional product liability, we should also expect to see requirements for “recalls” of products—which requires a long-lived entity, rather than just one-time, public dumps of code or data. (This is, in part, why implementing the GDPR in non-EU jurisdictions requires contractual enablement—and why open data projects that rely on licensing are [already struggling with GDPR enforcement](https://twitter.com/alexjc/status/1630214685252374530).)

Licensing may have some stopgaps that will extend its livetime; for example, we should expect that all new public IP licenses will have indemnity clauses, requiring the user to indemnify the creator if the data is used in a situation that creates liability. Third-party enforcement clauses may also allow for more flexibility over time. But we should expect that in many cases these will be insufficient, and entities will be necessary.

### Truly “public” data may not always be possible

Even if we can overcome some of the challenges above to make “ideal” modern public IP licenses, it seems likely that certain kinds of data will (1) be very useful to public-benefit, community-centric projects but (2) not be susceptible to truly public IP licensing. As a result, we should expect that we will need *entities* to manage the data, the attached legal responsibilities, and making the data available to the greatest extent possible within those responsibilities.

The canonical example here, of course, will be health data. This is highly regulated and the implications of data leaks are profound. As a result, the current options for “public” health data are grim: either use the (very ill-suited!) public IP licensing regime, or be an org large enough to pay expensive lawyers for a custom, ongoing governance solution (and therefore likely a for-profit multi-national).

Entities that can competently handle health data *and* implement the virtues of public IP licensing will be necessary. We should seek to standardize those entities as much as possible, to maximize sharing and lower barriers to entry as much as possible.

### Is this possible?

Creating a “hosting entity for open data” will not be trivial, but it does have some interesting precedents. Among others:

- **Open Collective:** Open Collective has standardized the governance of *money* for open projects. Their popularity demonstrates that open communities can find value in non-license, “one-click” governance when it is offered.
- **Linux Foundation**: It is under-appreciated that the Linux Foundation is, at its core, a *machine for creating governance entities*. Each new organization created by LF has mostly-standard governance documents, with limited liability through LF’s use of the Delaware “Series LLC” to provide a new, independent entity at minimal cost. While LF is a (c)(6), and so (I think) inappropriate for many types of public data, there’s no conceptual reason why this couldn’t be repurposed for data.
- **Facebook Oversight Board:** While there are many reasons the FOB is problematic, their legal structure represents a [genuine innovation in using trusts to establish organizational independence](https://businesslawtoday.org/2019/12/independence-purpose-facebooks-creative-use-delawares-purpose-trust-statute-establish-independent-oversight/).
- **Open Social:** Because open *social* networks are going to have extensive GDPR and trust-and-safety compliance issues, I would expect that as that space grows we will see interesting innovation there. [Nivenly](https://nivenly.org/) is the first one I'm aware of.
- **Misc.:** There’s a lot more out there for precedents and inspirations if we start looking. Among others: GitHub’s [Minimum Viable Governance](https://github.blog/2021-07-22-minimum-viable-governance-lightweight-community-structure-foss-projects/); [Hathi Trust](https://www.hathitrust.org/governance) as a pooled data entity; Mozilla research in [alternative data governance](https://foundation.mozilla.org/en/data-futures-lab/data-for-empowerment/data-futures-lab-glossary/#alternative-data-governance); open [software coops](https://tech-coops.xyz/).

It's important to note that what's interesting here is not "non-profit foundations" per se—we've had those for a long time. Some key changes we might want, compared to what we already have:

- governance-first: for the vast majority of open source non-profits (except LF and Eclipse-based orgs), the entity came into existence *after* the license was chosen. This ties the hands of the entity—which we used to see as a feature, but which in data I fear is a bug. We need to create structures (and educate data creators) such that the entity and governance comes first.
- scaleable: current limited-liability open source non-profits are "scaled" by word-of-mouth or copy-paste, with the exception of LF. If we want repeatable, interoperable entities, that's going to have to change.
- optimized for data: how do multiple such orgs share a skilled Privacy Officer, trust and safety team (for open social), etc., while retaining separate liability?

## What’s next?

Given my day job, I don’t expect to be able to set up such institutions myself. So my main goal is to plant this seed as widely as possible. That said, I’ll continue to be reading and sharing as much as I can find time for, with particular emphasis on some of the following [open(ish) virtues](/ish/):

- low barriers to entry for data-set creators/hosters
- standardization for maximal reuse and recombination
- centering public interest, while understanding that commercial re-use is often in the public interest
