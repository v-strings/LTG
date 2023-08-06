const header = 'Welcome to this wonderful example timeline.';
const footer = 'A footer goes here.';
const entries = [
  {
    id: '25c2ada0-cf85-4144-9e33-3576d75b250c',
    categories: ['ban'],
    color: 'purple',
    faicon: 'ban',
    datetime: '2020-04-23 05:37',
    title: 'Capcom bans CeroBlast, Low Tier God from all events',
    image: {
      link: 'https://dotesports.com/fgc/news/capcom-bans-ceroblast-low-tier-god-from-all-events',
      src: 'https://pbs.twimg.com/media/EWUo54TU0AApQmF?format=jpg&name=medium',
      alt: 'Capcom ban message',
      caption: 'Capcom ban statement',
    },
    body: "Capcom has been made aware of a situation where Dalauan “LowTierGod” Sparrow and Christina “CeroBlast” Tran have made offensive statements online,” Capcom said. “This is a clear violation of Capcom’s player code of conduct, so we have concluded that we have no choice but to ban LowTierGod and CeroBlast from all Capcom-owned and/or operated events, including Capcom Pro Tour and Street Fighter League until further notice.”",
    links: [
      {
        href: 'https://twitter.com/CapcomFighters/status/1253453087747878912?s=19',
        linkText: 'Tweet by Capcom',
      },
	   {
        href: 'https://dotesports.com/fgc/news/capcom-bans-ceroblast-low-tier-god-from-all-events',
        linkText: 'Article by dotesports',
      },
    ],
  },
  {
    id: 'd29c1de3-a454-488c-8c8d-8dbc15ad18e8',
    categories: ['dox'],
    color: 'black',
    faicon: 'unlock',
    date: '2020-05-01',
    title: 'Dale Wilson doxes Trevor Belmont .',
    image: {
      link: 'https://static.wikia.nocookie.net/castlevania/images/3/3e/Trevor_Belmont_%28animated_series%29_-_06.jpg/revision/latest?cb=20181028200147',
      src: 'https://static.wikia.nocookie.net/castlevania/images/3/3e/Trevor_Belmont_%28animated_series%29_-_06.jpg/revision/latest?cb=20181028200147',
      alt: 'Trevor Belmont',
      caption: 'Trevor Belmont!',
    },
    body: 'On November 28, 2020, Dale Wilson doxxed Trevor Belmont during a live stream, revealing his personal information, including his address and residence.',
	links: [
      {
        href: 'https://twitter.com/Trevor__Belmont/status/1332949952666824710',
        linkText: 'Tweet by Trevor Belmont',
      },
    ],
  },
  {
    id: 'dog',
    categories: ['dog'],
    color: 'black',
    faicon: 'dog',
    datetime: '2021-05-01 23:55',
	date: '2021-05-01 23:55',
    title: 'Puppies are great too',
    image: {
      link: 'http://place-puppy.com',
      src: 'https://place-puppy.com/300x300',
      alt: 'A placeholder puppy',
      caption: 'Puppy!',
    },
    body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Dog',
        linkText: 'Dog',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
	  filtersArray.sort(function(a,b){
	  // Turn your strings into dates, and then subtract them
	  // to get a value that is either negative, positive, or zero.
	  return new Date(b.datetime) - new Date(a.datetime);
	});
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
