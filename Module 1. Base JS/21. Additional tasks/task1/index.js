let luckyTicket = null;

for (let ticket = 1937; ticket >= 1016; ticket--) {
    if (ticket % 3 === 0 && ticket % 7 === 0 && ticket % 5 !== 0 && ticket % 2 !== 0) {
        luckyTicket = ticket;
        break;
    }
}

console.log('luckyTicket', luckyTicket);