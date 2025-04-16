<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// user routes

Route::get('/',[App\Http\Controllers\GuestController::class, 'welcome'])->name('index');



// Route::get('/index', function () {
//     return view('index');
// })->name('index');

Route::get('/events',[App\Http\Controllers\GuestController::class, 'show'])->name('events');



Route::get('/event', [App\Http\Controllers\GuestController::class, 'eventquery']);


// Route::get('/events-single', function () {
//     return view('eventsexpanded');
// });

Route::get('/causes',[App\Http\Controllers\GuestController::class, 'showCause'])->name('causes');

Route::get('/cause',[App\Http\Controllers\GuestController::class, 'singleCause']);


Route::get('/blogs',[App\Http\Controllers\GuestController::class, 'blog'])->name('blogs');

Route::get('/aboutus', function () {
    return view('aboutus');
})->name('aboutus');





Route::get('/blog' ,[App\Http\Controllers\GuestController::class, 'singleBlog']);

// Route::get('/blogs_2', function () {
//     return view('blogsexpanded');
// });


// Route::get('/causes_2', function () {
//     return view('causesexpanded');
// });


Route::post('/joinus', [App\Http\Controllers\GuestController::class, 'index'])->name('joinus');
Route::post('/getintouch', [App\Http\Controllers\GuestController::class, 'message'])->name('getintouch');



// dashboard routes






Auth::routes();

Route::get('/admin-login', function () {
    return view('admin-login');
})->name('admin-login');

// home route
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


// upload routes
Route::post('/upload-event',[App\Http\Controllers\AdminController::class, 'index'])->name('upload-event');
Route::post('/upload-cause',[App\Http\Controllers\AdminController::class, 'submit'])->name('upload-cause');
Route::post('/create-blog',[App\Http\Controllers\AdminController::class, 'create'])->name('create-blog');


// admin routes
Route::get('/admin-event',[App\Http\Controllers\HomeController::class, 'event'])->name('admin-event');
Route::get('/admin-blog',[App\Http\Controllers\HomeController::class, 'blog'])->name('admin-blog');
Route::get('/admin-cause',[App\Http\Controllers\HomeController::class, 'cause'])->name('admin-cause');



// edit routes
Route::get('/edit-event',[App\Http\Controllers\HomeController::class, 'editEvent']);
Route::get('/edit-blog',[App\Http\Controllers\HomeController::class, 'editBlog']);
Route::get('/edit-cause',[App\Http\Controllers\HomeController::class, 'editCause']);   




//  admin update routes


Route::post('/updateBlog',[App\Http\Controllers\UpdateController::class, 'updateBlog'])->name('updateBlog');
Route::post('/updateEvent',[App\Http\Controllers\UpdateController::class, 'updateEvent'])->name('updateEvent');
Route::post('/updateCause',[App\Http\Controllers\UpdateController::class, 'updateCause'])->name('updateCause');








// admin delete routes

Route::delete('/deleteBlog/{id}',[App\Http\Controllers\DeleteController::class, 'deleteBlog']);
Route::delete('/deleteEvent/{id}',[App\Http\Controllers\DeleteController::class, 'deleteEvent']);
Route::delete('/deleteCause/{id}',[App\Http\Controllers\DeleteController::class, 'deleteCause']);




