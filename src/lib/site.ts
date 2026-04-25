// Centralized site content scraped verbatim from learningworldmontessori.co.uk
// Edit fees, whatsapp, address here when the owner provides them.

export const SITE = {
  name: "Learning World Montessori",
  shortName: "LWM",
  tagline: "An OFSTED registered Montessori in Croydon, UK",
  // Placeholder — replace with real number from owner. Format: international, no leading +
  whatsappNumber: "447000000000",
  whatsappMessage: "Hello! I'd like to enquire about Learning World Montessori.",
  email: "info@learningworldmontessori.co.uk",
  phone: "+44 7000 000 000", // placeholder
  address: {
    line1: "Coombe Road",
    line2: "Croydon, UK",
    note: "Located near the roundabout where Park Hill Road meets Coombe Road, in the vicinity of Lloyd Park.",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/channel/UCnYMfBgIuXzy_LZEAHY_XXg",
  },
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/fees", label: "Fees" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const PILLARS = [
  {
    title: "Quality Day Care",
    body: "A vibrant, nurturing setting designed for effective learning and growth.",
  },
  {
    title: "OFSTED Registered",
    body: "Inspected and registered with OFSTED for assured standards of care.",
  },
  {
    title: "Home-made Food",
    body: "Freshly prepared vegetarian meals served daily, with care and warmth.",
  },
  {
    title: "Funding Available",
    body: "We accept government funding to support eligible families.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Kalyani Anish",
    image: "https://file-hosting.dashnexpages.net/learningworldmontessori/Images/kalyani.jpg",
    quote:
      "Great place for kids!! Nikki and Ms.D are awesome teachers. I am happy with the way they care for the kids. Highly recommended.",
  },
  {
    name: "Maria & Kuba",
    image: "https://file-hosting.dashnexpages.net/learningworldmontessori/Images/maria-kuba.jpg",
    quote:
      "We are very happy to bring our daughter Sara here. After coming back home, she is all day talking about Nikki and what they have done. Thanks to her, the team and all the love she gives to the children.",
  },
  {
    name: "Sanjana & Xio",
    image: "https://file-hosting.dashnexpages.net/learningworldmontessori/Images/xio.jpg",
    quote:
      "Our daughter joined Nikki's Learning World Montessori (LWM) when she was around 2.5 years old and over the past year, we have seen her develop into an adventurous young girl who is not only confident & articulate but also keen to explore her surroundings and is enthusiastic to learn by experience. Thank you to Nikki and team.",
  },
  {
    name: "Sneha Shreyasi",
    image: "https://file-hosting.dashnexpages.net/learningworldmontessori/Images/shreyasi.png",
    quote:
      "My son has been going here for almost a month and I already see some significant improvements in him. Nikki is very passionate about her nursery and it does show in the activities and growth of kids. My kid goes and firstly hugs her every morning which says it all..!! Big thumbs up.",
  },
  {
    name: "Avneet Kaur",
    image: "https://file-hosting.dashnexpages.net/learningworldmontessori/Images/avneet.jpg",
    quote:
      "My daughter has been going to Nikki since she was just 2 years old. When I first met her I was quite unsure about how my little one will adjust. Nikki was very clear & confident and gave me a detailed settling in plan. As a parent, that's such a relief and it feels like I am just leaving her behind in another home.",
  },
  {
    name: "Lokesh & Neelam",
    image: "https://file-hosting.dashnexpages.net/learningworldmontessori/Images/neelam.jpg",
    quote:
      "A very calm, homely, nourishing and loving atmosphere for kids. There are numerous in and outdoor activities for kids to learn, including music and yoga, plus freshly home made vegetarian meals everyday. Our daughter has been going there for past 3 years.",
  },
] as const;

const CDN = "https://file-hosting.dashnexpages.net/learningworldmontessori";

