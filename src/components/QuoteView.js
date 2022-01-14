export default function QuoteView({
    text,
    citation,
    click,
    ...props
}){
    return(
    <blockquote className="blockquote">
        <p onClick={click} className="blockquote-text">{text}</p>
        <footer className="blockquote-footer"><cite title={citation}>{citation}</cite></footer>
    </blockquote>
    )
}