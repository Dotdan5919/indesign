<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\event;
use App\Models\cause;
use App\Models\blog;
use Illuminate\Support\Facades\Redirect;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class UpdateController extends Controller
{
    //


    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */




     public function deleteFileFromStorage($filename)
{
    $path = 'uploads/' . $filename;
    

    if (Storage::disk('public')->exists($path)) {
        if (Storage::disk('public')->delete($path)) {
          
            return 'File deleted successfully from storage.';
        } else {
            

            return Redirect::back()->with('error','Error deleting file from storage.') ;
        }
    } else {
      

        return Redirect::back()->with('error','File not found in storage.') ;
    }
}



public function updateBlog()
{



    $id=request('id');
    
$blog=blog::where('id','=',request('id'))->first();

if(empty($blog))
{


    return Redirect::back()->with('error','error');
}
else{

   
   

    if (request()->hasFile('image')) {
    
        $validator = Validator::make(request()->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);
    
    
    
       
    
        if ($validator->fails()) {
            return redirect()->back()
                             ->withErrors($validator)
                             ->withInput();

           
                            }
                            
                            else{
                                $message = $this->deleteFileFromStorage($blog->blog_image);
                                $image = request('image');
                                $filename = time() . '_' . $image->getClientOriginalName();
                                $path = $image->storeAs('uploads', $filename, 'public');
                                
                                $blog->blog_title=request('blog_title');
                                $blog->blog_subtitle=request('blog_subtitle');
                                $blog->blog_content=request('blog_content');
                                $blog->special_quote=request('special_quote');
                                $blog->blog_image=$filename;
                                
                                $blog->update();
                                return Redirect::back()->with('success','Updated');
                                

}

}
else{

       
   

    $blog->blog_title=request('blog_title');
    $blog->blog_subtitle=request('blog_subtitle');
    $blog->blog_content=request('blog_content');
    $blog->special_quote=request('special_quote');
    

    $blog->update();
    return Redirect::back()->with('success','Updated');



}

}





}




public function updateEvent()
{



    $id=request('id');
    
$event=event::where('id','=',request('id'))->first();

if(empty($event))
{


    return Redirect::back()->with('error','error');
}
else{

   
   

    if (request()->hasFile('image')) {
    
        $validator = Validator::make(request()->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);
    
    
    
       
    
        if ($validator->fails()) {
            return redirect()->back()
                             ->withErrors($validator)
                             ->withInput();

           
                            }
                            
                            else{
                                $message = $this->deleteFileFromStorage($event->image);
                                $image = request('image');
                                $filename = time() . '_' . $image->getClientOriginalName();
                                $path = $image->storeAs('uploads', $filename, 'public');
                                
                                
                                $event->event_name=request('event_name');
                                
                                $event->description=request('description');
                                $event->event_date=request('event_date');
                                $event->start_time=request('start_time');
                                $event->address=request('address');

                                $event->image=$filename;
                                
                                $event->update();
                                return Redirect::back()->with('success','Updated');
                                

}

}
else{

  
   

       $event->event_name=request('event_name');
                                
       $event->description=request('description');
       $event->event_date=request('event_date');
       $event->start_time=request('start_time');
       $event->address=request('address');

     
       
       $event->update();
    return Redirect::back()->with('success','Updated');



}

}





}


public function updateCause()
{



    $id=request('id');
    
$cause=cause::where('id','=',request('id'))->first();

if(empty($cause))
{


    return Redirect::back()->with('error','error');
}
else{

   
   

    if (request()->hasFile('image')) {
    
        $validator = Validator::make(request()->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);
    
    
    
       
    
        if ($validator->fails()) {
            return redirect()->back()
                             ->withErrors($validator)
                             ->withInput();

           
                            }
                            
                            else{
                                $message = $this->deleteFileFromStorage($cause->image);
                                $image = request('image');
                                $filename = time() . '_' . $image->getClientOriginalName();
                                $path = $image->storeAs('uploads', $filename, 'public');
                                
                                
                                $cause->cause_name=request('cause_name');
                                
                                $cause->cause_description=request('cause_description');
                                $cause->target=request('target');
                                

                                $cause->image=$filename;
                                
                                $cause->update();
                                return Redirect::back()->with('success','Updated');
                                

}

}
else{

     
   

       $cause->cause_name=request('cause_name');
                                
       $cause->cause_description=request('cause_description');
       $cause->target=request('target');
       

    
       
       $cause->update();

     
       
       $cause->update();
    return Redirect::back()->with('success','Updated');



}

}





}





}
