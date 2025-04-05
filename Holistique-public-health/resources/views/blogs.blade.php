@extends('layouts.welcome');
           
        

@section('content')





<div class="container blogshome position-relative mt-4 ">
<!-- logo positioned absolutely -->
<div class="position-absolute top-0 start-0 translate-middle bg-white rounded-pill d-none d-md-block"> <a class="navbar-brand " href="#"><img src="images/logo.png" alt="Logo" width="150"></a>
</div>


<div class="row mb-5">

</div>

<!-- blogs text  -->
<div class="row ">
   
    <div class="col-md-7 col-lg-7 col-sm-12 col-xm-12 px-5 mt-5 hero-heading text-center text-md-start text-sm-center " >

        
        <h1 class="fs-1 fw-bold text-white">
        Blogs
        </h1>
       

    </div>
</div>
<div class=" position-absolute bottom-0 end-0 p-3" >
<div class="me-4 noted align-items-center" >

</div>
</div>

<div class=" mx-5 breadcrumb-box position-absolute bottom-0 end-0 bg-light px-3 pt-2">  <p >Home / <span class="text-danger">Blogs</span></p></div>
</div>

<!-- Blogs Section -->
<section class="blogs py-5">
    <div class="container">
      <h6 class="text-danger text-center">Our Blogs</h6>
      <h2 class="fw-bold text-center">Latest News</h2>
  
      <!-- Row 1: Two Blog Items -->
      <div class="row g-4 mt-4">
        <!-- Blog Item 1 -->
        <div class="col-md-6">
          <div class="d-flex align-items-start blog-item p-3 rounded shadow-sm">
            <!-- Image Div -->
            <div class="blog-img me-3 col-5">
              <img
                src="/images/sickle.png"
                alt="Blog 1"
                class="img-fluid rounded"
              />
            </div>
            <!-- Text Div -->
            <div class="blog-text col-6">
              <h5 class="fw-bold text-danger">Mastering Life with Sickle Cell Disease: Effective Management Strategies</h5>
              <p class="text-muted small">
                Sickle Cell Disease (SCD) is a genetic disorder characterized by abnormal red blood cells, leading to various health problems. Effective management strategies are crucial for improving the quality of life........
              </p>
              <a href="#" class="text-danger fw-bold">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
  
        <!-- Blog Item 2 -->
        <div class="col-md-6">
          <div class="d-flex align-items-start blog-item p-3 rounded shadow-sm">
            <!-- Image Div -->
            <div class="blog-img me-3 col-5">
              <img
              src="/images/self.png"
                alt="Blog 2"
                class="img-fluid rounded"
              />
            </div>
            <!-- Text Div -->
            <div class="blog-text col-6">
              <h5 class="fw-bold text-danger">Self Care is Public Health</h5>
              <p class="text-muted small">
                Discover the profound connection between self-care and your health and wellness in our latest blog post. At Holistique Public Health, we redefine self-care as a collective responsibility .........
              </p>
              <a href="#" class="text-danger fw-bold">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Row 2: Two Blog Items -->
      <div class="row g-4 mt-4">
        <!-- Blog Item 3 -->
        <div class="col-md-6">
          <div class="d-flex align-items-start blog-item p-3 rounded shadow-sm">
            <div class="blog-img me-3 col-5">
              <img
              src="/images/mini.png"
                alt="Blog 3"
                class="img-fluid rounded"
              />
            </div>
            <div class="blog-text col-6">
              <h5 class="fw-bold text-danger">Mini Fundraiser</h5>
              <p class="text-muted small">
                Sickle Cell Disease (SCD) is a genetic disorder characterized by abnormal red blood cells, leading to various health problems. Effective management strategies are crucial for improving the quality of life........
              </p>
              <a href="#" class="text-danger fw-bold">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
  
        <!-- Blog Item 4 -->
        <div class="col-md-6">
          <div class="d-flex align-items-start blog-item p-3 rounded shadow-sm blogcard">
            <div class="blog-img me-3 col-5">
              <img
              src="/images/senior.png"
                alt="Blog 4"
                class="img-fluid rounded"
              />
            </div>
            <div class="blog-text col-6">
              <h5 class="fw-bold text-danger">Seniors' Day Programs</h5>
              <p class="text-muted small">
                Sickle Cell Disease (SCD) is a genetic disorder characterized by abnormal red blood cells, leading to various health problems. Effective management strategies are crucial for improving the quality of life........
              </p>
              <a href="#" class="text-danger fw-bold">
                Read More &raquo;
              </a>
            </div>
          </div>
        </div>
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