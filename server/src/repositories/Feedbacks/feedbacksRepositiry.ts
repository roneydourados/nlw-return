export interface FeedbacksRepositoryProps {
  id?: string;
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  store: (data: FeedbacksRepositoryProps) => Promise<FeedbacksRepositoryProps>;
  update: (data: FeedbacksRepositoryProps) => Promise<FeedbacksRepositoryProps>;
  index: () => Promise<FeedbacksRepositoryProps[]>;
  show: (id: string) => Promise<FeedbacksRepositoryProps | null>;
  delete: (id: string) => Promise<void>;
}
