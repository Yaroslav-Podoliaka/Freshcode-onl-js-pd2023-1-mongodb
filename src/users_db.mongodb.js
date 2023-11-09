use('users');
// $avg, $count, $min, $max, $sum, $multiply
// db.customers.aggregate([
//   {
//     $match: {'address.country': 'Ukraine'}
//   },
//   {
//     $group: {
//       _id: 'address.country',
//       maxAge: {
//         $max: '$age'
//       }
//     }
//   },
//   {
//     $project: {
//       _id: 0,
//       firstName: 1,
//       lastName: 1,
//       maxAge: 1
//     },
//   },
// ]);

db.customers.aggregate([
  {
    $match: {'address.zipcode': {$gt: 3000}},
  },
  {
    $project: {
      _id: 1,
      lastName: 1,
      'address.city': 1
    },
  },
  {$sort: {lastName: -1}},
  {$skip: 2},
  {$limit: 3},
]);

// db.customers.aggregate([
//   {
//     $match: {'address.country': /^u|g/i}
//   },
//   {$lookup: {
//     from: 'roles',
//     localField: 'roleId',
//     foreignField: '_id',
//     as: 'customerRole'
//   }},
//   {
//     $project: {
//       _id: 0,
//       firstName: 1,
//       lastName: 1,
//       customerRole: 1
//     },
//   },
// ]);

// db.customers.updateMany(
//   {'address.country': 'Ukraine'},
//   {$set: {roleId: ObjectId('65462d4afc4d46f9d04909de')}}
// );
// db.customers.updateMany(
//   {'address.country': 'Great Britain'},
//   {$set: {roleId: ObjectId('65462d4afc4d46f9d04909df')}}
// );
// db.customers.updateMany(
//   {'address.country': 'USA'},
//   {$set: {roleId: ObjectId('65462d4afc4d46f9d04909e0')}}
// );

// db.roles.insertMany([
//   {type: 'admin'},
//   {type: 'moderator'},
//   {type: 'user'},
// ]);


// db.customers.find({firstName: /^J/});
// db.customers.find({firstName: {$regex: /^J/}});
// db.customers.find({'address.city': 'London'}, {firstName: 1, lastName: 1, _id: 0});

// db.customers.find(
//   {p_langs: {$all: ['Python', 'JS']}},
//   {firstName: 1, lastName: 1, _id: 0, 'address.country': 1, p_langs: 1});

// db.customers.updateOne(
//   {firstName: 'Nick'},
//   {$currentDate: {createdAt: true}}
// );
// db.customers.updateMany(
//   {firstName: 'Nick'},
//   {$currentDate: {createdAt: {$type: 'timestamp'}}}
// );
// db.customers.updateMany(
//   {},
//   {$rename: {'p_langs': 'prog_langs'}}
// );
// db.customers.updateMany(
//   {firstName: 'Nick'},
//   {$set: {firstName: 'Nicolas'}}
// );
// db.customers.updateMany(
//   {firstName: 'Nicolas'},
//   {$set: {middleName: 'Petrovich'}}
// );
// db.customers.updateMany(
//   {firstName: 'Nicolas'},
//   {$unset: {middleName: 1}}
// );
// db.customers.updateMany(
//   {'address.country': 'Great Britain'},
//   {$addToSet: {prog_langs: {$each: ['Scala', 'JS']}}}
// );
// db.customers.deleteMany(
//   {prog_langs: {$in: ['Fortran', 'Algol67']}},
// );
// db.customers.distinct('prog_langs').sort(() => -1);


// SELECT * FROM customers WHERE age=40
// db.customers.find({age: 40});
// SELECT irstName, lastName FROM customers WHERE age=40
// db.customers.find({age: 40}, {firstName: 1, lastName: 1});
// db.customers.find({age: 40}, {firstName: 1, lastName: 1, _id: 0});
// db.customers.find(
//   {p_langs: {$all: ['Python', 'Java']}}, 
//   {firstName: 1, lastName: 1, _id: 0});
// db.customers.find(
//   {age: {$in: [30, 40]}}, 
//   {firstName: 1, lastName: 1, _id: 0, age: 1});
// db.customers.find(
//   {$and: [
//     {'address.country': 'Great Britain'},
//     {'address.city': 'London'},
//   ]}, 
//   {firstName: 1, lastName: 1, _id: 0, age: 1});
// db.customers.find(
//   {$or: [
//     {'address.country': 'Great Britain'},
//     {'address.city': 'London'},
//   ]}, 
//   {firstName: 1, lastName: 1, _id: 0, age: 1});
// db.customers.find(
//   {$nor: [
//     {'address.country': 'Great Britain'},
//     {'address.city': 'London'},
//   ]}, 
//   {firstName: 1, lastName: 1, _id: 0, age: 1});
// db.customers.find(
//   {'address.zipcode': {$gt: 3000}},
//   {firstName: 1, lastName: 1, _id: 0, age: 1, zipcode: 1});
// db.customers.find(
//   {'address.zipcode': {$not: {$gt: 3000}}},
//   {firstName: 1, lastName: 1, _id: 0, age: 1, zipcode: 1});
  // db.customers.find(
  //   {'address.app': {$exists: 0}},
  //   {firstName: 1, lastName: 1, _id: 0, age: 1, zipcode: 1});
  // db.customers.find(
  //   {'address.app': {$type: 'string'}},
  //   {firstName: 1, lastName: 1, _id: 0, age: 1, zipcode: 1});
  // db.customers.find(
  //   {'address.zipcode': {$type: ['number', 'string']}},
  //   {firstName: 1, lastName: 1, _id: 0, age: 1, 'address.zipcode': 1});
  // db.customers.find(
  //   {'address.zipcode': {$type: ['number', 'string']}},
  //   {firstName: 1, lastName: 1, _id: 0, age: 1, 'address.zipcode': 1}).sort({'address.zipcode': -1});
  // db.customers.find(
  //   {'address.zipcode': {$type: ['number', 'string']}},
  //   {firstName: 1, lastName: 1, _id: 0, age: 1, 'address.zipcode': 1}).sort({'address.zipcode': -1}).limit(3).skip(2);
  // db.customers.find(
  //   {'address.zipcode': {$type: ['number', 'string']}},
  //   {firstName: 1, lastName: 1, _id: 0, age: 1, 'address.zipcode': 1}).count();
  // db.customers.find(
  //   {'address.zipcode': {$type: ['number', 'string']}},
  //   {firstName: 1, lastName: 1, _id: 0, age: 1, 'address.zipcode': 1}).pretty();



