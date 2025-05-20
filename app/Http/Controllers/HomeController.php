<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $productos = Producto::all();

        return Inertia::render('Welcome', [
            'productos' => $productos,
        ]);
    }
}
