<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('mountain', function (Blueprint $table) {
            $table->id(); // 'id' column is unsignedBigInteger by default
            $table->string('name', 100);
            $table->text('description')->nullable();
            $table->decimal('latitude', 10, 6)->nullable();
            $table->decimal('longitude', 10, 6)->nullable();
            $table->integer('altitude')->nullable();
            $table->string('country', 100)->nullable();
            $table->string('region', 100)->nullable();
            $table->string('img', 100)->nullable();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mountain');
    }
};
