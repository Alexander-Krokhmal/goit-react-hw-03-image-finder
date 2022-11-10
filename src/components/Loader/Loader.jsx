import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader = () => {
  return (
      <div className={css.Loader}>
      <ThreeDots
        // position="bottom-center"
        // height="80"
        // width="80"
        // radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        // wrapperStyle={{}}
        // wrapperClassName="spinner"
        // visible={true}
          />
      </div>
  );
};
