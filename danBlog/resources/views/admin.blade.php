@extends('layouts.app')


@section('content')



<main
class="w-full px-6 pb-6  xl:px-12 xl:pb-12"
>
<!-- write your code here-->
<div class="2xl:flex 2xl:space-x-[48px]">
  <section class="mb-6 2xl:mb-0 2xl:flex-1">
    <!-- total widget-->
    <div class="mb-[24px] w-full">
      <div class="grid grid-cols-1 gap-[24px] lg:grid-cols-3">
        <div class="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div class="mb-5 flex items-center justify-between">
            <div class="flex items-center space-x-[7px]">
              <div class="icon">
                <span>
                  <img
                    src="./assets/images/icons/total-earn.svg"
                    alt="icon"
                  />
                </span>
              </div>
              <span
                class="text-lg font-semibold  text-bgray-900 dark:text-white"
                >Total earnings</span
              >
            </div>
            <div>
              <img
                src="./assets/images/avatar/members-2.png"
                alt="members"
              />
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div class="flex-1">
              <p
                class="text-3xl font-bold leading-[48px] text-bgray-900 dark:text-white"
              >
                $7,245.00
              </p>
              <div class="flex items-center space-x-1">
                <span>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4318 0.522827L12.4446 0.522827L8.55575 0.522827L7.56859 0.522827C6.28227 0.522827 5.48082 1.91818 6.12896 3.02928L9.06056 8.05489C9.7037 9.1574 11.2967 9.1574 11.9398 8.05489L14.8714 3.02928C15.5196 1.91818 14.7181 0.522828 13.4318 0.522827Z"
                      fill="#22C55E"
                    />
                    <path
                      opacity="0.4"
                      d="M2.16878 13.0485L3.15594 13.0485L7.04483 13.0485L8.03199 13.0485C9.31831 13.0485 10.1198 11.6531 9.47163 10.542L6.54002 5.5164C5.89689 4.41389 4.30389 4.41389 3.66076 5.5164L0.729153 10.542C0.0810147 11.6531 0.882466 13.0485 2.16878 13.0485Z"
                      fill="#22C55E"
                    />
                  </svg>
                </span>
                <span class="text-sm font-medium text-success-300">
                  + 3.5%
                </span>
                <span
                  class="text-sm font-medium text-bgray-700 dark:text-bgray-50"
                >
                  from last week
                </span>
              </div>
            </div>
            <div class="w-[106px]">
              <canvas id="totalEarn" height="68"></canvas>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div class="mb-5 flex items-center justify-between">
            <div class="flex items-center space-x-[7px]">
              <div class="icon">
                <span>
                  <img
                    src="./assets/images/icons/total-earn.svg"
                    alt="icon"
                  />
                </span>
              </div>
              <span
                class="text-lg font-semibold text-bgray-900 dark:text-white"
                >Total Spending</span
              >
            </div>
            <div>
              <img
                src="./assets/images/avatar/members-2.png"
                alt="members"
              />
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div class="flex-1">
              <p
                class="text-3xl font-bold leading-[48px]  text-bgray-900 dark:text-white"
              >
                $7,245.00
              </p>
              <div class="flex items-center space-x-1">
                <span>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4318 0.522827L12.4446 0.522827L8.55575 0.522827L7.56859 0.522827C6.28227 0.522827 5.48082 1.91818 6.12896 3.02928L9.06056 8.05489C9.7037 9.1574 11.2967 9.1574 11.9398 8.05489L14.8714 3.02928C15.5196 1.91818 14.7181 0.522828 13.4318 0.522827Z"
                      fill="#22C55E"
                    />
                    <path
                      opacity="0.4"
                      d="M2.16878 13.0485L3.15594 13.0485L7.04483 13.0485L8.03199 13.0485C9.31831 13.0485 10.1198 11.6531 9.47163 10.542L6.54002 5.5164C5.89689 4.41389 4.30389 4.41389 3.66076 5.5164L0.729153 10.542C0.0810147 11.6531 0.882466 13.0485 2.16878 13.0485Z"
                      fill="#22C55E"
                    />
                  </svg>
                </span>
                <span class="text-sm font-medium text-success-300">
                  + 3.5%
                </span>
                <span
                  class="text-sm font-medium text-bgray-700 dark:text-bgray-50"
                >
                  from last week
                </span>
              </div>
            </div>
            <div class="w-[106px]">
              <canvas id="totalSpending" height="68"></canvas>
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-white p-5 dark:bg-darkblack-600">
          <div class="mb-5 flex items-center justify-between">
            <div class="flex items-center space-x-[7px]">
              <div class="icon">
                <span>
                  <img
                    src="./assets/images/icons/total-earn.svg"
                    alt="icon"
                  />
                </span>
              </div>
              <span
                class="text-lg font-semibold text-bgray-900 dark:text-white"
                >Spending Goal</span
              >
            </div>
            <div>
              <img
                src="./assets/images/avatar/members-2.png"
                alt="members"
              />
            </div>
          </div>
          <div class="flex items-end justify-between">
            <div class="flex-1">
              <p
                class="text-3xl font-bold leading-[48px] text-bgray-900 dark:text-white"
              >
                $7,245.00
              </p>
              <div class="flex items-center space-x-1">
                <span>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4318 0.522827L12.4446 0.522827L8.55575 0.522827L7.56859 0.522827C6.28227 0.522827 5.48082 1.91818 6.12896 3.02928L9.06056 8.05489C9.7037 9.1574 11.2967 9.1574 11.9398 8.05489L14.8714 3.02928C15.5196 1.91818 14.7181 0.522828 13.4318 0.522827Z"
                      fill="#22C55E"
                    />
                    <path
                      opacity="0.4"
                      d="M2.16878 13.0485L3.15594 13.0485L7.04483 13.0485L8.03199 13.0485C9.31831 13.0485 10.1198 11.6531 9.47163 10.542L6.54002 5.5164C5.89689 4.41389 4.30389 4.41389 3.66076 5.5164L0.729153 10.542C0.0810147 11.6531 0.882466 13.0485 2.16878 13.0485Z"
                      fill="#22C55E"
                    />
                  </svg>
                </span>
                <span class="text-sm font-medium text-success-300">
                  + 3.5%
                </span>
                <span
                  class="text-sm font-medium text-bgray-700 dark:text-bgray-50"
                >
                  from last week
                </span>
              </div>
            </div>
            <div class="w-[106px]">
              <canvas id="totalGoal" height="68"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>

