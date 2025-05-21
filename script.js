document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const menuItems = document.getElementById('menuItems');
    const hamburger = document.querySelector('.hamburger');

    // Developer options
    const devOptions = {
        debugMode: true, 
        logRouteChanges: true, 
        logPerformance: true 
    };

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menuItems.classList.toggle('active');
        if (devOptions.debugMode) {
            console.log('Hamburger menu toggled:', menuItems.classList.contains('active') ? 'Open' : 'Closed');
        }
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menuItems.classList.remove('active');
            if (devOptions.debugMode) {
                console.log('Nav link clicked:', link.getAttribute('href'));
            }
        });
    });

    // Routing logic
    const routes = {
        '#home': `
            <div class="row">
                <div class="col-2">
                    <h1>Give Your Wings<br>A New Style!</h1>
                    <p>Welcome to Athlete Shop, where shopping meets convenience!<br>Discover an endless selection of quality products.</p>
                    <a href="#products" class="btn">Explore Now →</a>
                </div>
                <div class="col-2">
                    <img src="images/images/image1.png" alt="Hero Image">
                </div>
            </div>
            <div class="categories">
                <div class="small-container">
                    <div class="row">
                        <div class="col-3"><img src="images/images/category-1.jpg" alt="Category 1"></div>
                        <div class="col-3"><img src="images/images/category-2.jpg" alt="Category 2"></div>
                        <div class="col-3"><img src="images/images/category-3.jpg" alt="Category 3"></div>
                    </div>
                </div>
            </div>
        `,
        '#products': `
            <div class="small-container">
                <h2 class="title">Featured Products</h2>
                <div class="row">
                    <div class="col-4">
                        <img src="images/images/product-1.jpg" alt="Red Printed T-Shirt">
                        <h4>Red Printed T-Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-2.jpg" alt="HRX Black Shoes">
                        <h4>HRX Black Shoes</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$60.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-3.jpg" alt="Slim-Fit Lower">
                        <h4>Slim-Fit Lower</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-4.jpg" alt="Blue T-Shirt">
                        <h4>Blue T-Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$78.00</p>
                    </div>
                </div>
                <h2 class="title">Latest Products</h2>
                <div class="row">
                    <div class="col-4">
                        <img src="images/images/product-5.jpg" alt="White Shoes-Sports">
                        <h4>White Shoes-Sports</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-6.jpg" alt="Puma Sports T-shirt">
                        <h4>Puma Sports T-shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$60.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-7.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-18.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-22.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-23.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-10.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-13.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-11.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-12.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-24.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-25.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-26.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-27.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-28.jpg" alt="HRX Sports socks">
                        <h4>HRX Sports socks</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$30.00</p>
                    </div>
                    <div class="col-4">
                        <img src="images/images/product-8.jpg" alt="Fossil Black-Watch">
                        <h4>Fossil Black-Watch</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$102.00</p>
                    </div>
                </div>
            </div>
        `,
        '#about': `
            <div class="small-container">
                <h2 class="title">About Athlete Shop</h2>
                <div class="row about-section">
                    <div class="col-2">
                        <h3>Our Mission</h3>
                        <p>At Athlete Shop, we are passionate about empowering athletes of all levels to reach their full potential. Our curated selection of high-quality sports apparel and accessories is designed to enhance performance, comfort, and style. We believe in inspiring confidence and fostering a community of active individuals who push their limits every day.</p>
                        <a href="#products" class="btn">Shop Now →</a>
                    </div>
                    <div class="col-2">
                        <img src="images/images/image1.png" alt="Athlete in Action" class="about-image">
                    </div>
                </div>
                <h2 class="title">Meet Our Team</h2>
                <div class="row team-section">
                    <div class="col-3 team-card">
                        <img src="">
                        <h4>BADRE ALAM</h4>
                        <p>DEVELOPER</p>
                    </div>
                </div>
            </div>
        `,
        '#contact': `
            <div class="small-container">
                <h2 class="title">Contact Us</h2>
                <p>Have questions? Reach out to us at <a href="mailto:support@athleteshop.com">support@athleteshop.com</a> or call us at +1-800-123-4567.</p>
            </div>
        `,
        '#login': `
            <div class="small-container">
                <h2 class="title" id="formTitle">Login</h2>
                <div class="login-signup-form">
                    <div class="form-container">
                        <div class="row">
                            <div class="col-2">
                                <form id="authForm">
                                 <div class="form-group" id="nameField" style="display: none;">
                                        <label for="name">Full Name</label>
                                        <input type="text" id="name" placeholder="Enter your full name">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" id="email" placeholder="Enter your email" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" id="password" placeholder="Enter your password" required>
                                    </div>
                                   
                                    <button type="submit" class="btn" id="submitBtn">Login</button>
                                    <p id="toggleText">Don't have an account? <a href="#" id="toggleForm">Sign Up</a></p>
                                </form>
                            </div>
                            <div class="col-2">
                                <img src="images/images/image1.png" alt="Login Image" class="login-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    // Render content based on hash
    function renderContent() {
        const startTime = performance.now();
        const hash = window.location.hash || '#home';
        content.innerHTML = routes[hash] || routes['#home'];
        
        if (devOptions.logRouteChanges) {
            console.log(`Navigated to route: ${hash}`);
        }
        
        if (devOptions.logPerformance) {
            const endTime = performance.now();
            console.log(`Render time for ${hash}: ${(endTime - startTime).toFixed(2)}ms`);
        }

        // Login/Signup form toggle logic
        if (hash === '#login') {
            const formTitle = document.getElementById('formTitle');
            const authForm = document.getElementById('authForm');
            const submitBtn = document.getElementById('submitBtn');
            const toggleText = document.getElementById('toggleText');
            const toggleForm = document.getElementById('toggleForm');
            const nameField = document.getElementById('nameField');
            let isLogin = true;

            toggleForm.addEventListener('click', (e) => {
                e.preventDefault();
                isLogin = !isLogin;
                formTitle.textContent = isLogin ? 'Login' : 'Sign Up';
                submitBtn.textContent = isLogin ? 'Login' : 'Sign Up';
                toggleText.innerHTML = isLogin 
                    ? `Don't have an account? <a href="#" id="toggleForm">Sign Up</a>`
                    : `Already have an account? <a href="#" id="toggleForm">Login</a>`;
                nameField.style.display = isLogin ? 'none' : 'block';
                if (devOptions.debugMode) {
                    console.log(`Switched to ${isLogin ? 'Login' : 'Sign Up'} mode`);
                }
            });

            authForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const name = document.getElementById('name').value;
                if (devOptions.debugMode) {
                    console.log(isLogin ? 'Login attempt' : 'Sign Up attempt', { email, password, name });
                }
                // Placeholder for form submission logic
                alert(isLogin ? 'Login submitted!' : 'Sign Up submitted!');
            });
        }
    }

    // Initial render
    renderContent();

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
        renderContent();
        if (devOptions.debugMode) {
            console.log('Hash changed, re-rendering content');
        }
    });

    // Developer utility: Toggle debug mode via console
    window.toggleDebugMode = () => {
        devOptions.debugMode = !devOptions.debugMode;
        console.log(`Debug mode ${devOptions.debugMode ? 'enabled' : 'disabled'}`);
    };
});