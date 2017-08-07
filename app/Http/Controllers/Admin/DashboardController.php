<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use View, Config;

class DashboardController extends Controller {

    /**
     * Class constructor
     * Config active menu.
     */
    public function __construct()
    {
        Config::set('app.active', 'dashboard');
    }

    /**
     * Get the dashboard page.
     *
     * @return Illuminate\Contracts\View
     */
    public function index()
    {
    	return view('admin.dashboard.index');
    }
}
