import { Vortex } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';


export default function Loader ()  {
  return (
    <div className={css.wrapper}>
      <Vortex
  visible={true}
  height="150"
  width="150"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
    </div>
  );
};
