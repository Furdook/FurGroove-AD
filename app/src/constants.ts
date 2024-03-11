const navigation = [
  {
    title: "Information",
    link: "../#info",
  },
  {
    title: "Location",
    link: "../#location",
  },
  {
    title: "Tickets",
    link: "../#tickets",
  },
  {
    title: "Artists",
    link: "../#artists",
  },
  {
    title: "Terms of Service",
    link: "../#tos",
  },
  {
    title: "Team",
    link: "/team",
  },
  {
    title: "Contact",
    link: "#footer",
  },
];

const tickets = [
  {
    type: "Early Bird",
    colour: "bg-primary-600",
    price: "€ 15,-",
    size: "w-[100%]",
  },
  {
    type: "Standard",
    colour: "bg-primary-700",
    price: "€ 20,-",
    size: "w-[80%]",
  },
  {
    type: "Late Bird",
    colour: "bg-primary-800",
    price: "€ 25,-",
    size: "w-[60%]",
  },
];

const socials: { [key: string]: { link: string; logo: string } } = {
  twitter: {
    link: "https://twitter.com/",
    logo: "/x.jpg",
  },
  bluesky: {
    link: "https://bsky.app/profile/",
    logo: "/bsky.jpg",
  },
  mastodon: {
    link: "test/",
    logo: "",
  },
};

const artists = [
  {
    name: "Menos",
    quote:
      "One of our Dutch DJ's that will end the evening with one mission; Make everyone like hardstyle! Get ready for some bangers, sing-a-longs and a bass that will blow you away.",
    position: "Hardstyle",
    image: "/menos.webp",
    socials: null,
  },
];

const team = [
  {
    name: "Hunter",
    quote: "Dutch Boy liking big things",
    position: "Event Organiser",
    image: "/hunter.jpg",
    socials: {
      twitter: "HunterHuskyNL",
      bluesky: "hunterhuskynl.bsky.social",
    },
  },
  {
    name: "Mai Tai",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
    position: "Web Developer",
    image: "/mai.jpeg",
    socials: { twitter: "MoreMaiTai", bluesky: "maitai.social" },
  },
  {
    name: "Jay the Wolf",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
    position: "Finance",
    image: "/jay.webp",
    socials: { twitter: "MoreMaiTai", bluesky: "maitai.social" },
  },
  {
    name: "Archomeda",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",
    position: "Registration",
    image: "/arch.webp",
    socials: { twitter: "MoreMaiTai", bluesky: "maitai.social" },
  },
  {
    name: "Menos",
    quote: "Bark bark bark bark bark bark bark bark bark bark bark bark",
    position: "Huisdier",
    image: "/menos.webp",
    socials: null,
  },
];

const gallery = [
  {
    title: "T-shirt Design",
    createdBy: "FurGroove",
    image: "/mai.jpeg",
  },
  {
    title: "T-shirt Design",
    createdBy: "FurGroove",
    image: "/hunter.jpg",
  },
  {
    title: "T-shirt Design",
    createdBy: "FurGroove",
    image: "/test.webp",
  },
  {
    title: "T-shirt Design",
    createdBy: "FurGroove",
    image: "/hunter.jpg",
  },
  {
    title: "T-shirt Design",
    createdBy: "FurGroove",
    image: "/hunter.jpg",
  },
];

const tos = [
  {
    title: "Registration",
    content: [
      "You have to be at least 18 on the day of the party to attend.",
      "Only staff and registered attendees are allowed inside the location.",
      "After ticket inspection you get a wristband. Losing this wristband means no more access!",
    ],
  },
  {
    title: "Venue Rules",
    content: [
      "It is not allowed to climb over any railings or walk on parts that are off limits for attendees.",
      "It is not allowed to bring your own beverages or food to the party.",
      "It is not allowed to smoke outside of the designated smoke area.",
      "Please do not use personal music players while at the location. We have music for a reason.",
    ],
  },
  {
    title: "Clothing and Decency",
    content: [
      "No bare genitals / buttocks, fake or real.",
      "Sexual behavior that goes beyond a mere display of affection is not allowed in public.",
      "No floggers/paddles or other devices. Same goes for inflatables.",
    ],
  },
  {
    title: "Drugs and Alcohol",
    content: `It is forbidden to bring or use drugs to the party.
              If we find you in the possession of or distributing illegal or controlled substances we will notify the local authorities and the venue FORT33.
              Smoking and vaping is only allowed in the designated smoking areas.`,
  },
  {
    title: "Photography and Video",
    content:
      "Everyone is welcome to take pictures and capture memories for private use. Selling or using the videos and pictures for profitable companies is not allowed.",
  },
];

export { tos, gallery, team, artists, navigation, socials, tickets };
