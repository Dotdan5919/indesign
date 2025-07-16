<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\blog;
use App\Models\Comment;

class GuestController extends Controller
{
    //



    public function index()
    {


        $science=blog::where('category','=','science')->limit(4)->get();
        $education=blog::where('category','=','education')->limit(6)->get();
        $recent=blog::all()->orderBy('updated_at', 'desc')->get();
        $recent=blog::all()->orderBy('updated_at', 'desc')->get();



        return view("welcome")->with("science",$science)
                                    ->with('education',$education)
                                    ->with('recent',$recent)
                                    ->with('');
    }
}