// use('users');

// const customers = [
// 	{
// 		firstName: 'Nick',
// 		lastName: 'Myson',
// 		age: 50,
// 		address: {
// 			country: 'USA',
// 			city: 'New York',
// 			street: 'Wholt Street',
// 			building: '722',
// 			app: '250',
// 			zipcode: 10020,
// 		},
// 		p_langs: ['JS', 'C#', 'Java'],
// 	},
// 	{
// 		firstName: 'Nick',
// 		lastName: 'Myson',
// 		age: 50,
// 		address: {
// 			country: 'USA',
// 			city: 'New York',
// 			street: 'Wholt Street',
// 			building: '722',
// 			app: '250',
// 			zipcode: 10020,
// 		},
// 		p_langs: ['JS', 'C#', 'Java'],
// 	},
// 	{
// 		firstName: 'Harry',
// 		lastName: 'Porter',
// 		age: 45,
// 		address: {
// 			country: 'Great Britain',
// 			city: 'Manchester',
// 			street: 'Robin Hood',
// 			building: '320d',
// 			zipcode: 1605,
// 			app: '120',
// 		},
// 		p_langs: ['JS', 'Python', 'Java'],
// 	},
// 	{
// 		firstName: 'Ken',
// 		lastName: 'Hensly',
// 		age: 70,
// 		address: {
// 			country: 'Great Britain',
// 			city: 'London',
// 			street: 'Backer Street',
// 			zipcode: 5208,
// 		},
// 		p_langs: ['JS', 'Kotlin', 'SQL'],
// 	},
// 	{
// 		firstName: 'Mike',
// 		lastName: 'Tyson',
// 		age: 50,
// 		address: {
// 			country: 'USA',
// 			city: 'Washington',
// 			street: 'Wholt Street',
// 			building: '20 b',
// 			app: '120',
// 			zipcode: 98002,
// 		},
// 		p_langs: ['HTML', 'CSS', 'XML'],
// 	},
// 	{
// 		firstName: 'Michael',
// 		lastName: 'Jordan',
// 		age: 45,
// 		address: {
// 			country: 'USA',
// 			city: 'Chicago',
// 			street: 'Rusvelt Teodor',
// 			building: '20 b',
// 			app: '120',
// 			zipcode: 60176,
// 		},
// 		p_langs: ['Scala', 'Go', 'Ruby'],
// 	},
// 	{
// 		firstName: 'Paul',
// 		lastName: 'MacCartney',
// 		age: 70,
// 		address: {
// 			country: 'Great Britain',
// 			city: 'London',
// 			street: 'Trafalgar squear',
// 		},
// 		p_langs: ['Ruby', 'Python', 'Pascal'],
// 	},
// 	{
// 		firstName: 'Jhon',
// 		lastName: 'Doe',
// 		age: 30,
// 		address: {
// 			country: 'Ukraine',
// 			city: 'Dnipro',
// 			street: 'Yavornitskogo',
// 			building: '18b',
// 			app: '120',
// 			zipcode: 49130,
// 		},
// 		p_langs: ['JS', 'Python', 'Algol67'],
// 	},
// 	{
// 		firstName: 'Jane',
// 		lastName: 'Smith',
// 		age: 25,
// 		address: {
// 			country: 'Ukraine',
// 			city: 'Zaporizhzhia',
// 			street: 'Svobody',
// 			building: '20 b',
// 			app: '120',
// 			zipcode: 69061,
// 		},
// 		p_langs: ['CoffeeScript', 'Java', 'Fortran'],
// 	},
// 	{
// 		firstName: 'Benya',
// 		lastName: 'Crick',
// 		age: 40,
// 		address: {
// 			country: 'Ukraine',
// 			city: 'Odessa',
// 			street: 'Deribasovskaya',
// 			building: '20 b',
// 			app: '120',
// 			zipcode: 65125,
// 		},
// 		p_langs: ['Python', 'Assembler', 'Java'],
// 	},
// ];

// db.customers.insertMany(customers);

// use('users');

// const customersTwo = [
//   {
// 		firstName: 'Vasya',
// 		lastName: 'Pupkin',
// 		age: 40,
// 		address: {
// 			country: 'France',
// 			city: 'Paris',
// 			street: 'Paris',
// 			zipcode: 20365,
// 		},
// 		p_langs: ['CoffeeScript', 'Java', 'Fortran'],
// 	},
// 	{
// 		firstName: 'Petya',
// 		lastName: 'Pytochcin',
// 		age: 20,
// 		address: {
// 			country: 'Canada',
// 			city: 'Toronto',
// 			zipcode: 30333,
// 		},
// 		p_langs: ['Python', 'Assembler', 'Java'],
// 	},
// ]

// db.customers.insertMany(customersTwo);
