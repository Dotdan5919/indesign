
@extends('layouts.app')

@section('content')





 <div class=" container card shadow p-4 " >

  @if (!empty($blog))
    
  
  <form method="POST" action={{route('updateBlog')}} enctype="multipart/form-data">
               
    @csrf

    <input type="text" class="d-none" value="{{$blog[0]->id}}" name="id" >
    <div class="mb-3">
      <img src="storage/uploads/{{$blog[0]->blog_image}}" alt="" srcset=""> <br>
     <label for="formFileAllowed fw-bold" class="form-label py-2">Change Image</label>
     <input name="image" class="form-control" type="file" id="formFileAllowed" title="only these formats are accepted (jpg, png, gif)" accept="image/png, image/jpeg, image/gif">
 </div>

     <div class="mb-3">
         <label for="eventName" class="form-label">Blog Title</label>
         <input type="text"   name="blog_title"  class="form-control" id="eventName" value="{{$blog[0]->blog_title}}">
     </div>

     <div class="mb-3">
         <label for="eventName" class="form-label">Blog Subtitle</label>
         <input type="text"   name="blog_subtitle"  class="form-control" id="eventName" placeholder="Enter Blog Subtitle" value="{{$blog[0]->blog_subtitle}}">
     </div>

     <div class="mb-3">
         <label for="eventDescription" class="form-label">Blog Content</label>
         <textarea class="form-control hidden-area d-none "  name="blog_content"  id="eventDescription" rows="3"  > {{$blog[0]->blog_content}}</textarea>
   
         <div id="editor">{!!$blog[0]->blog_content!!}</div>
     </div>

     <div class="mb-3">
         <label for="eventName" class="form-label">Special Quote</label>
         <input type="text"   name="special_quote"  class="form-control" id="eventName" placeholder="Enter Special Quote" value="{{$blog[0]->special_quote}}">
     </div>
    

     

    

     <button type="submit" class="btn btn-primary">Update Blog</button>
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
             
@elseif (!empty($event))

<form method="POST" action={{route('updateEvent')}} enctype="multipart/form-data">
           
  @csrf
  <input type="text" class="d-none" value="{{$event[0]->id}}" name="id" >

  <div class="mb-3">
    <img src="storage/uploads/{{$event[0]->image}}" alt="" srcset=""> <br>
   <label for="formFileAllowed" class="form-label">Change Image</label>
   <input name="image" class="form-control" type="file" id="formFileAllowed" title="only these formats are accepted (jpg, png, gif)" accept="image/png, image/jpeg, image/gif">
</div>

   <div class="mb-3">
       <label for="eventName" class="form-label">Name of Event</label>
       <input type="text" name="event_name" class="form-control datepicker" id="eventDate" value="{{$event[0]->event_name}}">
    </div>

   <div class="mb-3">
       <label for="eventDescription" class="form-label">Description</label>
       <textarea class="form-control hidden-area    d-none"  name="description"  id="eventDescription" rows="3" placeholder="Enter event description" required> {{$event[0]->description}}</textarea>
  
  <div id="editor" class="editableDiv">{!!$event[0]->description!!} </div>
   </div>

   <div class="mb-3">
       <label for="eventDate" class="form-label">Date</label>
       <input type="date"  name="event_date" class="form-control" id="eventDate" required value="{{$event[0]->event_date}}">
   </div>

   <div class="mb-3">
       <label for="eventTime" class="form-label">Time</label>
       <input type="time" name="start_time" class="form-control" id="eventTime" required value="{{$event[0]->start_time}}">
   </div>

   <div class="mb-3">
       <label for="eventAddress" class="form-label">Address</label>
       <textarea class="form-control" name="address" id="eventAddress" rows="2" placeholder="Enter event address" required>{{$event[0]->address}}</textarea>
   </div>

   <button type="submit" class="btn btn-primary">Update Event</button>
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

@elseif (!empty($cause))
<form method="POST" action={{route('updateCause')}} enctype="multipart/form-data" id="causeForm">
               
  @csrf

  <input type="text" class="d-none" value="{{$cause[0]->id}}" name="id" >
  <div class="mb-3">
    <img src="storage/uploads/{{$cause[0]->image}}" alt="" srcset=""> <br>
   <label for="formFileAllowed" class="form-label">Image</label>
   <input name="image" class="form-control" type="file" id="formFileAllowed" title="only these formats are accepted (jpg, png, gif)" accept="image/png, image/jpeg, image/gif">
</div>

   <div class="mb-3">
       <label for="eventName" class="form-label">Name of Cause</label>
       <input type="text"   name="cause_name"  class="form-control" id="eventName" value="{{$cause[0]->cause_name}}" >
   </div>

   <div class="mb-3">
       <label for="eventDescription" class="form-label">Cause Description</label>
       <textarea class="form-control hidden-area d-none"  name="cause_description"  id="causeDescription " rows="6"  required
        >{{$cause[0]->cause_description}}</textarea>

        <div id="editor" class="editableDiv">
           {!!$cause[0]->cause_description!!}


         </div>
   </div>

   <div class="mb-3">
       <label for="eventDate" class="form-label">Target($)</label>
       <input type="number"  name="target" class="form-control" id="eventDate" required value="{{$cause[0]->target}}">
   </div>

   

  

   <button type="submit" class="btn btn-primary">Update Cause</button>
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

 @endif


 
                    </div>




@endsection