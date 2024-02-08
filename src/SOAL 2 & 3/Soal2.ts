const values: number[][] = [
    [1, 2, 3, 4, 5],
    [3, 4, 5, 6, 7],
    [6, 7, 8, 9, 10]
];

// Define the function to calculate the minimum and maximum values
function calculateMinMax(arr: number[][]): { max: number, min: number, line: number | string }[] {
    // Initialize variables to hold global minimum and maximum values
    let minAllData = Infinity;
    let maxAllData = -Infinity;

    // Use map to iterate through each nested array and compute minimum and maximum values
    const result: { max: number, min: number, line: number | string }[] = arr.map((subArray, index) => {
        // Compute the maximum and minimum values for the current nested array
        const max = Math.max(...subArray);
        const min = Math.min(...subArray);

        // Update global minimum and maximum values if necessary
        if (min < minAllData) {
            minAllData = min;
        }
        if (max > maxAllData) {
            maxAllData = max;
        }

        // Return an object representing the maximum and minimum values of the current nested array
        return { max, min, line: index + 1 };
    });

    // Add the global minimum and maximum values to the result array
    result.push({ max: maxAllData, min: minAllData, line: 'global line' });

    // Return the result array containing maximum and minimum values for each nested array
    return result;
}

// Call the calculateMinMax function with the provided values array
const answer: { max: number, min: number, line: number | string }[] = calculateMinMax(values);

// Output the result to the console
console.log(answer);
