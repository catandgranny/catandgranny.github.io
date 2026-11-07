/**
 * All long-form page copy.
 *
 * Paragraphs may contain inline links written as `[anchor](/path)`. They are
 * resolved against the deployment base path at render time by
 * `src/lib/inline.ts`, so never hard-code the repository name here.
 */

export type SchemaKind = 'HowTo' | 'Article' | 'WebPage';

export interface Section {
  id: string;
  heading: string;
  /** Plain paragraphs, may include `[anchor](/path)` links. */
  body?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
  table?: { caption?: string; head: string[]; rows: string[][] };
}

export interface Faq {
  question: string;
  answer: string;
}

export interface PageContent {
  slug: string;
  /** <title> and og:title */
  title: string;
  /** <h1> */
  heading: string;
  description: string;
  /** Short lead paragraph under the h1. */
  intro: string;
  updated: string;
  schema: SchemaKind;
  sections: Section[];
  faqs?: Faq[];
  related?: string[];
}

export interface HomeContent {
  title: string;
  heading: string;
  description: string;
  intro: string;
  aboutHeading: string;
  about: string[];
  featuresHeading: string;
  features: { title: string; text: string; icon: string }[];
  stepsHeading: string;
  steps: { title: string; text: string }[];
  controlsHeading: string;
  controlsNote: string;
  faqs: Faq[];
}

const UPDATED = '2026-11-07';

const CONTROLS_ROWS: string[][] = [
  ['W A S D', 'Walk — the cat moves in the direction you are looking'],
  ['Mouse', 'Look around; the camera is locked to the cursor'],
  ['Space', 'Jump onto sofas, tables and windowsills'],
  ['F', 'Interact with the object in front of you'],
  ['R', 'Pick an object up, or ask for a hint'],
  ['Left click', 'Throw whatever you are carrying'],
  ['Q', 'Hide in the nearest box'],
  ['Tab', 'Open or close the main menu'],
  ['Esc', 'Release the cursor and pause input'],
];