{{-- form --}}

<div class="grid grid-cols-1 gap-[24px] lg:grid-cols-2" >
<div class="  p-8 shadow-sm rounded-sm bg-white dark:bg-darkblack-600">

    <form action={{route('upload_blog')}} method="POST" enctype="multipart/form-data" class="space-y-6">

      @csrf
        <div class="w-full">
            <label
              for="fname"
              class="mb-2.5 block text-left text-2xl text-bgray-500 dark:text-bgray-50"
              >Create a New Blog</label>
            
          </div>
        <div class="flex flex-col justify-between gap-4 md:flex-row">
            
              
          <div class="w-full ">
            <label
              for="fname"
              class="mb-2.5 block text-left text-sm text-bgray-500 dark:text-bgray-50 "
              >Title</label
            >
            <input

            name="title"
              type="text"
              class="h-10 w-full rounded-lg border border-bgray-300 px-4 py-3 focus:border focus:border-success-300 focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 text-bgray-500 dark:text-bgray-50"
            />
          </div>
   
        </div>

        <div class="flex flex-col justify-between gap-4 ">
            
            <label
              for="fname"
              class="mb-2.5 w-full block text-left text-sm text-bgray-500 dark:text-bgray-50"
              >Upload</label>
            <input type="file" name="image" class="w-full rounded-lg border border-bgray-300 px-4 py-3 focus:border focus:border-success-300 focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 text-bgray-500 dark:text-bgray-50 ">
        
        </div>

      
       
        <div>
          <label
            for="content"
            class="mb-2.5 block text-left text-sm text-bgray-500 dark:text-bgray-50"
            >Content</label
          >
          <textarea
          name="content"
            class="h-36 w-full resize-none rounded-lg border border-bgray-300 px-4 py-3 focus:border focus:border-success-300 focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 text-bgray-500 
            dark:text-bgray-50 text-bgray-500 dark:text-bgray-50 hidden-area hidden"
          >
          </textarea>
         
          <div id="quillEditor"></div>
        </div>

        <div>
            <label
              for="lname"
              class="mb-2.5 block text-left text-sm text-bgray-500 dark:text-bgray-50"
              >Categories</label
            >
           
  
            <select name="category" class=" w-full rounded-lg border border-bgray-300 px-4 py-3 focus:border focus:border-success-300 focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 text-bgray-500 dark:text-bgray-50 ">
              <option>Entertainment </option>    
              <option>Nature </option>    
              <option>Gaming </option>    
              <option>Business </option>    
              <option>Science </option>    
              <option>Education </option>    
              <option>Sport  </option> 
              <option>Travel </option>
               
  
  
              
          </select>
           
          </div>
        <div class="flex justify-end">
          <button
            class="rounded-lg bg-success-300 px-6 py-3 text-base font-medium text-white hover:bg-success-400"
          >
            Create Blog
          </button>
        </div>
        @if (session('success'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-2" role="alert">
            <strong>{{ session('success') }}</strong>
        </div>
        @endif
        @if (session('error'))
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2" role="alert">
            <strong>{{ session('error') }}</strong>
        </div>
        @endif
        @if ($errors->any())
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
      </form>

    </div>


    <div class="bg-white dark:bg-darkblack-600  text-bgray-900 dark:text-white  flex flex-col gap-5  p-6 h-fit ">

      <div class="header flex justify-between items-center"> 
      <h1 class="font-bold">All Blogs</h1>
      <div class="filters">
        
        <select name="category" id="category" class="  rounded-lg border border-bgray-300 px-4 py-3 focus:border focus:border-success-300 focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 text-bgray-500 dark:text-bgray-50 ">
          <option value="All" >All</option>
          <option value="Entertainment">Entertainment </option> 
          
          <option value="Nature">Nature </option>    
          <option value="Gaming">Gaming </option>    
          <option value="Business">Business </option>    
          <option value="Science">Science </option>    
          <option value="Education">Education </option>    
          <option value="Sport">Sport  </option> 
          <option value="Travel">Travel </option>
           


          
      </select>
    
       
      
        <button id="filterButton">Apply Filters</button>
      </div>
    </div> 

    <script>
// fetch data
function init ()
{
  
  var value=document.getElementById('category').value;




fetch('/admin-blog/'+value)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Or response.text() for plain text, etc.
  })
  .then(data => {
    console.log('Data received:', data);
    // Update your web page with the received data
     displayBlogs(data.data);
     displayPagination(data.links);
     

    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Handle errors appropriately (e.g., display an error message)
  });


}
      // function to display blog array