export const CLASSROOM_IMAGES = [
  "Class/a14.jpeg","Class/pas.jpeg","Class/11.jpeg","Class/18.jpeg","Class/5.jpeg",
  "Class/8.jpeg","Class/nut.jpeg","Class/30.jpeg","Class/b5.jpeg","Class/1.jpeg",
  "Class/54.jpeg","Class/maths.jpeg","Class/16.jpeg","Class/22.jpeg","Class/body.jpg",
  "Class/art.jpeg","Class/9.jpeg","Class/14.jpeg","Class/b3.jpeg","Class/19.jpg",
  "Class/20.jpeg","Class/b2.jpeg","Class/23.jpeg","Class/13.jpeg","Class/12.jpeg",
  "Class/nadia.jpeg","Class/13.jpg","Class/39.jpeg","Class/43.jpeg","Class/10.jpeg",
  "Class/14.jpg","Class/56.jpeg","Class/b4.jpeg","Class/15.jpeg","Class/6.jpeg",
  "Class/3.jpeg","Class/24.JPG","Class/4.jpeg","Class/21.jpeg","Class/7.jpeg",
  "Class/25.jpg","Class/27.jpeg","Class/art3.jpeg","Class/26.jpeg","Class/2.JPG",
].map((p) => `${CDN}/${p}`);

export const OUTDOOR_IMAGES = [
  "Outdoor/25.JPG","Outdoor/t-3.jpeg","Outdoor/19.jpg","Outdoor/a12.jpeg","Outdoor/36.jpeg",
  "Outdoor/16.jpg","Outdoor/tennis.jpeg","Outdoor/7.jpeg","Outdoor/cl.jpeg","Outdoor/18.jpg",
  "Outdoor/28.JPG","Outdoor/a6.jpeg","Outdoor/6.jpeg","Outdoor/13.JPG","Outdoor/t-1.jpeg",
  "Outdoor/t-2.jpeg","Outdoor/10.jpeg","Outdoor/a10.jpeg","Outdoor/zumba.jpeg","Outdoor/20.jpg",
  "Outdoor/1.jpg","Outdoor/21.JPG","Outdoor/a17.jpeg","Outdoor/2.jpg","Outdoor/14.jpeg",
  "Outdoor/a16.jpeg","Outdoor/17.jpg","Outdoor/3.jpg","Outdoor/a21.jpeg","Outdoor/music.jpeg",
  "Outdoor/farm.jpg","Outdoor/5.JPG","Outdoor/a4.jpeg","Outdoor/29.jpeg","Outdoor/55.JPG",
  "Outdoor/4.JPG","Outdoor/a13.jpeg","Outdoor/41.jpeg","Outdoor/11.JPG","Outdoor/26.jpg",
  "Outdoor/31.jpeg","Outdoor/5.jpeg","Outdoor/b3.jpeg",
].map((p) => `${CDN}/${p}`);

export const FUN_IMAGES = [
  "Fun/51.jpeg","Fun/6.jpeg","Fun/4.jpeg","Fun/a15.jpeg","Fun/3.jpeg","Fun/7.JPG",
  "Fun/a1.jpeg","Fun/a7.jpeg","Fun/contact.jpeg","Fun/1.jpeg","Fun/46.jpeg","Fun/bb.jpg",
  "Fun/10.jpeg","Fun/a5.jpeg","Fun/43.jpeg","Fun/44.jpeg","Fun/45.jpeg","Fun/11.jpeg",
  "Fun/55.jpeg","Fun/a3.jpeg","Fun/9.jpeg","Fun/8.jpeg",
].map((p) => `${CDN}/${p}`);

export const HUG_IMAGE = `${CDN}/Images/hug.jpeg`;

// Hero uses the same warm classroom image style as the original site.
export const HERO_IMAGE = `${CDN}/Class/a14.jpeg`;
export const ABOUT_IMAGE = `${CDN}/Class/art.jpeg`;
export const APPROACH_IMAGE = `${CDN}/Class/nut.jpeg`;

export const FEES_TIERS = [
  {
    name: "Half Day",
    hours: "8:00 — 13:00",
    priceLabel: "£ —",
    perks: [
      "Morning Montessori sessions",
      "Snack and home-made lunch",
      "Outdoor play in Lloyd Park",
      "Available 5 days a week",
    ],
  },
  {
    name: "Full Day",
    hours: "8:00 — 18:00",
    priceLabel: "£ —",
    perks: [
      "Full Montessori curriculum",
      "All meals home-made on site",
      "Indoor + outdoor & club activities",
      "Most popular — recommended",
    ],
    featured: true,
  },
  {
    name: "Extended",
    hours: "Bespoke hours",
    priceLabel: "£ —",
    perks: [
      "Tailored to family schedules",
      "Extra-curricular clubs included",
      "Funded places available",
      "Flexible drop-off & pickup",
    ],
  },
] as const;
