const dateNow =()=> {
    const now = new Date();

// Extract the day, month, and year
const dayName = now.toLocaleString('en-US', { weekday: 'long' });
const day = now.getDate();
const monthName = now.toLocaleString('en-US', { month: 'long' });
const year = now.getFullYear();

// Format the date string
const formattedDate = `${dayName}, ${day} ${monthName}, ${year}`;


return formattedDate
}

export default dateNow