function displayBlogs(blogs) {
  const blogContainer = document.getElementById('blog-card-container'); // Assuming this is your container element
  blogContainer.innerHTML = ''; // Clear any existing content




  blogs.forEach(blog => {
    const blogLink = document.createElement('a');
    blogLink.href = '/admin-blog?id=' +blog.id; // Or your actual blog link
    blogLink.className = 'flex gap-2 justify-between items-center';

    const textDiv = document.createElement('div');
    textDiv.style.width = '60%';

    const titleHeading = document.createElement('h4');
    titleHeading.className = 'heading2';
    titleHeading.textContent = blog.title; // Assuming your blog object has a 'title' property

    const authorSmall = document.createElement('small');
    authorSmall.textContent = blog.author; // Assuming your blog object has an 'author' property

    textDiv.appendChild(titleHeading);
    textDiv.appendChild(authorSmall);

    const imageDiv = document.createElement('div');
    imageDiv.className = 'rounded-full w-24 h-24 overflow-hidden flex justify-center items-center m-5';

    const image = document.createElement('img');
    image.src = `storage/uploads/${blog.image}`; // Assuming your blog object has an 'image' property
    image.alt = '';
    image.className = '';

    imageDiv.appendChild(image);

    blogLink.appendChild(textDiv);
    blogLink.appendChild(imageDiv);

    const hr = document.createElement('hr');
    
    
    blogContainer.appendChild(blogLink);
    blogContainer.appendChild(hr);
    
    
  });
}

