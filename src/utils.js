// Here we store the methods to reuse them then
export const sortBy = (param, items) => {
    return items.sort((item1, item2) => {
        const value1 = item1[param].toUpperCase()
        const value2 = item2[param].toUpperCase()

        if (value1 < value2) {
          return -1
        }
        if (value1 > value2) {
          return 1
        }
      
        return 0
    })
}
