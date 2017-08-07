<?php

namespace App\Http\Controllers;

use View;

class PageController extends Controller {

    /**
     * Get the homepage
     *
     * @return Illuminate\Contracts\View
     */
    public function home()
    {
        return view('public.pages.home');
    }
}
