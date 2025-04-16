@extends('layouts.causes');



@section('content');



<div class="container abouthome position-relative mt-4 ">
<!-- logo positioned absolutely -->
<div class="position-absolute top-0 start-0 translate-middle bg-white rounded-pill d-none d-md-block"> <a class="navbar-brand " href="#"><img src="images/logo.png" alt="Logo" width="150"></a>
</div>


<div class="row mb-5">

</div>

<!-- CAUSES text  -->
<div class="row ">
   
    <div class="col-md-7 col-lg-7 col-sm-12 col-xm-12 px-5  hero-heading2 text-center text-md-start text-sm-center " >

        
        <h1 class="fs-1 fw-bold text-white pb-5 d-md-block d-flex justify-content-center align-items-center flex-column" data-aos="fade-right" data-aos-duration="1000">
        Causes
        <hr class="border border-white border-2 w-25"> 
        </h1>
       

    </div>
</div>
<div class=" position-absolute bottom-0 end-0 p-3" >
<div class="me-4 noted align-items-center" >

</div>
</div>

<div class=" mx-5 breadcrumb-box position-absolute bottom-0 end-0 bg-light px-3 pt-2">  <p >Home / <span class="text-danger">Causes</span></p></div>
</div>


    <!-- donation -->
    <div class="container py-5">
        <P class="text-center text-danger" data-aos="fade-up" data-aos-duration="1000">Our Causes</P>
        <h2 class="text-center fw-bold" data-aos="fade-up" data-aos-duration="2000">You Can Help lots of People by Donating Little</h2>
        <div class="row mt-4">

            @foreach ($all_causes as $cause)
                
           
             <!-- Campaign Card -->
             <div class="col-md-4 mb-4" data-aos="fade-left" data-aos-duration="{{1000*$loop->iteration}}">
                <div class="card">
                    <img src="/storage/uploads/{{$cause->image}}" class="card-img-top" alt="Campaign Image">
                    <div class="card-body">
                        <p class="card-text">Donations: <span class="text-danger">${{$cause->current_amount}}</span> / ${{$cause->target}}</p>
                        <h5 class="card-title fw-bold">{{$cause->cause_name}}</h5>
                        
                        <div class="progress">
                            <div class="progress-bar bg-danger" style="width: 10%"></div>
                        </div>
                       <a href="/cause?id={{$cause->id}}"> <button class="btn btn-donate w-100 mt-3 hover-me">Donate Now</button></a>
                    </div>
                </div>
            </div>

            @endforeach
           
            @if ($all_causes->isEmpty())
            <div class="container mt-5">
                <div class="row justify-content-center">
                  <div class="col-md-8 text-center">
                    <div class="alert alert-info" role="alert">
                      <i class="bi bi-exclamation-triangle-fill me-2"></i>
                      <strong>No Causes Yet!</strong>
                      <p class="mb-0">Stay tuned, we're working on bringing you exciting causes soon.</p>
                    </div>
                  </div>
                </div>
              </div>
                
              
            @endif

        <div class="row mt-4">
         


        </div>
    </div>
<!-- slider section  -->

    <section class="slider-section">
        <h2 class="gallery-title">Our Gallery</h2>
        <div class="slider-container">
            <div class="slider-track">
                <a href="/images/Gallery1.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery1.png" alt="1"></a>
                <a href="/images/Gallery2.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery2.png" alt="1"></a>
                <a href="/images/Gallery3.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery3.png" alt="1"></a>
                <a href="/images/Gallery1.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery1.png" alt="1"></a>
                <a href="/images/Gallery2.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery2.png" alt="1"></a>
                <a href="/images/Gallery3.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery3.png" alt="1"></a>
                <a href="/images/Gallery1.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery1.png" alt="1"></a>
                <a href="/images/Gallery2.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery2.png" alt="1"></a>
                <a href="/images/Gallery3.png" data-toggle="lightbox" data-size="lg" data-gallery="mygallery" class="slider-item"><img src="/images/Gallery3.png" alt="1"></a>
            </div>
            <button class="slider-btn prev">&#10094;</button>
            <button class="slider-btn next">&#10095;</button>
        </div>
    </section>

{{-- test --}}


@push('scripts')
    <script>
     const options = {
	keyboard: true,
	size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));
    </script>
@endpush
  
@endsection
