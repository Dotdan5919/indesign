
@extends('layouts.app')

@section('content')





 <div class=" container card shadow p-4 " >
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
             


                    </div>




@endsection