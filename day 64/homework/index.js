function shouldRecallInformation(isRelevant, hasEnoughTime) {
    if (isRelevant && hasEnoughTime) {
        return "Yes, the information should be recalled.";
    } else if (!isRelevant) {
        return "No, the information is not relevant.";
    } else if (!hasEnoughTime) {
        return "No, there is not enough time to process the information.";
    }
}

// მაგალითი გამოყენება:
const isRelevant = true; // ინფორმაცია აქტუალურია
const hasEnoughTime = false; // დრო არ გვაქვს

console.log(shouldRecallInformation(isRelevant, hasEnoughTime));
// შედეგი: "No, there is not enough time to process the information."
