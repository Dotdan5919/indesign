<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Holistique Public Health</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="styles.css">
            <link rel="stylesheet" href="blogs.css">
            <link rel="stylesheet" href="causes.css">
            <link rel="stylesheet" href="events.css">
            <link rel="stylesheet" href="aboutus.css">




            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
            
        </head>
        <body class="">

         
                

          
                
            


           <!-- Navbar -->
           <nav class="navbar navbar-expand-lg navbar-light mt-2 " >
            <div class="container px-5">
                <a class="navbar-brand d-sm-block d-md-none " href={{route('index')}}><img src="images/logo.png" alt="Logo" width="50"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item p-2 "><a class="nav-link font-parag" href={{route('index')}}>Home</a></li>
                        <li class="nav-item p-2 "><a class="nav-link font-parag" href={{route('aboutus')}}>About Us</a></li>
                        <li class="nav-item p-2 "><a class="nav-link font-parag" href={{route('events')}}>Events</a></li>
                        <li class="nav-item p-2 "><a class="nav-link font-parag" href={{route('causes')}}>Causes</a></li>
                        <li class="nav-item p-2 "><a class="nav-link font-parag" href={{route('blogs')}}>Blog</a></li>
                        @auth
                        <li class="nav-item p-2 "><a class="nav-link font-parag" href={{route('home')}}>Admin Dashboard</a></li>
                       
                     
                        @else   
            
                        @endauth
                        <li class="nav-item p-2 "><a class="btn font-parag btn-use" href="#">Donate Now</a></li>
                    </ul>
                </div>
            </div>
        </nav>
           
        
        
        

        @yield('content')




        
            <!-- footer -->
        
            <footer class="py-4 bg-white border-top">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4 text-center text-md-start">
                            <img src="./images/logo.png" alt="Logo" class="mb-3" style="width: 80px;">
                            <div class="d-flex justify-content-center justify-content-md-start gap-3">
                                <a href="#" class="text-dark"><i class="bi bi-x-lg"></i></a>
                                <a href="#" class="text-dark"><i class="bi bi-envelope"></i></a>
                                <a href="#" class="text-dark"><i class="bi bi-gear"></i></a>
                            </div>
                        </div>
                        <div class="col-md-4 text-center text-md-start">
                            <h6 class="fw-bold">Useful Links</h6>
                            <ul class="list-unstyled ">
                                <li><a href="#" class="text-dark text-decoration-none">About Us</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Events</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Careers</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Blog</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Gallery</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 text-center text-md-start">
                            <h6 class="fw-bold">Support</h6>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-dark text-decoration-none">FAQ</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Our Team</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Contact Us</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Become a Volunteer</a></li>
                                <li><a href="#" class="text-dark text-decoration-none">Our Volunteers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            
            <!-- Bootstrap Icons -->
            
            
        
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src={{ asset('node_modules/aos/dist/aos.js') }} ></script>
    <script>
        AOS.init();
    </script>
        </body>
        </html>