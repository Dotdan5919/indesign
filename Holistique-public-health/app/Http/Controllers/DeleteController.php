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


class DeleteController extends Controller
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


     public function deleteBlog()
     {


        $blog=blog::where('id','=',request('id'))->first();

        $message = $this->deleteFileFromStorage($blog->blog_image);

        $blog->delete();

        return Redirect::back()->with('success','Blog Deleted');


     }

     public function deleteEvent()
     {


        $event=event::where('id','=',request('id'))->first();

        $message = $this->deleteFileFromStorage($event->image);

        $event->delete();

        return Redirect::back()->with('success','Event Deleted');


     }
   


     public function deleteCause()
     {


        $cause=cause::where('id','=',request('id'))->first();

        $message = $this->deleteFileFromStorage($cause->image);

        $cause->delete();

        return Redirect::back()->with('success','Cause Deleted');


     }
   
    //
}
