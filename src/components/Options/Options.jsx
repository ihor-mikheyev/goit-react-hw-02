export default function Options({ counter, condition, reset}) {
    
    return (<div>
        <button onClick={ ()=>counter('good')
        }>Good</button>
        <button onClick={ ()=>counter('neutral')
        }>Neutral</button>
        <button onClick={ ()=>counter('bad')
        }>Bad</button>
        { condition > 0 && <button onClick={() =>reset()}>Reset</button> }
    </div>)
}