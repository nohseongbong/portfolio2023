export type Skill = {
  name: string;
  image: string;
  type: string;
};
export type Tool = {
  name: string;
  image: string;
  type: string;
};

export type User = {
  name: string;
  age: number;
  mbti: string;
  image: string;
  skill: Skill[];
  tool: Tool[];
};
