<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;

use App\Models\event;
use App\Models\cause;
use App\Models\blog;
use App\Models\message;
use App\Models\member;



class HomeController extends Controller
{
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
    public function index()
    
    {
        $today = Carbon::now()->startOfDay();

        $blogs=blog::all();
        $causes=cause::all();
        $active_causes=cause::where("is_active","=","1")->get();

        $events=event::all();
        $upcoming_events=event::where("event_date",">",$today)->get();

        $members=member::all();
        $messages=message::all();   


        return view('home')->with('all_blogs',$blogs)->with('all_causes',$causes)
        ->with('all_events',$events)->with('all_messages',$messages)
        ->with('all_members',$members)
        ->with('active_causes',$active_causes)
        ->with('upcoming_events',$upcoming_events);
    }



    public function event()
    {



        return view('');


    }


    public function blog()
    {



    }


    public function cause()
    {




    }
}
