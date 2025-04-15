@php
// convert time
function convertToAmPm(string $time24): ?string
{
    // Validate the input format
     // Validate the input format (with optional seconds)
     if (!preg_match('/^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/', $time24, $matches)) {
        return null; // Or throw an exception for invalid format
    }

    $hour = (int) $matches[1];
    $minute = $matches[2];
    $secondsPart = isset($matches[3]) ? $matches[3] : ''; // Capture the ":ss" part

    $amPm = 'AM';

    if ($hour == 0) {
        $hour12 = 12; // Midnight
    } elseif ($hour < 12) {
        $hour12 = $hour;
    } else {
        $hour12 = $hour - 12;
        $amPm = 'PM';
    }

    // Handle 12 PM
    if ($hour == 12) {
        $hour12 = 12;
        $amPm = 'PM';
    }

    return sprintf('%02d:%s %s', $hour12, $minute, $amPm);
}

@endphp


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



    <div class="col-md-6 mt-5 justify-content-center">
        <div class="">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <i class="bi bi-newspaper me-2"></i> Event Management
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                @if ($all_events->isNotEmpty())
                  @foreach ($all_events as $event)
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <h6 class="mb-1">{{ $event->event_name }}</h6>
                        <small class="text-muted">
                          {{ \Carbon\Carbon::parse($event->event_date)->format('F j, Y') }} <br> | {{convertToAmPm($event->start_time)}} | {{$event->address}}
                        </small>
                        
                      </div>
                      <div>
                        <button class="btn btn-sm btn-info me-2" data-toggle="modal" data-target="#eventDetailsModal{{$event->id}}">
                          <i class="bi bi-eye-fill"></i> View Details 
                        </button>
                        
                        <a href="/edit-event?id={{$event->id}}" class="btn btn-sm btn-warning me-2">
                          <i class="bi bi-pencil-square"></i> Edit
                        </a>
                        <button class="btn btn-sm btn-danger" onclick="confirmDeleteEvent({{ $event->id }})">
                          <i class="bi bi-trash-fill"></i> Delete
                        </button>
                      </div>
                    </li>
    
                    <div class="modal fade" id="eventDetailsModal{{$event->id}}" tabindex="-1" aria-labelledby="eventDetailsModalLabel{{$event->id}}" aria-hidden="true">
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header bg-light">
                            <h5 class="modal-title" id="eventDetailsModalLabel{{ $event->id }}">{{ $event->event_name }}</h5>
                            <button type="button" class="btn-close close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <img src="storage/uploads/{{$event->image}}" alt="" srcset="" height="400">
                            <p><strong>Title:</strong> {{ $event->event_name }}</p>
                            <p><strong>Address:</strong> {{ $event->address}}</p>
                            <p><strong>Time:</strong> {{convertToAmPm( $event->start_time)}}</p>
                            <p><strong>Event Date:</strong> 
                            {{ \Carbon\Carbon::parse($event->event_date)->format('F j, Y') }} </p>
                                             <p><strong>Description:</strong></p>
                            <div class="border p-3">{!! $event->description !!}</div>
                           

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
                    <i class="bi bi-info-circle me-2"></i> No events found.
                  </li>
                @endif
              </ul>
            </div>
          </div>
        </div>
      </div>
</div>

</div>








@endsection