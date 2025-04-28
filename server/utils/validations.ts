const validatetions = {
     validateEmail: (email: string): string => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) 
            return email 
        else throw new Error("Invalid email format");
    },
    validatePassword: (password: string): string => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passwordRegex.test(password)) return password
        else throw new Error("Password must be at least 8 characters long and contain at least one letter and one number");
    },
    validatePhoneNumber: (phoneNumber: number): number => {
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (phoneRegex.test(String(phoneNumber))) return phoneNumber
        else throw new Error("Invalid phone number format");
    },
    validateUsername: (username: string): string => {
        const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
        if  (usernameRegex.test(username)) return username
        else throw new Error("Username must be 3-20 characters long and can only contain letters, numbers, and underscores");
    },
   
    
}
export = validatetions; 