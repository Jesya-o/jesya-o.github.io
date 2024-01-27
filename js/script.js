// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Sample Data for Projects and Blog Posts
    const projects = [
        {
            title: "Website: On-Demand Garbage Collection",
            description: "Non-framework website for managing garbage collection.",
            imageUrl: "img/garbage.png",
            repoUrl: "https://github.com/Jesya-o/on-demand-garbage-collection",
            tags: ["PHP", "JavaScript", "HTML", "CSS"]
        },
        {
            title: "CLI app: Extension Correction",
            description: "A CLI application for correcting files' names in directory if there is no extension written. It automatically resolves the extensions of the files and sets them to the filename.",
            imageUrl: "img/cli.png",
            repoUrl: "https://github.com/Jesya-o/extension-correction-py",
            tags: ["Python"]
        },
        {
            title: "Infrastructure Services",
            description: "Infrastructure Services project for 3 VMs. Includes dockerization, logging and monitoring, resolver services. Service is highly available which is reached with multiple containers, replicas, Keepalived and HAProxy. Also includes backuping on remote server.",
            imageUrl: "img/infra.png",
            repoUrl: "https://github.com/Jesya-o/infrastructure-services",
            tags: ["Ansible", "Docker", "Grafana", "Prometheus", "MySQL", "InfluxDB", "Bash", "Bind"]
        },
        {
            title: "Data structures and algorithms",
            description: "Implementation of data structures such as String, Rational, Trees, Arrays, Queues and algorithms such as Graham algo, Binary Search, Sortings.",
            imageUrl: "img/c.png",
            repoUrl: "https://github.com/Jesya-o/data-structures-and-algorithms",
            tags: ["C++"]
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
            let tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
    
            card.innerHTML = `
                <div class="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${project.imageUrl}" alt="Project Image">
                    <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">${project.title}</h2>
                        <p class="leading-relaxed mb-3">${project.description}</p>
                        <div class="project-tags mb-2">${tagsHtml}</div>
                        <a href="${project.repoUrl}" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" target="_blank">Learn More</a>
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

    createProjectCards();
    createBlogPosts();
});

