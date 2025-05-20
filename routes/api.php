<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\ProductoApiController;
use App\Http\Controllers\Api\CarritoApiController;

// ---------------------------
// Rutas API - Proyecto Farmaplus (Ellie)
// ---------------------------

// 📦 Productos
Route::get('/productos', [ProductoApiController::class, 'index']);        // Listar productos
Route::get('/productos/{id}', [ProductoApiController::class, 'show']);    // Detalle de producto

