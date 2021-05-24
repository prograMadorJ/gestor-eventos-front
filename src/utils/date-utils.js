

export const dateToLocaleDateString = (ISODate) => !ISODate ? ISODate : new Date(ISODate).toLocaleDateString()

export const dateToStandartDateString = (ISODate) => !ISODate ? ISODate : new Date(ISODate).toLocaleDateString().split('/').reverse().join('-')
