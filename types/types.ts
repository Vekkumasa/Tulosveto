export type APIResponse = {
  api: {
    fixtures: Fixture[];
    results: number;
  };
};

export type Fixture = {
  awayTeam: Team;
  elapsed: number;
  event_date: string;
  event_timestamp: number;
  firstHalfStart: number;
  fixture_id: number;
  goalsAwayTeam: number;
  goalsHomeTeam: number;
  homeTeam: Team;
  league: League;
  league_id: number;
  referee: string;
  round: string;
  score: Score;
  secondHalfStart: number;
  status: string;
  statusShort: string;
  venue: string;
};

export type Team = {
  logo: string;
  team_id: number;
  team_name: string;
};

type League = {
  country: string;
  flag: string | null;
  logo: string;
  name: string;
};

type Score = {
  extratime: string;
  fulltime: string;
  halftime: string;
  penalty: string;
};

export type Goals = {
  home: number | 'TBA' | null;
  away: number | 'TBA' | null;
};
