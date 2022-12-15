export type State = {
  topic: string;
};

export type Action = {
  setSelectedTopic: (topic: string) => void;
};
