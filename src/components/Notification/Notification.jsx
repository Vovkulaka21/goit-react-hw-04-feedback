
import css from './Notification.module.css'

const Notification = ({message}) => {

    return(

        <p className={css.warning}>{message}</p>
        
    )

}

export default Notification