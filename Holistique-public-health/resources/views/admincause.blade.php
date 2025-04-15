
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

</div>





@endsection