// Drafted starter posts based on Medium themes — edit freely. img files are stand-ins.
export const blogs = [
  {
    slug: 'ai-tools-content-pipeline',
    title: 'The AI Toolkit I Use to Run 7 YouTube Channels',
    category: 'AI Content',
    date: '15 Jun 2026',
    excerpt:
      'From Midjourney visuals to ElevenLabs voiceovers — the exact stack and workflow that lets one creator publish consistently across seven channels.',
    img: '/images/articles/create loading screen in react js.jpg',
    mediumUrl: 'https://medium.com/@earthkhan',
    body: [
      'Running seven YouTube channels sounds like a full team\'s job. It used to be. Today, a carefully chosen AI toolkit lets a single creator handle ideation, production, and publishing across multiple niches — if the workflow is designed properly.',
      'My pipeline starts with ChatGPT and Claude for topic research and scripting. Every channel has a prompt template that encodes its voice, audience, and format, so a first-draft script takes minutes instead of hours.',
      'Visuals come from Midjourney and OpenArt for stills, and Runway and Pika for motion. The trick is building a reusable style prompt per channel so thumbnails and b-roll stay visually consistent — viewers notice consistency more than polish.',
      'For voice, ElevenLabs handles narration on channels where I don\'t appear on camera, and HeyGen generates avatar segments when a human face helps retention. Editing happens in DaVinci Resolve with Canva for thumbnails.',
      'The real lesson: AI doesn\'t replace the creative decisions — it removes the production bottleneck between decision and published video. Design the workflow once, and every video after that is faster.',
    ],
  },
  {
    slug: 'n8n-automation-for-creators',
    title: 'Automating a Content Workflow with n8n: A Practical Walkthrough',
    category: 'Automation',
    date: '28 May 2026',
    excerpt:
      'How I turned a repetitive publishing checklist into an n8n workflow with form intake, AI drafting, and a human review step.',
    img: '/images/articles/form validation in reactjs using custom react hook.png',
    mediumUrl: 'https://medium.com/@earthkhan',
    body: [
      'Every content operation has a hidden checklist: collect the idea, draft the copy, resize the assets, update the spreadsheet, notify the channel owner. Doing it manually is fine once — soul-crushing at fifty times a month.',
      'n8n is my tool of choice for turning these checklists into workflows. It\'s open-source, self-hostable, and its node-based editor maps almost one-to-one to how you\'d describe the process on a whiteboard.',
      'A typical build: a web form feeds new content ideas into the workflow. An AI node drafts the post using a prompt template with structured output, so the result always arrives in the same shape. The draft lands in a review queue — a human checkpoint, because publishing unreviewed AI output is how brands embarrass themselves.',
      'After approval, the workflow updates the content calendar spreadsheet, generates the social variants, and sends a notification with links to everything. Total hands-on time per item: about two minutes, down from twenty.',
      'The most underrated step is documentation. Every workflow I hand off ships with setup notes — what each node does, which credentials it needs, and how to modify it. An automation nobody understands is technical debt with a scheduler.',
    ],
  },
  {
    slug: 'midjourney-thumbnail-workflow',
    title: 'Designing YouTube Thumbnails with Midjourney + Photoshop',
    category: 'Design',
    date: '10 May 2026',
    excerpt:
      'A designer\'s workflow for combining AI-generated imagery with real typography and composition principles — because raw AI output is not a thumbnail.',
    img: '/images/articles/smooth scrolling in reactjs.png',
    mediumUrl: 'https://medium.com/@earthkhan',
    body: [
      'Raw Midjourney output makes a beautiful image and a terrible thumbnail. Thumbnails are advertising, not art: they need a focal point that reads at 120 pixels wide, contrast that survives a bright phone screen, and typography AI simply cannot do reliably.',
      'My workflow splits the job: Midjourney generates the scene — the character, mood, and background — using a channel-specific style prompt for visual consistency across videos.',
      'Photoshop does the design work: cropping to put the subject on a rule-of-thirds line, punching up contrast on the focal area, and setting the title text with a real typeface, stroke, and shadow. Typography and composition are where a design background pays off.',
      'I batch-generate variations and test them small — if a thumbnail doesn\'t communicate at thumbnail size, it fails regardless of how good it looks full-screen.',
      'AI shrank my thumbnail production from an hour to fifteen minutes, but the fifteen minutes that remain are pure design judgment. That\'s the part worth hiring for.',
    ],
  },
]
