<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    public function definition()
    {
        return [
            'author_name' => $this->faker->name,
            'content' => $this->faker->paragraph,
        ];
    }
}