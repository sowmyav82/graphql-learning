export let users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", age: 22 },
    { id: 2, name: "Jane Doe", email: "jane@gmail.com", age: 23 }
];

export let notifications = [
    { type: "awards", message: "You have won 500 Mpowered award points" },
    { type: "bill", message: "Your bill to El Camino Hospital is due tomorrow" },
    { type: "second_opinion", message: "Your consultation notes are ready" },
    { type: "bill", message: "XYZ" },
    { type: "awards", message: "ABC" }
]

export let servicesUsedByUser = [
    { type: "Awards" },
    { type: "Bill" },
    { type: "Second Opinion" },
    { type: "Lab Results" }
]

export let bills = [
    { id: 1, status: "PENDING", dueDate: "2019-04-01" },
    { id: 2, status: "PENDING", dueDate: "2019-05-25" },
    { id: 3, status: "BALANCED", dueDate: "2019-03-25" }
]