<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return Article::with('comments')->latest()->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        return Article::create($request->all());
    }

    public function show($id)
    {
        return Article::with('comments')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $article = Article::findOrFail($id);

        $request->validate([
            'title' => 'string|max:255',
            'content' => 'string',
        ]);

        $article->update($request->all());

        return $article;
    }

    public function destroy($id)
    {
        Article::destroy($id);

        return response()->noContent();
    }

    public function addComment(Request $request, $id)
    {
        $request->validate([
            'author_name' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $article = Article::findOrFail($id);

        $comment = $article->comments()->create($request->all());

        return $comment;
    }
}