export interface IPosts {
  id: string | number;
  name: string;
  surname: string;
  desc: string;
}

export interface IPost {
  name: string;
  surname: string;
  desc: string;
}

export interface IPaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate(number: number): void;
}
