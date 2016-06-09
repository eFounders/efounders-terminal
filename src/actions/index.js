const logoCommandLines = () => ([
  '    ▄▄▓▓▓▓▓▓▓▓▄▄    ',
  '  ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄  ',
  ' ▓▓▓▓▓▓▀▀  ▀▀▓▓▓▓▓▓ ',
  '▓▓▓▓▓▀  ▄▄▄   ▀▓▓▓▓▓',
  '▓▓▓▓▓   ▓  ▄▄█▀▓▓▓▓▓',
  '█▓▓▓▓▄  ▀▀▀▀  ▄▓▓▓▓▓',
  ' ▓▓▓▓▓▓▄▄  ▄▄▓▓▓▓▓▓ ',
  '  ▀▓▓▓▓▓▓▓▓▓▓▓▓▓▓▀  ',
  '    ▀▀█▓▓▓▓▓▓█▀▀    ',
  ' ',
].map((line) => ({ color: '#40d140', value: line })));

const welcomeCommandLines = () => ([
  'Welcome to eFounders’ Hacker Program',
  ' ',
  `Our intensive Hacker Program is the ideal way to learn how to build SaaS companies the eFounders
way, while also benefiting from our experience, a competitive salary and cool perks.`,
  ' ',
  `For a 6-month period, you will experiment, prototype, develop proofs of concept and work with
our early-stage startups.`,
  ' ',
  'Once you completed the program, you will either:',
  '  - get the opportunity to join one of our youngest startups',
  '  - get a recommendation for one of our portfolio startups',
  '  - join eFounders and build your own company as a Technical Co-Founder',
  ' ',
]);

const helpCommandLines = () => ([
  'Usage: efounders COMMAND',
  ' ',
  'An interactive presentation of eFounders’ Hacker Program',
  ' ',
  'Commands:',
  '  welcome             Discover the hacker program',
  '  why                 Why join us?',
  '  stack               Check our stack',
  '  events              Meet industry influencers',
  '  syntax-error        What you’ll never hear at efounders',
  '  apply               First step to get the job',
  '  requirements        What we’re looking for',
  '  benefits            What you’ll get',
  '  testimonials        See what our current devs have to say',
  ' ',
]);

const whyCommandLines = () => ([
  `Our Hacker Program works as a talent incubator providing you with all the resources and support
you need to do great work that makes a difference.`,
  ' ',
  'Freedom:',
  `Forget about your previous experiences. At eFounders you don’t have a defined, inflexible job
role. You will work on projects you like and get inspired every day.`,
  ' ',
  'Excitement:',
  `Our Hackers work on multiple startups and products with renowned experts – every day brings new
challenges and you’ll have no time to get bored!`,
  ' ',
  'Learning Environment:',
  `Work hand in hand with experienced CTOs on the most recent technologies (e.g. React, Meteor &
Swift). Experiment with innovative ideas, infiltrate our, ecosystem of founders and attend sharp
tech events.`,
  ' ',
]);

const stackCommandLines = () => ([
  `We are open to all technologies and can’t stop testing new frameworks. Those are the ones we use
at eFounders, but we’re always on the lookout for new cool things to try. When we’re not busy
coding, we like attending conferences, tech events and insider after-work drinks, as well as
organizing hackathons.`,
  { href: 'https://github.com/efounders' },
  { href: 'http://stackshare.io/efounders/efounders' },
  ' ',
]);

const eventsCommandLines = () => ([
  `We like to dive deep into specific subjects. That’s why we invite international experts, makers
and tech speakers from GitHub, Slack, Trello or YC to discuss startup trends, creativity, hosting
platforms and other exciting stuff.`,
  { href: 'http://insiders.efounders.co/' },
  ' ',
]);

const syntaxErrorCommandLines = () => ([
  '"The printer is broken. Can you take a look?"',
  '"Let’s ship this on Friday at 5pm"',
  '"Stop everything and fix that bug. It will only take 5 minutes!"',
  '"It doesn’t work on Windows Phone"',
  ' ',
]);

const requirementsCommandLines = () => ([
  'We’re looking for:',
  '  - Nice people with a great team spirit',
  `  - Experience in developing, releasing and maintaining web and native applications under
pressure`,
  '  - Full-stack technology experience (front and back end)',
  '  - Deep understanding of Javascript',
  '  - Contribution to open-source projects',
  ' ',
]);

