import css from '../ErrorMessage/ErrorMessage.module.css';


export default function ErrorMessage() {
    return (
      <div className={css.message}>
        <p>Sorry, something went wrong!<br/>
        Please try again later!
        </p>
      </div>
    )
  }