<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminCommentController;
use App\Http\Controllers\GuestController;

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',[GuestController::class,'index'])->name('home');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('/admin',[AdminController::class,'index'])->middleware(['auth', 'verified'])->name('admin');
Route::get('/admin-blog/{category}',[AdminController::class,'wildcard'])->middleware(['auth', 'verified']);
Route::get('/admin-blog',[AdminController::class,'query'])->middleware(['auth', 'verified']);





Route::post('/upload-blog', [BlogController::class, 'upload'])->name('upload_blog');

Route::post('/admin-comment', [AdminCommentController::class, 'index'])->name('admin-comment');

Route::post('/delete-comment', [AdminCommentController::class,'deleteComment'])->name('delete-comment');
Route::post('/delete-post', [AdminController::class,'deletePost'])->name('delete-post');


Route::post('/update-blog', [AdminController::class,'updateBlog'])->name('update-blog');