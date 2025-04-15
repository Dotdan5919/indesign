
@extends('layouts.app')

@section('content')

<div class="row container">



    <div class=" card shadow  mt-5 col-md-6 p-3 col-sm-12">
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
                <textarea class="form-control hidden-area    d-none"  name="description"  id="eventDescription" rows="3" placeholder="Enter event description" required></textarea>
           
           <div id="editor" class="editableDiv"> </div>
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

</div>








@endsection