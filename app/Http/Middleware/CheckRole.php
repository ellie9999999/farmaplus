<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        // Si no está autenticado
        if (!Auth::check()) {
            return redirect('/login'); // o donde tengas el login
        }

        // Si está autenticado pero no tiene el rol necesario
        if (!in_array(Auth::user()->rol, $roles)) {
            return redirect('/'); // o una vista de "Acceso denegado"
        }

        return $next($request);
    }
}
