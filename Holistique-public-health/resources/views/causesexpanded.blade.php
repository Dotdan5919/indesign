@extends('layouts.causes')


@section('content')

<div class="container abouthome position-relative mt-4 ">
<!-- logo positioned absolutely -->
<div class="position-absolute top-0 start-0 translate-middle bg-white rounded-pill d-none d-md-block"> <a class="navbar-brand " href="#"><img src="images/logo.png" alt="Logo" width="150"></a>
</div>


<div class="row mb-5">

</div>

<!-- CAUSES text  -->
<div class="row ">
   
    <div class="col-md-7 col-lg-7 col-sm-12 col-xm-12 px-5 mt-5 hero-heading text-center text-md-start text-sm-center " >

        
        <h1 class="fs-1 fw-bold text-white">
        Causes
        </h1>
       

    </div>
</div>
<div class=" position-absolute bottom-0 end-0 p-3" >
<div class="me-4 noted align-items-center" >

</div>
</div>

<div class=" mx-5 breadcrumb-box position-absolute bottom-0 end-0 bg-light px-3 pt-2">  <p >Home / <span class="text-danger">Causes</span></p></div>
</div>


<!-- Top Section -->
<section class="py-5 text-center">
    <div class="container">
      <h6 class="text-danger">Our Causes</h6>
      <h2 class="fw-bold">You Can Help lots of People by Donating Little</h2>
    </div>
  </section>
  

<!-- Main Content -->
<section class="donation-page mb-5">
    <div class="container">
      <div class="row">
        <!-- Left Column -->
        <div class="col-md-8">
          
          <!-- Large Image -->
          <div class="mb-4">
            <img
              src="/images/camp.png"
              alt="Large Campaign Image"
              class="img-fluid rounded mb-3"
            />
          </div>
  
          <!-- Campaign Info -->
          <p class="text-muted">
            Donations: <span class="text-danger">$50</span> / $5000
          </p>
          <h3 class="fw-bold">It's on Your Hands Campaign</h3>
  
          <!-- Donation Options -->
          <div class="d-flex flex-wrap align-items-center gap-2 mb-4">
            <span class="fw-bold">Donate:</span>
            <button class="btn btn-outline-secondary">$5</button>
            <button class="btn btn-outline-secondary">$10</button>
            <button class="btn btn-outline-secondary">$20</button>
            <button class="btn btn-outline-secondary">$50</button>
            <button class="btn btn-outline-secondary">$100</button>
            <button class="btn btn-outline-secondary">Custom Amount</button>
          </div>
  
          <!-- Donation Form -->
          <form class="mb-5">
            <div class="mb-3">
              <label for="fullName" class="form-label">Personal info</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Full Name"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email Address"
              />
            </div>
            <button type="submit" class="btn btn-danger w-100">Donate Now</button>
          </form>
  
          <!-- Additional Campaign Info -->
          <h4 class="fw-bold">Health Education Campaign</h4>
          <p class="text-muted">A School Based Health Education Program.</p>
         
         <p class="fw-bold">Target Audience: School aged children .</p>
          <p>
            

Rationale: Education is a social determinant of health that impact a person’s overall health and well being. The quality of education children receive can positively influence their health outcomes and life expectancy. Early education is especially important because it sets the foundation for a healthy life. 
</p>

<p class="fw-bold">Objectives</p>

<ul>
<li>
Enroll 50 out of school children back 2 school. 
        
   
</li>

<li>

  Provide educational and health related resources to about 200 school children. 
</li>

<li>
    Provide health education workshops to build life skills, knowledge, and positive attitudes towards health.
    Increase health literacy.
       
</li>

<li>
     
    We Can’t Do It Without You! Interested in been a volunteer or sponsorships for this campaign please contact us
</li>

</ul> 




