function validateInput() {
    // მომხმარებლის მიერ შეყვანილი ტექსტი
    const userInput = prompt("შეიყვანეთ ტექსტი:");
    
    // ინდექსების შესანახი მასივი
    const invalidIndices = [];
    
    // ტექსტის შემოწმება
    for (let i = 0; i < userInput.length; i++) {
        const char = userInput[i];
        if (!isNaN(char) && char !== " " || /[!@#$%^&*(),.?":{}|<>]/.test(char)) {
            invalidIndices.push(i); // ინდექსის დამატება
        }
    }

    // შედეგის დაბრუნება
    if (invalidIndices.length > 0) {
        console.error(`ერორი: რიცხვი ან ნიშანი მოიძებნა შემდეგ ინდექს(ებ)ზე: ${invalidIndices.join(", ")}`);
    } else {
        console.log("წარმატებული ოპერაცია");
    }
}

// ფუნქციის გამოძახება
validateInput();
