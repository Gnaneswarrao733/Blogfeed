import React, { useState, useEffect } from 'react';

const Blogfeed = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        const samplePosts = [
            { id: 1, title: 'Slide Through Unlimited Dimensions With CSS Scroll Timelines', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2024/09/scroll-timeline-x-wing.jpg?resize=1024%2C512&ssl=1', 
                excerpt: 'The creator of CSS has said he originally envisaged CSS as the main web technology to control behavior on web pages...' },
            { id: 2, title: 'Build products efficiently', image: 'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DanielleHassan/dev-minisite/Team_dashboard.png', 
                excerpt: 'Plan roadmaps, manage progress, and enable seamless collaboration from R&D to Marketing.' },
            { id: 3, title: 'How To Start A Travel Blog (2024 Guide)', image: 'https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/09/how_to_start_a_travel_blog_-_article_image.jpg', 
                excerpt: 'If you’re passionate about traveling and want to share your experiences with the world...' },
            { id: 4, title: 'Choose a Blogging Host and Platform', image: 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2022/09/travel_blog_2.jpg', 
                excerpt: 'A blog’s host is the parent platform you choose to create, manage and support your site...' },
            { id: 5, title: 'Photography ', image: 'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
                excerpt: 'Many Indigenous communities of the world see their territories, communities, water, and non-human beings as “sacred.”' },
            { id: 6, title: 'Cozy Corners', image: 'https://images.pexels.com/photos/6332/coffee-cup-books-home.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                excerpt: 'Furthermore, they will look to you for guidance, especially if they are not a model...' },
        ];
        
        setPosts(samplePosts);
        setFilteredPosts(samplePosts);
    }, []);

    useEffect(() => {
        if (searchTerm) {
            setFilteredPosts(
                posts.filter(post =>
                    post.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFilteredPosts(posts);
        }
    }, [searchTerm, posts]);

    return (
        <div className="app-container">
            {/* Navbar */}
            <nav className="navbar">
                <h2>My Blog</h2>
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

            <div className="content">
                <div className="blog-feed">
                    {filteredPosts.map(post => (
                        <div className="blog-post" key={post.id}>
                            <h2>{post.title}</h2>
                            <img src={post.image} alt={post.title} />
                            <p>{post.excerpt}</p>
                            <a href={`/post/${post.id}`}>Read More</a>
                        </div>
                    ))}
                </div>

                <div className="sidebar">
                    <div className="categories">
                        <h3>Categories</h3>
                        {['Technology', 'Travel', 'Lifestyle'].map(category => (
                            <button key={category} style={{ margin: '5px' }}>{category}</button>
                        ))}
                    </div>

                    <h3>Recent Posts</h3>
                    {posts.slice(0, 5).map(post => (
                        <div key={post.id}>
                            <a href={`/post/${post.id}`}>{post.title}</a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Blogfeed;