// display pagination

function displayPagination(link)
{
  
  
  const blogPagination=document.getElementById('blog-pagination');
  blogPagination.innerHTML=''; // Clear any existing content
  
  link.forEach(element => {
    
    const btn = document.createElement('button');
    
    if (element.active===true)
    {
      btn.className="rounded-lg  px-4 py-1.5 text-xs font-bold    dark:text-bgray-500 lg:px-6 lg:py-2.5 lg:text-sm text-success-300 bg-success-50 ";
      
   
    }
    
    else{
      
      btn.className="rounded-lg  px-4 py-1.5 text-xs font-bold text-bgray-500  dark:bg-darkblack-500 dark:text-bgray-50 lg:px-6 lg:py-2.5 lg:text-sm  ";


  }


  btn.addEventListener('click',()=>{changePage(element.url)});
  if(element.label==="&laquo; Previous")
  {
btn.innerHTML="&laquo; ";
}


else if ( element.label==="Next &raquo;")
{
  
  btn.innerHTML="&raquo;";


  }
  else{

    btn.textContent=element.label;
  }

  blogPagination.appendChild(btn);


  
});





}

//change to next 
function changePage(url){

  console.log("i was clicked");

fetch(url)
.then(response=>{
  if(!response.ok)
{
  throw new Error(`HTTP error! status: ${response.status}`);
}

return response.json();

 }) .then ( data=>{


  console.log('Data received:', data);
    // Update your web page with the received data
     displayBlogs(data.data);
     displayPagination(data.links)
    console.log(data);

 } )
 .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    // Handle errors appropriately (e.g., display an error message)
  })





}

// when you click filters

document.getElementById("filterButton").addEventListener("click", function() {

init();

});


// initail fetch
init();
      </script>
  <div id="blog-card-container" class="flex flex-col gap-5" >
      @foreach ($blogs as  $blog)
        
      <a href="#" class="flex gap-2 justify-between  items-center  ">
        <div  style="width: 60%"> 
        <h4 class="heading2  " >{{$blog->title}}</h4>
        <small>{{$blog->author}} </small>
      </div>
      <div class="rounded-full w-24 h-24  overflow-hidden flex justify-center items-center m-5  " style=""> 
        <img src="storage/uploads/{{$blog->image}} " alt="" class="">
      </div>
        
    </a>

    <hr>

    
    
    @endforeach
    
    
  </div>
  <div class="pagination-content w-full">
    <div
      class="flex w-full items-center justify-center lg:justify-between"
    >
     
      <div
        class="flex items-center space-x-5 sm:space-x-[35px]" 
      >
       
       
        <div class="flex items-center" id="blog-pagination">
          <button
            type="button"
            class="rounded-lg  px-4 py-1.5 text-xs font-bold text-bgray-500  dark:bg-darkblack-500 dark:text-bgray-50 lg:px-6 lg:py-2.5 lg:text-sm focus:bg-success-50 focus:text-success-300 active:bg-success-50 active:text-success-300 hover:bg-success-50 hover:text-success-300"
            
            id="btn-1" onclick="changePage(2)"
            >
            1
          </button>
          
        </div>
     
      </div>
    </div>
  </div>
    </div>
  </div>
    
  <script>
    


    </script>
@endsection