<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;

class ArticlesTableSeeder extends Seeder
{
    public function run()
    {
        Article::factory()->count(5)->create()->each(function ($article) {
            $article->comments()->createMany([
                [
                    'author_name' => 'John Doe',
                    'content' => 'Great article!'
                ],
                [
                    'author_name' => 'Jane Smith',
                    'content' => 'Very informative, thanks!'
                ]
            ]);
        });
    }
}