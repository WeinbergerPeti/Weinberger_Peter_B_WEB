<?php

use App\Models\Szavak;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('szavak', function (Blueprint $table) {
            $table->id();
            $table->string("angol");
            $table->string("magyar");
            $table->foreignId("temaId")->references("id")->on("tema");
            $table->timestamps();
        });

        Szavak::create(["angol" => "ball", "magyar" => "labda", "temaId" => 1]);
        Szavak::create(["angol" => "penalty", "magyar" => "tizenegyes", "temaId" => 1]);
        Szavak::create(["angol" => "red card", "magyar" => "piroslap", "temaId" => 1]);
        Szavak::create(["angol" => "dog", "magyar" => "kutya", "temaId" => 2]);
        Szavak::create(["angol" => "cat", "magyar" => "macska", "temaId" => 2]);
        Szavak::create(["angol" => "dolphin", "magyar" => "delfin", "temaId" => 2]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('szavak');
    }
};
