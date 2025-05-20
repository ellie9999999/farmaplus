<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class CarritoController extends Controller
{
    public function agregar($id)
    {
        $producto = Producto::find($id);

        if (!$producto) {
            return redirect()->back()->with('error', 'Producto no encontrado.');
        }

        $carrito = session()->get('carrito', []);
        $carrito[$id] = $producto;
        session(['carrito' => $carrito]);

        return redirect()->back()->with('success', 'Producto agregado al carrito.');
    }

    public function mostrar()
    {
        $carrito = session('carrito', []);
        return view('carrito.index', compact('carrito'));
    }
}