</div>
  
        <!-- Right Column (Sidebar) -->
        <div class="col-md-4">
          <!-- Categories -->
          <div class="mb-4">
            <h5 class="fw-bold "><span class="border-3 border-bottom border-danger">Categ</span>ories</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-dark text-decoration-none">Environmental</a></li>
              <li><a href="#" class="text-dark text-decoration-none">Area Charity</a></li>
              <li><a href="#" class="text-dark text-decoration-none">School Charity</a></li>
            </ul>
          </div>
  
          <!-- Donation CTA Card -->
          <div class="card bg-light border-0">
            <img
              src="/images/smile.png"
              class="card-img-top"
              alt="Donate Image"
            />
            <div class="card-body text-center">
              <h5 class="card-title fw-bold">Donate now and help bring hope and relief</h5>
              <p class="card-text small">
                By donating, you can support our efforts to provide essential 
                resources and healthcare support.
              </p>
              <a href="#" class="btn btn-danger">Donate Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



    <!-- donation -->
    <div class="container py-5">
        <h2 class="fw-bold text-center">Other Causes</h2>
        <div class="row mt-4">
            <!-- Campaign Card -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="/images/donate1.png" class="card-img-top" alt="Campaign Image">
                    <div class="card-body">
                        <p class="card-text">Donations: <span class="text-danger">$50</span> / $5000</p>
                        <h5 class="card-title fw-bold">It's on Your Hands Campaign</h5>
                        
                        <div class="progress">
                            <div class="progress-bar bg-danger" style="width: 10%"></div>
                        </div>
                        <button class="btn btn-donate w-100 mt-3">Donate Now</button>
                    </div>
                </div>
            </div>
       
            <!-- Campaign Card -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="/images/donate2.png" class="card-img-top" alt="Campaign Image">
                    <div class="card-body">
                        <p class="card-text">Donations: <span class="text-danger">$50</span> / $5000</p>
                        <h5 class="card-title fw-bold">It's on Your Hands Campaign</h5>
                        
                        <div class="progress">
                            <div class="progress-bar bg-danger" style="width: 10%"></div>
                        </div>
                        <button class="btn btn-donate w-100 mt-3">Donate Now</button>
                    </div>
                </div>
            </div>
       <!-- Campaign Card -->
       <div class="col-md-4 mb-4">
        <div class="card">
            <img src="/images/donate3.png" class="card-img-top" alt="Campaign Image">
            <div class="card-body">
                <p class="card-text">Donations: <span class="text-danger">$50</span> / $5000</p>
                <h5 class="card-title fw-bold">It's on Your Hands Campaign</h5>
                
                <div class="progress">
                    <div class="progress-bar bg-danger" style="width: 10%"></div>
                </div>
                <button class="btn btn-donate w-100 mt-3">Donate Now</button>
            </div>
        </div>
    </div>


        </div>

        <div class="row mt-4">
            <!-- Campaign Card -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="/images/donate3.png" class="card-img-top" alt="Campaign Image">
                    <div class="card-body">
                        <p class="card-text">Donations: <span class="text-danger">$50</span> / $5000</p>
                        <h5 class="card-title fw-bold">It's on Your Hands Campaign</h5>
                        
                        <div class="progress">
                            <div class="progress-bar bg-danger" style="width: 10%"></div>
                        </div>
                        <button class="btn btn-donate w-100 mt-3">Donate Now</button>
                    </div>
                </div>
            </div>
       
            <!-- Campaign Card -->
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="/images/donate4.png" class="card-img-top" alt="Campaign Image">
                    <div class="card-body">
                        <p class="card-text">Donations: <span class="text-danger">$50</span> / $5000</p>
                        <h5 class="card-title fw-bold">It's on Your Hands Campaign</h5>
                        
                        <div class="progress">
                            <div class="progress-bar bg-danger" style="width: 10%"></div>
                        </div>
                        <button class="btn btn-donate w-100 mt-3">Donate Now</button>
                    </div>
                </div>
            </div>
       <!-- Campaign Card -->
       <div class="col-md-4 mb-4">
        <div class="card">
            <img src="/images/donate5.png" class="card-img-top" alt="Campaign Image">
            <div class="card-body">
                <p class="card-text">Donations: <span class="text-danger">$50</span> / $5000</p>
                <h5 class="card-title fw-bold">It's on Your Hands Campaign</h5>
                
                <div class="progress">
                    <div class="progress-bar bg-danger" style="width: 10%"></div>
                </div>
                <button class="btn btn-donate w-100 mt-3">Donate Now</button>
            </div>
        </div>
    </div>


        </div>
    </div>



@endsection