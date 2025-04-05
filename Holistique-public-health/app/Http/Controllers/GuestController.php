<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\member;
use App\Models\message;

use Illuminate\Support\Facades\Redirect;

class GuestController extends Controller
{
    //



    public function index()
    {
        // return view('home');


        // return view('causes');
        $member=member::where('email','=',request('email'))->get();

        if(count($member)<1){

            $member_details= new member();

            $member_details->fullname=request('fullname');
            $member_details->location=request('location');
            $member_details->phone_no=request('phone_no');
            $member_details->email=request('email');
            $member_details->save();

            return Redirect::back()->with('success', 'Your information has been submitted successfully!');


        }

        else{

            return Redirect::back()->with('error', 'Account already registered');
            
        }






    }


    public function message()
    {

        $message=message::where('email','=',request('email'))->where('message','=',request('message'))->get();

        if(count($message)<1)
        {

            $messages= new message();

            $messages->fullname=request('fullname');
            $messages->email=request('email');

            $messages->message=request('message');

            $messages->save();

            return Redirect::back()->with('success','Thanks for getting in touch');



        }

        else{

            return Redirect::back();

        }



    }


}
