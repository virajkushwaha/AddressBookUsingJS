class AddressBookContacts {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        //Validate First Name
        if (!this.isValidFirstName(firstName)) {
            throw new Error("Invalid First Name: Must start with an uppercase letter and have at least 3 characters.");
        }
        this.firstName = firstName;

        //Validate Last Name
        if (!this.isValidLastName(lastName)) {
            throw new Error("Invalid Last Name: Must start with an uppercase letter and have at least 3 characters.");
        }
        this.lastName = lastName;

        //Validate Address

        if (!this.isValidAddress(address)) {
            throw new Error("Invalid Address: Must have at least 4 characters and can include letters, numbers, spaces, and special characters (,.-).");
        }
        this.address = address;

        //Validate City
        if (!this.isValidCity(city)) {
            throw new Error("Invalid City: Must have at least 4 alphabetic characters.");
        }
        this.city = city;
        
        //Validate State
        if (!this.isValidState(state)) {
            throw new Error("Invalid State: Must have at least 4 alphabetic characters.");
        }
        this.state = state;

        //Validate Zip
        if (!this.isValidZip(zip)) {
            throw new Error("Invalid Zip: Must be a 6-digit number starting from 1-9.");
        }
        this.zip = zip;

        //Validate Phone
        if (!this.isValidPhone(phone)) {
            throw new Error("Invalid Phone: Must be a 10-digit number starting with 7, 8, or 9.");
        }
        this.phone = phone;

        //Validate Email
        if (!this.isValidEmail(email)) {
            throw new Error("Invalid Email: Must be a valid email format (e.g., example@domain.com).");
        }
        this.email = email;
    }

    //Methods to validate the contact details
    isValidFirstName(name) {
        return /^[A-Z][a-z]{2,}$/.test(name);
    }

    isValidLastName(name) {
        return /^[A-Z][a-z]{2,}$/.test(name);
    }

    isValidAddress(address) {
        return /^[A-Za-z0-9\s,.-]{4,}$/.test(address);
    }

    isValidCity(city) {
        return /^[A-Za-z]{4,}$/.test(city);
    }

    isValidState(state) {
        return /^[A-Za-z\s]{4,}$/.test(state);
    }

    isValidZip(zip) {
        return /^[1-9][0-9]{5}$/.test(zip);
    }

    isValidPhone(phone) {
        return /^[789][0-9]{9}$/.test(phone);
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,}){1,2}$/.test(email);
    }
}

class AddressBook{
    //Array to store contacts
    constructor(){
        this.contacts = [];
    }
    //Method to add contact
    addContact(contact){
        let checkContact = this.contacts.find(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
        if(checkContact)throw new Error("Contact already exists in the Address Book.");
        
        this.contacts.push(contact);
        
    }
    //Method to display contacts
    displaycontacts(){
        for(let contact of this.contacts){
            console.log(contact);
        }
    }
    //Method to find contact
    findContact(firstName, lastName){
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }
    //Method to update contact
    updateContact(firstName, lastName, contact){
        let index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        if(index !== -1){
            this.contacts[index] = contact;
        }
    }
    //Method to delete contact
    deleteContact(firstName, lastName){
        let index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        if(index !== -1){
            this.contacts.splice(index, 1);
        }
    }
    //Method to get number of contacts
    numberOfContacts(){
        let totalContacts = this.contacts.reduce((count, contact) => count + 1, 0);
        console.log("Number of contacts in Address Book: " + totalContacts);
    }

    findContactByCity(city){
        return this.contacts.filter(contact => contact.city === city);
    }

    

}   

// Example Usage
try {
    let contact1 = new AddressBookContacts("Viraj", "Kushwaha", "Street 5", "Bhopal", "Madhya Pradesh", "462001", "9876543210", "viraj@example.com");
    let contact2 = new AddressBookContacts("Prince", "Raj", "Street 6", "Indore", "Madhya Pradesh", "452001", "8765432109", "princeraj@gmail.com");
    let contact3 = new AddressBookContacts("Kanchan", "Singh", "LIG-45 ", "Bhopal", "Madhya Pradesh", "452001", "8765435409", "kanchan@gmail.com");
    let contact4 = new AddressBookContacts("Kancha", "Singh", "LIG-45 ", "Bhopal", "Madhya Pradesh", "452001", "8765435409", "kanchan@gmail.com");
    let addressBook = new AddressBook();
    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    addressBook.addContact(contact3);
    addressBook.addContact(contact4);
    console.log("Contacts in Address Book:");
    addressBook.displaycontacts();
    let contact = addressBook.findContact("Viraj", "Kushwaha");
    console.log("Contact found:");
    console.log(contact);
    let updatedContact = new AddressBookContacts("Viraj", "Kushwaha", "Street 5", "Bhopal", "Madhya Pradesh", "462001", "9876543210", "viraj@gmail.com");
    addressBook.updateContact("Viraj", "Kushwaha", updatedContact);
    console.log("Updated Contact:");
    addressBook.displaycontacts();
    console.log("Deleted Contact:");
    addressBook.deleteContact("Kancha", "Singh");
    addressBook.displaycontacts();
    console.log("Contacts:");
    addressBook.numberOfContacts();
    console.log("Contacts in Bhopal:");
    let contactsInBhopal = addressBook.findContactByCity("Bhopal");
    console.log(contactsInBhopal);

    
} catch (error) {
    console.error(error);
}
