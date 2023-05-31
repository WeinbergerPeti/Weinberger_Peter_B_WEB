<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SzavakController;
use App\Http\Controllers\TemaController;
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

Route::get('/', function () {
    return view('index');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get("/szavak", [SzavakController::class, "index"]);
Route::get("/szavak/{id}", [SzavakController::class, "show"]);
Route::post("/szavak", [SzavakController::class, "store"]);
Route::put("/szavak/{id}", [SzavakController::class, "update"]);
Route::delete("/szavak/{id}", [SzavakController::class, "destroy"]);

Route::get("/temak", [TemaController::class, "index"]);
Route::get("/temak/{id}", [TemaController::class, "show"]);
Route::post("/temak", [TemaController::class, "store"]);
Route::put("/temak/{id}", [TemaController::class, "update"]);
Route::delete("/temak/{id}", [TemaController::class, "destroy"]);

Route::get("/tema_szures/{id}", [SzavakController::class, "temaSzures"]);

require __DIR__.'/auth.php';
