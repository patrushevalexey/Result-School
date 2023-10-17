const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];


const giveParcel = (peopleWaiting) => {
    let name = peopleWaiting.shift();

    alert(`${name} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`)
}

const leaveQueueWithoutParcel = (peopleWaiting) => {
    name = peopleWaiting.pop();

    alert(`${name} не получил(а) посылку и ушел(ла) из очереди.`)
}

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

alert("Произошел обед...")

for (let i = peopleWaiting.length - 1; i >= 0; i--) {
    leaveQueueWithoutParcel(peopleWaiting);
}