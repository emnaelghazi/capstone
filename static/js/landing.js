const LandingPage = () => {
    const container = document.getElementById('landing-root');
    
    const content = `
        <div class="landing-page">
            <nav class="landing-nav">
                <div class="logo">GeoAtlas</div>
                <div class="nav-links">
                    <a href="/login" class="login-btn">Login</a>
                    <a href="/register" class="register-btn">Register</a>
                </div>
            </nav>
            
            <main class="hero-section">
                <h1>Welcome to GeoAtlas</h1>
                <p class="hero-text">Explore the world in stunning 3D visualization</p>
                <div class="cta-buttons">
                    <a href="/login" class="cta-primary">Get Started</a>
                    <a href="#features" class="cta-secondary">Learn More</a>
                </div>
            </main>

            <section id="features" class="features-section">
                <div class="feature-card">
                    <i class="fas fa-globe"></i>
                    <h3>3D Visualization</h3>
                    <p>Experience geographic data in immersive 3D environments</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>Interactive Maps</h3>
                    <p>Navigate and explore detailed geographical information</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-chart-line"></i>
                    <h3>Real-time Data</h3>
                    <p>Access up-to-date geographical statistics and analytics</p>
                </div>
            </section>
        </div>
    `;

    if (container) {
        container.innerHTML = content;
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
