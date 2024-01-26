// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Sample Data for Projects and Blog Posts
    const projects = [
        {
            title: "On-Demand Garbage Collection",
            description: "Non-framework website for managing garbage collection built with PHP, JavaScript, HTML and CSS.",
            imageUrl: "img/garbage.jpg",
            repoUrl: "https://github.com/Jesya-o/on-demand-garbage-collection"
        }
    ];

    const blogPosts = [
    ];

    // Function to create project cards
    function createProjectCards() {
        const projectsContainer = document.getElementById('projects').querySelector('.flex-wrap');
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card p-4 md:w-1/3';
            card.innerHTML = `
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${project.imageUrl}" alt="Project Image">
                    <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">${project.title}</h2>
                        <p class="leading-relaxed mb-3">${project.description}</p>
                        <div class="flex items-center flex-wrap ">
                            <a href="${project.repoUrl}" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" target="_blank">Learn More
                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>`;
            projectsContainer.appendChild(card);
        });
    }

    // Function to create blog posts
    function createBlogPosts() {
        const blogContainer = document.getElementById('blog').querySelector('.flex-wrap');
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-post p-4 md:w-full';
            postElement.innerHTML = `
                <h2 class="text-lg font-medium text-gray-900 title-font mb-2">${post.title}</h2>
                <p class="leading-relaxed">${post.excerpt}</p>
                <a href="${post.readMoreUrl}" class="text-indigo-500 inline-flex items-center mt-4" target="_blank">Read More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </a>`;
            blogContainer.appendChild(postElement);
        });
    }

    // Call functions to populate the content
    createProjectCards();
    createBlogPosts();
});

// Add any additional interactivity (like scroll animations) here
