<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\event;
use App\Models\cause;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        $validator = Validator::make(request()->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);


        if ($validator->fails()) {
            return redirect()->route('home')
                             ->withErrors($validator)
                             ->withInput();
        }
        else { 


        if (request()->hasFile('image')) {
            $image = request('image');
            $filename = time() . '_' . $image->getClientOriginalName();
            $path = $image->storeAs('uploads', $filename, 'public'); // Store in storage/app/public/uploads

            // You can also store the path in your database if needed
            // $imagePath = Storage::url($path); // Get the public URL of the stored image

            $event=event::where('event_date','=',request('event_date'))->where('start_time','=',request('start_time'))->get();
        
            if(count($event)<1)
            {
    
                $NewEvent= new event();
                $NewEvent->image=$filename;
                $NewEvent->event_name=request('event_name');
                $NewEvent->description=request('description');
                $NewEvent->event_date=request('event_date');
                $NewEvent->start_time=request('start_time');
                $NewEvent->address=request('address');
                $NewEvent->save();
                
                return Redirect::back()->with('success','Event Created');
    
    
            }
            else{
    
                
            return Redirect::back()->with('error','event with the same date and time exists');
    
            }
    

        }
        else {

            return Redirect::back()->with('error','error with image');
    
        }
    }
       

    }

    public function submit()
    {
        $validator = Validator::make(request()->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);


        if ($validator->fails()) {
            return redirect()->route('home')
                             ->withErrors($validator)
                             ->withInput();
        }
        else { 


        if (request()->hasFile('image')) {
            $image = request('image');
            $filename = time() . '_' . $image->getClientOriginalName();
            $path = $image->storeAs('uploads', $filename, 'public'); // Store in storage/app/public/uploads

            // You can also store the path in your database if needed
            // $imagePath = Storage::url($path); // Get the public URL of the stored image

            $cause=cause::where('cause_name','=',request('cause_name'))->get();
        
            if(count($cause)<1)
            {
    
                $NewCause= new cause();
                $NewCause->image=$filename;
                $NewCause->cause_name=request('cause_name');
                $NewCause->cause_description=request('cause_description');
               
                $NewCause->target=request('target');
                $NewCause->is_active=true;
                $NewCause->current_amount=0;

                $NewCause->save();
                
                return Redirect::back()->with('success_2','Cause Created');
    
    
            }
            else{
    
                
            return Redirect::back()->with('error_2','cause with the same name exists');
    
            }
    

        }
        else {

            return Redirect::back()->with('error_2','error with image');
    
        }
    }
       

    }
}
