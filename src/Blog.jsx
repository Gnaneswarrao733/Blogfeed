import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      setMedia(URL.createObjectURL(file));
    } else {
      alert('Please upload an image or video file.');
    }
  };

  const handlePreview = () => {
    setPreview(!preview);
  };

  const handleSaveDraft = () => {
    alert('Draft saved!');
  };

  const handlePublish = () => {
    alert('Post published!');
  };

  const handleClear = () => {
    setTitle('');
    setContent('');
    setTags('');
    setCategory('');
    setMedia(null);
    setPreview(false);
    setSearchTerm('');
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h2>My Blog</h2>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <h1></h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
        />
      </div>
      <div>
        <label>Content:</label>
        <ReactQuill
          value={content}
          onChange={setContent}
          placeholder="Write your content here..."
        />
      </div>
      <div>
        <label>Tags:</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Enter tags (comma separated)"
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
        />
      </div>
      <div>
        <label>Media Upload:</label>
        <input type="file" onChange={handleMediaUpload} accept="image/*,video/*" />
        {media && (media.endsWith('.mp4') ? 
          <video src={media} controls alt="Uploaded media" style={{ maxWidth: '100%' }} /> : 
          <img src={media} alt="Uploaded media" style={{ maxWidth: '0%' }} />
        )}
      </div>
      <div>
        <button onClick={handlePreview}>
          {preview ? 'Edit' : 'Preview'}
        </button>
        <button onClick={handleSaveDraft}>Save Draft</button>
        <button onClick={handlePublish}>Publish</button>
        <button className="clear-button" onClick={handleClear}>Clear</button>
      </div>
      {preview && (
        <div className="preview">
          <h2>Preview</h2>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <p>Tags: {tags}</p>
          <p>Category: {category}</p>
          {media && (media.endsWith('.mp4') ? 
            <video src={media} controls alt="Preview media" style={{ maxWidth: '100%' }} /> : 
            <img src={media} alt="Preview media" style={{ maxWidth: '100%' }} />
          )}
        </div>
      )}
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

export default Blog;
