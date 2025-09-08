// Course type definition for the JSON-based course catalog
export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: string;
  duration: string;
  tags: string[];
  date: string;
}
