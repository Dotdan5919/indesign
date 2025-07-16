

<!DOCTYPE html>
<html data-wf-page="6577019a915bb98abc733643">
    <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <title>Blog</title>

        <link href="<?php echo e(asset('assets/css/normalize.css')); ?>" rel="stylesheet" type="text/css" />
        <link href="<?php echo e(asset('assets/css/layout.css')); ?>" rel="stylesheet" type="text/css" />
        <link href="<?php echo e(asset('assets/css/style_2.css')); ?>" rel="stylesheet" type="text/css" />


        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
        <link href="<?php echo e(asset('assets/images/favicon.png')); ?>" rel="shortcut icon" type="image/x-icon" />
        <link href="<?php echo e(asset('assets/images/webclip.png')); ?>" rel="apple-touch-icon" />

    </head>
    <body>

        <?php if(Route::has('login')): ?>
<div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
    <?php if(auth()->guard()->check()): ?>
        <a href="<?php echo e(url('/dashboard')); ?>" class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</a>
    <?php else: ?>
        <a href="<?php echo e(route('login')); ?>" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

        <?php if(Route::has('register')): ?>
            <a href="<?php echo e(route('register')); ?>" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
        <?php endif; ?>
    <?php endif; ?>
</div>
<?php endif; ?>


        <div class="header">
            <div class="w-layout-blockcontainer main-container w-container">
                <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="header-inner w-nav">
                    <a href="index.html" aria-current="page" class="logo w-inline-block w--current"><img src="<?php echo e(asset('assets/images/logo.png')); ?>" alt="" class="logo-img" /></a>
                    <nav role="navigation" class="main-menu w-nav-menu">
                        <a href="index.html" aria-current="page" class="menu-item w-nav-link w--current">Home</a>
                        <a href="about.html" class="menu-item w-nav-link">About</a>
                        <a href="categories.html" class="menu-item w-nav-link">categories</a>
                        <a href="blog.html" class="menu-item w-nav-link">posts</a>
                        <a href="contact.html" class="menu-item w-nav-link">contact</a>
                    </nav>
                    <div class="menu-button w-nav-button">
                        <div class="icon w-icon-nav-menu"></div>
                    </div>

                    <div class="header-right-side">
                        <form action="#" class="search-div w-form">
                            <input class="search-field w-input" maxlength="256" name="query" placeholder="type something" type="search" id="search" required="" /><input type="submit" class="search-button w-button" value="Search" />
                            <img src="<?php echo e(asset('images/search.png')); ?>" alt="" class="image" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <?php echo $__env->yieldContent('content'); ?>


        <div class="footer">
            <div class="inner-footer">
                <div class="w-layout-blockcontainer main-container w-container">
                    <div id="frenzy100" class="w-layout-layout footer-grid wf-layout-layout">

                        <div id="frenzy107" class="w-layout-cell footer-grid-item">
                            <h4 class="footer-heading">contact</h4>
                            <a href="mailto:test@gmail.com?subject=Your%20Mail" class="footer-email-and-phone w-inline-block">
                                <img src="images/email.png" alt="" class="footer-emailphone-icon" />
                                <div class="text-block">hello@frenzy.webflow.io</div>
                            </a>
                            <a href="tel:+1231685496" class="footer-email-and-phone last-phone w-inline-block">
                                <img src="images/phone.png" alt="" class="footer-emailphone-icon" />
                                <div class="text-block">+5 (123) 456 789 0</div>
                            </a>
                        </div>

                        <div id="frenzy108" class="w-layout-cell footer-grid-item">
                            <h4 class="footer-heading">socials</h4>
                            <div class="foot-socials">
                                <a href="http://www.facebook.com" target="_blank" class="social-link w-inline-block"><img src="images/fb.png" alt="" class="foot-social-link" /></a>
                                <a href="http://www.twitter.com" target="_blank" class="social-link w-inline-block"><img src="images/twitter.png" alt="" class="foot-social-link" /></a>
                                <a id="frenzy106" href="http://www.instagram.com" target="_blank" class="social-link w-inline-block">
                                    <img src="images/insta.png" alt="" class="foot-social-link" />
                                </a>
                                <a href="http://www.youtube.com" target="_blank" class="social-link w-inline-block"><img src="images/you.png" alt="" class="foot-social-link" /></a>
                                <a href="http://www.pinterest.com" target="_blank" class="social-link w-inline-block"><img src="images/pint.png" alt="" class="foot-social-link" /></a>
                            </div>
                        </div>

                        <div id="frenzy109" class="w-layout-cell footer-grid-item">
                            <h4 class="footer-heading">Newsletter</h4>
                            <p class="footer-text">Stay ahead of the curve with our exclusive daily newsletter directly in your inbox!</p>
                            <div class="w-form">
                                <form id="email-form" method="post" action="#" aria-label="Form" class="form">
                                    <input class="subscribe-field w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="your e-mail" type="email" id="email-2" required="" />
                                    <input type="submit" data-wait="Please wait..." class="submit-button w-button" value="subscribe"  />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-layout-blockcontainer main-container w-container">
                <div class="copyright">
                    <div class="copyright-text">© 2025</div>
                </div>
            </div>
        </div>


        <script src="js/webfont.js" type="text/javascript"></script>
        <script type="text/javascript">
            WebFont.load({ google: { families: ["Manrope:200,300,regular,500,600,700,800"] } });
        </script>
        <script src="<?php echo e(asset('assets/js/jquery.min.js')); ?>" type="text/javascript"></script>
        <script src="<?php echo e(asset('assets/js/plugins.js')); ?>" type="text/javascript"></script>

    </body>
</html>

<?php /**PATH C:\Users\Ighodaro Daniel\danBlog\resources\views/layouts/home.blade.php ENDPATH**/ ?>