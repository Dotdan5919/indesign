@php
    



use Carbon\Carbon;

if (!function_exists('hours_left')) {
    /**
     * Calculates the hours left from a given timestamp until now.
     *
     * @param  string  $timestamp The timestamp string (e.g., '2025-04-22 11:30:07').
     * @return string  The formatted string representing the hours left (e.g., '2 hours left').
     */
    function hours_left(string $timestamp): string
    {
        // 1. Create a Carbon instance from the timestamp string.
        $targetTime = Carbon::parse($timestamp);

        // 2. Get the current time as a Carbon instance.
        $now = Carbon::now();

        // 3. Calculate the difference in hours between the target time and now.
        $hoursDifference = $now->diffInHours($targetTime, false); //false for absolute value

        // 4. Handle pluralization and negative values.
        if ($hoursDifference <= 0) {
            return "Expired"; // Or "0 hours left", or "Less than an hour left"
        }

        $hoursText = ($hoursDifference == 1) ? '1 hour left' : $hoursDifference . ' hours left';

        return $hoursText;
    }
}

@endphp


@extends('layouts.app')


@section('content')


<main
class="w-full px-6 pb-6  xl:px-12 xl:pb-12"
>
<div class="rounded-sm p-5 w-full m-10  bg-white dark:bg-darkblack-600 flex flex-col gap-2">

<div class="  flex justify-content items-center  overflow-hidden  " style="height: 709px" >

<img src="storage/uploads/{{$blog->image}}"  class="w-full" style=""/>

</div>

<h1 class="item-text  font-bold dark:text-white " style="font-size: 40px">{{$blog->title}}</h1>




<h3 class="dark:text-white text-black item-text"> {!!$blog->content!!} </h3>



<hr>

<div class="flex  justify-start items-center gap-4 dark:text-white">
    <label
      for="lname"
      class=" block  text-sm text-bgray-500 dark:text-bgray-50"
      >Category</label
    >

    <p class="p-3 border border-solid  border-green-400 w-fit rounded-lg">{{$blog->category}}</p>
    <div class="flex items-center justify-center gap-2">
    <p class=" block text-sm text-bgray-500 dark:text-bgray-50">Author</p>

  <small> {{$blog->author}} </small>
</div>
   
</div>
    @php
        
        $categories=['Entertainment',
    'Nature',
    'Gaming',
    'Business',
    'Science',
    'Education',
    'Sport',
    'Travel'];


    @endphp

    {{-- <select name="category"  class=" w-full rounded-lg border border-bgray-300 px-4 py-3 focus:border focus:border-success-300 focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 text-bgray-500 dark:text-bgray-50 ">
      
          


      @foreach ($categories as $category )

      @if($blog->category==$category)
      <option selected>{{$category}} </option>
      
      @else
      <option >{{$category}} </option>
@endif

      @endforeach
      



      
  </select> --}}

  
   
 {{-- solve preoblem --}}



  <div class="post-coment-area flex flex-col p-5 dark:text-white" >
    <h4 class="coments-area-title font-bold text-2xl " >
        
        @if(count($comments)<2)
        {{count($comments)}} Comment
        
        @else
        {{count($comments)}} Comments

    @endif
    </h4>
   
    <div class="flex flex-col" >
        @foreach ($comments as $comment )
        <div class="flex flex-col">
        @if($comment->parent_id==null)
        
    <div class="post-comment-item flex flex-col gap-2">
        <div class="flex flex-row gap-3">
        <div class="post-comment-author" style="">
            <img src="/assets/images/avatar/aj.png" alt="" class="post-author-image" /></div>
        <div class="post-comment-description flex flex-col">
            <div class="upper-description flex text-xl">
                <h5 class="comment-author-name font-bold ">{{$comment->user_name}}</h5>
                <div class="post-author-time">-   {{hours_left($comment->updated_at)}} hour ago</div>
            </div>
            <div class="flex justify-start  ">
            <p class="post-comment-paragraph w-full ">{{$comment->body}}</p>
            <span  class="post-reply w-button p-3 border border-solid hover:text-green-400 rounded-lg cursor-pointer " style="margin-top:10px" onclick="commentToggle({{$comment->id}})" >reply</span>
       
        </div> 
    </div>

</div>
 



    
    <hr class="mt-2">

   
    <div class="post-comment-item flex flex-col gap-2 w-full " style="margin-left: 45px; margin-top:50px; ">
        
   @foreach ($nested as $nested_comment)
 
@if($nested_comment->parent_id==$comment->id)
{{-- c --}}
   <div class="flex comment gap-4">
   <div class="post-comment-author" style=""><img src="/assets/images/avatar/aj.png" alt="" class="post-author-image" /></div>
   <div class="post-comment-description flex flex-col ml">
       <div class="upper-description flex text-xl">
           <h5 class="comment-author-name ">{{$nested_comment->user_name}}</h5>
           <div class="post-author-time">-   {{hours_left($nested_comment->updated_at)}} hour ago</div>
       </div>
       <div class="flex justify-start ">
       <p class="post-comment-paragraph w-full">{{$nested_comment->body}}</p>
   </div> 
</div>

</div>


{{-- c --}}





@endif

  
  
@endforeach
    @else
    
   
   
   @endif
   <form method="POST" action="{{route('admin-comment')}}" class="  flex-col   items-end mt-5 hidden" style="width: 720px" id="{{$comment->id}}" >
       @csrf
       <input type="text" name="post_id" class="hidden" value="{{$blog->id}}"/>
       <input type="text" name="parent_id" class="hidden" value="{{$comment->id}}"/>
       
       <textarea name="comment" id="Message" placeholder="reply" class="input-style input-style-single textarea w-full  rounded-md"></textarea>
       
       <input type="submit" name="submit" value="Submit" class="rounded-lg bg-success-300 px-6 py-3 text-base font-medium text-white hover:bg-success-400 mt-5" />
    </form>
    
</div> 

</div>
    @endforeach
    
   



<form method="POST" action="{{route('admin-comment')}}" class="w-full flex-col   items-end mt-5 " id="post-comment" >
    @csrf
    <input type="text" name="post_id" class="hidden" value="{{$blog->id}}"/>

    <textarea name="comment"  id="Message" placeholder="comment" class="input-style input-style-single textarea w-full  rounded-md"></textarea>

    <input type="submit" name="submit" value="Comment" class="rounded-lg bg-success-300 px-6 py-3 text-base font-medium text-white hover:bg-success-400 mt-5" />
</form>





    



</div>

</main>




<script>


function commentToggle(id)
{




commentForm=document.getElementById(id);


if (commentForm.style.display==="flex")
{

    commentForm.style.display="none";
}
else
{
    commentForm.style.display="flex";


}








}


</script>



@endsection