export const home: Record<'en', HomeContent> = {
  en: {
    title: 'Cat and Granny Online — Play the Free Browser Game',
    heading: 'Cat and Granny, playable in your browser',
    description:
      'Play Cat and Granny online for free — a first-person cat game where you wreck Granny’s house, pin the mess on the new black cat and hide in a box before she spots you. No download, no login.',
    intro:
      'You are the orange cat. Granny has just brought home a black kitten and you have one job: make the new arrival’s life impossible while making sure Granny blames him for every broken vase. The catch is that Granny is always walking somewhere, and the house is full of things that smash.',
    aboutHeading: 'What Cat and Granny actually is',
    about: [
      'Cat and Granny is a first-person action game from Mirra Games, built around a single joke that turns out to be a surprisingly good game: you are a household cat with a grudge, and the house is a physics playground. Lamps, plants, chandeliers, cushions and crockery all react to you, and every room in Granny’s house is stocked with something worth knocking over.',
      'The twist is the blame. Wrecking things is easy — wrecking them while the new black cat is standing nearby is the actual skill. Time a crash so that Granny walks in and sees the black cat next to the mess, and your record stays clean. Get greedy, get seen, and you are the one who ends up on the street.',
      'It runs on Unity WebGL, so there is nothing to install: the whole house streams into the player above and the first load takes a handful of seconds. It plays with a keyboard and mouse on desktop, and with on-screen sticks and buttons on a phone or tablet.',
    ],
    featuresHeading: 'Why it is worth a coffee break',
    features: [
      {
        title: 'A house built to be broken',
        text: 'Dozens of interactive props with real weight. Vases, lamps, plants and chandeliers all behave differently when they hit the floor.',
        icon: 'vase',
      },
      {
        title: 'The blame mechanic',
        text: 'Chaos alone is not the goal — timing it so the black cat takes the fall is. It turns vandalism into a stealth puzzle.',
        icon: 'paw',
      },
      {
        title: 'Boxes as a lifeline',
        text: 'One button puts you in a box. Get in before Granny’s line of sight swings around, and she walks straight past you.',
        icon: 'box',
      },
      {
        title: 'A granny with a route',
        text: 'She patrols, she reacts to noise, and she notices the black cat standing in the wreckage. Learning her loop is half the game.',
        icon: 'eye',
      },
      {
        title: 'Mischief money',
        text: 'Successful pranks pay out, and the shop sells props — a boxing glove, a frying pan — for cats who want a louder entrance.',
        icon: 'coin',
      },
      {
        title: 'No download, no account',
        text: 'The full 3D game loads in the page. Touch controls appear automatically on phones and tablets.',
        icon: 'mobile',
      },
    ],
    stepsHeading: 'Your first five minutes',
    steps: [
      {
        title: 'Let the tutorial finish',
        text: 'The opening teaches the two things everything else depends on: how to wreck an object, and how to hide in a box. Do not skip it.',
      },
      {
        title: 'Follow Granny once',
        text: 'Before you break anything, walk the ground floor behind her. Knowing which rooms she checks and how long she lingers is worth more than any item.',
      },
      {
        title: 'Break something with the black cat in the room',
        text: 'Wait until the black cat wanders in, then knock something over. Granny blames whoever is standing next to the evidence.',
      },
      {
        title: 'Hide the moment you hear her',
        text: 'Press Q for the nearest box. Do it early — diving into a box in front of Granny does not count as hiding.',
      },
      {
        title: 'Spend what you earned',
        text: 'Open the shop from the menu and buy your first prop. A frying pan makes a much better noise than a flower pot.',
      },
    ],
    controlsHeading: 'Controls at a glance',
    controlsNote:
      'Desktop needs a keyboard and mouse; the cursor is captured by the game, so press Esc to get it back. Full list, including mobile controls, on the',
    faqs: [
      {
        question: 'Is Cat and Granny free to play here?',
        answer:
          'Yes. The game is free, needs no account and no download — it streams into the player on this page from the publisher’s own CDN, and the studio monetises it with ads inside the build.',
      },
      {
        question: 'Is this the real game or a copy?',
        answer:
          'It is the real build, made by Mirra Games, served from Playgama — the distribution platform the studio publishes through. This site is an unofficial fan page that embeds it; it does not host or modify the game files.',
      },
      {
        question: 'Can I play it on a phone?',
        answer:
          'Yes, and the game switches to touch controls automatically: a stick on the left for walking, drag anywhere else to look, and buttons on the right for picking up, throwing and hiding. It is still more comfortable in landscape.',
      },
      {
        question: 'Is it scary?',
        answer:
          'It is a cartoon stealth game with a spooky streak rather than a horror game. Granny is a threat, not a monster — the tension comes from being spotted, not from jump scares. The official listing rates it E10+.',
      },
      {
        question: 'Why does the first load take so long?',
        answer:
          'The build is a 3D Unity scene of roughly 43 MB. On a normal connection that is a few seconds; on school or hotel Wi-Fi it can take noticeably longer. The player shows a logo while it downloads.',
      },
      {
        question: 'Is this the same as Granny (the horror game)?',
        answer:
          'No. Granny by DVloper is a separate horror series. Cat and Granny is a lighter first-person cat game where you are the troublemaker, not the prisoner.',
      },
    ],
  },
};

