<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\blog;
use App\Models\Comment;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    //

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

    public function index()
    {

    $blog=blog::paginate(4);





    return view('admin')->with('blogs',$blog);


    }



public function wildcard($category)
{

    // $category=request('category');

        if($category=="All")
        {

            $blog=blog::paginate(4);
            return response()->json($blog);

        }

    else{

    $blog=blog::where("category","=",$category)->paginate(4);

}



return response()->json($blog);




}


public function query()
{

    $id=request('id');
    $comments=Comment::where("commentable_id","=",$id)->get();
    $nested_comments=Comment::where("commentable_id","=",$id)->where("parent_id","!=",null)->get();

    

        $blog=blog::where("id","=",$id)->first();


        return view('singleblog')->with('blog',$blog)->with('comments',$comments)->with('nested',$nested_comments);

    







}



public function deletePost()
{


    $id=request('id');
    $blogs=blog::where('id','=',$id)->first();
    $message = $this->deleteFileFromStorage($blogs->image);

    if($message){
    $blogs->delete();
     $comments=Comment::where('commentable_id','=',$id)->delete();
   
    
    $blog=blog::paginate(4);





    // return view('admin')->with('blogs',$blog);
    return redirect('/admin')->with('blogs',$blog);


   

}

    else{


        return redirect()->back();
    }

}



public function updateBlog()
{

$id=request('id');
$title=request('title');
$category=request('category');
$image=request('image');

$blog=blog::where('id','=',$id)->first();

$comments=Comment::where("commentable_id","=",$id)->get();
$nested_comments=Comment::where("commentable_id","=",$id)->where("parent_id","!=",null)->get();



if($image){




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
        
        $deleteIMG=$this->deleteFileFromStorage($blog->image);


    $blog->image = $filename;

$blog->title=request('title');
$blog->category=request('category');
$blog->content=request('content');
    $blog->update();


    // return view('singleblog')->with('blog',$blog)->with('comments',$comments)->with('nested',$nested_comments)->with('success','Successfully Uploaded');

    return redirect()->back();
}

else {

  

    return redirect()->back()->with('error','error with image');

    // return view('singleblog')->with('blog',$blog)->with('comments',$comments)->with('nested',$nested_comments)->with('error','error with image');
}

}
}



else{

    $blog->title=request('title');
    $blog->category=request('category');
    $blog->content=request('content');
        $blog->update();
    
        return redirect()->back();
    
}

}


}
