class AddressBook {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        // Assign values if all validations pass
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    // Validation Functions using RegEx
    validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    validateAddress(value) {
        return /^[a-zA-Z0-9\s]{4,}$/.test(value);
    }

    validateZip(zip) {
        return /^\d{6}$/.test(zip);
    }

    validatePhone(phone) {
        return /^[6-9]\d{9}$/.test(phone);
    }

    validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
}

// Example Usage
try {
    let contact1 = new AddressBook("Viraj", "Kushwaha", "Street 5", "Bhopal", "MP", "462001", "9876543210", "viraj@example.com");
    console.log("Valid Contact Created Successfully:", contact1);
} catch (error) {
    console.error(error.message);
}
