export interface ICourse {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export interface ICourseData {
  data: ICourse[];
  tags: string[];
}
