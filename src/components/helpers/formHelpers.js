

export default function formatDate(dateString) {
    if(dateString == "Present") {
        return `Present`;
    }

    // Create an array of abbreviated month names
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Split the input date string into year and month
    const [year, month] = dateString.split('-');

    // Convert the month string to an integer (0-11 for JavaScript's Date object)
    const monthIndex = parseInt(month, 10) - 1;

    // Get the abbreviated month name
    const monthName = monthNames[monthIndex];

    // Return the formatted string
    return `${monthName}. ${year}`;
}