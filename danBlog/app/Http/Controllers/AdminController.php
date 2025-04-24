<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\blog;
use App\Models\Comment;

class AdminController extends Controller
{
    //


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









}
