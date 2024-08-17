export default function Feedback({ object: { good, neutral, bad }, total, positive }) {
    return <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        {total > 0 && <p>Total: {total}</p>}
        {positive > 0 && <p>Positive: { positive}% </p>}
    </div>
}