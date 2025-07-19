 $(document).ready(function() {
            let quotesToken = localStorage.getItem('QuotesToken');
            let storedName = sessionStorage.getItem('UserName');

            // Check if name exists in sessionStorage
            if (storedName) {
                let firstName = storedName.split(' ')[0];
                let displayName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
                $('#login-button-wrapper').replaceWith(`
                    <div class="login-box login-box-repo">
                        <button class="login-btn-cov">
                            <span class="user-name">Hi, ${displayName}</span>
                        </button>
                    </div>
                `);
            } else if (quotesToken) {
                // Only call API if no name in sessionStorage
                fetchUser(quotesToken, function(response) {
                    if (response.name) {
                        // Store name in sessionStorage
                        sessionStorage.setItem('UserName', response.name);
                        let firstName = response.name.split(' ')[0];
                        let displayName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
                            .toLowerCase();
                        $('#login-button-wrapper').replaceWith(`
                    <div class="login-box login-box-repo">
                        <button class="login-btn-cov">
                            <span class="user-name">Hi, ${displayName}</span>
                        </button>
                    </div>
                `);
                    }
                });
            }

            if(!quotesToken){
                sessionStorage.removeItem('UserName');
                $('#login-button-wrapper').replaceWith(`
                    <div class="login-box login-box-repo">
                            <button class="login-btn-cov">
                                <span class="user-name">Login</span>
                            </button>
                    </div>
                `);
            }

             // 🔴 Logout click handler
            $(document).on('click', '.logout-btn', function(e) {
                e.preventDefault();
                localStorage.removeItem('QuotesToken');
                sessionStorage.removeItem('UserName');
                window.location.href = '/'; // Redirect after logout
            });
            $(document).on('show.bs.dropdown', '.dropdown', function() {
                $('.header-contact-wraper-repo').css('padding-bottom', '30px');
            });

            $(document).on('hide.bs.dropdown', '.dropdown', function() {
                $('.header-contact-wraper-repo').css('padding-bottom', '20px');
            });
        });