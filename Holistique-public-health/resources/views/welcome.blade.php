@extends('layouts.welcome');
           
        

@section('content')
        
        <div class="container home position-relative mt-7 ">
            
          <!-- logo positioned absolutely -->
          <div class="position-absolute top-0 start-5 translate-middle bg-white rounded-pill d-none d-md-block"> <a class="navbar-brand " href="#"><img src="images/logo.png" alt="Logo" width="100"></a>
          </div>
        
        
            <div class="row mb-5">
        
            </div>
        
            <!-- home text  -->
            <div class="row  ">
               
                <div data-aos="fade-down" data-aos-duration="2000" class="col-md-7 col-lg-7 col-sm-12 col-xm-12  hero-heading text-center text-md-start text-sm-center " >
        
                    <p  class=""> Welcome to </p>
                    <h1  class="fs-1 fw-bold">
                        Holistique <br>
                        Public Health
                    </h1>
                    <p  >We are dedicated to improving the health of vulnerable and<br> underserved populations through public health initiatives.</p>
                    <a  href="/causes" class="btn btn-second">  Explore Our Donations  <div class="rounded-circle d-flex justify-content-center align-items-center" style="width: 30px; height: 30px; "><i class="bi bi-send-fill"></i></div> </a>
        
                </div>
            </div>
        
          <!-- Statistics Section -->
          <section class="py-5 text-white text-center position-absolute top-100 start-50 translate-middle stats py-3  ">
            <div class="container px-5">
                <div class="row ">
                    <div class="col-md-3 d-flex   ">
                        <img src="/images/dona.png" alt="" srcset="" width="70" height="70">
                        
                        <div class="">
                             <h1 class="fw-bold">10</h1>  <p>Donations</p>
                        </div>
                        
                      
                    </div>
        
                    <div class="col-md-3 d-flex  ">
                        <img src="/images/volunteer.png" alt="" srcset="" width="70" height="70">
                        
                        <div class="">
                             <h1 class="fw-bold">50</h1>  <p>volunteers</p>
                        </div>
                        
                      
                    </div>
                    <div class="col-md-3 d-flex  ">
                        <img src="/images/projects.png" alt="" srcset="" width="70" height="70">
                        
                        <div class="">
                             <h1 class="fw-bold">20</h1>  <p>projects</p>
                        </div>
                        
                      
                    </div>
        
                    <div class="col-md-3 d-flex  ">
                        <img src="/images/mission.png" alt="" srcset="" width="70" height="70">
                        
                        <div class="">
                             <h1 class="fw-bold">3</h1>  <p>mission</p>
                        </div>
                        
                      
                    </div>
                </div>
            </div>
        </section>
        
        </div>
        
        
        
        
        <div class="space">
        <!-- ignore this space  -->
        </div>
        
        
           
            <!-- About Section -->
            <section class="py-5 text-center linking-bg">
                <div class="container mt-5">
        <div class="row justify-content-center mb-5 pt-5">
            <div class="col-8 " data-aos="fade-up" data-aos-duration="2000">
                <p style="color: #991824;">About Us </p>
                    <h2>We Can Change The World</h2>
                    <p>Our goals align with the United Nations' Sustainable Development Goals to improve global health and humanitarian interventions.</p>
            </div>
        </div>
                    <!-- about us cards are here  -->
                    <div class="row mt-5 grid gap-3" >
                        <div class="col-md mt-5 " data-aos="zoom-in" data-aos-duration="3000">
                            <div class="card1 mt-4 shadow-sm p-4 border-0 position-relative">
                                <div class="position-absolute top-0 start-50 translate-middle card-inner rounded-pill  d-flex justify-content-center align-items-center"> <a class="navbar-brand " href="#"><img src="images/hugeicons_vision.png" alt="Logo" width="70"></a>
                                </div>
                                <h4 class="mt-5">Vision</h4>
                                <p>We strive to improve the health and wellbeing of the target population.</p>
                            </div>
                        </div>
        
        
                        <div class="col-md-5 mt-5" data-aos="zoom-in" data-aos-duration="3000">
                            <div class="card card2 shadow-sm p-4 border-0 card2-color text-white position-relative">
        
                                <div class="position-absolute top-0 start-50 translate-middle card-inner rounded-pill  d-flex justify-content-center align-items-center"> <a class="navbar-brand " href="#"><img src="images/donate.png" alt="Logo" width="70"></a>
                                </div>
                                <h4 class="mt-5">Our Services</h4>
                                <p>1. Health Promotion & Wellness services </p>
                                
                             <p>   2. Infection Prevention & Control</p>
                                
                            <p>   3. Women’s Clinic</p>
                                
                                <p>
                                    4. Health Education & Training
                                </p>
                                
                               <p> 5. Food Security Initiatives</p></p>
                            </div>
                        </div>
                        <div class="col-md mt-5 " data-aos="zoom-in" data-aos-duration="3000">
                            <div class="card1 mt-4 shadow-sm p-4 border-0 position-relative">
        
                                <div class="position-absolute top-0 start-50 translate-middle card-inner rounded-pill  d-flex justify-content-center align-items-center"> <a class="navbar-brand " href="#"><img src="images/vision.png" alt="Logo" width="70"></a>
                                </div>
                                <h4 class="mt-5">Our Goal</h4>
                                <p>To provide health promotion, and disease prevention programs, and services designed to help underserved and vulnerable populations achieve and maintain optimal health</p>
                            </div>
                        </div>
                    </div>
        
        
                    <div class="row justify-content-center mt-5">
                        <col-8>
                    <a href="/aboutus">
                        Read more
                    </a>
                    </col-8>
                    </div>
                </div>
            </section>
        





            
        <!-- volunteer  section -->
            <section class="volunteer-section " id="joinus" data-aos="fade-up" data-aos-duration="3000">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Form Section -->
                        <div class="col-md-6 position-relative">
                            <div class="bg-danger rounded   position-absolute top-0 start-0 w-75 h-75"></div>
                            <div class="p-4 join mt-5 ms-5 bg-white volunteer-form shadow rounded position-relative">
                                {{-- <h3 class="mb-4">Join Us</h3> --}}
                                <form  method="POST" action={{route('joinus')}} >
                                    @csrf
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">Full Name</label>
                                        <input type="text" name="fullname" class="form-control" placeholder="Enter name">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">Location</label>
                                        <input type="text" name="location" class="form-control" placeholder="Address">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">Phone</label>
                                        <input type="tel" name="phone_no" class="form-control" placeholder="Phone number">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">Email</label>
                                        <input type="email" name="email" class="form-control" placeholder="Email">
                                    </div>
                                    <button name="submit" class="btn btn-danger w-100">Join us now</button>

                                    @if (session('success'))
                                    <span class="text-success" role="alert">
                                        <strong>{{ session('success') }}</strong>
                                    </span>

                                    @elseif (session('error'))
                                    <span class="text-danger" role="alert">
                                        <strong>{{ session('error') }}</strong>
                                    </span>
                                    @endif


                                </form>
                            </div>
                        </div>
                        <div class="col-md-1">
        
                        </div>
                        <!-- Text and Image Section -->
                        <div class="col-md-5 text-center text-md-start pt-5" data-aos="zoom-in" data-aos-duration="500">
                            <p class="text-danger">Join Us</p>
                            <h2 class="fw-bold">Become a Volunteer</h2>
                            <p>There will be no Holistique Public Health without our volunteers. The strength of our organization lies in the commitment and services provided by our dedicated volunteers.</p>
                            <img src="images/volunteerimg.png" alt="Volunteers" class="img-fluid rounded mt-3" width="80%">
                        </div>
                    </div>
                </div>
            </section>
        
            <!-- help now section  -->
            <section class="help-now ">
                <div class="container py-5 px-5">
                    <div class="row g-4">
                        <!-- Transparent Box -->
                        <div class="  col-md-4 d-flex align-items-center" data-aos="zoom-in-up" data-aos-duration="2000">
                            <h2 class="fw-bold text-dark">You Can <br> Help Now</h2>
                        </div>
            
                        <!-- Image Card -->
                        <div class="col-md-4">
                            <div class=" help card border-0" data-aos="zoom-in-up" data-aos-duration="2000">
                                <img src="images/help1.png" class="card-img-top object-fit-cover   rounded overflow-hidden" alt="Help Image">
                            </div>
                        </div>
            
                        <!-- Join Us Card -->
                        <div class="col-md-4"  data-aos="zoom-in-up" data-aos-duration="2000">
                            <div class="card help p-4 text-white" style="background-color: #C94F4F;">
                                <div class="card-body">
        
                                    <img src="/images/joinus.png" alt="" srcset="">
                                    <h3 class="card-title fw-bold"><i class="bi bi-share-fill"></i> Join Us</h3>
                                    <p>Interested in joining our team or volunteering your skills? 
                                        Please sign up using the form on the contacts page.</p>
                                    <a href="#" class="text-white"><div class="rounded-circle d-flex justify-content-center align-items-center pt-2" style="width: 40px; height: 40px;background-color:white;color:#872341 "><i class="bi bi-send-fill"></i></div></a>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="row g-4 mt-3">
                        <!-- Support Us Card -->
                        <div class="col-md-4">
                            <div class="card help p-4 text-white" style="background-color: #1D2A4D;" data-aos="zoom-in-up" data-aos-duration="2000">
                                <div class="card-body">
        
                                    <img src="/images/supportus.png" alt="" srcset="">
                                    <h3 class="card-title fw-bold"><i class="bi bi-currency-dollar"></i> Support Us</h3>
                                    <p>Our work is due to the generosity of grants and support from the community. Please consider donating to support our projects.</p>
                                    <a href="#" class="text-white">     <a href="#" class="text-white"><div class="rounded-circle d-flex justify-content-center align-items-center pt-2" style="width: 40px; height: 40px;background-color:white;color:#872341 "><i class="bi bi-send-fill"></i></div></a>
                                </a>
                                </div>
                            </div>
                        </div>
            
                        <!-- Follow Us Card -->
                        <div class="col-md-4">
                            <div class="card help p-4 text-white" style="background-color: #A33F4F;" data-aos="zoom-in-up" data-aos-duration="2000">
                                <div class="card-body">
                                    <img src="/images/followus.png" alt="" srcset="">
                                    <h3 class="card-title fw-bold"><i class="bi bi-person-fill"></i> Follow Us</h3>
                                    <p>Sign up for our newsletter and follow us on our social media channels to be kept abreast of our latest news and activities.</p>
                                    <a href="#" class="text-white">     <a href="#" class="text-white"><div class="rounded-circle d-flex justify-content-center align-items-center pt-2" style="width: 40px; height: 40px;background-color:white;color:#872341 "><i class="bi bi-send-fill"></i></div></a>
                                </a>
                                </div>
                            </div>
                        </div>
            
                        <!-- Image Card -->
                        <div class="col-md-4" data-aos="zoom-in-up" data-aos-duration="2000">
                            <div class="card border-0 help">
                                <img src="images/help2.png" class="card-img-top object-fit-cover   rounded overflow-hidden" alt="Help Image">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
           
            <!-- contact form section -->
            <section class="contact-section py-5 g-padding">
                <div class="container text-start">
                    <div class="row align-items-center ">
                        <div class="col-md-4 text-white">
                            <h2 class="fw-bold fs-2 mb-3">Get in <br> Touch!</h2>
        
                            <p>Interested in collaborating with Holistique Public Health or have community concerns? 
                                Contact us by filling out the form below.</p>
                            <p><strong><img src="./images/callnow.png" alt="" srcset="">  CALL NOW:</strong> +234 123 456 7890</p>
                            <p><strong><img src="./images/telegram.png" alt="" srcset="">  OUR Headquarters:</strong> 
                               Hamilton,ON</p>
                            <p><strong><img src="./images/email.png" alt="" srcset="">  Email:</strong> info@holistiquehealth.com</p>
                        </div>
        <!-- ignore this section  -->
                        <div class="col-md-2"></div>
                        <div class="col-md-6">
                            <div class="bg-white p-4 rounded shadow">
                                <form  method="POST" action={{route('getintouch')}} >
                                    @csrf
                                    <div class="mb-3">
                                        <label class="form-label">Full Name</label>
                                        <input type="text" name="fullname" class="form-control" placeholder="Enter name">
                                    </div>
                                   
                                    
                                    <div class="mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="email" name="email" class="form-control" placeholder="Email">
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Message</label>
                                       
                                        <textarea type="text" name="message" class="form-control" placeholder="Message"> </textarea>

            
                                    </div>
                                    <input type="submit" name="submit" class="btn btn-danger w-100" value="Join us now" placeholder="Email">
                                    @if (session('success'))
                                    <span class="text-success" role="alert">
                                        <strong>{{ session('success') }}</strong>
                                    </span>
                                    @endif
                                    {{-- <button name="submit" type="submit" class="btn btn-danger w-100">Join us now</button> --}}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- upcoming events  -->
        
            <section class="container py-5  px-2" data-aos="fade-right" data-aos-duration="2000">
                <div class="row align-items-center upcoming-events">
                    <!-- Left Content -->
                    <div class="col-lg-5">
                        <span class="text-danger fw-bold">Join Us</span>
                        <h2 class="fw-bold">Ready to Join our Latest Upcoming Events</h2>
                        <button class="btn btn-danger mt-3">Join Now</button>
                    </div>
                    
                    <!-- Right Event Cards -->
                    
                    <div class="col-lg-7 d-flex flex-wrap gap-3">

                              
                        @if (!empty($events[0]))
                            
                        <div class="card  shadow mt-5" style="width: 19rem;">
                            <div class="img-holder">
                            <img src="/storage/uploads/{{$events[0]->image}}" class="card-img-top border-bottom border-danger border-5" alt="event">
                        </div>
                            <div class="card-body">
                                <span class="text-danger fw-bold "> {{ \Carbon\Carbon::parse($events[0]->event_date)->format('F j, Y') }}</span>
                                
                                <p class="card-text"><small class="text-body-secondary"> {{ \Carbon\Carbon::parse($events[0]->start_time)->format('h:i A') }} | {{$events[0]->address}}</small></p>
                                <h5 class="fw-bold">{{$events[0]->event_name}}</h5>
                                <a href="#" class="text-danger fw-bold">Read More</a>
                            </div>
                        </div>
                        @endif
                        @if (empty($event[1]))
        
                        <div class="card  shadow mb-5" style="width: 19rem;">
                            <div class="img-holder">
                                <img src="/storage/uploads/{{$events[1]->image}}" class="card-img-top border-bottom border-danger border-5" alt="event">
                            </div>
                                <div class="card-body">
                                    <span class="text-danger fw-bold "> {{ \Carbon\Carbon::parse($events[1]->event_date)->format('F j, Y') }}</span>
                                    
                                    <p class="card-text"><small class="text-body-secondary"> {{ \Carbon\Carbon::parse($events[1]->start_time)->format('h:i A') }} | {{$events[1]->address}}</small></p>
                                    <h5 class="fw-bold">{{$events[1]->event_name}}</h5>
                                    <a href="#" class="text-danger fw-bold">Read More</a>
                                </div>
                        </div> 
                    </div>
                </div>
                @endif
              
            </section>
            
        
            <!-- faqs -->
        
            <section class="faq-section  " style="background-color: #F8E9E9;">
                <div class="container text-center">
                    <h6 class="text-uppercase">FAQ</h6>
                    <h2 class="fw-bold">Frequently Asked Questions</h2>
                    <div class="row justify-content-center">
                        <div class="col-8">
                            <div class="accordion mt-4" id="faqAccordion">
                                <div class="accordion-item border-0">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed bg-danger bg-opacity-10 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            How Do I Become a Volunteer Leader?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body bg-danger bg-opacity-10">
                                            You can become a volunteer leader by signing up on our platform and participating in our training programs.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item border-0">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed bg-danger bg-opacity-10 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How Do I Become a Volunteer Leader?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body bg-danger bg-opacity-10">
                                            You can become a volunteer leader by signing up on our platform and participating in our training programs.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item border-0">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed bg-danger bg-opacity-10 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How Do I Become a Volunteer Leader?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body bg-danger bg-opacity-10">
                                            You can become a volunteer leader by signing up on our platform and participating in our training programs.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item border-0">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed bg-danger bg-opacity-10 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            How Do I Become a Volunteer Leader?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                        <div class="accordion-body bg-danger bg-opacity-10">
                                            You can become a volunteer leader by signing up on our platform and participating in our training programs.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
@endsection