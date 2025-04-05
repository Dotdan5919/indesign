<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation Campaigns</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="causes.css">
    <link rel="stylesheet" href="styles.css">
    
    
    <style>
        .card {
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .progress-bar {
            transition: width 1.5s ease-in-out;
        }
        .btn-donate {
            background-color: #E76F51;
            color: white;
            transition: background-color 0.3s ease-in-out;
        }
        .btn-donate:hover {
            background-color: #D64530;
        }
    </style>

<style>
    /* Section Styling */
    .slider-section {
        max-width: 1200px;
        margin: 50px auto;
        text-align: center;
    }

    .gallery-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    /* Slider Styling */
    .slider-container {
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    .slider-track {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    .slider-item {
        flex: 0 0 calc(100% / 3); /* Show 3 images at a time */
        padding: 10px;
    }

    .slider-item img {
        width: 100%;
        border-radius: 10px;
    }

    /* Navigation Buttons */
    .slider-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 20px;
        border-radius: 50%;
        z-index: 10;
    }

    .prev {
        left: 10px;
    }

    .next {
        right: 10px;
    }

    /* Responsive Styling */
    @media (max-width: 768px) {
        .slider-item {
            flex: 0 0 100%; /* Show 1 image on smaller screens */
        }
    }
</style>

</head>
<body>

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container px-5">
        <a class="navbar-brand d-sm-block d-md-none " href={{route('index')}}><img src="images/logo.png" alt="Logo" width="50"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item p-2 "><a class="nav-link" href={{route('index')}}>Home</a></li>
                <li class="nav-item p-2 "><a class="nav-link" href={{route('aboutus')}}> About Us</a></li>
                <li class="nav-item p-2 "><a class="nav-link" href={{route('events')}}>Events</a></li>
                <li class="nav-item p-2 "><a class="nav-link" href={{route('causes')}}>Causes</a></li>
                <li class="nav-item p-2 "><a class="nav-link" href={{route('blogs')}}>Blog</a></li>
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
            <script src="{{ asset('node_modules/aos/dist/aos.js') }}"></script>
    <script>
        AOS.init();
    </script>
        </body>
        </html>