export enum UserRole {
    INSTRUCTOR = 'instructor',
    AUTHOR = 'author', // course creator
    CONTRIBUTOR = 'contributor', // moderator
    ADMINISTRATOR = 'administrator', // we dont set admin from UI
    SUBSCRIBER = 'subscriber', // student
    POTENTIAL_INSTRUCTOR = 'potential_instructor' // pending instructor signup
}

export enum TutorGroupRole {
    admin = 'admin',
    instructor = 'instructor',
    moderator = 'moderator',
    subscriber = 'subscriber'
}
