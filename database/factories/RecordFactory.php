<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Record;
use Faker\Generator as Faker;
use Illuminate\Support\Arr;

$suffix = [
    'Elegance',
    'Adorable',
    'Stylish',
    'City style',
    'Gothic',
    'Metal rock',
    'Beautiful',
    'Nice looking',
];

$factory->define(Record::class, function (Faker $faker) use ($suffix) {
    return [
        'title' => $faker->name . ' ' . Arr::random($suffix),
        'description' => $faker->text()
    ];
});
