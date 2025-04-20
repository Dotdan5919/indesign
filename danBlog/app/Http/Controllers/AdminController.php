<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\blog;

class AdminController extends Controller
{
    //


public function index()
{

$blog=blog::all();





return view('admin')->with('blogs',$blog);


}



public function wildcard($category)
{

    // $category=request('category');

    if($category=="All")
    {

        $blog=blog::all();
        return response()->json($blog);

    }

    else{

    $blog=blog::where("category","=",$category)->get();

}



return response()->json($blog);




}


public function query()
{

    $limit=request('limit');

    if($category=="All")
    {

        $blog=blog::pagination($limit);
        return response()->json($blog);

    }

    else{

    $blog=blog::where("category","=",$category)->get();

}



return response()->json($blog);




}



}
