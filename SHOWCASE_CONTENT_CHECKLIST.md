# Look Book Content Review Checklist

Every media item in the Look Book currently resolves to `reviewStatus: 'needs-update'` and displays a visible **TO BE UPDATED** watermark.

When an image or video has been replaced with the correct final asset and its project copy has been verified, add its exact project title or hero label to `APPROVED_SHOWCASE_MEDIA` near the top of `src/data/aiShowcaseData.js`:

```js
export const APPROVED_SHOWCASE_MEDIA = [
  'After Hours',
  'Hero — Illustration montage',
]
```

The watermark will disappear only for the named approved media item. Keep an item unchecked until its asset, title, description, output, role, tools, and status are accurate.

## Hero media

- [ ] Hero — Illustration montage
- [ ] Hero — Nafiul creator portrait
- [ ] Hero — Kiwi campaign portrait

## AI Images

### Photoreal and Editorial

- [ ] After Hours
- [ ] Soft Authority
- [ ] Garden Motion
- [ ] Quiet Luxury
- [ ] One Face / Five Worlds

### Product and Advertising

- [ ] Rose Signal
- [ ] Daily Ritual
- [ ] Mineral Light
- [ ] Cold Current
- [ ] Object Study 01

### Illustration and Story Worlds

- [ ] Globby Explains
- [ ] The Nightingale
- [ ] Small Heroes
- [ ] Systems, Simply

## AI UGC

- [ ] The 5-Step Routine
- [ ] Desk Reset
- [ ] First Sip
- [ ] Unbox the Quiet
- [ ] One Brief, Three Hooks
- [ ] Local Voice

## AI Video

- [ ] AI Motion Showreel
- [ ] Fifteen Seconds of Story
- [ ] Pour / Pause / Desire
- [ ] From Still to Scene
- [ ] The Hidden Review Board
- [ ] Loop Engineering
- [ ] Cloud, Without the Fog

## Character Design

- [ ] Maya, the Inventor
- [ ] Sarah, the Reviewer
- [ ] The Senior Inventor
- [ ] Globby
- [ ] Yui
- [ ] The Curious Chickens

## Websites

- [ ] AI Creative Studio
- [ ] Launch in One Scroll
- [ ] Signal, Not Noise
- [ ] Event in Motion
- [ ] Nafiul Creative Portfolio
- [ ] Max Steel Knowledge Hub
- [ ] Agent Demo Interface

## AI Automation

- [ ] Content Operations Copilot
- [ ] UGC Variant Generator
- [ ] Product Campaign Pipeline
- [ ] Multilingual Ad Localizer
- [ ] Claude Footage Labeling Skill
- [ ] Documentation Helper Agent
- [ ] Research-to-Portfolio Pipeline
