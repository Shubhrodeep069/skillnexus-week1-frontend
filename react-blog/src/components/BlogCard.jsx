function BlogCard({ post }) {
    return (
        <article className="blog-card">

            <div className="blog-card-content">

                <span className="blog-category">
                    {post.category}
                </span>

                <h2>{post.title}</h2>

                <p className="blog-excerpt">
                    {post.excerpt}
                </p>

                <div className="blog-meta">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                </div>

            </div>

        </article>
    );
}

export default BlogCard;