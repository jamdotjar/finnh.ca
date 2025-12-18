---
title: "Making This"
date: 2025-12-14
slug: making-this
description: "How I made my personal site, more or less"
tags: [design, web]
---

I decided I need a personal website now, so here's how I made this one, sort of. This is mainly just a reflection on some of the design decisions I made, and a post to test blog posts as I'm making the site. 

# Design

Generally when I'm making things that aren't super complex (like a static website) I like to come up with a good design, by my own subjective metric. I didn't have any clear direction for this, so I turned to doomscrolling various webrings, and coming up with a big moodboard

![2025-12-16-at-14-35-00.png](making-this-img/2025-12-16-at-14-35-00.png)

from there, I picked out a few I liked the vibe of(monstly in the center-ish if you want to look) and used that to get an idea of a general layout. I went for a pretty monochrome pallete, with pixelated/dithered graphics as a general stylistic accent. The other peice of the puzzle was font choice. I initially wanted to use more serif fonts like Recia and Crimson to go with more of a bookish design, but as I went towards more of a digitial feel, I chose to switch for some sans-serif fonts, specifically Switzer and Manrope, the former for headings, titles, and interface and the latter for body text (alongside `IBM Plex Mono` for my mono font.)

![2025-12-16-at-14-52-23.png](making-this-img/2025-12-16-at-14-52-23.png)

# Implementation

Ok, so this is where I'm at while writing this. I made sure to be mindful of how the design would transfer to components, so once I got a solid global stylesheet things have been relatively simple. The dithered elements have posed the main challenge, and I'm taking a couple different approaches to keep things sane. My dither of choice (I know how insane that might sound) is Bayer 4x4 or 8x8. This means for solid colors, I've been able to generate 4x4 textures, and swap them out, which is how I made my `<Seperator/>` component. Images 
