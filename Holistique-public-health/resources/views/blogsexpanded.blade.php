@extends('layouts.welcome');
           
        

@section('content')



<div class="container blogshome position-relative mt-4 ">
<!-- logo positioned absolutely -->
<div class="position-absolute top-0 start-0 translate-middle bg-white rounded-pill d-none d-md-block"> <a class="navbar-brand " href="#"><img src="/images/logo.png" alt="Logo" width="150"></a>
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


  <!-- Blog Layout Section -->
  <section class="blog-layout py-5">
    <div class="container">
      <div class="row">
        <!-- Left Column: Main Article -->
        <div class="col-md-8">
          <!-- Featured Image & Title -->
          <div class="mb-4">
            <img
              src="/storage/uploads/{{$blog[0]->blog_image}}"
              alt="Featured Blog"
              class="img-fluid rounded mb-3"
            />
            <h2 class="fw-bold">
            {{$blog[0]->blog_title}} </h2>
          </div>

          <!-- Main Article Content -->
          <div>
            <h5 class="fw-bold">{{$blog[0]->blog_subtitle}}</h5>
            <p class="text-muted">
            {!!$blog[0]->blog_content!!}
              
            </p>
            
            <!-- Add more paragraphs as needed -->
          </div>
        </div>

        <!-- Right Column: Sidebar -->
        <div class="col-md-4">
          <!-- Recent Posts Section -->
          <div class="mb-4">
            <h4 class="fw-bold"><span class="border-bottom border-danger border-3">Recent</span> Post</h4>

            <!-- Recent Post 1 -->
            <div class="d-flex mb-3">
              <img
                src="/images/recent1.png"
                alt="Post 1"
                class="rounded me-3"
              />
              <div>
                <h6 class="mb-1 fw-bold">Self Care is Public Health</h6>
                <p class="small text-muted mb-0">
                    Sickle Cell Disease (SCD) is a genetic disorder characterized by abnormal red blood cells, ........
                </p>
              </div>
            </div>

            <!-- Recent Post 2 -->
            <div class="d-flex mb-3">
              <img
              src="/images/recent2.png"
                alt="Post 2"
                class="rounded me-3"
              />
              <div>
                <h6 class="mb-1 fw-bold">Seniors' Day Programs</h6>
                <p class="small text-muted mb-0">
                    Sickle Cell Disease (SCD) is a genetic disorder characterized by abnormal red blood cells, ........
                </p>
              </div>
            </div>

            <!-- Recent Post 3 -->
            <div class="d-flex mb-3">
              <img
              src="/images/recent1.png"
                alt="Post 3"
                class="rounded me-3"
              />
              <div>
                <h6 class="mb-1 fw-bold">Mini Fundraiser</h6>
                <p class="small text-muted mb-0">
                    Sickle Cell Disease (SCD) is a genetic disorder characterized by abnormal red blood cells, ........
                </p>
              </div>
            </div>
          </div>


          <div class="p-4 rounded text-white mb-5" style="background-color: #BE3144;">
            <h1 class="fw-bold fs-1">"</h1>
            <p class="small">
              {{$blog[0]->special_quote}}
            </p>
           
          </div>
          <!-- Donate Section -->
          <div class="p-4 rounded text-white" style="background-color: #1D2A4D;">
            <h5 class="fw-bold">Donate now and help bring hope and relief</h5>
            <p class="small">
              Your donation supports our mission to provide essential resources and
              healthcare support to those who need it most.
            </p>
            <button class="btn btn-danger">Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  </section>


@endsection



