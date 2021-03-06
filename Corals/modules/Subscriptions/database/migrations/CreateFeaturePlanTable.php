<?php

namespace Corals\Modules\Subscriptions\database\migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeaturePlanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feature_plan', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('plan_id');
            $table->unsignedInteger('feature_id');
            $table->text('value');
            $table->text('plan_caption')->nullable();

            $table->foreign('plan_id')->references('id')
                ->on('plans')->onDelete('cascade')->onUpdate('cascade');

            $table->foreign('feature_id')->references('id')
                ->on('features')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feature_plan');
    }
}
