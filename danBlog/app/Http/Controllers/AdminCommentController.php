<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Models\blog;
use App\Models\Comment;
use Illuminate\Support\Facades\Auth;



class AdminCommentController extends Controller
{
    //
public function index()
{



    $userId = Auth::id();
    


    $comment=new Comment;
$post_id=request('post_id');

    $comment->commentable_type="App/Models/Posts";
    $comment->commentable_id=$post_id;

    $comment->user_id = $userId;
    $comment->body =request('comment');
    $comment->parent_id =request('parent_id');
    $comment->user_name =Auth::user()->name;

    $comment->save();

    $blog=blog::where('id','=',$post_id)->first();
    $comments=Comment::where("commentable_id","=",$post_id)->get();
    $nested_comments=Comment::where("commentable_id","=",$post_id)->where("parent_id","!=",null)->get();


    // echo $nested_comments;
     return view('singleblog')->with('blog',$blog)->with('comments',$comments)->with('nested',$nested_comments);

}



}
