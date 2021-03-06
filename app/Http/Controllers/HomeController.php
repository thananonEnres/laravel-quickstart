<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JavaScript;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        JavaScript::put([
            'name' => $request->user()->name
        ]);

        return view('home');
    }
}
