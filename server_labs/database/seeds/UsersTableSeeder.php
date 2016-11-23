<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users')->truncate();
        
        $user1 = [
        	'name' => 'Amitav Roy',
        	'email' => 'amitavroy@gmail.com',
        	'password' => Hash::make('password'),
        ];

        User::create($user1);

        $user2 = [
            'name' => 'Foo',
            'email' => 'foo@gmail.com',
            'password' => Hash::make('password'),
        ];

        User::create($user2);

        $user3 = [
            'name' => 'Bar',
            'email' => 'bar@gmail.com',
            'password' => Hash::make('password'),
        ];

        User::create($user3);
    }
}
