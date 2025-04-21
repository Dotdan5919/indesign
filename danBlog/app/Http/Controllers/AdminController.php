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


// public function query()
// {

//     $limit=request('limit');

  

//         $blog=blog::paginate(4);
//         return response()->json($blog);

    


// return response()->json($blog);




// }



}
