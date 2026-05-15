// Sample Bus Data
const buses = [
    {
        id: 1,
        name: "Green Line Paribahan",
        from: "Mirpur",
        to: "Gulshan",
        departure: "08:30 AM",
        arrival: "09:45 AM",
        fare: 120,
        type: "AC"
    },
    {
        id: 2,
        name: "Shohag Paribahan",
        from: "Uttara",
        to: "Motijheel",
        departure: "09:00 AM",
        arrival: "10:30 AM",
        fare: 150,
        type: "Non-AC"
    },
    {
        id: 3,
        name: "BRTC",
        from: "Dhanmondi",
        to: "Mohammadpur",
        departure: "07:45 AM",
        arrival: "08:20 AM",
        fare: 80,
        type: "AC"
    },
    {
        id: 4,
        name: "Ena Transport",
        from: "Mirpur",
        to: "Savar",
        departure: "10:15 AM",
        arrival: "11:50 AM",
        fare: 200,
        type: "AC"
    }
];

function searchBuses() {
    const from = document.getElementById('from-select').value;
    const to = document.getElementById('to-select').value;
    
    const filteredBuses = buses.filter(bus => {
        return (!from || bus.from === from) && (!to || bus.to === to);
    });

    renderBuses(filteredBuses.length ? filteredBuses : buses);
}

function renderBuses(busData) {
    const busList = document.getElementById('bus-list');
    busList.innerHTML = '';

    if (busData.length === 0) {
        busList.innerHTML = `<p style="text-align:center; padding:3rem;">No buses found for this route.</p>`;
        return;
    }

    busData.forEach(bus => {
        const card = document.createElement('div');
        card.className = 'bus-card';
        card.innerHTML = `
            <div class="bus-info">
                <div class="bus-name">${bus.name} <span style="font-size:0.9rem; background:#10b98133; padding:2px 8px; border-radius:9999px;">${bus.type}</span></div>
                <div class="route">${bus.from} → ${bus.to}</div>
                <div class="time">${bus.departure} - ${bus.arrival}</div>
            </div>
            <div class="fare">
                <div style="color:#64748b; font-size:0.95rem;">Fare</div>
                <div class="fare-amount">৳${bus.fare}</div>
            </div>
            <button class="book-btn" onclick="bookBus(${bus.id})">Book Now</button>
        `;
        busList.appendChild(card);
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderBuses(buses);
});

function bookBus(id) {
    alert(`Booking initiated for bus ID: ${id}\n\n(Integrate payment gateway here)`);
}

// Swap from and to
document.querySelector('.swap-icon').addEventListener('click', () => {
    const fromSelect = document.getElementById('from-select');
    const toSelect = document.getElementById('to-select');
    
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
});
