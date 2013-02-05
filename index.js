var Faker = require( 'Faker' );

Faker = require( './node_modules/faker-doc/main' )( Faker );
Faker = require( './node_modules/faker-ext/main' )( Faker );
Faker = require( './node_modules/faker-ru/main' )( Faker );

module.exports = Faker;