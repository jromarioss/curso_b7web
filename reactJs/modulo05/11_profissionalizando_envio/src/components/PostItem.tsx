import { Post } from '../types/Posts'

type Props = {
  data: Post;
}

export const PostItem = ({ data }: Props) => {
  return (
    <div className="mb-4 border-2 p-3">
      <h4 className="font-bold">{ data.title }</h4>
      <small># { data.id } - Usuário: { data.userId }</small>
      <p>{ data.body }</p>
    </div>
  );
}