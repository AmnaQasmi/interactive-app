interface HeaderItems {
    label: string,
    page: string
}

export interface HeaderContacts {
    label: string,
    page: string,
    info: string[]
}

export interface NavItems {
    home: HeaderItems,
    about: HeaderItems,
    projects: HeaderItems,
    contact: HeaderContacts
}