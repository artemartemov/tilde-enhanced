const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Google',
      key: '*',
      url: 'https://google.com',
      search: '/search?q={}'
    },
    {
      category: 'General',
      name: 'Drive',
      key: 'd',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: false,
    },

    {
      category: 'Programming',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'StackOverflow',
      key: 'st',
      url: 'https://stackoverflow.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: 'stackoverflow',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'HackerNews',
      key: 'h',
      url: 'https://news.ycombinator.com/',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'hackernews',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'MDN',
      key: 'md',
      url: 'https://developer.mozilla.org/en-US',
      search: '/search?q={}',
      color: '#212121',
      icon: 'mdn',
      quickLaunch: false,
    },
    {
      category: 'Programming',
      name: 'DevDocs',
      key: 'dd',
      url: 'https://devdocs.io',
      color: 'linear-gradient(135deg, #33373A, #484949)',
      icon: 'devdocs',
      quickLaunch: false,
	},
	{
		category: 'Programming',
		name: 'Netlify',
		key: 'n',
		url: 'https://app.netlify.com/teams/artem/sites',
		color: '#D3F6EF',
		icon: 'netlify',
		quickLaunch: true,
	},
	{
		category: 'Programming',
		name: 'Sanity - Manage',
		key: 'sanm',
		url: 'https://manage.sanity.io/',
		color: 'linear-gradient(135deg, #fa1607, #fc8a83)',
		icon: 'sanity',
		quickLaunch: true,
	},
    {
      category: 'Fun',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Netflix',
      key: 'net',
      url: 'https://www.netflix.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },


    {
      category: 'Other',
      name: 'Twitter',
      key: 't',
      url: 'https://www.twitter.com',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'twitter',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Instagram',
      key: 'i',
      url: 'https://www.instagram.com',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'LinkedIn',
      key: 'l',
      url: 'https://linkedin.com',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Notion',
      key: 'ns',
      url: 'https://www.notion.so',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'notion',
      quickLaunch: true,
	},
	{
		category: 'Other',
		name: 'Jira',
		key: 'j',
		url: 'https://thetower.atlassian.net',
		search: '/browse/{}',
		color: 'linear-gradient(135deg, #FFF, #0052cc)',
		icon: 'Jira',
		quickLaunch: true,
	  },
	  {
		category: 'Design',
		name: 'Figma',
		key: 'f',
		url: 'https://figma.com',
		color: 'linear-gradient(135deg, #5651FF, #7043A8)',
		icon: 'Figma',
		quickLaunch: true,
	  },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
	r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
	n: ['netlify'],
	j: ['jira', 'https://thetower.atlassian.net/secure/RapidBoard.jspa?rapidView=761&projectKey=DITTO&selectedIssue=DITTO-251'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: false,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
