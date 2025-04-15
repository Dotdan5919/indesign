
@extends('layouts.app')

@section('content')




<div class="row container">

    <div class=" mt-5 col-md-6 col-sm-12 p-3 card shadow   ">

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
                    <textarea class="form-control hidden-area d-none"  name="cause_description"  id="causeDescription " rows="6"  required
                     ></textarea>
    
                     <div id="editor" class="editableDiv">
                        
    
    
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





    <div class="col-md-6 mt-5 justify-content-center">
        <div class="">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <i class="bi bi-newspaper me-2"></i> Cause Management
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                @if ($all_causes->isNotEmpty())
                  @foreach ($all_causes as $cause)
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h6 class="mb-1">{{ $cause->cause_name }}</h6>
                        <small class="text-muted">
                        ${{$cause->target}}
                        </small>
                      </div>
                      <div>
                        <button class="btn btn-sm btn-info me-2" data-toggle="modal" data-target="#causeDetailsModal{{$cause->id}}">
                          <i class="bi bi-eye-fill"></i> View Details 
                        </button>
                        
                        <a href="/edit-cause?id={{$cause->id}}" class="btn btn-sm btn-warning me-2">
                          <i class="bi bi-pencil-square"></i> Edit
                        </a>
                        <button class="btn btn-sm btn-danger" onclick="confirmDeleteCause({{$cause->id}})">
                          <i class="bi bi-trash-fill"></i> Delete
                        </button>
                      </div>
                    </li>
    
                    <div class="modal fade" id="causeDetailsModal{{$cause->id}}" tabindex="-1" aria-labelledby="causeDetailsModalLabel{{$cause->id}}" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header bg-light">
                            <h5 class="modal-title" id="causeDetailsModalLabel{{ $cause->id }}">{{ $cause->cause_name }}</h5>
                            <button type="button" class="btn-close close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <img src="storage/uploads/{{$cause->image}}" alt="" srcset="" height="400">
                            <p><strong>Name:</strong> {{ $cause->cause_name }}</p>
                            <p><strong>Target:</strong> ${{ $cause->target}}</p>
                            <p><strong>Current Amount:</strong> {{ $cause->current_amount}}</p>

                            <p><strong>Content:</strong></p>
                            <div class="border p-3">{!! $cause->cause_description !!}</div>
                           

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
                    <i class="bi bi-info-circle me-2"></i> No causes found.
                  </li>
                @endif
              </ul>
            </div>
          </div>
        </div>
      </div>



</div>





@endsection