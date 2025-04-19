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


<div class="  p-8 shadow-sm rounded-sm bg-white dark:bg-darkblack-600">

    <form action="" class="space-y-6">
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
            <input type="file" name="" class="w-full rounded-lg border border-bgray-300 px-4 py-3 focus:border focus:border-success-300 focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 text-bgray-500 dark:text-bgray-50 ">
        
        </div>

      
       
        <div>
          <label
            for="content"
            class="mb-2.5 block text-left text-sm text-bgray-500 dark:text-bgray-50"
            >Content</label
          >
          <textarea
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
           
  
            <select name="categories" class=" w-full rounded-lg border border-bgray-300 px-4 py-3 focus:border focus:border-success-300 focus:ring-0 dark:border-darkblack-400 dark:bg-darkblack-600 text-bgray-500 dark:text-bgray-50 ">
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
            Submit Blog
          </button>
        </div>
      </form>

    </div>
    
@endsection