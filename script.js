
function validateStudentInfo(name, studentNumber, email) {
    const trimmedName = name ? name.trim() : "";
    const hasMinLength = trimmedName.length >= 3;
    const isNotSpacesOnly = trimmedName.length > 0;
    const hasNoNumbers = !/\d/.test(trimmedName);

    const studentNumberRegex = /^\d{2}-\d{4}-\d{3}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNameValid = hasMinLength && isNotSpacesOnly && hasNoNumbers;
    const isStudentNumberValid = studentNumberRegex.test(studentNumber);
    const isEmailValid = emailRegex.test(email);

    return isNameValid && isStudentNumberValid && isEmailValid;
}

});
