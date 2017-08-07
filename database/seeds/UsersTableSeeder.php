<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'firstname' => 'Maxime',
            'lastname'  => 'Leclerc',
            'email'     => 'contact@maxime-leclerc.com',
            'password'  =>  Hash::make('123'),
            'api_token' =>  str_random(60)
        ]);
    }
}
