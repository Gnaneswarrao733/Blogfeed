import React, { useState, useEffect } from 'react';


const Blogfeed = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        // Sample data for demonstration
        const samplePosts = [
            { id: 1, title: 'Slide Through Unlimited Dimensions With CSS Scroll Timelines', image: 'https://i0.wp.com/css-tricks.com/wp-content/uploads/2024/09/scroll-timeline-x-wing.jpg?resize=1024%2C512&ssl=1', 
                excerpt: 'The creator of CSS has said he originally envisaged CSS as the main web technology to control behavior on web pages, with scripting as a fallback when things weren’t possible declaratively in CSS. The rationale for a CSS-first approach was that “scripting is programming and programming is hard.” Since introducing the :hover pseudo-class, CSS has been standardizing patterns developers create in JavaScript and “harvesting” them into CSS standards. When you think about it like that, it’s almost as if JavaScript is the hack and CSS is the official way.' },
            { id: 2, title: 'Build products efficiently', image: 'https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DanielleHassan/dev-minisite/Team_dashboard.png', 
                excerpt: 'Plan roadmaps, manage progress, and enable seamless collaboration from R&D to Marketing. Problem-solve and adapt to customers needs together — faster.' },
            { id: 3, title: 'How To Start A Travel Blog (2024 Guide)', image: 'https://thumbor.forbes.com/thumbor/fit-in/1290x/https://www.forbes.com/advisor/wp-content/uploads/2022/09/how_to_start_a_travel_blog_-_article_image.jpg', 
                excerpt: 'If you’re passionate about traveling and want to share your experiences with the world, perhaps a travel blog is for you. But how do you start a travel blog? How do you make it stand out? We’ve put together a list of the basic considerations and the initial setup steps you should take to start your travel blogging adventure.' },
            { id: 4, title: 'Choose a Blogging Host and Platform', image: 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2022/09/travel_blog_2.jpg', 
                excerpt: 'A blog’s host is the parent platform you choose to create, manage and support your site. Many hosting providers offer products with various advantages and disadvantages, and you’ll find different travel bloggers swear by different services. To help you narrow down your decision, Forbes Advisor came up with a list of the best blogging platforms to start your site.     Reserve your handles and accounts on popular social media sites (Twitter, Instagram, Facebook, etc.). Even if you aren’t ready to start these yet, maintaining control of these accounts (and names) from the get-go can save you the headache of somebody else taking them.' },
            { id: 5, title: 'Photography ', image: 'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
                excerpt: 'Many Indigenous communities of the world see their territories, communities, water, and non-human beings as “sacred.” What happens when we see more relationally? And how does a changed relationship with everything around us affect our capacity to protect it? This year, we welcome our community of photographers and storytellers to submit their favourite photos that answer this questionSome people can get away with just letting them move organically and hoping for the best. Most of the time, however, your subjects will require some assistance from you.' },
            { id: 6, title: 'Cozy Corners', image: 'https://images.pexels.com/photos/6332/coffee-cup-books-home.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                excerpt: 'Furthermore, they will look to you for guidance, especially if they are not a model and have never been in front of a camera before.Consider creating a how-to guide on different positions with matching photos. This guide can be very helpful when trying to explain to subjects how they can help you take the best picture possible.' },
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
        </div>
    );
};

export default Blogfeed;
