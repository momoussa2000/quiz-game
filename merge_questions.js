// Merge Questions Script
// This script merges the original questions with the additional questions

// Wait for both question sets to load
document.addEventListener('DOMContentLoaded', function() {
    // Check if both question sets are available
    if (typeof quizQuestions !== 'undefined' && typeof additionalQuestions !== 'undefined') {
        console.log('Merging question sets...');
        
        // Merge the additional questions into the main quiz questions
        for (const category in additionalQuestions) {
            if (quizQuestions[category]) {
                // Category exists in both - append questions
                quizQuestions[category] = quizQuestions[category].concat(additionalQuestions[category]);
                console.log(`Added ${additionalQuestions[category].length} questions to ${category} category`);
            } else {
                // New category - add it entirely
                quizQuestions[category] = additionalQuestions[category];
                console.log(`Added new category: ${category} with ${additionalQuestions[category].length} questions`);
            }
        }
        
        console.log('Question sets merged successfully!');
        console.log('Total categories:', Object.keys(quizQuestions).length);
        
        // Log the total number of questions per category
        for (const category in quizQuestions) {
            console.log(`${category}: ${quizQuestions[category].length} questions`);
        }
    } else {
        console.error('One or both question sets are not available for merging');
    }
});