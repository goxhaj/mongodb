db.persons.aggregate([
    { $match: { "dob.age": {$gt: 50} } },
    { $group: { _id: { gender: "$gender" }, average: { $avg: "$dob.age" }, totalPersons: { $sum: 1} } },
    { $sort: {totalPersons: -1}}
]).pretty();