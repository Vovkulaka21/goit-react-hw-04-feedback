import css from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) =>
{
    return ( 
    <> 
    <ul className={css.resultlist}>
      <li>Good: {good}</li>
      <li>Netural: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
    </ul>
    <p className={css.result}>Positive Feedback {positivePercentage} %</p>
    </> )     
}

export default Statistics