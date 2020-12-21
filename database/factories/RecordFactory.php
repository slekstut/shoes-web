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
    $min = 30;
    $max = 300;
    $array = array ('Black', 'White', 'Red', 'Blue', 'Orange', 'Gray', 'Yellow', 'Brown');
    return [
        'title' => $faker->name . ' ' . Arr::random($suffix),
        'description' => $faker->text(),
        'price' => $faker->numberBetween($min, $max),
        'size' => $faker->randomDigitNot(5),
        'color' => $faker->randomElement($array)
    ];
});
