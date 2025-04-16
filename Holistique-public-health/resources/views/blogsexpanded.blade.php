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
   
  <div class="col-md-7 col-lg-7 col-sm-12 col-xm-12 px-5  hero-heading2 text-center text-md-start text-sm-center " >

        
    <h1 class="fs-1 fw-bold text-white pb-5 d-md-block d-flex justify-content-center align-items-center flex-column" data-aos="fade-right" data-aos-duration="1000">
    Blogs
    <hr class="border border-white border-2 w-25">    
       
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
          <div class="mb-4 blog-img-holder" data-aos="fade-up" data-aos-duration="2000">
            <img
              src="/storage/uploads/{{$blog[0]->blog_image}}"
              alt="Featured Blog"
              class=" "
            />
            <h2 class="fw-bold text-white">
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

          @if (count($all_blogs)>1)
            
         
          <div class="mb-4">
            <h4 class="fw-bold"><span class="border-bottom border-danger border-3">Recent</span> Post</h4>

            @foreach ($all_blogs as $blog )
              
            
            <!-- Recent Post 1 -->
            <div class="d-flex mb-3">
              <img
                src="/images/recent1.png"
                alt="Post 1"
                class="rounded me-3"
              />
              <div>
                <h6 class="mb-1 fw-bold">{{$blogs->blog_title}}</h6>
                <p class="small text-muted mb-0">
                  {!!$blog->blog_content!!}
                
                <p>....... </p>
                </p>
              </div>
            </div>
            @endforeach

            <!-- Recent Post 2 -->
            

            <!-- Recent Post 3 -->
           
          </div>
          @endif


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



