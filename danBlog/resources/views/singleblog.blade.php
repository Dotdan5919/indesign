@extends('layouts.app')


@section('content')


<main
class="w-full px-6 pb-6  xl:px-12 xl:pb-12"
>
<div class="rounded-sm p-5 w-full m-10  bg-white dark:bg-darkblack-600 flex flex-col gap-2">

<div class="  flex justify-content items-center  overflow-hidden  " style="height: 709px" >

<img src="storage/uploads/{{$blog->image}}"  class="w-full" style=""/>

</div>

<h1 class="item-text  font-bold " style="font-size: 40px">{{$blog->title}}</h1>




<p> {!!$blog->content!!} </p>



<hr>

<div class="flex  justify-start items-center gap-4">
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

  
   
 



  <div class="post-coment-area flex flex-col p-5">
    <h4 class="coments-area-title font-bold text-2xl">3 Comments</h4>
    <div class="flex flex-col">
    <div class="post-comment-item flex gap-2">
        <div class="post-comment-author" style=""><img src="/assets/images/avatar/aj.png" alt="" class="post-author-image" /></div>
        <div class="post-comment-description flex flex-col">
            <div class="upper-description flex text-xl">
                <h5 class="comment-author-name ">Derek</h5>
                <div class="post-author-time">-   1 hour ago</div>
            </div>
            <div class="flex justify-start ">
            <p class="post-comment-paragraph w-full">Fascinating read! Virtual exploration of Spanish culture is a great idea. Any tech tools or apps you recommend for a seamless experience?</p>
            <a href="#" class="post-reply w-button p-3 border border-solid " style="margin-top:90px">reply</a>
       
        </div> 
    </div>

    



    </div>
  
    <hr>
    <div class="post-comment-item flex gap-2  " style="margin-left: 45px">
        <div class="post-comment-author" style=""><img src="/assets/images/avatar/aj.png" alt="" class="post-author-image" /></div>
        <div class="post-comment-description flex flex-col">
            <div class="upper-description flex text-xl">
                <h5 class="comment-author-name ">Derek</h5>
                <div class="post-author-time">-   1 hour ago</div>
            </div>
            <div class="flex justify-start ">
            <p class="post-comment-paragraph w-full">Fascinating read! Virtual exploration of Spanish culture is a great idea. Any tech tools or apps you recommend for a seamless experience?</p>
            
       
        </div> 
    </div>

    



    </div>



</div>
    
</div>



</div>

</main>




@endsection