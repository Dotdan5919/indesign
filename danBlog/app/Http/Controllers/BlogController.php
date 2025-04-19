<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

use App\Models\blog;
use App\Models\User;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{


    public function upload()
    {


        
        $validator = Validator::make(request()->all(), [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);


        if ($validator->fails()) {
            return redirect()->back()
                             ->withErrors($validator)
                             ->withInput();
        }
        else { 


        if (request()->hasFile('image')) {
            $image = request('image');
            $filename = time() . '_' . $image->getClientOriginalName();
            $path = $image->storeAs('uploads', $filename, 'public'); // Store in storage/app/public/uploads






        $newBlog=new blog();

            $user=Auth::user();




        $newBlog->title=request('title');
        $newBlog->image=$filename;
        $newBlog->content=request('content');
        $newBlog->category=request('category');
        $newBlog->author=$user->name;
        $newBlog->author_id=$user->id;

        $newBlog->save();


        return Redirect::back()->with('success','Successfully Uploaded');

        }


 else {

            return Redirect::back()->with('error','error with image');
    
        }
    }




        


    }

    //
}
