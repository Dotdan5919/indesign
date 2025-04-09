


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

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Volunteers</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{count($all_members)}}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Active Causes</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800"> {{count($active_causes)}}  of {{count($all_causes)}} </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Upcoming Events
                            </div>
                            <div class="row no-gutters align-items-center">
                                <div class="col-auto">
                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{count($upcoming_events)}}</div>
                                </div>
                                <div class="col">
                                    {{-- <div class="progress progress-sm mr-2">
                                        <div class="progress-bar bg-info" role="progressbar"
                                            style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div> --}}
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Pending Requests</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
{{-- volunteers --}}
<div class="row">
<div class="card col-lg-8 shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">All Volunteers</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Location</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        
                    </tr>
                </thead>
                {{-- <tfoot>
                    <tr>
                        <th>Full Name</th>
                        <th>Location</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        
                    </tr>
                </tfoot> --}}
                <tbody>
                    @foreach($all_members as $member)
                    <tr>
                        <td>{{$member->fullname}}</td>
                        <td>{{$member->location}}</td>
                        <td>{{$member->phone_no}}</td>
                        <td>{{$member->email}}</td>
                        
                    </tr>
                    @endforeach

                    @if($all_members->isEmpty())

                    
                    @endif
                </tbody>
            </table>
        </div>
    </div>
</div>




    <!-- Content Column -->
    <div class="col-lg-4 mb-4">

        <!-- Project Card Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <i class="bi bi-calendar-event me-2"></i> <h6 class="m-0 font-weight-bold text-primary">Upcoming Events</h6>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                @if ($upcoming_events->isNotEmpty())
                @foreach ($upcoming_events as $event)
                  <li class="list-group-item d-flex justify-content-between align-items-center text-danger">
                  
                        <div class="d-flex flex-row gap-3 ">
                        <img src="storage/uploads/{{$event->image}}" class="rounded-circle img-fluid" style="width: 100px; height: 100px; object-fit: cover;" />
                      
                        <a href="#" class="m-2">
                            <h6 class="mb-1">{{ $event->event_name }}</h6>
                              <small class="text-muted">
                                <i class="bi bi-calendar-date me-1"></i>
                                {{ \Carbon\Carbon::parse($event->event_date)->format('F j, Y') }}
                                @if ($event->start_time)
                                  <i class="bi bi-clock ms-2 me-1"></i>
                                  {{ \Carbon\Carbon::parse($event->start_time)->format('h:i A') }}
                                @endif
                              </small>
                          
                            
                              <span class="badge bg-secondary rounded-pill text-white">
                                <i class="bi bi-geo-alt-fill me-1 "></i> {{ $event->address}}
                              </span>
                            </a>
                    
                    </div>
                   
               
                  </li>
                  <hr>
                @endforeach
              @else
                <li class="list-group-item text-center text-muted">
                  <i class="bi bi-info-circle me-2"></i> No upcoming events scheduled.
                </li>
              @endif
            </ul>

           
            </div>
        </div>


    </div>

  

</div>


    <div class="row">
        <div class="card col-12 shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Active Causes</h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Cause Name</th>
                                <th>target</th>
                                <th>Current Amount</th>
                                
                                
                            </tr>
                        </thead>
                        {{-- <tfoot>
                            <tr>
                                <th>Full Name</th>
                                <th>Location</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                
                            </tr>
                        </tfoot> --}}
                        <tbody>
                            @foreach($active_causes as $cause)
                            <tr>
                                <a> 
                                <td>{{$cause->cause_name}}</td>
                                <td>{{$cause->target}}</td>
                                <td>{{$cause->current_amount}}</td>
                                
                            </a>
                            </tr>
                            @endforeach
        
                            @if($all_members->isEmpty())
        
                            
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        
</div>




















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
            <textarea class="form-control hidden-event d-none"  name="description"  id="eventDescription" rows="3" placeholder="Enter event description" required></textarea>
       
       <div id="editor-event" class="editableDiv"> </div>
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
                <input type="text"   name="blog_title"  class="form-control" id="eventName" placeholder="Enter Blog Title">
            </div>

            <div class="mb-3">
                <label for="eventName" class="form-label">Blog subtitle</label>
                <input type="text"   name="blog_subtitle"  class="form-control" id="eventName" placeholder="Enter Blog Subtitle">
            </div>
    
            <div class="mb-3">
                <label for="eventDescription" class="form-label">Blog Content</label>
                <textarea class="form-control hidden_blog d-none "  name="blog_content"  id="eventDescription" rows="3" placeholder="Enter Blog Content" required></textarea>
          
                <div id="editor-blog"></div>
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







@endsection

