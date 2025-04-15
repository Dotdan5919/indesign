
@extends('layouts.app')

@section('content')



<div class="row container">
    <div class=" mt-5 col-md-6 col-sm-12 p-3 card shadow   ">

        <div class="card-header ">
            <h1 class="py-3">Create New Blog</h1>
        </div>
            <form method="POST" action={{route('create-blog')}} enctype="multipart/form-data">
               
               @csrf
        
               <div class="mb-3">
                <label for="formFileAllowed" class="form-label">Blog Image</label>
                <input name="blog_image" class="form-control" type="file" id="formFileAllowed" title="only these formats are accepted (jpg, png, gif)" accept="image/png, image/jpeg, image/gif" required>
            </div>
        
                <div class="mb-3">
                    <label for="eventName" class="form-label">Blog title</label>
                    <input type="text"   name="blog_title"  class="form-control" id="eventName" placeholder="Enter Blog Title">
                </div>
    
                <div class="mb-3">
                    <label for="eventName" class="form-label">Blog subtitle</label>
                    <input type="text"   name="blog_subtitle"  class="form-control" id="eventName" placeholder="Enter Blog Subtitle">
                </div>
        
                <div class="mb-3">
                    <label for="eventDescription" class="form-label">Blog Content</label>
                    <textarea class="form-control hidden-area d-none "  name="blog_content"  id="eventDescription" rows="3" placeholder="Enter Blog Content" required></textarea>
              
                    <div id="editor"></div>
                </div>
        
                <div class="mb-3">
                    <label for="eventName" class="form-label">Special Quote</label>
                    <input type="text"   name="special_quote"  class="form-control" id="eventName" placeholder="Enter Special Quote">
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




    <div class="col-md-6 mt-5 justify-content-center">
        <div class="">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <i class="bi bi-newspaper me-2"></i> Blog Management
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                @if ($all_blogs->isNotEmpty())
                  @foreach ($all_blogs as $blog)
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h6 class="mb-1">{{ $blog->blog_title }}</h6>
                        <small class="text-muted">
                          Created At: {{ \Carbon\Carbon::parse($blog->created_at)->format('F j, Y h:i A') }}
                        </small>
                      </div>
                      <div>
                        <button class="btn btn-sm btn-info me-2" data-toggle="modal" data-target="#blogDetailsModal{{$blog->id}}">
                          <i class="bi bi-eye-fill"></i> View Details 
                        </button>
                        
                        <a href="/edit-blog?id={{$blog->id}}" class="btn btn-sm btn-warning me-2">
                          <i class="bi bi-pencil-square"></i> Edit
                        </a>
                        <button class="btn btn-sm btn-danger" onclick="confirmDelete({{ $blog->id }})">
                          <i class="bi bi-trash-fill"></i> Delete
                        </button>
                      </div>
                    </li>
    
                    <div class="modal fade" id="blogDetailsModal{{$blog->id}}" tabindex="-1" aria-labelledby="blogDetailsModalLabel{{$blog->id}}" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header bg-light">
                            <h5 class="modal-title" id="blogDetailsModalLabel{{ $blog->id }}">{{ $blog->blog_title }}</h5>
                            <button type="button" class="btn-close close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <img src="storage/uploads/{{$blog->blog_image}}" alt="" srcset="" height="400">
                            <p><strong>Title:</strong> {{ $blog->blog_title }}</p>
                            <p><strong>Subtitle:</strong> {{ $blog->blog_subtitle}}</p>
                            <p><strong>Content:</strong></p>
                            <div class="border p-3">{!! $blog->blog_content !!}</div>
                           

                            </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  @endforeach
                @else
                  <li class="list-group-item text-center text-muted">
                    <i class="bi bi-info-circle me-2"></i> No blogs found.
                  </li>
                @endif
              </ul>
            </div>
          </div>
        </div>
      </div>
</div>








@endsection