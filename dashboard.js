// Mini Top Line Charts Configuration (Dark Green Theme)
const miniOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 0 } }
};

new Chart(document.getElementById('topMiniChart1'), {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{ data: [15, 25, 20, 32, 28, 38, 30], borderColor: '#198754', backgroundColor: 'rgba(25, 135, 84, 0.1)', fill: true }]
    },
    options: miniOptions
});

new Chart(document.getElementById('topMiniChart2'), {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{ data: [10, 18, 14, 25, 22, 35, 32], borderColor: '#157347', backgroundColor: 'rgba(21, 115, 71, 0.1)', fill: true }]
    },
    options: miniOptions
});

new Chart(document.getElementById('topMiniChart3'), {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [{ data: [20, 15, 25, 22, 30, 28, 40], borderColor: '#20c997', backgroundColor: 'rgba(32, 201, 151, 0.1)', fill: true }]
    },
    options: miniOptions
});

// Site Traffic Multi-Line Wave Chart (Dark Green)
new Chart(document.getElementById('siteTrafficChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
            { label: 'Male Students', data: [30, 50, 40, 85, 45, 60, 40, 70, 65, 90], borderColor: '#198754', backgroundColor: 'rgba(25, 135, 84, 0.08)', fill: true, tension: 0.4, borderWidth: 2, pointRadius: 0 },
            { label: 'Female Students', data: [20, 35, 65, 50, 30, 75, 55, 45, 80, 85], borderColor: '#6c757d', backgroundColor: 'rgba(108, 117, 125, 0.08)', fill: true, tension: 0.4, borderWidth: 2, pointRadius: 0 }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { font: { size: 10 }, color: '#94a3b8' } },
            y: { grid: { color: '#f1f5f9' }, ticks: { font: { size: 10 }, color: '#94a3b8' }, max: 100 }
        }
    }
});

// Devices Doughnut Chart (Dark Green Shades)
new Chart(document.getElementById('devicesDonutChart'), {
    type: 'doughnut',
    data: {
        labels: ['CS & SE', 'Arts', 'Commerce'],
        datasets: [{ data: [54, 36, 10], backgroundColor: ['#198754', '#6c757d', '#212529'], borderWidth: 0 }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        cutout: '75%'
    }
});

// Social Traffic Polar Area Chart (Dark Green Theme)
new Chart(document.getElementById('socialPolarChart'), {
    type: 'polarArea',
    data: {
        labels: ['Direct', 'Portal App', 'Referral', 'Social'],
        datasets: [{ data: [40, 25, 20, 15], backgroundColor: ['rgba(25, 135, 84, 0.7)', 'rgba(32, 201, 151, 0.7)', 'rgba(108, 117, 125, 0.7)', 'rgba(33, 37, 41, 0.7)'] }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'right', labels: { boxWidth: 8, font: { size: 9 }, color: '#64748b' } } }
    }
});

// Mobile Time on Rate Bar Chart (Dark Green)
new Chart(document.getElementById('mobileBarChart'), {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [{ data: [15, 25, 20, 35, 45, 30, 50, 40, 55, 60, 45, 52], backgroundColor: '#198754', borderRadius: 4 }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { font: { size: 9 }, color: '#94a3b8' } },
            y: { grid: { display: false }, ticks: { display: false } }
        }
    }
});
// ================= AUTOMATIC GLOBAL THEME LOADER =================
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}
// Tournaments Top 4 Mini Charts (Dark Green Theme)
const tourneyMiniOpts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { line: { tension: 0.4, borderWidth: 2 }, point: { radius: 0 } }
};

['tourneyMini1', 'tourneyMini2', 'tourneyMini3', 'tourneyMini4'].forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el) {
        new Chart(el, {
            type: 'line',
            data: { labels: ['1', '2', '3', '4', '5', '6'], datasets: [{ data: [12, 18, 15, 25, 20, 30], borderColor: '#198754', backgroundColor: 'rgba(25, 135, 84, 0.1)', fill: true }] },
            options: tourneyMiniOpts
        });
    }
});

// Bottom small cards charts
['footMiniChart', 'badmintonMiniChart'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        new Chart(el, {
            type: 'line',
            data: { labels: ['1', '2', '3', '4', '5', '6'], datasets: [{ data: [10, 22, 14, 28, 24, 35], borderColor: '#198754', backgroundColor: 'rgba(25, 135, 84, 0.08)', fill: true }] },
            options: tourneyMiniOpts
        });
    }
});

// Add tournament modal 

const addTournament = document.querySelector('#addTournamentModal');
const addTournamentbtn = document.querySelector('#addTournamentBtn');
const modal = new bootstrap.Modal(addTournament);

addTournamentbtn.addEventListener('click', () => {
    modal.show();
});

const cancelBtn = document.querySelector('#cancelBtn');
cancelBtn.addEventListener('click', () => {
    modal.hide();
});
const closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', () => {
    modal.hide();
});

 const saveBtn = document.querySelector('.saveBtn');
 saveBtn.addEventListener('click', ()=>{
    
 })
