```javascript
// Blog posts data
const blogPosts = [
    {
        title: "The Architecture of Large-Scale Systems",
        date: "2024-11-15",
        excerpt: "Exploring design patterns and trade-offs in building systems that scale to millions of users. From monoliths to microservices, and the reality in between.",
        url: "blog/blog-post-1.html"
    },
    {
        title: "On Writing Technical Documentation",
        date: "2024-10-22",
        excerpt: "Good documentation is a force multiplier for engineering teams. Here's what I've learned about writing docs that people actually read and use.",
        url: "blog/blog-post-2.html"
    },
    {
        title: "Understanding Distributed Consensus",
        date: "2024-09-18",
        excerpt: "A deep dive into Raft, Paxos, and why distributed consensus is both harder and more important than you think.",
        url: "blog/blog-post-1.html"
    },
    {
        title: "Machine Learning in Production",
        date: "2024-08-30",
        excerpt: "The gap between a working model and a production ML system is vast. Here's what it takes to deploy ML at scale.",
        url: "blog/blog-post-2.html"
    }
];

// Load blog posts dynamically
function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    
    if (!blogContainer) {
        console.error('Blog container not found');
        return;
    }
    
    blogPosts.forEach(post => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-date">${post.date}</p>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="${post.url}" class="blog-link">Read More →</a>
        `;
        
        blogContainer.appendChild(blogCard);
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    initSmoothScroll();
});
