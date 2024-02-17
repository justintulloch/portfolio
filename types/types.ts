export type userTypes = {
  username: string;
  ranking: number;
  reputation: number;
};

export type subTypes = {
  lang: string;
};

export type solvedTypes = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

export type projectTypes = {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  build: string;
  link: string;
  content: string;
};