const benefitsCommandLines = () => ([
  'What you’ll get in return:',
  '  - A competitive salary, based on experience',
  '  - Great equipment: sweet new Mac, surprise gifts and your eFounders hoodie',
  '  - A bunch of snacks while you work',
  `  - An incredible team of hackers and hustlers - You won’t (always) be the smartest person in
the room and you’ll love it!`,
  '  - Fun times: Friday beers, ping-pong, drone testing, team retreats & more',
  ' ',
]);

const applyCommandLines = () => ([
  { href: 'https://efounders.workable.com/jobs/139423/?ref=websiteHackers' },
  `We are looking for top notch developers to join our Hacker Program and we think that the best
engineers deserve a competitive salary and exciting perks - that’s where we come in.`,
  ' ',
]);

const testimonialsCommandLines = () => ([
  `"For 6 month I worked with CTOs and product specialists to develop 3 new applications on Meteor
and the greater JS ecosystem (e.g. React, Node & Electron). After the 6-month program, I joined the
eFounders team to help our companies write the best possible code!"`,
  'Simon Arvaux, Full-Stack Developer at eFounders',
  { href: 'http://stackoverflow.com/users/2530970/saimeunt' },
  ' ',
  `"Working hand in hand with talented engineers taught me the best way to build a MVP and gave me
the opportunity to join Spendesk in the early days of the project."`,
  'Guilhem Bellion, Full-Stack Developer at Spendesk',
  { href: 'https://github.com/guilhembellion' },
  { href: 'https://www.spendesk.com/' },
  ' ',
  `"We set up a very efficient workflow with continuous iterations - it helped us stay productive
and focus on delivering value from Day 1."`,
  'Xavier Durand, Lead Developer at Aircall',
  { href: 'https://github.com/xdurand' },
  { href: 'https://aircall.io/' },
  ' ',
]);

const unknownCommandLines = (arg) => ([
  `efounders: '${arg}' is not an efounders command.`,
  'See \'efounders help\'.',
]);

const efoundersCommandLines = (command, args) => {
  const [arg = ''] = args;
  switch (arg) {
    case 'help':case '': {
      return helpCommandLines();
    }
    case 'logo': {
      return logoCommandLines();
    }
    case 'welcome': {
      return welcomeCommandLines();
    }
    case 'why': {
      return whyCommandLines();
    }
    case 'stack': {
      return stackCommandLines();
    }
    case 'events': {
      return eventsCommandLines();
    }
    case 'syntax-error': {
      return syntaxErrorCommandLines();
    }
    case 'requirements': {
      return requirementsCommandLines();
    }
    case 'benefits': {
      return benefitsCommandLines();
    }
    case 'apply': {
      return applyCommandLines();
    }
    case 'testimonials': {
      return testimonialsCommandLines();
    }
    default: {
      return unknownCommandLines(arg);
    }
  }
};

const shrugCommandLines = () => (['¯\\_(ツ)_/¯']);

const emptyCommandLines = () => ([]);

const notFoundCommandLines = (program) => ([`bash: ${program}: command not found`]);

const parseCommand = (command) => {
  const [program, ...args] = command.split(' ');
  switch (program) {
    case 'efounders': {
      return efoundersCommandLines(command, args);
    }
    case 'shrug': {
      return shrugCommandLines();
    }
    case '': {
      return emptyCommandLines();
    }
    default: {
      return notFoundCommandLines(program);
    }
  }
};

const executeCommand = (command) => ({
  type: 'EXECUTE_COMMAND',
  lines: [
    `efounders.co:website hacker$ ${command}`,
    ...parseCommand(command),
  ],
});

const caretLeft = () => ({ type: 'CARET_LEFT' });

const caretRight = () => ({ type: 'CARET_RIGHT' });

const historyPrevious = () => ({ type: 'HISTORY_PREVIOUS' });

const historyNext = () => ({ type: 'HISTORY_NEXT' });

const typeCommand = (value) => ({
  type: 'TYPE_COMMAND',
  value,
});

export { executeCommand, caretLeft, caretRight, historyPrevious, historyNext, typeCommand };
