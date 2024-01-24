const printInfo = function (info) {
    let { name, age, sex, ...rest } = info;
    let result = '';
    if (name != null) {
        result += `Name: ${name}; `;
    }
    if (age != null) {
        result += `Age: ${age}; `;
    }
    if (sex != null) {
        result += `Sex: ${sex}; `;
    }
    result += `Other info: ${JSON.stringify(rest)}`;

    console.log(result);
}

module.exports = printInfo;

if (require.main === module) {
    printInfo({ name: "Nictas", age: 30, sex: 'male', location: 'Sofia' });
    printInfo({ name: "Quilge", age: 30, location: 'Sofia' });
    printInfo({ name: "Quilge" });
    printInfo({});
}
