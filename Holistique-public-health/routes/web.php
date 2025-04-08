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

Route::get('/', function () {
    return view('welcome');
})->name('index');



// Route::get('/index', function () {
//     return view('index');
// })->name('index');

Route::get('/events',[App\Http\Controllers\GuestController::class, 'show'])->name('events');



Route::get('/events/{id}', [App\Http\Controllers\GuestController::class, 'eventquery']);


// Route::get('/events-single', function () {
//     return view('eventsexpanded');
// });

Route::get('/causes',[App\Http\Controllers\GuestController::class, 'showCause'])->name('causes');

Route::get('/causes/{id}',[App\Http\Controllers\GuestController::class, 'singleCause']);


Route::get('/blogs', function () {
    return view('blogs');
})->name('blogs');

Route::get('/aboutus', function () {
    return view('aboutus');
})->name('aboutus');






Route::get('/blogs_2', function () {
    return view('blogsexpanded');
});
Route::get('/causes_2', function () {
    return view('causesexpanded');
});


Route::post('/joinus', [App\Http\Controllers\GuestController::class, 'index'])->name('joinus');
Route::post('/getintouch', [App\Http\Controllers\GuestController::class, 'message'])->name('getintouch');



// dashboard routes






Auth::routes();

Route::get('/admin-login', function () {
    return view('admin-login');
})->name('admin-login');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/upload-event',[App\Http\Controllers\AdminController::class, 'index'])->name('upload-event');
Route::post('/upload-cause',[App\Http\Controllers\AdminController::class, 'submit'])->name('upload-cause');
Route::post('/create-blog',[App\Http\Controllers\AdminController::class, 'create'])->name('create-blog');

