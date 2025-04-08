


@extends('layouts.app')

@section('content')
{{-- <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div> --}}


<div class="container m-4 "> 
<div class="row">

<div class=" card shadow  mt-5 col-md-5 p-3 col-sm-12">
    <div class="card-header ">
    <h1 class="py-3">Create New Event</h1>
</div>
    <form method="POST" action={{route('upload-event')}} enctype="multipart/form-data">
       
       @csrf

       <div class="mb-3">
        <label for="formFileAllowed" class="form-label">Image</label>
        <input name="image" class="form-control" type="file" id="formFileAllowed" title="only these formats are accepted (jpg, png, gif)" accept="image/png, image/jpeg, image/gif">
    </div>

        <div class="mb-3">
            <label for="eventName" class="form-label">Name of Event</label>
            <input type="text" name="event_name" class="form-control datepicker" id="eventDate" required>
         </div>

        <div class="mb-3">
            <label for="eventDescription" class="form-label">Description</label>
            <textarea class="form-control"  name="description"  id="eventDescription" rows="3" placeholder="Enter event description" required></textarea>
        </div>

        <div class="mb-3">
            <label for="eventDate" class="form-label">Date</label>
            <input type="date"  name="event_date" class="form-control" id="eventDate" required>
        </div>

        <div class="mb-3">
            <label for="eventTime" class="form-label">Time</label>
            <input type="time" name="start_time" class="form-control" id="eventTime" required>
        </div>

        <div class="mb-3">
            <label for="eventAddress" class="form-label">Address</label>
            <textarea class="form-control" name="address" id="eventAddress" rows="2" placeholder="Enter event address" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Create Event</button>
        @if (session('success'))
        <div class="alert alert-success mt-2" role="alert">
            <strong>{{ session('success') }}</strong>
        </div>
        @endif
        @if (session('error'))
        <div class="alert alert-danger mt-2" role="alert">
            <strong>{{ session('error') }}</strong>
        </div>
        @endif
        @if ($errors->any())
    <div class="alert alert-danger mt-2">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
    </form>
</div>
<div class="col-md-2"></div>

<div class=" mt-5 col-md-5 col-sm-12 p-3 card shadow   ">

    <div class="card-header ">
        <h1 class="py-3">Create New Cause</h1>
    </div>
        <form method="POST" action={{route('upload-cause')}} enctype="multipart/form-data" id="causeForm">
           
           @csrf
    
           <div class="mb-3">
            <label for="formFileAllowed" class="form-label">Image</label>
            <input name="image" class="form-control" type="file" id="formFileAllowed" title="only these formats are accepted (jpg, png, gif)" accept="image/png, image/jpeg, image/gif">
        </div>
    
            <div class="mb-3">
                <label for="eventName" class="form-label">Name of Cause</label>
                <input type="text"   name="cause_name"  class="form-control" id="eventName" >
            </div>
    
            <div class="mb-3">
                <label for="eventDescription" class="form-label">Cause Description</label>
                <textarea class="form-control hidden-area"  name="cause_description"  id="causeDescription hiddenarea " rows="6" 
                 ></textarea>

                 <div id="editor" class="editableDiv">
                    <p>Hello World!</p>
                    <p>Some initial <strong>bold</strong> text</p>
                    <p><br /></p>
                  </div>
            </div>
    
            <div class="mb-3">
                <label for="eventDate" class="form-label">Target($)</label>
                <input type="number"  name="target" class="form-control" id="eventDate" required>
            </div>
    
            
    
           
    
            <button type="submit" class="btn btn-primary">Create Cause</button>
            @if (session('success_2'))
            <div class="alert alert-success mt-2" role="alert">
                <strong>{{ session('success_2') }}</strong>
            </div>
            @endif
            @if (session('error_2'))
            <div class="alert alert-danger mt-2" role="alert">
                <strong>{{ session('error_2') }}</strong>
            </div>
            @endif
            @if ($errors->any())
        <div class="alert alert-danger mt-2">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    
        </form>
</div>



<div class=" mt-5 col-md-5 col-sm-12 p-3 card shadow   ">

    <div class="card-header ">
        <h1 class="py-3">Create New Blog</h1>
    </div>
        <form method="POST" action={{route('create-blog')}} enctype="multipart/form-data">
           
           @csrf
    
           <div class="mb-3">
            <label for="formFileAllowed" class="form-label">Blog Image</label>
            <input name="blog_image" class="form-control" type="file" id="formFileAllowed" title="only these formats are accepted (jpg, png, gif)" accept="image/png, image/jpeg, image/gif">
        </div>
    
            <div class="mb-3">
                <label for="eventName" class="form-label">Blog title</label>
                <input type="text"   name="blog_title"  class="form-control" id="eventName" placeholder="Enter event name">
            </div>

            <div class="mb-3">
                <label for="eventName" class="form-label">Blog subtitle</label>
                <input type="text"   name="blog_subtitle"  class="form-control" id="eventName" placeholder="Enter event name">
            </div>
    
            <div class="mb-3">
                <label for="eventDescription" class="form-label">Blog Content</label>
                <textarea class="form-control"  name="blog_content"  id="eventDescription" rows="3" placeholder="Enter event description" required></textarea>
            </div>
    
            <div class="mb-3">
                <label for="eventName" class="form-label">Special Quote</label>
                <input type="text"   name="special_quote"  class="form-control" id="eventName" placeholder="Enter event name">
            </div>
           
    
            
    
           
    
            <button type="submit" class="btn btn-primary">Create Blog</button>
            @if (session('success_3'))
            <div class="alert alert-success mt-2" role="alert">
                <strong>{{ session('success_3') }}</strong>
            </div>
            @endif
            @if (session('error_3'))
            <div class="alert alert-danger mt-2" role="alert">
                <strong>{{ session('error_3') }}</strong>
            </div>
            @endif
            @if ($errors->any())
        <div class="alert alert-danger mt-2">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
        </form>
</div>


</div>

</div>




<script>
    const editableDiv = document.querySelector('.editableDiv');
    const form = document.getElementById('causeForm');
    const hiddenInput = document.querySelector('.hidden-area');
  
    form.addEventListener('submit', function(event) {
      hiddenInput.value = htmlContent; // Or editableDiv.textContent;
    
      console.log(hiddenInput);
    });


    cosole.log(htmlContent);

    
  </script>


@endsection

