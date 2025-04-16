@extends('layouts.welcome');
           
        

@section('content')


<div class="container eventhome position-relative mt-4 ">
  <!-- logo positioned absolutely -->
  <div class="position-absolute top-0 start-0 translate-middle bg-white rounded-pill d-none d-md-block"> <a class="navbar-brand " href="#"><img src="images/logo.png" alt="Logo" width="150"></a>
  </div>
  
  
  <div class="row mb-5">
  
  </div>
  
  <!-- events text  -->
  <div class="row ">
     
      <div class="col-md-7 col-lg-7 col-sm-12 col-xm-12 px-5  hero-heading2 text-center text-md-start text-sm-center " >
  
          
          <h1 class="fs-1 fw-bold text-white pb-5 d-md-block d-flex justify-content-center align-items-center flex-column" data-aos="fade-right" data-aos-duration="1000">
          Events
          <hr class="border border-white border-2 w-25">    
             
          </h1>
         
  
      </div>
  </div>
  
<div class=" position-absolute bottom-0 end-0 p-3" >
<div class="me-4 noted align-items-center" >

</div>
</div>

<div class=" mx-5 breadcrumb-box position-absolute bottom-0 end-0 bg-light px-3 pt-2">  <p >Home / <span class="text-danger">Events</span></p></div>
</div>

<!-- Event Details Section -->
{{-- <section class="event-details py-5">
    <div class="container">
      <div class="row">
        <!-- Left Column: Event Content -->
        <div class="col-md-6 mx-auto">

          <img 
            src="/images/up.png" 
            alt="Community Health Fair" 
            class="img-fluid rounded mb-3 border-bottom border-4 border-danger"
          >
          
        
        </div>

        <div class="col-md-6 mx-auto">

              <!-- Event Title & Description -->
          <h3 class="fw-bold">Community Health Fair</h3>
          <p>
            Sickle Cell Disease (SCD) is a genetic disorder that affects millions of people around the world. 
            It is characterized by abnormally shaped red blood cells that can cause a range of health problems, 
            including pain crises, anemia, and organ damage. 
          </p>
          <p>
            Our Community Health Fair is geared towards providing resources and support 
            to those impacted by SCD. Join us to learn more and help bring hope to those in need.
          </p>
  
          <!-- Event Info: Date, Time, Location, Button -->
          <div class="d-flex flex-wrap align-items-center mt-4 gap-3">
            <span class="text-muted">
              <i class="bi bi-calendar-event"></i> June 7, 2023
            </span>
            <span class="text-muted">
              <i class="bi bi-clock"></i> 4:00 AM - 7:00 AM
            </span>
            <span class="text-muted">
              <i class="bi bi-geo-alt"></i> Hamilton
            </span>
            <button class="btn btn-outline-secondary">
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section> --}}

  <section class="event-details py-5 px-5 tester ">
    <div class="container px-5">
      <div class="row">
        <!-- Left Column: Event Content -->
        <div class="col-md-6 col-12 mx-auto single_event_image " data-aos="zoom-in" data-aos-duration="3000">

          <img 
            src="/storage/uploads/{{$event[0]->image}}" 
            alt={{$event[0]->event_name}} 
            class="img-fluid rounded mb-3 border-bottom border-4 border-danger"
          >
          
        
        </div>

        <div class="col-md-6 mx-auto" data-aos="fade-left" data-aos-duration="3000">

              <!-- Event Title & Description -->
          <h3 class="fw-bold">{{$event[0]->event_name}}</h3>
          <p>
            {!!$event[0]->description!!} 
          </p>
          {{-- <p>
            Our Community Health Fair is geared towards providing resources and support 
            to those impacted by SCD. Join us to learn more and help bring hope to those in need.
          </p> --}}
  
          <!-- Event Info: Date, Time, Location, Button -->
          <div class="d-flex flex-wrap align-items-center mt-4 gap-3 justify-content-md-start justify-content-center">
            <span class="text-muted">
              <i class="bi bi-calendar-event"></i> {{$event[0]->event_date}}
            </span>
            <span class="text-muted">
              <i class="bi bi-clock"></i> {{$event[0]->start_time}}
            </span>
            <span class="text-muted">
              <i class="bi bi-geo-alt"></i> {{$event[0]->address}}
            </span>
            <button class="btn btn-outline-secondary">
              Add to Calendar
            </button>
          </div>
        </div>

        
      </div>
    </div>
  </section>
  
  <!-- Donate Section -->
  <section 
    class="donate-section py-5 text-white mb-5 mt-5" 
    style="background-color: #1D2A4D;"

    data-aos="fade-up" data-aos-duration="3000"
  >
    <div class="container">
      <div class="row align-items-center position-relative">
        <!-- Left Column: Text -->
        <div class="col-md-8">
          <h3 class="fw-bold">
            Donate now and help bring hope and relief to those in need!
          </h3>
          <p class="mt-3">
            Every contribution counts. By donating, you can support our efforts 
            to provide essential services, education, and resources to individuals 
            and families affected by health challenges.
          </p>
          <a href="#" class="btn btn-danger mt-3">Donate now</a>
        </div>
  
        <!-- Right Column: Image (Optional) -->
        <div class="col-md-4 text-center mt-4 mt-md-0  position-absolute  bottom-0 end-0 d-none d-md-flex ">
          <img 
            src="/images/round.png" 
            alt="Donate Image" 
            class="img-fluid rounded-circle border border-4 border-white"
          >
        </div>
      </div>
    </div>
  </section>
  

@endsection