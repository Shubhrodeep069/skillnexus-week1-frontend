function Card({ title, description, category }) {
    return (
        <article className="card">
            <p className="card-category">{category}</p>

            <h2>{title}</h2>

            <p>{description}</p>
        </article>
    );
}

export default Card;