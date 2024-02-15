
import css from './Section.module.css'

const Section = ({title, children}) => {

    return (

        <section className={css.section}>
        {title}
        {children}
        </section>
        
    )

}



export default Section