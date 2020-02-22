export default function(type: string): string {
    let rows = type ? type.split(' ') : []
    let classes: string = ''

    if (rows[0]) classes += `${rows[0]}-xs `
    if (rows[1]) classes += `${rows[1]}-sm `
    if (rows[2]) classes += `${rows[2]}-md `
    if (rows[3]) classes += `${rows[3]}-lg `

    return `row ${classes}`
}