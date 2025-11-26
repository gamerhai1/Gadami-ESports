export type TournamentStatus = 'upcoming' | 'live' | 'completed';

export type Tournament = {
  slug: string;
  title: string;
  status: TournamentStatus;
  date: string; // ISO
  entryFee: string;
  prizePool: string;
  mapPool: string;
  type: 'Solo' | 'Duo' | 'Squad';
  maxTeams: number;
  region: 'India';
  platform: 'Mobile';
  roomMode: string;
  description: string;
  rules: string[];
  perks: string[];
};

export const tournaments: Tournament[] = [
  {
    slug: 'gadami-ff-pro-cup',
    title: 'Gadami FF Pro Cup',
    status: 'upcoming',
    date: '2025-12-05T20:00:00+05:30',
    entryFee: '₹50 / squad',
    prizePool: '₹3,000',
    mapPool: 'Bermuda • Purgatory • Alpine',
    type: 'Squad',
    maxTeams: 48,
    region: 'India',
    platform: 'Mobile',
    roomMode: 'Custom Room • Competitive lobbies',
    description:
      'Serious competitive lobby for grinders. Points-based finals, no timepass.',
    rules: [
      'Emulator, hack, script strictly not allowed.',
      'No teaming – if caught, instant DQ.',
      'All IGLs must be in WhatsApp/Discord room before start.',
      'Prize via UPI/Paytm within 24 hours after verification.',
    ],
    perks: [
      'Custom room with minimal ping (India region).',
      'Finals match casting on YouTube (optional).',
      'Top fragger & clutch bonus rewards.',
    ],
  },
  {
    slug: 'gadami-ff-night-scrims',
    title: 'Gadami Night Scrims',
    status: 'live',
    date: '2025-11-30T22:30:00+05:30',
    entryFee: 'Free',
    prizePool: 'Practice only',
    mapPool: 'Bermuda',
    type: 'Squad',
    maxTeams: 48,
    region: 'India',
    platform: 'Mobile',
    roomMode: 'Daily custom room grind',
    description:
      'Daily late-night scrims for serious teams. No prize, only hardcore practice.',
    rules: [
      'Teams must check-in 15 minutes before.',
      'Toxic behaviour may lead to ban from future scrims.',
      'One player must stream POV when asked for hack check.',
    ],
    perks: [
      'Daily grind against good teams.',
      'Priority slot in upcoming paid tournaments.',
      'Performance based shoutout on social media.',
    ],
  },
  {
    slug: 'gadami-ff-community-cup',
    title: 'Community Fun Cup',
    status: 'completed',
    date: '2025-11-20T19:30:00+05:30',
    entryFee: '₹20 / squad',
    prizePool: '₹1,000',
    mapPool: 'Random map rotation',
    type: 'Squad',
    maxTeams: 48,
    region: 'India',
    platform: 'Mobile',
    roomMode: 'Fun customs with light rules',
    description:
      'Chill but competitive lobby for upcoming players. Perfect for first-time tournament.',
    rules: [
      'Basic no-hack / no-team rules.',
      'Mic spam & toxicity not allowed.',
      'Room ID & pass shared 10 min before match.',
    ],
    perks: [
      'Beginner friendly tournament.',
      'Highlight worthy clutches shared on socials.',
      'Chance to join Gadami Esports core grind list.',
    ],
  },
];

export type Result = {
  tournamentSlug: string;
  tournamentTitle: string;
  date: string;
  winnerTeam: string;
  runnerUpTeam: string;
  topFragger: string;
  prizeGiven: string;
  notes?: string;
};

export const results: Result[] = [
  {
    tournamentSlug: 'gadami-ff-community-cup',
    tournamentTitle: 'Community Fun Cup',
    date: '2025-11-20',
    winnerTeam: 'Team RageOP',
    runnerUpTeam: 'Squad SilentKill',
    topFragger: 'GX•Mafia (32 kills)',
    prizeGiven: '₹1,000 UPI',
    notes: 'Clutch 1v4 in last zone – highlight posted on Instagram.',
  },
];
