<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    //TABLA USUARIOS CLIENTE//
   public function up()
{
    Schema::table('users', function (Blueprint $table) {
        $table->string('rol')->default('cliente');
    });
}
};
