import { useState } from "react";
import BlogCard from "./components/BlogCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import posts from "./data/posts.json";

function App() {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        ...new Set(posts.map((post) => post.category))
    ];

    const filteredPosts = posts.filter((post) => {

        const matchesSearch =
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            post.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="app">

            <header className="blog-header">
                <h1>DevBlog</h1>
                <p>Exploring Web Development, React, JavaScript & AI</p>
            </header>

            <main className="blog-container">

                <SearchBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <section className="blog-grid">

                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                            />
                        ))
                    ) : (
                        <p className="no-results">
                            No blog posts found.
                        </p>
                    )}

                </section>

            </main>

            <footer className="blog-footer">
                <p>© 2026 Shubhrodeep Majumder. All Rights Reserved.</p>
            </footer>

        </div>
    );
}

export default App;