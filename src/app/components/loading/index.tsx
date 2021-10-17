import { Ellipsis } from 'react-awesome-spinners';
import { LoadingAnimation } from './style';

export const Loading = () => {
  return (
    <LoadingAnimation>
      <Ellipsis color="yellow" />
    </LoadingAnimation>
  );
};
