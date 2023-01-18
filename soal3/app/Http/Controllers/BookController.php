<?php

namespace App\Http\Controllers;

use App\Models\book;
use App\Models\user;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $books = book::all();
        return response()->json($books);
    }
    public function create(Request $request)
    {
        // error_log("ASD");
        $validateData = $request->validate([
            "bookJudul" => "required|max:255",
            "token" => "required|max:40",
            "bookPublisher" => "required",
            "bookAuthor" => "required",
        ]);
        $books = new book();
        $books->judul = $validateData["bookJudul"];
        $books->fk_publisher = $validateData["bookPublisher"];
        $books->fk_author = $validateData["bookAuthor"];
        $user = user::where("token", $validateData["token"])->first();
        if ($user != null) {
            $books->save();
            return response()->json(["Status: " => "Insert Data Sukses"]);
        } else {
            return response()->json(["Status: " => "Insert Data Failed"]);
        }
    }

    public function update(Request $request)
    {
        $validateData = $request->validate([
            "bookJudul" => "required|max:255",
            "token" => "required|max:40",
            "bookPublisher" => "required",
            "bookAuthor" => "required",
        ]);
        $books = book::where("id", $request->bookId)->first();
        $books->judul = $validateData["bookJudul"];
        $books->fk_publisher = $validateData["bookPublisher"];
        $books->fk_author = $validateData["bookAuthor"];
        $user = user::where("token", $validateData["token"])->first();
        if ($user != null) {
            $books->update();
            return response()->json(["Status: " => "Update Data Sukses"]);
        } else {
            return response()->json(["Status: " => "Update Data Failed"]);
        }
    }

    public function delete(Request $request)
    {
        $books = book::where("id", $request->bookId)->first();
        $books->delete();
        return response()->json(["Status: " => "Delete Data Sukses"]);
    }
}
