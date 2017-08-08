<?php

use Illuminate\Database\Seeder;
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
        // User::truncate();

        User::create([
            'active'    => true,
            'firstname' => 'Maxime',
            'lastname'  => 'Leclerc',
            'email'     => 'contact@maxime-leclerc.com',
            'password'  =>  bcrypt('123'),
            'api_token' =>  str_random(60)
        ]);

        factory(User::class, 20)->create();
    }
}
