function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'flex' : 'none';
}

// Function to show the Work section
function showWork() {
    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to the Work menu item
    document.querySelector('.menu-item:nth-child(1)').classList.add('active');

    document.getElementById('main-content').innerHTML = `
        <h2 class="section-title">SELECT WORK</h2>
        <div class="card-container">
            <div class="card" onclick="showWorkDetails('Candid', 'Mobile App', 'An app serving real-time news and funding information for nonprofit organizations.', '2020')">
                <img class="card-image" src="img/Frame 4.jpg" alt="Candid">
                <div class="card-details">
                    <div class="card-title">Candid</div>
                    <div class="card-subtitle">Mobile App</div>
                    <div class="card-description">An app serving real-time news and funding information for nonprofit organizations.</div>
                    <div class="card-year">2020</div>
                </div>
            </div>
            <div class="card">
                <img class="card-image" src="img/Frame 4.jpg" alt="Candid">
                <div class="card-details">
                    <div class="card-title">Candid</div>
                    <div class="card-subtitle">Mobile App</div>
                    <div class="card-description">An app serving real-time news and funding information for nonprofit organizations.</div>
                    <div class="card-year">2020</div>
                </div>
            </div>
            <!-- Repeat other cards as needed -->
        </div>
    `;
}

// Function to show the About section
function showAbout() {
    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to the About menu item
    document.querySelector('.menu-item:nth-child(2)').classList.add('active');

    document.getElementById('main-content').innerHTML = `
        <h2 class="section-title">ABOUT ME</h2>
        <div class="about-content">
            <div class="about-left">
                <img src="img/Frame 4.jpg" alt="A description of the image" class="about-image">
                <p style="font-weight: 700; font-size: 18px;">HI, I'M HAO 🤟🏼</p>
                <p style="font-weight: 700; font-size: 18px;">I'M CURRENTLY A FREELANCE DESIGNER</p>
                <p>I specialize in building thoughtful and user-centered digital experiences that encourage people to lead more intentional lives.</p>
                <p>With a background in both design and technology, I bring a unique perspective to every project I work on. My goal is to create products that are not only functional but also meaningful.</p>
            </div>
            <div class="about-right">
                <div class="about-section">
                    <h3 class="about-subtitle">EXPERIENCE</h3>
                    <ul class="about-list">
                        <li><strong>Product Designer</strong> at L+R (2021 - Present)</li>
                        <li><strong>UX/UI Designer</strong> at Creative Studio (2019 - 2021)</li>
                        <li><strong>Junior Designer</strong> at Design Agency (2017 - 2019)</li>
                    </ul>
                </div>
                <div class="about-section">
                    <h3 class="about-subtitle">EDUCATION</h3>
                    <ul class="about-list">
                        <li><strong>Bachelor of Design</strong> in Graphic Design - Ho Chi Minh City University of Fine Arts (2013 - 2017)</li>
                        <li><strong>UX/UI Design Certification</strong> - Interaction Design Foundation (2018)</li>
                    </ul>
                </div>
                <div class="about-section">
                    <h3 class="about-subtitle">SKILLS</h3>
                    <ul class="about-list">
                        <li><strong>Design Tools:</strong> Figma, Sketch, Adobe XD, Photoshop, Illustrator</li>
                        <li><strong>Prototyping:</strong> InVision, Marvel, Principle</li>
                        <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript (Basic)</li>
                        <li><strong>User Research:</strong> Usability Testing, User Interviews, Persona Creation</li>
                        <li><strong>Soft Skills:</strong> Collaboration, Communication, Problem Solving</li>
                    </ul>
                </div>
                <div class="about-section">
                    <h3 class="about-subtitle">CONTACT</h3>
                    <ul class="about-list">
                        <li><strong>Email:</strong> hao.nguyen@example.com</li>
                        <li><strong>Phone:</strong> +84 123 456 789</li>
                        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/haonguyen" target="_blank">linkedin.com/in/haonguyen</a></li>
                    </ul>
                </div>
                <div class="spotify-playlist">
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0BFqbDnUs4LFfNIAulZGhA?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    `;
}
function showGame() {
    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
}    
// Function to show details of a specific work
function showWorkDetails(title, subtitle, description, year) {
    document.getElementById('main-content').innerHTML = `
        <h2 class="section-title">${title}</h2>
        <div class="about-content">
            <div class="about-left">
                <img src="img/img-project1.jpg" alt="A description of the image" class="about-image">
                <p style="font-size:24px">STRIPE APPLICATION IS A POPULAR PAYMENT PROCESSING PLATFORM THAT CAN BE USED TO INTEGRATE PAYMENTS INTO VARIOUS APPLICATIONS, INCLUDING FOOD DELIVERY, DRIVER SERVICES, AND GROCERY SHIPPING.</p>
                <p><strong>Year:</strong> 2024</p>
            </div>
        </div>
         <h2 class="w"></h2>
        <div class="about-content">
            <div class="about-left">
                <img src="img/img-project1.jpg" alt="A description of the image" class="about-image">
            </div>
        </div>
    `;
}