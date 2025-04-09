@php
// convert time
function convertToAmPm(string $time24): ?string
{
    // Validate the input format
     // Validate the input format (with optional seconds)
     if (!preg_match('/^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/', $time24, $matches)) {
        return null; // Or throw an exception for invalid format
    }

    $hour = (int) $matches[1];
    $minute = $matches[2];
    $secondsPart = isset($matches[3]) ? $matches[3] : ''; // Capture the ":ss" part

    $amPm = 'AM';

    if ($hour == 0) {
        $hour12 = 12; // Midnight
    } elseif ($hour < 12) {
        $hour12 = $hour;
    } else {
        $hour12 = $hour - 12;
        $amPm = 'PM';
    }

    // Handle 12 PM
    if ($hour == 12) {
        $hour12 = 12;
        $amPm = 'PM';
    }

    return sprintf('%02d:%s %s', $hour12, $minute, $amPm);
}

@endphp




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
   
    <div class="col-md-7 col-lg-7 col-sm-12 col-xm-12 px-5 mt-5 hero-heading text-center text-md-start text-sm-center " >

        
        <h1 class="fs-1 fw-bold text-white">
        Events
        </h1>
       

    </div>
</div>
<div class=" position-absolute bottom-0 end-0 p-3" >
<div class="me-4 noted align-items-center" >

</div>
</div>

<div class=" mx-5 breadcrumb-box position-absolute bottom-0 end-0 bg-light px-3 pt-2">  <p >Home / <span class="text-danger">Events</span></p></div>
</div>


<section class="upcoming-events py-5">
    <div class="container">
        <P class="text-center text-danger">Our Events</P>
        <h2 class="text-center mb-4 fw-bold">Upcoming Events</h2>
        <div class="row">
            <!-- Event Card -->
            {{-- <div class="col-md-4 mb-4" *ngFor="let event of events"> 
                <div class="card shadow-sm border-0 rounded">
                    <img src="/images/up.png" class="card-img-top border-bottom border-4 border-danger" alt="Event Image">
                    <div class="card-body">
                        <span class="badge bg-danger mb-2">June 7, 2023</span>
                        <p class="small text-muted">4:00 AM - 7:00 AM | Hamilton</p>
                        <h5 class="card-title fw-bold">Community Health Fair</h5>
                        <a href="#" class="text-danger">Read More &raquo;</a>
                    </div>
                </div>



            </div> --}}
             

        @foreach ($all_events as $event)
        <div class="col-md-4 mb-4 eventcard" *ngFor="let event of events"> 
            <div class="card shadow-sm border-0 rounded">
                <div class="div-img"> 
                <img src="/storage/uploads/{{$event->image}}" class="card-img-top border-bottom border-4 border-danger" alt="Event Image">
            </div>
                <div class="card-body">
                    <span class="badge bg-danger mb-2">{{$event->event_date}}</span>
                    <p class="small text-muted">{{convertToAmPm($event->start_time)}} | {{$event->address}}</p>
                    <h5 class="card-title fw-bold">{{$event->event_name}}</h5>
                    <a href="/events/{{$event->id}} " class="text-danger">Read More &raquo;</a>
                </div>
            </div>
        </div>

      
            
        @endforeach
        
       
      
        @if ($all_events->isEmpty())
        <div class="container mt-5">
            <div class="row justify-content-center">
              <div class="col-md-8 text-center">
                <div class="alert alert-info" role="alert">
                  <i class="bi bi-exclamation-triangle-fill me-2"></i>
                  <strong>No Events Yet!</strong>
                  <p class="mb-0">Stay tuned, we're working on bringing you exciting events soon.</p>
                </div>
              </div>
            </div>
          </div>
            
          
        @endif


        
        </div>

        
    </div>
</section>

<!-- Newsletter Section -->
<section class="newsletter-section py-4">
    <div class="container text-center">
        <h5 class="text-white">Subscribe to our Newsletter</h5>
        <div class="d-flex justify-content-center">
            <input type="email" class="form-control w-25" placeholder="Email">
            <button class="btn btn-danger ms-2">Submit</button>
        </div>
    </div>
</section>


@endsection