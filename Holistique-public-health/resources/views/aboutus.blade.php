@extends('layouts.welcome');
           
        

@section('content')
   


<div class="container abouthome position-relative mt-4 ">
  <!-- logo positioned absolutely -->
  <div class="position-absolute top-0 start-0 translate-middle bg-white rounded-pill d-none d-md-block"> <a class="navbar-brand " href="#"><img src="images/logo.png" alt="Logo" width="150"></a>
  </div>
  

    <div class="row mb-5">

    </div>

    <!-- about text  -->
    <div class="row ">
       
        <div class="col-md-7 col-lg-7 col-sm-12 col-xm-12 px-5  hero-heading2 text-center text-md-start text-sm-center " >

            
            <h1 class="fs-1 fw-bold text-white pb-5" data-aos="fade-right" data-aos-duration="1000">
               About Us 
               <hr class="border border-white border-2 w-25">    
            </h1>
            
           

        </div>
    </div>
<div class=" position-absolute bottom-0 end-0 p-3" >
   <div class="me-4 noted align-items-center" >
   
   </div>
</div>

<div class=" mx-5 breadcrumb-box position-absolute bottom-0 end-0 bg-light px-3 pt-2">  <p >Home / <span class="text-danger">About us</span></p></div>
</div>

<!-- about us  -->

<div class="container py-5 about-body">
    <div class="row align-items-center">
        <!-- Image Section -->
        <div class="col-md-4 custom-image-container">
           
                <img src="images/about2.png" alt="Healthcare Support" class="img-fluid object-fit-cover" width="300">
            
        </div>
<!-- ignore this div :) -->

<div class="col-md-1">

</div>
        <!-- Text Section -->
        <div class="col-md-7 ">
            <h2 class="fw-bold">About Us</h2>
            <p>
               Holistique Public Health is a strong innovative leader in health services that is committed to improving the health and well-being of underserved and vulnerable populations. Currently, our team is based across and provides services to - Canada, Kenya, and Nigeria - communities.
            </p>
            <p class="fw-bold">
                We believe that all people have a right to access the healthcare 
                services that they need to live healthier lives.
            </p>
            <p>
                As a health and wellness hub, we deliver health programs and services to empower marginalized groups to attain their full health potential.‍It is well known that positive health outcomes can be fostered through effective health promotion and preventive healthcare services.Social Determinants Of Health play a huge role in determining one’s health outcomes, especially for the most vulnerable populations. Holistique Public Health aims to improve the health and well-being of underserved and vulnerable populations through professional expertise, cultural safety, and collaborative partnerships by providing health promotion services, health education, and prevention resources, as well as utilizing downstream and midstream public health approaches, to address the root causes of health issues. 
            </p>
        </div>
    </div>
</div>

<div class="container py-5">
    <div class="row g-4">
        <!-- Left Section: Mission & Vision -->
        <div class="col-md-6 ">
            <!-- Mission Card -->
            <div class="about-card mission-card p-4 d-flex gap-4">
                <div class="">
                    <div class=" icon-left rounded-pill  d-flex justify-content-center align-items-center"> <a class="navbar-brand " href="#"><img src="images/hugeicons_vision.png" alt="Logo" width="70"></a>
                    </div>
                </div>
               <div>
                <h3 class="fw-bold">MISSION</h3>
                <p>1. To empower underserved and vulnerable populations to improve their health.</p>
                <p>2. To provide health promotion and disease prevention programs and services designed to help 
                    underserved and vulnerable populations achieve and maintain optimal health.</p>
               </div>
            </div>

            <!-- Vision Card -->
            <div class="about-card vision-card p-4 mt-4 d-flex gap-4">
                <div class="">
                    <div class=" icon-left rounded-pill  d-flex justify-content-center align-items-center"> <a class="navbar-brand " href="#"><img src="images/hugeicons_vision.png" alt="Logo" width="70"></a>
                    </div>
                </div>
               <div>
                <h3 class="fw-bold">VISION</h3>
                <p>Holistique Public Health strives to improve the health and well-being of underserved and 
                   vulnerable populations through public health initiatives.</p>
               </div>
            </div>
        </div>

        <!-- Right Section: Core Values -->
        <div class="col-md-6">
            <div class="core-values p-4 ">
                
                   <div class="d-flex text-center justify-content-center gap-4">
                    <div class="">
                        <div class=" icon-left rounded-pill  d-flex justify-content-center align-items-center"> <a class="navbar-brand " href="#"><img src="images/vector.png" alt="Logo" width="70"></a>
                        </div>
                    </div>
                <div><h3 class="fw-bold mt-5">OUR CORE VALUES</h3></div>  
                   </div>  
                    
<!-- one of  -->
                   
                <div class="values-list">
                    <div class="d-flex  gap-5">

                        <p><img src="images/on.png" alt="Logo" width="70">Empower</p>

                    <p><img src="images/Frame6.png" alt="Logo" width="70">Capacity Building</p>
                    </div>


                   <div class="d-flex gap-5">

                    <p><img src="images/Frame.png" alt="Logo" width="70"> Equity</p>


                    <p><img src="images/Frame5.png" alt="Logo" width="70"> Community</p>
                   </div>


                   <div class="d-flex gap-5">

                    <p><img src="images/Frame2.png" alt="Logo" width="70">Collaboration</p>


                    <p><img src="images/Frame4.png" alt="Logo" width="70">Dignity</p>

                   </div>

                    <p><img src="images/Frame3.png" alt="Logo" width="70"> Cultural Safety</p>
                </div>
            </div>
        </div>

    </div>
</div>


<!-- team -->

<div class="container text-center py-5">
    <h2 class="fw-bold">Our Dedicated Team</h2>
    <div class="row g-4 mt-4">
        <!-- Team Member 1 -->
        <div class="col-md-4">
            <div class="team-card">
                <img src="images/team1.png" alt="Lloyd George">
                <div class="info">
                    <h5>Lloyd George</h5>
                    <p>Support Staff</p>
                </div>
            </div>
        </div>

        <!-- Team Member 2 -->
        <div class="col-md-4">
            <div class="team-card">
                <img src="images/team2.png" alt="Maria George">
                <div class="info">
                    <h5>Maria George</h5>
                    <p>Support Staff</p>
                </div>
            </div>
        </div>

        <!-- Team Member 3 -->
        <div class="col-md-4">
            <div class="team-card">
                <img src="images/team3.png" alt="Tom George">
                <div class="info">
                    <h5>Tom George</h5>
                    <p>Support Staff</p>
                </div>
            </div>
        </div>

        <!-- Team Member 4 -->
        <div class="col-md-4">
            <div class="team-card">
                <img src="images/team4.png" alt="Erick George">
                <div class="info">
                    <h5>Erick George</h5>
                    <p>Support Staff</p>
                </div>
            </div>
        </div>

        <!-- Team Member 5 -->
        <div class="col-md-4">
            <div class="team-card">
                <img src="images/team5.png" alt="Natalie George">
                <div class="info">
                    <h5>Natalie George</h5>
                    <p>Support Staff</p>
                </div>
            </div>
        </div>

        <!-- Team Member 6 -->
        <div class="col-md-4">
            <div class="team-card">
                <img src="images/team6.png" alt="Eduard George">
                <div class="info">
                    <h5>Eduard George</h5>
                    <p>Support Staff</p>
                </div>
            </div>
        </div>
    </div>
</div>


@endsection