// ფუნქცია, რომელიც გვიჩვენებს მომხმარებლის ინფორმაციას
function showUserInfo(name = "Unknown", age = 18, country = "USA") {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}

// ფუნქციის გამოძახება სხვადასხვა პარამეტრებით
showUserInfo("Anna", 25, "Georgia");
// შედეგი:
// Name: Anna
// Age: 25
// Country: Georgia

showUserInfo("John");
// შედეგი:
// Name: John
// Age: 18
// Country: USA

showUserInfo();
// შედეგი:
// Name: Unknown
// Age: 18
// Country: USA