export const pages: Record<'en', PageContent[]> = {
  en: [
    {
      slug: 'how-to-play',
      title: 'How to Play Cat and Granny — Objective, Blame System and First Run',
      heading: 'How to Play Cat and Granny',
      description:
        'A beginner’s walkthrough of Cat and Granny: what the objective really is, how the blame system works, when to hide in a box and the mistakes that get you thrown out.',
      intro:
        'The game explains itself in about ninety seconds, but the scoring logic underneath is not obvious. This is the short version: cause damage, make sure the black cat is the one standing next to it, and never let Granny see you do either.',
      updated: UPDATED,
      schema: 'HowTo',
      sections: [
        {
          id: 'objective',
          heading: 'The objective, stated plainly',
          body: [
            'You are the resident orange cat. Granny has adopted a second cat — black, smaller, and now the centre of attention. Your goal is to make the new arrival unwelcome by being unbearable, then letting him carry the consequences.',
            'There is no timer and no level select. The house is one continuous space, the mischief is open-ended, and progress is measured by how much chaos you can create without Granny pinning it on you.',
          ],
        },
        {
          id: 'blame',
          heading: 'How the blame system works',
          body: [
            'Granny does not care that a vase is broken. She cares who was standing next to it. Every prank is judged by proximity: if the black cat is in the room when Granny arrives, he takes the blame; if you are, you do not get a second chance to explain.',
            'That single rule turns the whole house into a timing puzzle. The safest pattern is to scout a room, wait for the black cat to wander in, then break the loudest thing you can reach and leave.',
          ],
          bullets: [
            'Quiet damage in an empty room is wasted effort — nobody sees it, nobody is blamed.',
            'The black cat moves on his own schedule; you cannot lead him, only wait for him.',
            'Granny reacts to sound, so one big crash is usually better than three small ones.',
            'If she is already looking at you, breaking something else will not save the run.',
          ],
        },
        {
          id: 'hiding',
          heading: 'Hiding in boxes',
          body: [
            'Every room has boxes, and one key (Q on desktop, the hide button on mobile) puts you inside the nearest one. While you are in a box Granny cannot see you, and she will lose interest and walk on if she has nothing else to react to.',
            'The rule that catches people out is timing: you have to be hidden before her line of sight reaches you. Climbing into a box while she is staring straight at you is not stealth, it is a confession.',
          ],
        },
        {
          id: 'shop',
          heading: 'The shop and what to buy first',
          body: [
            'Successful mischief earns currency, and the menu has a shop that sells props. The two that matter early are the boxing glove and the frying pan: both make a much bigger impression than crockery, and both are easier to aim at a specific spot.',
            'Buy one prop before you start experimenting. A loud object you understand is worth more than a full inventory you do not.',
          ],
        },
        {
          id: 'first-run',
          heading: 'A clean first run, step by step',
          steps: [
            {
              title: 'Finish the tutorial without skipping',
              text: 'It teaches interacting, throwing and hiding. Everything later assumes you know those three verbs.',
            },
            {
              title: 'Walk the ground floor behind Granny',
              text: 'Learn her loop: which rooms she enters, how long she stays, whether she turns around at the stairs. Do not break anything yet.',
            },
            {
              title: 'Find the black cat and shadow him',
              text: 'He wanders. When he enters a room with breakables, that is your window.',
            },
            {
              title: 'Break one object, then move',
              text: 'One crash, then out of the room. Standing next to your own mess is how runs end.',
            },
            {
              title: 'Hide before Granny arrives, not when she arrives',
              text: 'Get in the box as soon as you hear footsteps. Watch her inspect the damage through the box opening.',
            },
            {
              title: 'Bank the payout and buy a prop',
              text: 'Spend on the frying pan or glove, then repeat the loop with a louder tool.',
            },
          ],
        },
        {
          id: 'mistakes',
          heading: 'Five mistakes that end runs',
          bullets: [
            'Breaking things in an empty room — no witness, no blame, no reward.',
            'Hiding too late, after Granny has already turned towards the noise.',
            'Throwing an object across the room instead of at your feet; you lose sight of where it lands.',
            'Camping in one room until Granny’s route doubles back through it.',
            'Ignoring the black cat — he is the entire plan, not scenery.',
          ],
        },
      ],
      faqs: [
        {
          question: 'How long is a run?',
          answer:
            'As long as you survive. There is no fixed timer; the session ends when Granny catches you one time too many, so most runs are a few minutes of careful mischief.',
        },
        {
          question: 'Can I get the black cat evicted?',
          answer:
            'That is the premise and the win condition the game dangles: land enough framed mischief and the new cat is the one who has to go. It is a long game — treat each run as practice rather than a race.',
        },
        {
          question: 'Does hiding always work?',
          answer:
            'It works if you are hidden before Granny sees you. Once she is looking at the box you climbed into, the jig is up.',
        },
        {
          question: 'What is the hint key for?',
          answer:
            'R doubles as pick-up and hint. If you are stuck with no obvious target, it points you towards the next piece of mischief the game expects.',
        },
      ],
      related: ['controls', 'tips', 'unblocked'],
    },

    {
      slug: 'controls',
      title: 'Cat and Granny Controls — Every Key, Mouse and Touch Input',
      heading: 'Cat and Granny Controls',
      description:
        'The complete control list for Cat and Granny on desktop and mobile: movement, camera, jumping, interacting, throwing, hiding in boxes and opening the menu.',
      intro:
        'Desktop uses the standard first-person layout — WASD, mouse look, Space to jump — plus three keys that matter more than they look: F to interact, Q to hide and R for hints. On a phone the same actions become on-screen buttons.',
      updated: UPDATED,
      schema: 'Article',
      sections: [
        {
          id: 'keyboard',
          heading: 'Desktop controls',
          table: {
            caption: 'Default bindings. The build does not expose a remapping menu.',
            head: ['Input', 'Action'],
            rows: CONTROLS_ROWS,
          },
        },
        {
          id: 'mouse',
          heading: 'Mouse look and the cursor',
          body: [
            'The game captures the cursor as soon as you click into the player, and every mouse movement turns the camera. That is deliberate — you need fine control to line up a jump onto a windowsill or a throw at a chandelier.',
            'Press Esc to release the cursor, for example to click the fullscreen button or switch tabs. Click back into the frame to recapture it. If the camera stops responding, a released cursor is almost always the reason.',
          ],
        },
        {
          id: 'mobile',
          heading: 'Touch controls',
          body: [
            'On a phone or tablet the layout changes: a virtual stick appears bottom-left for walking, dragging anywhere on the right half of the screen moves the camera, and buttons on the right handle picking up, throwing, interacting and hiding.',
            'Landscape is strongly recommended — the buttons overlap the play area in portrait, and the camera gets cramped.',
          ],
          bullets: [
            'Left stick: walk and strafe.',
            'Drag on the right side: look around.',
            'Action buttons: pick up, throw, interact, hide.',
            'Tap the menu button to reach the shop and settings.',
          ],
        },
        {
          id: 'hints',
          heading: 'The keys people forget',
          body: [
            'Q is the run-saver. It hides you in the closest box instantly, and it is the only defensive move in the game.',
            'R is overloaded: it picks up the object you are facing and, when there is nothing to pick up, gives you a hint about what to do next. If you are ever lost, press it.',
            'Tab opens the menu, which is also where the shop lives. Opening it does not pause the world in the way you might expect, so do it from a hiding spot rather than the middle of the hallway.',
          ],
        },
        {
          id: 'troubleshooting',
          heading: 'When the controls stop responding',
          bullets: [
            'Click once inside the game frame — keyboard input only goes to a focused iframe.',
            'Press Esc, then click back in, if the cursor was released.',
            'Turn off sticky keys and browser shortcuts that swallow Space or Tab.',
            'On a laptop with a touchscreen, avoid resting a palm on the screen; it can switch the game into touch mode mid-run.',
            'If nothing works, open the game in its own tab — some browser extensions block input inside embedded frames.',
          ],
        },
        {
          id: 'gamepad',
          heading: 'Gamepads and remapping',
          body: [
            'The web build ships with a fixed keyboard-and-mouse scheme and no controller remapping screen. A gamepad is not a supported input, so plan on the keyboard even if the pad is plugged in.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Can I change the key bindings?',
          answer:
            'Not in the web build. The bindings are fixed, which is why every guide on this site uses the default layout.',
        },
        {
          question: 'How do I hide in a box?',
          answer:
            'Press Q on desktop or tap the hide button on mobile. You must be near a box, and you must do it before Granny’s line of sight reaches you.',
        },
        {
          question: 'Why does the mouse not turn the camera?',
          answer:
            'The cursor has been released — usually because you pressed Esc. Click once inside the game and it will be captured again.',
        },
        {
          question: 'Does it work with a trackpad?',
          answer:
            'It runs, but fine aiming is much harder. A mouse, or a phone in landscape, is the better experience.',
        },
      ],
      related: ['how-to-play', 'tips', 'unblocked'],
    },

    {
      slug: 'tips',
      title: 'Cat and Granny Tips — Timing, Routes and Louder Mischief',
      heading: 'Cat and Granny Tips and Tricks',
      description:
        'Practical Cat and Granny strategy: how to read Granny’s patrol, pick the right moment to break something, use boxes properly and get more out of every prank.',
      intro:
        'Once you can break a vase and hide, the game becomes about scheduling: where Granny is, where the black cat is, and how long you have before those two facts change. These are the habits that separate a clean run from a short one.',
      updated: UPDATED,
      schema: 'Article',
      sections: [
        {
          id: 'patrol',
          heading: 'Learn the patrol before you touch anything',
          body: [
            'Granny follows a route, and the route is the map of the game. Spend your first minute of every session walking behind her: which rooms she enters, which doorways she stops in, whether she climbs the stairs or only looks up them.',
            'Two details matter more than the route itself. First, how long she pauses — a long pause in a doorway is a free window in the room behind her. Second, where she turns around; that is where most players get caught.',
          ],
        },
        {
          id: 'witness',
          heading: 'Break things where there is a witness',
          body: [
            'The black cat is not an obstacle, he is the point. A broken lamp with nobody standing next to it is a wasted lamp. The profitable move is always the same: find the black cat, wait for him to settle in a room, then create the loudest mess in that room.',
            'Because he wanders on his own, the practical version is to shadow him. Follow at a distance, let him pick the room, then work.',
          ],
        },
        {
          id: 'loud',
          heading: 'One loud crash beats three quiet ones',
          body: [
            'Granny investigates sound. Three small knocks pull her into the room three times — three chances to be seen. A single chandelier or frying pan hit brings her once, to a scene you have already left.',
            'This is why the shop items matter: they let you do more damage per risk. Buy the frying pan early and treat crockery as practice.',
          ],
        },
        {
          id: 'boxes',
          heading: 'Use boxes like checkpoints',
          body: [
            'Do not think of hiding as a panic button. Think of the box in each room as a checkpoint you plan your route around: enter the room, note the box, break something, return to the box, wait for Granny to inspect, leave.',
            'That loop is boring and it works. The players who get caught are the ones who improvise a hiding spot after the noise.',
          ],
        },
        {
          id: 'advanced',
          heading: 'Small things that add up',
          bullets: [
            'Break the thing nearest the black cat, not the most expensive thing in the room.',
            'Leave a room the way you came in — Granny tends to enter through the other door.',
            'Stay off the stairs when she is on them; there is nowhere to hide on a staircase.',
            'Use the hint key when a run stalls; the game usually has an intended next target.',
            'Open the shop from a box, not from the hallway.',
            'Short runs with clean exits earn more than long runs that end in a scolding.',
          ],
        },
        {
          id: 'practice',
          heading: 'How to practise without losing progress',
          body: [
            'Treat the first two minutes of every session as a free scouting pass: no mischief, just walking Granny’s route and noting box positions. It feels slow, and it is the fastest way to stop dying in the same doorway.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is the best first purchase?',
          answer:
            'The frying pan. It is loud, it is easy to aim and it turns a small prank into the kind of crash Granny actually walks towards.',
        },
        {
          question: 'Should I follow the black cat or lure him?',
          answer:
            'Follow him. There is no reliable way to lead him, so the practical strategy is to stay close and let him choose the room.',
        },
        {
          question: 'Is there a way to reset the house?',
          answer:
            'Restarting the run puts everything back. There is no separate practice mode in the build.',
        },
        {
          question: 'Do the tips work on mobile?',
          answer:
            'Yes — the timing and the routes are identical, only the input changes. The one mobile-specific tip is to force landscape before you start, because rotating mid-run gets you spotted.',
        },
      ],
      related: ['how-to-play', 'controls', 'unblocked'],
    },

    {
      slug: 'unblocked',
      title: 'Cat and Granny Unblocked — Play at School or Work, and Fix Load Errors',
      heading: 'Cat and Granny Unblocked',
      description:
        'Why Cat and Granny runs on most school and work networks, what the browser needs, and how to fix a game that will not load or a black screen in the player.',
      intro:
        'The game is a single embedded canvas rather than a downloaded app, which is why it usually works where app stores and executable downloads do not. Here is what it needs, and what to try when the player stays black.',
      updated: UPDATED,
      schema: 'Article',
      sections: [
        {
          id: 'why',
          heading: 'Why it usually works on a restricted network',
          body: [
            'Nothing is installed and no account is created. The page is plain HTML on GitHub Pages, and the game itself is a WebGL scene fetched over HTTPS from the publisher’s CDN. Filters that block executables, installers or the app stores have nothing to catch.',
            'That said, a network that blocks game categories wholesale will block this one too. If in doubt, open the page and see whether the player reaches the loading logo — if it does, the network is letting the game through.',
          ],
        },
        {
          id: 'requirements',
          heading: 'What the browser needs',
          bullets: [
            'WebGL 2 support — every current version of Chrome, Edge, Firefox and Safari has it.',
            'About 43 MB of download for the first load, then the browser caches it.',
            'JavaScript enabled, and no extension blocking the embedded frame.',
            'A pointer or touchscreen: the game is mouse-look, not keyboard-only.',
          ],
        },
        {
          id: 'black-screen',
          heading: 'Fixing a black screen or an endless logo',
          steps: [
            {
              title: 'Wait thirty seconds',
              text: 'The build is 43 MB. On shared Wi-Fi the logo can sit there for a while before anything appears.',
            },
            {
              title: 'Reload the frame, not just the page',
              text: 'Click the reload button under the player, or open the game in its own tab. A half-finished download can wedge the loader.',
            },
            {
              title: 'Disable the ad blocker for this page',
              text: 'The publisher’s player checks whether its ads can render. A strict blocker can stop the game from starting at all.',
            },
            {
              title: 'Try a different browser',
              text: 'If Safari shows a blank canvas, Chrome or Edge on the same machine usually works; hardware acceleration settings are the usual culprit.',
            },
            {
              title: 'Check that WebGL is on',
              text: 'Open chrome://gpu and look for “WebGL2: Hardware accelerated”. If it says disabled, the browser is the problem, not the site.',
            },
          ],
        },
        {
          id: 'keyboard',
          heading: 'If the keyboard does nothing inside the player',
          body: [
            'Click once inside the game area. Browsers send keyboard input only to a focused frame, so a freshly loaded player ignores WASD until you click it. If a browser extension auto-pauses embedded content, opening the game in a new tab is the quickest workaround.',
          ],
        },
        {
          id: 'alternatives',
          heading: 'If the embed is blocked entirely',
          body: [
            'Some networks block the CDN host rather than the page. In that case the game will not stream here or anywhere else — the honest answer is that you need a different network. The official listing is another route in, but it pulls from the same host.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Is it really unblocked at school?',
          answer:
            'It is unblocked on networks that filter by app store or file type, because nothing is installed. On networks that block game domains by category, it will be blocked like anything else.',
        },
        {
          question: 'Does it need an account?',
          answer:
            'No. There is no sign-in, no email and no profile — the game starts from the player.',
        },
        {
          question: 'Will it run on a Chromebook?',
          answer:
            'Yes. A Chromebook with WebGL2 runs the build fine; the keyboard layout is the standard one the controls page describes.',
        },
        {
          question: 'Why does the game show a logo for so long?',
          answer:
            'That is the publisher’s bridge initialising before the Unity scene starts. It is normal on a cold cache, especially over a slow connection.',
        },
      ],
      related: ['how-to-play', 'controls', 'tips'],
    },

    {
      slug: 'about',
      title: 'About Cat and Granny Online — Who Makes the Game and This Site',
      heading: 'About this site',
      description:
        'Who develops Cat and Granny, how this fan page relates to the official release, what it hosts and what it deliberately does not.',
      intro:
        'Cat and Granny Online is an unofficial fan page: a fast, ad-free-reading wrapper around the official web build, plus written guides for the parts of the game that are not explained anywhere.',
      updated: UPDATED,
      schema: 'Article',
      sections: [
        {
          id: 'game',
          heading: 'The game',
          body: [
            'Cat and Granny is developed by Mirra Games and distributed through Playgama. It is a first-person action game in which you play the household cat, wreck Granny’s house and try to pin the damage on the black kitten she has just adopted.',
            'The web version is a Unity WebGL build of roughly 43 MB. It is monetised with ads inside the player by the publisher; this site adds nothing on top and does not track you.',
          ],
        },
        {
          id: 'site',
          heading: 'What this site is',
          bullets: [
            'A single page that loads the official build in a player, with a fullscreen button.',
            'Written guides to the controls, the blame system and the routes that keep runs alive.',
            'No account system, no newsletter, no analytics script, no cookies of its own.',
            'Not affiliated with Mirra Games or Playgama, and not endorsed by them.',
          ],
        },
        {
          id: 'hosting',
          heading: 'Why the game is streamed rather than hosted here',
          body: [
            'The build is a large 3D bundle that the studio updates. Serving a copy from this repository would mean shipping stale binaries and redistributing someone else’s game files, so the player embeds the publisher’s own URL instead. When the studio patches the game, this site gets the patch on the next page load.',
            'The trade-off is that the game needs a working connection to that CDN — there is no offline mode, here or on the official listing.',
          ],
        },
        {
          id: 'contact',
          heading: 'Corrections and takedown requests',
          body: [
            'If you are the rights holder and would like the embed removed, open an issue on the repository linked in the footer and it will be taken down. The same channel is the right place for factual corrections to the guides: if a control changed or a mechanic was patched, say so and the page will be updated.',
          ],
        },
      ],
      related: ['how-to-play', 'unblocked'],
    },

    {
      slug: 'privacy',
      title: 'Privacy Policy — Cat and Granny Online',
      heading: 'Privacy Policy',
      description:
        'What this site stores (very little), what the embedded game player collects, and how to opt out of the third-party parts.',
      intro:
        'This page is a static site with no backend. It sets no cookies of its own and runs no analytics. The game player inside it, however, is third-party software — that is the part worth reading about.',
      updated: UPDATED,
      schema: 'WebPage',
      sections: [
        {
          id: 'this-site',
          heading: 'What this site collects',
          bullets: [
            'No cookies, no fingerprinting scripts, no analytics, no advertising of our own.',
            'No accounts, so no personal details are ever requested.',
            'GitHub Pages, which serves these files, logs standard request data such as IP address and user agent for operational and security purposes.',
            'Your browser may cache the page and the game bundle locally; that copy never leaves your device.',
          ],
        },
        {
          id: 'game',
          heading: 'The embedded game player',
          body: [
            'The game is served by Playgama and loads from their domain, directly into a frame on this page. Once it starts, it behaves like any third-party site: it can use its own cookies and local storage, and it serves advertising because that is how the studio is paid.',
            'We do not receive, see or store any of that data. What the player records is governed by Playgama’s and the studio’s own policies, linked below.',
          ],
        },
        {
          id: 'third-parties',
          heading: 'Third parties you may be sent to',
          bullets: [
            'Playgama — the player, the ad delivery and the game listing.',
            'Mirra Games — the studio that develops the game.',
            'GitHub — the host serving this site and its repository.',
          ],
        },
        {
          id: 'children',
          heading: 'Children',
          body: [
            'The game is rated E10+ and this site does not knowingly collect information from anyone, of any age — there is no form to fill in. Advertising shown inside the player is controlled by the publisher, so parents should review that separately.',
          ],
        },
        {
          id: 'changes',
          heading: 'Changes',
          body: [
            'If this site ever adds analytics, accounts or its own ads, this page will say so before the change goes live, and the update date at the top will move.',
          ],
        },
      ],
      related: ['terms', 'about'],
    },

    {
      slug: 'terms',
      title: 'Terms of Use — Cat and Granny Online',
      heading: 'Terms of Use',
      description:
        'The short terms for using this fan site: no warranty, the game belongs to its studio, and the guides are provided as-is.',
      intro:
        'Short version: this is an unofficial fan page, the game is somebody else’s property, and nothing here comes with a guarantee. The longer version is below.',
      updated: UPDATED,
      schema: 'WebPage',
      sections: [
        {
          id: 'unofficial',
          heading: 'An unofficial fan site',
          body: [
            'Cat and Granny Online is not affiliated with, endorsed by or operated by Mirra Games or Playgama. All trademarks, game code, artwork and audio belong to their respective owners. The name is used descriptively, to say what the page is about.',
          ],
        },
        {
          id: 'use',
          heading: 'Acceptable use',
          bullets: [
            'Play the game, read the guides, link to the pages — that is what the site is for.',
            'Do not present the guides as official documentation from the studio.',
            'Do not attempt to break, scrape or overload the player or the CDN it streams from.',
            'Do not reuse the site’s own text and design wholesale without asking.',
          ],
        },
        {
          id: 'availability',
          heading: 'Availability and warranty',
          body: [
            'The site is provided as-is, with no warranty of any kind. The game depends on a third-party CDN; if that CDN changes its URLs or goes down, the player here stops working and this page will be updated when it is noticed — not before.',
            'The guides describe the build as it behaves at the date shown on each page. Patches can change controls or mechanics, and the copy may lag behind them.',
          ],
        },
        {
          id: 'liability',
          heading: 'Limitation of liability',
          body: [
            'To the extent permitted by law, this site is not liable for any loss arising from its use, including lost progress in the game, since no progress is stored here in the first place.',
          ],
        },
      ],
      related: ['privacy', 'about'],
    },
  ],
};

export const PAGE_SLUGS = ['how-to-play', 'controls', 'tips', 'unblocked', 'about'] as const;

export function getPage(lang: 'en', slug: string): PageContent | undefined {
  return pages[lang].find((page) => page.slug === slug);
}
