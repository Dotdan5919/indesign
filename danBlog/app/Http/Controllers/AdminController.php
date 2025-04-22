<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\blog;

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

  

        $blog=blog::where("id","=",$id)->first();

        return view('singleblog')->with('blog',$blog);

    







}



}
